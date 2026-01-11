/**
 * Return on Investment (ROI) calculator with sensitivity analysis
 */

import { validatePositiveNumber, validateNonNegativeNumber } from '../../utils/validators.js';

export const roiCalculatorTool = {
  name: 'calculate_roi',
  description: 'Calculate return on investment for projects or investments. Includes simple ROI, annualized ROI, and sensitivity analysis for different scenarios. Essential for comparing investment opportunities and making data-driven decisions.',
  input_schema: {
    type: 'object',
    properties: {
      initialInvestment: {
        type: 'number',
        description: 'Initial investment amount in dollars'
      },
      returns: {
        type: 'array',
        description: 'Expected returns by period (e.g., annual returns)',
        items: {
          type: 'number'
        }
      },
      timeHorizon: {
        type: 'number',
        description: 'Investment time horizon in years'
      },
      sensitivityAnalysis: {
        type: 'boolean',
        description: 'Whether to perform sensitivity analysis with best/worst case scenarios'
      },
      bestCaseMultiplier: {
        type: 'number',
        description: 'Multiplier for best case scenario (e.g., 1.2 for 20% better)'
      },
      worstCaseMultiplier: {
        type: 'number',
        description: 'Multiplier for worst case scenario (e.g., 0.8 for 20% worse)'
      }
    },
    required: ['initialInvestment', 'returns', 'timeHorizon']
  }
};

export function calculateROI(params) {
  const {
    initialInvestment,
    returns,
    timeHorizon,
    sensitivityAnalysis = false,
    bestCaseMultiplier = 1.2,
    worstCaseMultiplier = 0.8
  } = params;

  // Validate inputs
  validatePositiveNumber(initialInvestment, 'Initial investment');
  if (!Array.isArray(returns) || returns.length === 0) {
    throw new Error('Returns must be a non-empty array');
  }

  // Calculate total returns
  const totalReturns = returns.reduce((sum, r) => sum + r, 0);
  const netProfit = totalReturns - initialInvestment;

  // Simple ROI
  const simpleROI = (netProfit / initialInvestment) * 100;

  // Annualized ROI
  const annualizedROI = (Math.pow(totalReturns / initialInvestment, 1 / timeHorizon) - 1) * 100;

  // Payback period (when cumulative returns exceed investment)
  let paybackPeriod = null;
  let cumulativeReturns = 0;
  for (let i = 0; i < returns.length; i++) {
    cumulativeReturns += returns[i];
    if (cumulativeReturns >= initialInvestment && paybackPeriod === null) {
      paybackPeriod = i + 1;
    }
  }

  // Year-by-year breakdown
  const yearlyBreakdown = [];
  let cumulative = 0;
  returns.forEach((returnValue, index) => {
    cumulative += returnValue;
    const yearlyROI = ((cumulative - initialInvestment) / initialInvestment) * 100;

    yearlyBreakdown.push({
      year: index + 1,
      return: Math.round(returnValue * 100) / 100,
      cumulativeReturn: Math.round(cumulative * 100) / 100,
      cumulativeROI: Math.round(yearlyROI * 100) / 100,
      netPosition: Math.round((cumulative - initialInvestment) * 100) / 100
    });
  });

  // Sensitivity analysis
  let sensitivityResults = null;
  if (sensitivityAnalysis) {
    sensitivityResults = {
      baseCase: {
        roi: Math.round(simpleROI * 100) / 100,
        netProfit: Math.round(netProfit * 100) / 100,
        totalReturns: Math.round(totalReturns * 100) / 100
      },
      bestCase: calculateScenario(initialInvestment, returns, bestCaseMultiplier, timeHorizon),
      worstCase: calculateScenario(initialInvestment, returns, worstCaseMultiplier, timeHorizon)
    };
  }

  // ROI rating
  const rating = getRatingROI(annualizedROI);

  return {
    summary: {
      initialInvestment: Math.round(initialInvestment * 100) / 100,
      totalReturns: Math.round(totalReturns * 100) / 100,
      netProfit: Math.round(netProfit * 100) / 100,
      simpleROI: Math.round(simpleROI * 100) / 100 + '%',
      annualizedROI: Math.round(annualizedROI * 100) / 100 + '%',
      timeHorizon: timeHorizon + ' years',
      paybackPeriod: paybackPeriod ? paybackPeriod + ' periods' : 'Not achieved'
    },
    rating,
    yearlyBreakdown,
    sensitivity: sensitivityResults,
    recommendations: generateROIRecommendations({
      simpleROI,
      annualizedROI,
      paybackPeriod,
      timeHorizon,
      netProfit,
      sensitivityResults
    })
  };
}

