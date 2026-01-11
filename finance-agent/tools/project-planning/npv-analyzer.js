/**
 * Net Present Value and Internal Rate of Return analyzer
 */

import { validatePositiveNumber, validateCashFlows } from '../../utils/validators.js';
import { netPresentValue, internalRateOfReturn } from '../../utils/financial-math.js';

export const npvAnalyzerTool = {
  name: 'analyze_npv',
  description: 'Analyze project viability using Net Present Value (NPV) and Internal Rate of Return (IRR). Accounts for time value of money to make accurate project comparisons. Critical for capital budgeting decisions.',
  input_schema: {
    type: 'object',
    properties: {
      initialInvestment: {
        type: 'number',
        description: 'Initial investment amount (positive number)'
      },
      cashFlows: {
        type: 'array',
        description: 'Expected cash flows for each period (e.g., annual cash flows)',
        items: {
          type: 'number'
        }
      },
      discountRate: {
        type: 'number',
        description: 'Discount rate as decimal (e.g., 0.10 for 10%)'
      },
      projectName: {
        type: 'string',
        description: 'Optional name for the project'
      }
    },
    required: ['initialInvestment', 'cashFlows', 'discountRate']
  }
};

export function analyzeNPV(params) {
  const { initialInvestment, cashFlows, discountRate, projectName = 'Project' } = params;

  // Validate inputs
  validatePositiveNumber(initialInvestment, 'Initial investment');
  validateCashFlows(cashFlows);
  validatePositiveNumber(discountRate, 'Discount rate');

  // Calculate NPV
  const npv = netPresentValue(cashFlows, discountRate, initialInvestment);

  // Calculate IRR
  const irr = internalRateOfReturn(cashFlows, initialInvestment);

  // Calculate profitability index
  const pvOfCashFlows = cashFlows.reduce((sum, cf, index) => {
    return sum + cf / Math.pow(1 + discountRate, index + 1);
  }, 0);
  const profitabilityIndex = pvOfCashFlows / initialInvestment;

  // Period-by-period present value analysis
  const periodAnalysis = cashFlows.map((cf, index) => {
    const period = index + 1;
    const pv = cf / Math.pow(1 + discountRate, period);
    const discountFactor = 1 / Math.pow(1 + discountRate, period);

    return {
      period,
      cashFlow: Math.round(cf * 100) / 100,
      discountFactor: Math.round(discountFactor * 10000) / 10000,
      presentValue: Math.round(pv * 100) / 100
    };
  });

  // Cumulative NPV over time
  const cumulativeNPV = [];
  let runningNPV = -initialInvestment;

  cashFlows.forEach((cf, index) => {
    const pv = cf / Math.pow(1 + discountRate, index + 1);
    runningNPV += pv;

    cumulativeNPV.push({
      period: index + 1,
      cumulativeNPV: Math.round(runningNPV * 100) / 100,
      breaksEven: runningNPV >= 0
    });
  });

  // Find break-even period
  const breakEvenPeriod = cumulativeNPV.find(p => p.breaksEven);

  // Decision analysis
  const decision = getProjectDecision(npv, irr, discountRate, profitabilityIndex);

  // Sensitivity to discount rate
  const sensitivityAnalysis = performDiscountRateSensitivity(
    cashFlows,
    initialInvestment,
    discountRate
  );

  return {
    project: projectName,
    summary: {
      initialInvestment: Math.round(initialInvestment * 100) / 100,
      npv: Math.round(npv * 100) / 100,
      irr: Math.round(irr * 10000) / 100 + '%',
      discountRate: Math.round(discountRate * 10000) / 100 + '%',
      profitabilityIndex: Math.round(profitabilityIndex * 100) / 100,
      totalCashFlows: Math.round(cashFlows.reduce((a, b) => a + b, 0) * 100) / 100,
      projectDuration: cashFlows.length + ' periods'
    },
    decision,
    periodAnalysis,
    cumulativeNPV,
    breakEvenPeriod: breakEvenPeriod ? breakEvenPeriod.period : 'Not achieved',
    sensitivityAnalysis,
    recommendations: generateNPVRecommendations({
      npv,
      irr,
      discountRate,
      profitabilityIndex,
      breakEvenPeriod,
      sensitivityAnalysis
    })
  };
}

