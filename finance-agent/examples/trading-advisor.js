/**
 * Trading Advisor Example
 * Demonstrates using the finance agent for derivatives trading analysis
 */

import { FinanceAgent } from '../core/agent.js';

async function main() {
  console.log('=== Finance Agent: Trading Advisor Example ===\n');

  // Initialize the agent
  const agent = new FinanceAgent({
    apiKey: process.env.ANTHROPIC_API_KEY
  });

  // Example 1: Options Pricing
  console.log('Example 1: Call Option Pricing Analysis\n');

  const optionQuery = `I'm looking at a call option with these parameters:
  - Stock price: $150
  - Strike price: $155
  - Time to expiration: 45 days
  - Risk-free rate: 4.5%
  - Implied volatility: 28%

  Is this option fairly priced at $6.50? Should I buy it?`;

  try {
    const response1 = await agent.query(optionQuery, {
      tools: ['derivatives']
    });

    console.log('Agent Response:');
    console.log(response1.response);
    console.log('\nTools Used:', response1.toolsUsed);
    console.log('Iterations:', response1.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Example 2: Greeks Analysis
  console.log('Example 2: Option Greeks for Risk Management\n');

  const greeksQuery = `I own 10 call option contracts on a stock trading at $100. Strike is $105,
  30 days to expiration, volatility is 25%, risk-free rate is 4%.

  Help me understand my risk exposure - what are the Greeks and what do they mean for my position?
  Should I hedge my position?`;

  try {
    const response2 = await agent.query(greeksQuery, {
      tools: ['derivatives']
    });

    console.log('Agent Response:');
    console.log(response2.response);
    console.log('\nTools Used:', response2.toolsUsed);
    console.log('Iterations:', response2.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Example 3: Portfolio Risk Analysis
  console.log('Example 3: Portfolio Risk Assessment\n');

  const riskQuery = `I have a $100,000 portfolio and want to assess its risk.
  Here are the daily returns for the past 30 days (in percentages):
  1.2, -0.5, 0.8, 1.5, -1.2, 0.3, -0.8, 1.1, 0.4, -1.5,
  0.9, 1.3, -0.6, 0.7, -1.0, 1.8, 0.2, -0.9, 1.4, -0.3,
  0.6, -1.1, 1.0, 0.5, -1.3, 1.6, -0.4, 0.8, -0.7, 1.1

  The risk-free rate is 3%. What's my Value at Risk, Sharpe ratio, and overall risk profile?`;

  try {
    const response3 = await agent.query(riskQuery, {
      tools: ['derivatives']
    });

    console.log('Agent Response:');
    console.log(response3.response);
    console.log('\nTools Used:', response3.toolsUsed);
    console.log('Iterations:', response3.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Example 4: Multi-tool analysis (combining derivatives and project planning)
  console.log('Example 4: Options Strategy with ROI Analysis\n');

  const multiToolQuery = `I'm considering selling covered calls on 500 shares of stock I own at $80/share.
  I can sell call options at $85 strike, 60 days out, for $3 premium per share.
  The stock has 22% volatility and risk-free rate is 4%.

  Analyze: 1) Is the premium fair value? 2) What's my ROI on this strategy? 3) What are my risks?`;

  try {
    const response4 = await agent.query(multiToolQuery, {
      tools: ['derivatives', 'project-planning']
    });

    console.log('Agent Response:');
    console.log(response4.response);
    console.log('\nTools Used:', response4.toolsUsed);
    console.log('Iterations:', response4.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('Trading Advisor examples completed!');
}

// Run examples
main().catch(console.error);
