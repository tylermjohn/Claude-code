/**
 * Savings goals planning and tracking tool
 */

import { validatePositiveNumber, validateDateRange } from '../../utils/validators.js';
import { futureValue } from '../../utils/financial-math.js';

export const savingsGoalsTool = {
  name: 'plan_savings_goals',
  description: 'Plan and track progress toward savings goals. Calculates required monthly savings, timeline projections, and compound growth. Useful for planning large purchases, emergency funds, or long-term wealth building.',
  input_schema: {
    type: 'object',
    properties: {
      goalAmount: {
        type: 'number',
        description: 'Target savings amount in dollars'
      },
      currentSavings: {
        type: 'number',
        description: 'Current amount already saved toward goal'
      },
      monthlyContribution: {
        type: 'number',
        description: 'Amount you can save per month'
      },
      interestRate: {
        type: 'number',
        description: 'Expected annual interest rate as decimal (e.g., 0.05 for 5%)'
      },
      targetDate: {
        type: 'string',
        description: 'Target date to reach goal (YYYY-MM-DD format), optional'
      }
    },
    required: ['goalAmount', 'currentSavings', 'monthlyContribution', 'interestRate']
  }
};

export function planSavingsGoals(params) {
  const { goalAmount, currentSavings, monthlyContribution, interestRate, targetDate } = params;

  // Validate inputs
  validatePositiveNumber(goalAmount, 'Goal amount');
  validateNonNegativeNumber(currentSavings, 'Current savings');
  validatePositiveNumber(monthlyContribution, 'Monthly contribution');

  const monthlyRate = interestRate / 12;

  // Calculate months needed to reach goal
  let monthsNeeded;
  if (monthlyRate === 0) {
    // No interest case
    monthsNeeded = (goalAmount - currentSavings) / monthlyContribution;
  } else {
    // With compound interest: FV = PV(1+r)^n + PMT * [(1+r)^n - 1] / r
    // Solving for n (months)
    const pv = currentSavings;
    const fv = goalAmount;
    const pmt = monthlyContribution;
    const r = monthlyRate;

    // Numerical solution using iteration
    monthsNeeded = 0;
    let currentValue = pv;

    while (currentValue < fv && monthsNeeded < 1200) { // Cap at 100 years
      currentValue = currentValue * (1 + r) + pmt;
      monthsNeeded++;
    }
  }

  const yearsNeeded = monthsNeeded / 12;
  const projectedDate = new Date();
  projectedDate.setMonth(projectedDate.getMonth() + Math.ceil(monthsNeeded));

  // Calculate total contributions and interest earned
  const totalContributions = currentSavings + (monthlyContribution * monthsNeeded);
  const totalInterest = goalAmount - totalContributions;

  // Generate monthly projection
  const monthlyProjection = [];
  let balance = currentSavings;

  for (let month = 1; month <= Math.min(monthsNeeded, 60); month++) { // Show up to 5 years
    balance = balance * (1 + monthlyRate) + monthlyContribution;

    if (month % 12 === 0 || month === Math.ceil(monthsNeeded)) {
      monthlyProjection.push({
        month,
        year: Math.floor(month / 12),
        balance: Math.round(balance * 100) / 100,
        percentComplete: Math.round((balance / goalAmount) * 10000) / 100
      });
    }
  }

  // Calculate if target date is achievable
  let targetDateAnalysis = null;
  if (targetDate) {
    const target = new Date(targetDate);
    const today = new Date();
    const monthsToTarget = (target.getFullYear() - today.getFullYear()) * 12 +
                           (target.getMonth() - today.getMonth());

    let achievableBalance = currentSavings;
    for (let i = 0; i < monthsToTarget; i++) {
      achievableBalance = achievableBalance * (1 + monthlyRate) + monthlyContribution;
    }

    targetDateAnalysis = {
      targetDate,
      monthsToTarget,
      achievableAmount: Math.round(achievableBalance * 100) / 100,
      shortfall: Math.max(0, goalAmount - achievableBalance),
      isAchievable: achievableBalance >= goalAmount,
      requiredMonthlyContribution: monthsToTarget > 0
        ? calculateRequiredContribution(currentSavings, goalAmount, monthsToTarget, monthlyRate)
        : null
    };
  }

  return {
    summary: {
      goalAmount,
      currentSavings,
      amountNeeded: goalAmount - currentSavings,
      monthlyContribution,
      interestRate: interestRate * 100 + '%',
      monthsToGoal: Math.ceil(monthsNeeded),
      yearsToGoal: Math.round(yearsNeeded * 10) / 10,
      projectedCompletionDate: projectedDate.toISOString().split('T')[0]
    },
    financial: {
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalInterestEarned: Math.round(totalInterest * 100) / 100,
      effectiveReturn: Math.round((totalInterest / totalContributions) * 10000) / 100 + '%'
    },
    projection: monthlyProjection,
    targetDateAnalysis,
    recommendations: generateSavingsRecommendations(params, monthsNeeded, targetDateAnalysis)
  };
}

function calculateRequiredContribution(current, goal, months, monthlyRate) {
  // Solve for PMT: goal = current(1+r)^n + PMT * [(1+r)^n - 1] / r
  if (monthlyRate === 0) {
    return (goal - current) / months;
  }

  const fvCurrent = current * Math.pow(1 + monthlyRate, months);
  const fvAnnuityFactor = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
  const requiredPmt = (goal - fvCurrent) / fvAnnuityFactor;

  return Math.round(requiredPmt * 100) / 100;
}

function generateSavingsRecommendations(params, monthsNeeded, targetAnalysis) {
  const recommendations = [];
  const { goalAmount, currentSavings, monthlyContribution, interestRate } = params;

  // Time-based recommendations
  if (monthsNeeded > 120) {
    recommendations.push({
      type: 'warning',
      message: 'Goal will take over 10 years to achieve. Consider increasing monthly contributions or adjusting the goal amount.'
    });
  }

  // Interest rate recommendations
  if (interestRate < 0.03) {
    recommendations.push({
      type: 'suggestion',
      message: 'Your interest rate is below 3%. Consider high-yield savings accounts or other investment vehicles for better returns.'
    });
  }

  // Contribution recommendations
  const percentageSaved = (currentSavings / goalAmount) * 100;
  if (percentageSaved < 10) {
    recommendations.push({
      type: 'info',
      message: 'You\'re just getting started! Building the savings habit is the most important first step.'
    });
  } else if (percentageSaved > 50) {
    recommendations.push({
      type: 'success',
      message: 'You\'re more than halfway there! Stay consistent with your contributions.'
    });
  }

  // Target date analysis
  if (targetAnalysis && !targetAnalysis.isAchievable) {
    const additionalNeeded = targetAnalysis.requiredMonthlyContribution - monthlyContribution;
    recommendations.push({
      type: 'warning',
      message: `To reach your goal by ${targetAnalysis.targetDate}, you need to save an additional $${Math.round(additionalNeeded * 100) / 100} per month.`
    });
  }

  return recommendations;
}

function validateNonNegativeNumber(value, name) {
  if (typeof value !== 'number' || isNaN(value) || value < 0) {
    throw new Error(`${name} must be a non-negative number`);
  }
  return true;
}