function getProjectDecision(npv, irr, discountRate, profitabilityIndex) {
  const criteria = {
    npvPositive: npv > 0,
    irrExceedsDiscount: irr > discountRate,
    profitabilityAboveOne: profitabilityIndex > 1
  };

  const passCount = Object.values(criteria).filter(Boolean).length;

  let recommendation;
  let reasoning;

  if (passCount === 3) {
    recommendation = 'Accept';
    reasoning = 'All criteria met: positive NPV, IRR exceeds discount rate, and profitability index above 1.';
  } else if (passCount === 2) {
    recommendation = 'Consider';
    reasoning = 'Most criteria met, but review the specific metrics that don\'t pass.';
  } else if (passCount === 1) {
    recommendation = 'Reconsider';
    reasoning = 'Only one criterion met. Project may not be financially viable.';
  } else {
    recommendation = 'Reject';
    reasoning = 'No criteria met. Project is not financially viable at current assumptions.';
  }

  return {
    recommendation,
    reasoning,
    criteria: {
      npvTest: criteria.npvPositive ? 'Pass' : 'Fail',
      irrTest: criteria.irrExceedsDiscount ? 'Pass' : 'Fail',
      profitabilityIndexTest: criteria.profitabilityAboveOne ? 'Pass' : 'Fail'
    }
  };
}

function performDiscountRateSensitivity(cashFlows, initialInvestment, baseRate) {
  const rates = [
    baseRate * 0.5,   // 50% lower
    baseRate * 0.75,  // 25% lower
    baseRate,         // Base case
    baseRate * 1.25,  // 25% higher
    baseRate * 1.5    // 50% higher
  ];

  return rates.map(rate => {
    const npv = netPresentValue(cashFlows, rate, initialInvestment);

    return {
      discountRate: Math.round(rate * 10000) / 100 + '%',
      npv: Math.round(npv * 100) / 100,
      decision: npv > 0 ? 'Accept' : 'Reject'
    };
  });
}

function generateNPVRecommendations(metrics) {
  const recommendations = [];

  // NPV-based recommendations
  if (metrics.npv > 0) {
    const magnitude = metrics.npv > 100000 ? 'significantly' :
                     metrics.npv > 10000 ? 'moderately' : 'slightly';

    recommendations.push({
      type: 'success',
      message: `Positive NPV of $${Math.round(metrics.npv)} indicates this project ${magnitude} creates value.`
    });
  } else {
    recommendations.push({
      type: 'critical',
      message: `Negative NPV of $${Math.round(metrics.npv)} indicates project destroys value at current discount rate.`
    });
  }

  // IRR vs discount rate
  const spread = (metrics.irr - metrics.discountRate) * 100;
  if (spread > 5) {
    recommendations.push({
      type: 'success',
      message: `IRR exceeds discount rate by ${Math.round(spread * 100) / 100}%, providing good margin of safety.`
    });
  } else if (spread > 0) {
    recommendations.push({
      type: 'caution',
      message: `IRR only slightly exceeds discount rate. Project is sensitive to assumption changes.`
    });
  } else {
    recommendations.push({
      type: 'warning',
      message: 'IRR is below the discount rate. Project does not meet required return threshold.'
    });
  }

  // Profitability index
  if (metrics.profitabilityIndex > 1.5) {
    recommendations.push({
      type: 'info',
      message: `Strong profitability index of ${metrics.profitabilityIndex}. Each dollar invested creates $${(metrics.profitabilityIndex - 1).toFixed(2)} of value.`
    });
  } else if (metrics.profitabilityIndex < 1) {
    recommendations.push({
      type: 'warning',
      message: 'Profitability index below 1 indicates project destroys value.'
    });
  }

  // Break-even analysis
  if (metrics.breakEvenPeriod && typeof metrics.breakEvenPeriod === 'number') {
    recommendations.push({
      type: 'info',
      message: `Project breaks even in period ${metrics.breakEvenPeriod} on a present value basis.`
    });
  } else {
    recommendations.push({
      type: 'risk',
      message: 'Project does not break even within the analysis period. High risk of capital loss.'
    });
  }

  // Sensitivity analysis
  const acceptCount = metrics.sensitivityAnalysis.filter(s => s.decision === 'Accept').length;
  if (acceptCount === 5) {
    recommendations.push({
      type: 'success',
      message: 'Project is viable across all tested discount rate scenarios. Robust investment.'
    });
  } else if (acceptCount < 3) {
    recommendations.push({
      type: 'risk',
      message: 'Project is highly sensitive to discount rate assumptions. Careful analysis required.'
    });
  }

  return recommendations;
}
