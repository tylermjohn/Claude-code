/**
 * Project cost estimation with uncertainty modeling
 */

import { validatePositiveNumber } from '../../utils/validators.js';

export const costEstimatorTool = {
  name: 'estimate_project_cost',
  description: 'Estimate total project costs with three-point estimation (optimistic, most likely, pessimistic). Uses PERT analysis for realistic cost ranges. Essential for budgeting and financial planning.',
  input_schema: {
    type: 'object',
    properties: {
      costComponents: {
        type: 'array',
        description: 'List of project cost components with three-point estimates',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of cost component'
            },
            optimistic: {
              type: 'number',
              description: 'Best-case cost estimate'
            },
            mostLikely: {
              type: 'number',
              description: 'Most likely cost estimate'
            },
            pessimistic: {
              type: 'number',
              description: 'Worst-case cost estimate'
            },
            category: {
              type: 'string',
              description: 'Cost category (e.g., labor, materials, overhead)'
            }
          },
          required: ['name', 'optimistic', 'mostLikely', 'pessimistic']
        }
      },
      contingencyPercentage: {
        type: 'number',
        description: 'Contingency reserve as percentage (e.g., 10 for 10%)'
      }
    },
    required: ['costComponents']
  }
};

export function estimateProjectCost(params) {
  const { costComponents, contingencyPercentage = 10 } = params;

  if (!Array.isArray(costComponents) || costComponents.length === 0) {
    throw new Error('Cost components must be a non-empty array');
  }

  // Validate and calculate PERT estimates for each component
  const componentAnalysis = costComponents.map(component => {
    const { name, optimistic, mostLikely, pessimistic, category = 'Uncategorized' } = component;

    validatePositiveNumber(optimistic, `${name} optimistic estimate`);
    validatePositiveNumber(mostLikely, `${name} most likely estimate`);
    validatePositiveNumber(pessimistic, `${name} pessimistic estimate`);

    if (optimistic > mostLikely || mostLikely > pessimistic) {
      throw new Error(`${name}: estimates must follow optimistic <= mostLikely <= pessimistic`);
    }

    // PERT expected value: (O + 4M + P) / 6
    const pertEstimate = (optimistic + 4 * mostLikely + pessimistic) / 6;

    // PERT standard deviation: (P - O) / 6
    const standardDeviation = (pessimistic - optimistic) / 6;

    // Variance
    const variance = Math.pow(standardDeviation, 2);

    // Confidence intervals (68%, 95%, 99.7%)
    const confidence68 = {
      lower: pertEstimate - standardDeviation,
      upper: pertEstimate + standardDeviation
    };

    const confidence95 = {
      lower: pertEstimate - 2 * standardDeviation,
      upper: pertEstimate + 2 * standardDeviation
    };

    return {
      name,
      category,
      estimates: {
        optimistic: Math.round(optimistic * 100) / 100,
        mostLikely: Math.round(mostLikely * 100) / 100,
        pessimistic: Math.round(pessimistic * 100) / 100,
        pertExpected: Math.round(pertEstimate * 100) / 100
      },
      uncertainty: {
        standardDeviation: Math.round(standardDeviation * 100) / 100,
        variance: Math.round(variance * 100) / 100,
        coefficientOfVariation: Math.round((standardDeviation / pertEstimate) * 10000) / 100 + '%'
      },
      confidenceIntervals: {
        '68%': {
          lower: Math.round(confidence68.lower * 100) / 100,
          upper: Math.round(confidence68.upper * 100) / 100
        },
        '95%': {
          lower: Math.round(Math.max(0, confidence95.lower) * 100) / 100,
          upper: Math.round(confidence95.upper * 100) / 100
        }
      }
    };
  });

  // Aggregate totals
  const totals = {
    optimistic: componentAnalysis.reduce((sum, c) => sum + c.estimates.optimistic, 0),
    mostLikely: componentAnalysis.reduce((sum, c) => sum + c.estimates.mostLikely, 0),
    pessimistic: componentAnalysis.reduce((sum, c) => sum + c.estimates.pessimistic, 0),
    pertExpected: componentAnalysis.reduce((sum, c) => sum + c.estimates.pertExpected, 0)
  };

  // Total standard deviation (assuming independence)
  const totalVariance = componentAnalysis.reduce((sum, c) => sum + c.uncertainty.variance, 0);
  const totalStdDev = Math.sqrt(totalVariance);

  // Contingency amount
  const contingencyAmount = totals.pertExpected * (contingencyPercentage / 100);
  const totalWithContingency = totals.pertExpected + contingencyAmount;

  // Category breakdown
  const categoryBreakdown = {};
  componentAnalysis.forEach(component => {
    const cat = component.category;
    if (!categoryBreakdown[cat]) {
      categoryBreakdown[cat] = {
        category: cat,
        pertTotal: 0,
        components: []
      };
    }
    categoryBreakdown[cat].pertTotal += component.estimates.pertExpected;
    categoryBreakdown[cat].components.push(component.name);
  });

  const categoryAnalysis = Object.values(categoryBreakdown).map(cat => ({
    category: cat.category,
    total: Math.round(cat.pertTotal * 100) / 100,
    percentage: Math.round((cat.pertTotal / totals.pertExpected) * 10000) / 100,
    componentCount: cat.components.length
  })).sort((a, b) => b.total - a.total);

  // Project-level confidence intervals
  const projectConfidence = {
    '68%': {
      lower: Math.round((totals.pertExpected - totalStdDev) * 100) / 100,
      upper: Math.round((totals.pertExpected + totalStdDev) * 100) / 100
    },
    '95%': {
      lower: Math.round(Math.max(0, totals.pertExpected - 2 * totalStdDev) * 100) / 100,
      upper: Math.round((totals.pertExpected + 2 * totalStdDev) * 100) / 100
    }
  };

  return {
    summary: {
      optimisticTotal: Math.round(totals.optimistic * 100) / 100,
      mostLikelyTotal: Math.round(totals.mostLikely * 100) / 100,
      pessimisticTotal: Math.round(totals.pessimistic * 100) / 100,
      pertExpectedTotal: Math.round(totals.pertExpected * 100) / 100,
      contingencyPercentage: contingencyPercentage + '%',
      contingencyAmount: Math.round(contingencyAmount * 100) / 100,
      totalWithContingency: Math.round(totalWithContingency * 100) / 100,
      totalStandardDeviation: Math.round(totalStdDev * 100) / 100
    },
    projectConfidenceIntervals: projectConfidence,
    componentDetails: componentAnalysis,
    categoryBreakdown: categoryAnalysis,
    riskAnalysis: generateRiskAnalysis(componentAnalysis, totals, totalStdDev),
    recommendations: generateCostRecommendations(componentAnalysis, categoryAnalysis, totals, totalStdDev)
  };
}