function calculateScenario(investment, baseReturns, multiplier, timeHorizon) {
  const adjustedReturns = baseReturns.map(r => r * multiplier);
  const totalReturns = adjustedReturns.reduce((sum, r) => sum + r, 0);
  const netProfit = totalReturns - investment;
  const roi = (netProfit / investment) * 100;
  const annualizedROI = (Math.pow(totalReturns / investment, 1 / timeHorizon) - 1) * 100;

  return {
    roi: Math.round(roi * 100) / 100,
    annualizedROI: Math.round(annualizedROI * 100) / 100,
    netProfit: Math.round(netProfit * 100) / 100,
    totalReturns: Math.round(totalReturns * 100) / 100,
    multiplier
  };
}

function getRatingROI(annualizedROI) {
  if (annualizedROI < 0) {
    return {
      grade: 'Poor',
      description: 'Negative returns - investment is losing money'
    };
  } else if (annualizedROI < 5) {
    return {
      grade: 'Below Average',
      description: 'Returns below typical market performance'
    };
  } else if (annualizedROI < 10) {
    return {
      grade: 'Average',
      description: 'Returns comparable to market average'
    };
  } else if (annualizedROI < 15) {
    return {
      grade: 'Good',
      description: 'Above-average returns'
    };
  } else if (annualizedROI < 20) {
    return {
      grade: 'Very Good',
      description: 'Strong returns above market average'
    };
  } else {
    return {
      grade: 'Excellent',
      description: 'Exceptional returns - verify assumptions'
    };
  }
}

function generateROIRecommendations(metrics) {
  const recommendations = [];

  // ROI-based recommendations
  if (metrics.annualizedROI < 0) {
    recommendations.push({
      type: 'critical',
      message: 'This investment shows negative returns. Reconsider or revise assumptions.'
    });
  } else if (metrics.annualizedROI < 5) {
    recommendations.push({
      type: 'warning',
      message: 'ROI is below typical market returns. Consider alternative investments or improve project efficiency.'
    });
  } else if (metrics.annualizedROI > 20) {
    recommendations.push({
      type: 'caution',
      message: 'ROI appears exceptionally high. Double-check assumptions and consider risks.'
    });
  }

  // Payback period recommendations
  if (metrics.paybackPeriod === null) {
    recommendations.push({
      type: 'warning',
      message: 'Investment does not pay back within the time horizon. This is high risk.'
    });
  } else if (metrics.paybackPeriod > metrics.timeHorizon / 2) {
    recommendations.push({
      type: 'info',
      message: `Payback period is ${metrics.paybackPeriod} periods. Consider if this timeline aligns with your goals.`
    });
  } else {
    recommendations.push({
      type: 'success',
      message: `Quick payback period of ${metrics.paybackPeriod} periods is favorable.`
    });
  }

  // Sensitivity analysis recommendations
  if (metrics.sensitivityResults) {
    const { worstCase } = metrics.sensitivityResults;
    if (worstCase.roi < 0) {
      recommendations.push({
        type: 'risk',
        message: 'Worst-case scenario shows negative returns. Ensure you can tolerate this risk.'
      });
    }

    const range = metrics.sensitivityResults.bestCase.roi - worstCase.roi;
    if (range > 50) {
      recommendations.push({
        type: 'info',
        message: `High variance in scenarios (${Math.round(range)}% range). This investment has significant uncertainty.`
      });
    }
  }

  return recommendations;
}
