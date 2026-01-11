/**
 * Tool registry for finance agent
 * Maps tool names to their implementations
 */

// Budgeting tools
import { expenseTrackerTool, trackExpenses } from '../tools/budgeting/expense-tracker.js';
import { savingsGoalsTool, planSavingsGoals } from '../tools/budgeting/savings-goals.js';
import { cashFlowAnalyzerTool, analyzeCashFlow } from '../tools/budgeting/cash-flow-analyzer.js';

// Project planning tools
import { roiCalculatorTool, calculateROI } from '../tools/project-planning/roi-calculator.js';
import { npvAnalyzerTool, analyzeNPV } from '../tools/project-planning/npv-analyzer.js';
import { costEstimatorTool, estimateProjectCost } from '../tools/project-planning/cost-estimator.js';

// Derivatives tools
import { optionsPricerTool, priceOption } from '../tools/derivatives/options-pricer.js';
import { greeksCalculatorTool, calculateOptionGreeks } from '../tools/derivatives/greeks-calculator.js';
import { riskAnalyzerTool, analyzePortfolioRisk } from '../tools/derivatives/risk-analyzer.js';

/**
 * Registry of all available tools
 */
export const TOOL_REGISTRY = {
  // Budgeting
  track_expenses: {
    definition: expenseTrackerTool,
    handler: trackExpenses
  },
  plan_savings_goals: {
    definition: savingsGoalsTool,
    handler: planSavingsGoals
  },
  analyze_cash_flow: {
    definition: cashFlowAnalyzerTool,
    handler: analyzeCashFlow
  },

  // Project planning
  calculate_roi: {
    definition: roiCalculatorTool,
    handler: calculateROI
  },
  analyze_npv: {
    definition: npvAnalyzerTool,
    handler: analyzeNPV
  },
  estimate_project_cost: {
    definition: costEstimatorTool,
    handler: estimateProjectCost
  },

  // Derivatives
  price_option: {
    definition: optionsPricerTool,
    handler: priceOption
  },
  calculate_greeks: {
    definition: greeksCalculatorTool,
    handler: calculateOptionGreeks
  },
  analyze_portfolio_risk: {
    definition: riskAnalyzerTool,
    handler: analyzePortfolioRisk
  }
};

/**
 * Tool categories for easy filtering
 */
export const TOOL_CATEGORIES = {
  budgeting: ['track_expenses', 'plan_savings_goals', 'analyze_cash_flow'],
  'project-planning': ['calculate_roi', 'analyze_npv', 'estimate_project_cost'],
  derivatives: ['price_option', 'calculate_greeks', 'analyze_portfolio_risk'],
  all: Object.keys(TOOL_REGISTRY)
};

/**
 * Get tool definitions for Claude API
 */
export function getToolDefinitions(categories = ['all']) {
  const toolNames = new Set();

  categories.forEach(category => {
    const tools = TOOL_CATEGORIES[category] || [];
    tools.forEach(tool => toolNames.add(tool));
  });

  return Array.from(toolNames).map(name => TOOL_REGISTRY[name].definition);
}

/**
 * Execute a tool with given parameters
 */
export function executeTool(toolName, params) {
  const tool = TOOL_REGISTRY[toolName];

  if (!tool) {
    throw new Error(`Unknown tool: ${toolName}`);
  }

  try {
    return tool.handler(params);
  } catch (error) {
    return {
      error: true,
      message: error.message,
      tool: toolName
    };
  }
}

/**
 * Get available tool names by category
 */
export function getAvailableTools(category = 'all') {
  return TOOL_CATEGORIES[category] || [];
}
