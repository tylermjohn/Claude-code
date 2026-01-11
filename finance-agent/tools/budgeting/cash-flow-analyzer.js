/**
 * Cash flow analysis and forecasting tool
 */

import { validateNonNegativeNumber } from '../../utils/validators.js';

export const cashFlowAnalyzerTool = {
  name: 'analyze_cash_flow',
  description: 'Analyze income vs expenses to understand cash flow patterns. Projects future cash position and identifies potential shortfalls. Essential for budgeting and ensuring financial stability.',
  input_schema: {
    type: 'object',
    properties: {
      monthlyIncome: {
        type: 'number',
        description: 'Total monthly income after taxes'
      },
      monthlyExpenses: {
        type: 'number',
        description: 'Total monthly expenses'
      },
      currentBalance: {
        type: 'number',
        description: 'Current bank account balance'
      },
      projectionMonths: {
        type: 'number',
        description: 'Number of months to project forward (default 12)'
      },
      variableExpenses: {
        type: 'array',
        description: 'Optional list of expected one-time or variable expenses',
        items: {
          type: 'object',
          properties: {
            month: {
              type: 'number',
              description: 'Month number (1-12) when expense occurs'
            },
            amount: {
              type: 'number',
              description: 'Expense amount'
            },
            description: {
              type: 'string',
              description: 'Description of the expense'
            }
          }
        }
      }
    },
    required: ['monthlyIncome', 'monthlyExpenses', 'currentBalance']
  }
};

export function analyzeCashFlow(params) {
  const {
    monthlyIncome,
    monthlyExpenses,
    currentBalance,
    projectionMonths = 12,
    variableExpenses = []
  } = params;

  // Validate inputs
  validateNonNegativeNumber(monthlyIncome, 'Monthly income');
  validateNonNegativeNumber(monthlyExpenses, 'Monthly expenses');

  // Calculate basic metrics
  const monthlySurplus = monthlyIncome - monthlyExpenses;
  const savingsRate = (monthlySurplus / monthlyIncome) * 100;
  const expenseToIncomeRatio = (monthlyExpenses / monthlyIncome) * 100;

  // Project cash flow
  const projection = [];
  let runningBalance = currentBalance;

  for (let month = 1; month <= projectionMonths; month++) {
    // Base cash flow
    runningBalance += monthlySurplus;

    // Add variable expenses for this month
    const monthVariableExpenses = variableExpenses.filter(e => e.month === month);
    const variableTotal = monthVariableExpenses.reduce((sum, e) => sum + e.amount, 0);
    runningBalance -= variableTotal;

    projection.push({
      month,
      income: monthlyIncome,
      expenses: monthlyExpenses + variableTotal,
      netCashFlow: monthlyIncome - monthlyExpenses - variableTotal,
      balance: Math.round(runningBalance * 100) / 100,
      variableExpenses: monthVariableExpenses
    });
  }

  // Identify risk periods (negative balance)
  const riskPeriods = projection.filter(p => p.balance < 0);

  // Calculate emergency fund adequacy
  const monthsOfExpenses = currentBalance / monthlyExpenses;
  const emergencyFundStatus = getEmergencyFundStatus(monthsOfExpenses);

  // Calculate run rate (months until balance depleted if negative cash flow)
  let runwayMonths = null;
  if (monthlySurplus < 0) {
    runwayMonths = Math.floor(currentBalance / Math.abs(monthlySurplus));
  }

  return {
    summary: {
      monthlyIncome: Math.round(monthlyIncome * 100) / 100,
      monthlyExpenses: Math.round(monthlyExpenses * 100) / 100,
      monthlySurplus: Math.round(monthlySurplus * 100) / 100,
      currentBalance: Math.round(currentBalance * 100) / 100,
      savingsRate: Math.round(savingsRate * 100) / 100 + '%',
      expenseToIncomeRatio: Math.round(expenseToIncomeRatio * 100) / 100 + '%'
    },
    emergencyFund: {
      currentBalance,
      monthsOfExpenses: Math.round(monthsOfExpenses * 10) / 10,
      status: emergencyFundStatus.status,
      recommendation: emergencyFundStatus.recommendation
    },
    projection,
    analysis: {
      projectedBalanceEnd: projection[projection.length - 1].balance,
      totalSurplusDeficit: projection.reduce((sum, p) => sum + p.netCashFlow, 0),
      riskPeriods,
      hasRisk: riskPeriods.length > 0,
      runwayMonths
    },
    recommendations: generateCashFlowRecommendations({
      monthlySurplus,
      savingsRate,
      expenseToIncomeRatio,
      monthsOfExpenses,
      riskPeriods,
      runwayMonths
    })
  };
}

function getEmergencyFundStatus(months) {
  if (months < 1) {
    return {
      status: 'critical',
      recommendation: 'Build emergency fund immediately. Aim for at least 3-6 months of expenses.'
    };
  } else if (months < 3) {
    return {
      status: 'low',
      recommendation: 'Emergency fund is below recommended levels. Try to save 3-6 months of expenses.'
    };
  } else if (months < 6) {
    return {
      status: 'adequate',
      recommendation: 'Emergency fund is adequate. Consider building up to 6 months for added security.'
    };
  } else {
    return {
      status: 'strong',
      recommendation: 'Emergency fund is well-funded. You have a solid financial cushion.'
    };
  }
}

function generateCashFlowRecommendations(metrics) {
  const recommendations = [];

  // Surplus/deficit recommendations
  if (metrics.monthlySurplus < 0) {
    recommendations.push({
      type: 'critical',
      category: 'cash_flow',
      message: `Monthly expenses exceed income by $${Math.abs(metrics.monthlySurplus)}. ${metrics.runwayMonths ? `You have approximately ${metrics.runwayMonths} months until funds are depleted.` : ''} Immediate action needed to reduce expenses or increase income.`
    });
  } else if (metrics.monthlySurplus < 500) {
    recommendations.push({
      type: 'warning',
      category: 'cash_flow',
      message: 'Monthly surplus is minimal. Look for opportunities to reduce expenses or increase income.'
    });
  }

  // Savings rate recommendations
  if (metrics.savingsRate < 10) {
    recommendations.push({
      type: 'warning',
      category: 'savings',
      message: `Savings rate of ${metrics.savingsRate}% is below recommended 20%. Try to reduce expenses or increase income.`
    });
  } else if (metrics.savingsRate >= 20) {
    recommendations.push({
      type: 'success',
      category: 'savings',
      message: `Excellent savings rate of ${metrics.savingsRate}%! You're building wealth effectively.`
    });
  }

  // Expense ratio recommendations
  if (metrics.expenseToIncomeRatio > 80) {
    recommendations.push({
      type: 'warning',
      category: 'expenses',
      message: 'Expenses are consuming over 80% of income. Review budget for reduction opportunities.'
    });
  }

  // Emergency fund recommendations
  if (metrics.monthsOfExpenses < 3) {
    recommendations.push({
      type: 'important',
      category: 'emergency_fund',
      message: 'Priority: Build emergency fund to 3-6 months of expenses before other financial goals.'
    });
  }

  // Risk period warnings
  if (metrics.riskPeriods.length > 0) {
    recommendations.push({
      type: 'critical',
      category: 'risk',
      message: `Cash flow analysis shows ${metrics.riskPeriods.length} month(s) with negative balance. Review variable expenses and plan ahead.`
    });
  }

  return recommendations;
}
