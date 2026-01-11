/**
 * Expense tracking and analysis tool
 */

import { validateNonNegativeNumber } from '../../utils/validators.js';

export const expenseTrackerTool = {
  name: 'track_expenses',
  description: 'Track and analyze expenses by category. Calculates totals, percentages, and identifies spending patterns. Useful for understanding where money is going and finding opportunities to reduce spending.',
  input_schema: {
    type: 'object',
    properties: {
      expenses: {
        type: 'array',
        description: 'List of expenses to track',
        items: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              description: 'Expense category (e.g., housing, food, transportation, entertainment)'
            },
            amount: {
              type: 'number',
              description: 'Expense amount in dollars'
            },
            date: {
              type: 'string',
              description: 'Date of expense (YYYY-MM-DD format)'
            },
            description: {
              type: 'string',
              description: 'Brief description of the expense'
            }
          },
          required: ['category', 'amount']
        }
      },
      period: {
        type: 'string',
        enum: ['daily', 'weekly', 'monthly', 'annual'],
        description: 'Time period for analysis'
      }
    },
    required: ['expenses', 'period']
  }
};

export function trackExpenses(params) {
  const { expenses, period } = params;

  // Validate expenses
  expenses.forEach((expense, index) => {
    validateNonNegativeNumber(expense.amount, `Expense ${index} amount`);
  });

  // Calculate totals by category
  const categoryTotals = {};
  let total = 0;

  expenses.forEach(expense => {
    const category = expense.category.toLowerCase();
    categoryTotals[category] = (categoryTotals[category] || 0) + expense.amount;
    total += expense.amount;
  });

  // Calculate percentages
  const categoryBreakdown = Object.entries(categoryTotals)
    .map(([category, amount]) => ({
      category,
      amount: Math.round(amount * 100) / 100,
      percentage: Math.round((amount / total) * 10000) / 100
    }))
    .sort((a, b) => b.amount - a.amount);

  // Identify top spending categories
  const topCategories = categoryBreakdown.slice(0, 3);

  // Calculate average expense
  const avgExpense = total / expenses.length;

  // Period multipliers for annualization
  const multipliers = {
    daily: 365,
    weekly: 52,
    monthly: 12,
    annual: 1
  };

  const annualizedTotal = total * multipliers[period];

  return {
    summary: {
      total: Math.round(total * 100) / 100,
      averageExpense: Math.round(avgExpense * 100) / 100,
      numberOfExpenses: expenses.length,
      period,
      annualizedTotal: Math.round(annualizedTotal * 100) / 100
    },
    categoryBreakdown,
    topSpendingCategories: topCategories,
    insights: generateExpenseInsights(categoryBreakdown, total, period)
  };
}

function generateExpenseInsights(breakdown, total, period) {
  const insights = [];

  // Check for high percentage categories
  breakdown.forEach(category => {
    if (category.percentage > 40) {
      insights.push({
        type: 'warning',
        message: `${category.category} represents ${category.percentage}% of total spending, which is quite high`
      });
    }
  });

  // Check for many small categories
  const smallCategories = breakdown.filter(c => c.percentage < 5);
  if (smallCategories.length > 5) {
    insights.push({
      type: 'info',
      message: `You have ${smallCategories.length} categories with less than 5% of spending each - consider consolidating`
    });
  }

  return insights;
}