function generateRiskAnalysis(components, totals, totalStdDev) {
  // Identify high-risk components (high coefficient of variation)
  const highRiskComponents = components
    .filter(c => {
      const cv = parseFloat(c.uncertainty.coefficientOfVariation);
      return cv > 20; // CV > 20% is considered high risk
    })
    .sort((a, b) => {
      const cvA = parseFloat(a.uncertainty.coefficientOfVariation);
      const cvB = parseFloat(b.uncertainty.coefficientOfVariation);
      return cvB - cvA;
    });

  // Calculate probability of exceeding budget thresholds
  const cvTotal = (totalStdDev / totals.pertExpected) * 100;

  return {
    overallRiskLevel: cvTotal > 20 ? 'High' : cvTotal > 10 ? 'Medium' : 'Low',
    totalCoefficientOfVariation: Math.round(cvTotal * 100) / 100 + '%',
    highRiskComponents: highRiskComponents.map(c => ({
      name: c.name,
      cv: c.uncertainty.coefficientOfVariation,
      expectedCost: c.estimates.pertExpected
    })),
    budgetExceedanceProbability: {
      '10%_overrun': estimateProbabilityOfOverrun(totals.pertExpected, totalStdDev, 0.10),
      '20%_overrun': estimateProbabilityOfOverrun(totals.pertExpected, totalStdDev, 0.20),
      '30%_overrun': estimateProbabilityOfOverrun(totals.pertExpected, totalStdDev, 0.30)
    }
  };
}

function estimateProbabilityOfOverrun(expected, stdDev, overrunPercent) {
  // Using normal distribution approximation
  // Z = (X - μ) / σ
  const threshold = expected * (1 + overrunPercent);
  const z = (threshold - expected) / stdDev;

  // Approximate probability using standard normal CDF
  // For positive z, P(X > threshold) = 1 - Φ(z)
  const probability = 1 - approximateNormalCDF(z);

  return Math.round(probability * 10000) / 100 + '%';
}

function approximateNormalCDF(z) {
  // Approximation of standard normal CDF
  if (z < -5) return 0;
  if (z > 5) return 1;

  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp(-z * z / 2);
  const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));

  return z > 0 ? 1 - prob : prob;
}

function generateCostRecommendations(components, categories, totals, totalStdDev) {
  const recommendations = [];

  // Overall cost uncertainty
  const cv = (totalStdDev / totals.pertExpected) * 100;
  if (cv > 20) {
    recommendations.push({
      type: 'warning',
      message: `High cost uncertainty (CV=${Math.round(cv)}%). Consider refining estimates for high-risk components.`
    });
  }

  // High-risk components
  const highRiskComps = components.filter(c => parseFloat(c.uncertainty.coefficientOfVariation) > 25);
  if (highRiskComps.length > 0) {
    recommendations.push({
      type: 'action',
      message: `${highRiskComps.length} component(s) have high uncertainty. Focus on detailed estimation: ${highRiskComps.map(c => c.name).join(', ')}`
    });
  }

  // Large cost components
  const largeComponents = components.filter(c => (c.estimates.pertExpected / totals.pertExpected) > 0.25);
  if (largeComponents.length > 0) {
    recommendations.push({
      type: 'info',
      message: `Large cost items identified: ${largeComponents.map(c => c.name).join(', ')}. These drive total cost - negotiate carefully.`
    });
  }

  // Category concentration
  if (categories.length > 0 && categories[0].percentage > 50) {
    recommendations.push({
      type: 'info',
      message: `${categories[0].category} represents ${categories[0].percentage}% of costs. Consider diversification or alternative approaches.`
    });
  }

  // Budget recommendation
  const recommendedBudget = totals.pertExpected + 2 * totalStdDev; // 95% confidence
  recommendations.push({
    type: 'budget',
    message: `Recommend budgeting $${Math.round(recommendedBudget)} for 95% confidence of staying within budget.`
  });

  return recommendations;
}
