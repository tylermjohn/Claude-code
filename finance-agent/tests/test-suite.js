/**
 * Test suite for finance agent tools
 * Run with: node tests/test-suite.js
 */

import { trackExpenses } from '../tools/budgeting/expense-tracker.js';
import { planSavingsGoals } from '../tools/budgeting/savings-goals.js';
import { analyzeCashFlow } from '../tools/budgeting/cash-flow-analyzer.js';
import { calculateROI } from '../tools/project-planning/roi-calculator.js';
import { analyzeNPV } from '../tools/project-planning/npv-analyzer.js';
import { estimateProjectCost } from '../tools/project-planning/cost-estimator.js';
import { priceOption } from '../tools/derivatives/options-pricer.js';
import { calculateOptionGreeks } from '../tools/derivatives/greeks-calculator.js';
import { analyzePortfolioRisk } from '../tools/derivatives/risk-analyzer.js';

let testsPassed = 0;
let testsFailed = 0;

function runTest(name, testFn) {
  try {
    testFn();
    console.log(`✓ ${name}`);
    testsPassed++;
  } catch (error) {
    console.log(`✗ ${name}`);
    console.log(`  Error: ${error.message}`);
    testsFailed++;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Finance Agent Test Suite\n');
console.log('='.repeat(80));

// Budgeting Tools Tests
console.log('\n📊 BUDGETING TOOLS\n');

runTest('Expense Tracker - Basic functionality', () => {
  const result = trackExpenses({
    expenses: [
      { category: 'food', amount: 500, date: '2024-01-01' },
      { category: 'housing', amount: 1500, date: '2024-01-02' },
      { category: 'food', amount: 300, date: '2024-01-03' }
    ],
    period: 'monthly'
  });

  assert(result.summary.total === 2300, 'Total should be 2300');
  assert(result.categoryBreakdown.length === 2, 'Should have 2 categories');
  assert(result.summary.numberOfExpenses === 3, 'Should have 3 expenses');
});

runTest('Savings Goals - Goal calculation', () => {
  const result = planSavingsGoals({
    goalAmount: 10000,
    currentSavings: 2000,
    monthlyContribution: 500,
    interestRate: 0.05
  });

  assert(result.summary.goalAmount === 10000, 'Goal amount should be 10000');
  assert(result.summary.amountNeeded === 8000, 'Amount needed should be 8000');
  assert(result.projection.length > 0, 'Should have projection data');
});

runTest('Cash Flow Analyzer - Monthly analysis', () => {
  const result = analyzeCashFlow({
    monthlyIncome: 5000,
    monthlyExpenses: 3500,
    currentBalance: 10000,
    projectionMonths: 6
  });

  assert(result.summary.monthlySurplus === 1500, 'Surplus should be 1500');
  assert(result.projection.length === 6, 'Should project 6 months');
  assert(result.emergencyFund.monthsOfExpenses > 0, 'Should calculate emergency fund');
});

// Project Planning Tools Tests
console.log('\n💼 PROJECT PLANNING TOOLS\n');

runTest('ROI Calculator - Basic ROI', () => {
  const result = calculateROI({
    initialInvestment: 100000,
    returns: [30000, 35000, 40000, 45000, 50000],
    timeHorizon: 5
  });

  const totalReturns = 30000 + 35000 + 40000 + 45000 + 50000;
  const expectedROI = ((totalReturns - 100000) / 100000) * 100;

  assert(result.summary.totalReturns === totalReturns, 'Total returns should match');
  assert(parseFloat(result.summary.simpleROI) === expectedROI, 'Simple ROI should be correct');
  assert(result.yearlyBreakdown.length === 5, 'Should have 5 years of data');
});

runTest('NPV Analyzer - Project evaluation', () => {
  const result = analyzeNPV({
    initialInvestment: 50000,
    cashFlows: [15000, 18000, 20000, 22000, 25000],
    discountRate: 0.10
  });

  assert(result.summary.initialInvestment === 50000, 'Initial investment should match');
  assert(result.decision.recommendation !== undefined, 'Should have decision recommendation');
  assert(result.periodAnalysis.length === 5, 'Should analyze 5 periods');
});

runTest('Cost Estimator - PERT estimation', () => {
  const result = estimateProjectCost({
    costComponents: [
      {
        name: 'Labor',
        optimistic: 80000,
        mostLikely: 100000,
        pessimistic: 130000,
        category: 'labor'
      },
      {
        name: 'Materials',
        optimistic: 40000,
        mostLikely: 50000,
        pessimistic: 65000,
        category: 'materials'
      }
    ],
    contingencyPercentage: 10
  });

  assert(result.summary.optimisticTotal === 120000, 'Optimistic total should be 120000');
  assert(result.summary.pessimisticTotal === 195000, 'Pessimistic total should be 195000');
  assert(result.componentDetails.length === 2, 'Should have 2 components');
});

// Derivatives Tools Tests
console.log('\n📈 DERIVATIVES TOOLS\n');

runTest('Options Pricer - Call option', () => {
  const result = priceOption({
    optionType: 'call',
    stockPrice: 100,
    strikePrice: 100,
    timeToExpiration: 0.25, // 3 months
    riskFreeRate: 0.05,
    volatility: 0.25
  });

  assert(result.pricing.optionPrice > 0, 'Option price should be positive');
  assert(result.inputs.optionType === 'CALL', 'Option type should be CALL');
  assert(result.scenarios.length === 5, 'Should have 5 scenarios');
});

runTest('Options Pricer - Put option', () => {
  const result = priceOption({
    optionType: 'put',
    stockPrice: 100,
    strikePrice: 105,
    timeToExpiration: 0.5,
    riskFreeRate: 0.04,
    volatility: 0.30
  });

  assert(result.pricing.optionPrice > 0, 'Put price should be positive');
  assert(result.pricing.intrinsicValue === 5, 'ITM put should have intrinsic value of 5');
});

runTest('Greeks Calculator - Delta and Greeks', () => {
  const result = calculateOptionGreeks({
    optionType: 'call',
    stockPrice: 100,
    strikePrice: 100,
    timeToExpiration: 0.25,
    riskFreeRate: 0.05,
    volatility: 0.25,
    positionSize: 10
  });

  assert(result.greeks.delta >= 0 && result.greeks.delta <= 1, 'Call delta should be between 0 and 1');
  assert(result.greeks.gamma > 0, 'Gamma should be positive');
  assert(result.greeks.theta < 0, 'Theta should be negative (time decay)');
  assert(result.greeks.vega > 0, 'Vega should be positive');
  assert(result.positionGreeks.contracts === 10, 'Position size should be 10');
});

runTest('Risk Analyzer - Portfolio metrics', () => {
  const returns = [0.01, -0.005, 0.012, 0.008, -0.01, 0.015, -0.002, 0.009, 0.011, -0.007];

  const result = analyzePortfolioRisk({
    returns,
    portfolioValue: 100000,
    riskFreeRate: 0.03,
    confidenceLevel: 0.95
  });

  assert(result.summary.portfolioValue === 100000, 'Portfolio value should match');
  assert(result.riskMetrics.sharpeRatio !== undefined, 'Should calculate Sharpe ratio');
  assert(result.riskMetrics.valueAtRisk.dollarAmount > 0, 'VaR should be positive');
  assert(result.distributionAnalysis.skewness !== undefined, 'Should calculate skewness');
});

// Edge Cases and Error Handling
console.log('\n🔍 ERROR HANDLING\n');

runTest('Expense Tracker - Negative amounts should fail', () => {
  try {
    trackExpenses({
      expenses: [{ category: 'food', amount: -100 }],
      period: 'monthly'
    });
    assert(false, 'Should throw error for negative amounts');
  } catch (error) {
    assert(error.message.includes('non-negative'), 'Should mention non-negative requirement');
  }
});

runTest('Options Pricer - Invalid option type should fail', () => {
  try {
    priceOption({
      optionType: 'invalid',
      stockPrice: 100,
      strikePrice: 100,
      timeToExpiration: 1,
      riskFreeRate: 0.05,
      volatility: 0.25
    });
    assert(false, 'Should throw error for invalid option type');
  } catch (error) {
    assert(error.message.includes('call') || error.message.includes('put'), 'Should mention valid types');
  }
});

runTest('ROI Calculator - Empty returns array should fail', () => {
  try {
    calculateROI({
      initialInvestment: 10000,
      returns: [],
      timeHorizon: 1
    });
    assert(false, 'Should throw error for empty returns');
  } catch (error) {
    assert(error.message.includes('non-empty'), 'Should mention non-empty requirement');
  }
});

// Summary
console.log('\n' + '='.repeat(80));
console.log('\nTest Results:');
console.log(`  Passed: ${testsPassed}`);
console.log(`  Failed: ${testsFailed}`);
console.log(`  Total:  ${testsPassed + testsFailed}`);

if (testsFailed === 0) {
  console.log('\n✅ All tests passed!');
  process.exit(0);
} else {
  console.log('\n❌ Some tests failed.');
  process.exit(1);
}
