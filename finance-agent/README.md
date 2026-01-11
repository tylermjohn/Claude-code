# Finance Agent Harness for Claude

A comprehensive finance agent framework that integrates with Claude's API to provide enhanced financial decision-making capabilities for budgeting, project planning, and derivatives trading.

## Architecture

```
finance-agent/
├── core/
│   ├── agent.js          # Main agent orchestrator with Claude API integration
│   ├── config.js         # Configuration and API key management
│   └── tools.js          # Tool registry and execution
├── tools/
│   ├── budgeting/
│   │   ├── expense-tracker.js
│   │   ├── savings-goals.js
│   │   └── cash-flow-analyzer.js
│   ├── project-planning/
│   │   ├── roi-calculator.js
│   │   ├── cost-estimator.js
│   │   └── npv-analyzer.js
│   └── derivatives/
│       ├── options-pricer.js
│       ├── greeks-calculator.js
│       └── risk-analyzer.js
├── utils/
│   ├── financial-math.js  # Financial formulas and utilities
│   └── validators.js      # Input validation
├── examples/
│   ├── budget-assistant.js
│   ├── project-evaluator.js
│   └── trading-advisor.js
└── tests/
    └── test-suite.js

## Features

### Budgeting Tools
- Expense tracking and categorization
- Savings goal planning with timeline projections
- Cash flow analysis and forecasting
- Budget variance analysis

### Project Planning Tools
- ROI calculation and sensitivity analysis
- Multi-scenario cost estimation
- NPV and IRR calculations
- Break-even analysis

### Derivatives Trading Tools
- Black-Scholes options pricing
- Greeks calculations (Delta, Gamma, Theta, Vega, Rho)
- Portfolio risk metrics (VaR, Sharpe ratio)
- Volatility analysis

## Usage

```javascript
const { FinanceAgent } = require('./core/agent');

// Initialize agent with API key
const agent = new FinanceAgent({
  apiKey: process.env.ANTHROPIC_API_KEY,
  model: 'claude-sonnet-4-5-20250929'
});

// Example: Budget analysis
const budgetAdvice = await agent.query(
  'I spend $3000/month and earn $5000. Should I increase my savings?',
  { tools: ['budgeting'] }
);

// Example: Project evaluation
const projectAnalysis = await agent.query(
  'Evaluate a $100k project with $30k annual returns over 5 years',
  { tools: ['project-planning'] }
);

// Example: Options strategy
const optionsAdvice = await agent.query(
  'Analyze a call option: stock=$100, strike=$105, 30 days, volatility=25%',
  { tools: ['derivatives'] }
);
```

## Setup

1. Install dependencies: `npm install`
2. Set API key: `export ANTHROPIC_API_KEY=your_key_here`
3. Run examples: `node examples/budget-assistant.js`

## API Integration

The agent uses Claude's tool use capability with structured financial tools. Each tool returns formatted data that Claude can reason about to provide actionable financial advice.
