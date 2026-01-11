/**
 * Project Evaluator Example
 * Demonstrates using the finance agent for project financial analysis
 */

import { FinanceAgent } from '../core/agent.js';

async function main() {
  console.log('=== Finance Agent: Project Evaluator Example ===\n');

  // Initialize the agent
  const agent = new FinanceAgent({
    apiKey: process.env.ANTHROPIC_API_KEY
  });

  // Example 1: ROI Analysis
  console.log('Example 1: Software Project ROI Analysis\n');

  const roiQuery = `I'm considering a software development project. It will cost $150,000 upfront.
  Expected returns are:
  - Year 1: $40,000
  - Year 2: $60,000
  - Year 3: $70,000
  - Year 4: $80,000
  - Year 5: $90,000

  Is this a good investment? What's the ROI and payback period?`;

  try {
    const response1 = await agent.query(roiQuery, {
      tools: ['project-planning']
    });

    console.log('Agent Response:');
    console.log(response1.response);
    console.log('\nTools Used:', response1.toolsUsed);
    console.log('Iterations:', response1.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Example 2: NPV Analysis
  console.log('Example 2: NPV Analysis for Equipment Purchase\n');

  const npvQuery = `We're considering buying new manufacturing equipment for $500,000.
  The equipment will generate these cash flows over 7 years:
  Year 1: $90,000
  Year 2: $110,000
  Year 3: $130,000
  Year 4: $140,000
  Year 5: $135,000
  Year 6: $120,000
  Year 7: $100,000

  Our required rate of return is 12%. Should we make this investment?`;

  try {
    const response2 = await agent.query(npvQuery, {
      tools: ['project-planning']
    });

    console.log('Agent Response:');
    console.log(response2.response);
    console.log('\nTools Used:', response2.toolsUsed);
    console.log('Iterations:', response2.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Example 3: Project Cost Estimation
  console.log('Example 3: Construction Project Cost Estimation\n');

  const costQuery = `I need to estimate costs for a small commercial building project. Here are the components:

  Labor:
  - Optimistic: $180,000
  - Most Likely: $220,000
  - Pessimistic: $280,000

  Materials:
  - Optimistic: $300,000
  - Most Likely: $350,000
  - Pessimistic: $420,000

  Equipment:
  - Optimistic: $80,000
  - Most Likely: $100,000
  - Pessimistic: $130,000

  Permits & Fees:
  - Optimistic: $15,000
  - Most Likely: $20,000
  - Pessimistic: $30,000

  What should I budget for this project with a reasonable contingency?`;

  try {
    const response3 = await agent.query(costQuery, {
      tools: ['project-planning']
    });

    console.log('Agent Response:');
    console.log(response3.response);
    console.log('\nTools Used:', response3.toolsUsed);
    console.log('Iterations:', response3.iterations);
    console.log('\n' + '='.repeat(80) + '\n');
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('Project Evaluator examples completed!');
}

// Run examples
main().catch(console.error);
