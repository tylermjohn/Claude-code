/**
 * Budget Assistant Example
 * Demonstrates using the finance agent for budgeting decisions
 */

import { FinanceAgent } from '../core/agent.js';

async function main() {
  console.log('=== Finance Agent: Budget Assistant Example ===\n');

  // Initialize the agent
  const agent = new FinanceAgent({
    apiKey: process.env.ANTHROPIC_API_KEY
  });

  // Example 1: Expense analysis
  console.log('Example 1: Analyzing Monthly Expenses\n');

  const expenseQuery = `I need help analyzing my monthly spending. Here are my expenses:
  - Rent: $1,500
  - Groceries: $600
  - Dining out: $400
  - Transportation: $200
  - Entertainment: $300
  - Utilities: $150
  - Insurance: $250

  My monthly income is $4,500 after taxes. Should I be concerned about my spending patterns?`;

  try {
    const response1 = await agent.query(expenseQuery, {
      tools: ['budgeting']
    });

    console.log('Agent Response:');
    console.log(response1.response);
    console.log('\nTools Used:', response1.toolsUsed);
    console.log('Iterations:', response1.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Example 2: Savings goal planning
  console.log('Example 2: Planning a Savings Goal\n');

  const savingsQuery = `I want to save $30,000 for a down payment on a house. I currently have $5,000 saved,
  and I can save $800 per month. My savings account earns 4% annual interest.
  How long will it take to reach my goal, and is this realistic?`;

  try {
    const response2 = await agent.query(savingsQuery, {
      tools: ['budgeting']
    });

    console.log('Agent Response:');
    console.log(response2.response);
    console.log('\nTools Used:', response2.toolsUsed);
    console.log('Iterations:', response2.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Example 3: Cash flow analysis with planned expenses
  console.log('Example 3: Cash Flow Analysis with Upcoming Expenses\n');

  const cashFlowQuery = `I earn $5,000/month and spend $3,500/month regularly. I have $10,000 in my checking account.
  I have these upcoming expenses:
  - Month 3: $2,000 car repair
  - Month 6: $1,500 vacation
  - Month 8: $1,000 insurance premium

  Will I have enough cash to cover everything, or should I adjust my plans?`;

  try {
    const response3 = await agent.query(cashFlowQuery, {
      tools: ['budgeting']
    });

    console.log('Agent Response:');
    console.log(response3.response);
    console.log('\nTools Used:', response3.toolsUsed);
    console.log('Iterations:', response3.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('Budget Assistant examples completed!');
}

// Run examples
main().catch(console.error);
