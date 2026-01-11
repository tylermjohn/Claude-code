/**
 * Calculate option Greeks for risk management
 */

import { validatePositiveNumber, validateOptionType } from '../../utils/validators.js';
import { calculateGreeks } from '../../utils/financial-math.js';

export const greeksCalculatorTool = {
  name: 'calculate_greeks',
  description: 'Calculate option Greeks (Delta, Gamma, Theta, Vega, Rho) for risk analysis and hedging. Greeks measure sensitivity to various market factors. Critical for portfolio risk management and delta-neutral strategies.',
  input_schema: {
    type: 'object',
    properties: {
      optionType: {
        type: 'string',
        enum: ['call', 'put'],
        description: 'Type of option: call or put'
      },
      stockPrice: {
        type: 'number',
        description: 'Current stock price (S)'
      },
      strikePrice: {
        type: 'number',
        description: 'Strike price (K)'
      },
      timeToExpiration: {
        type: 'number',
        description: 'Time to expiration in years'
      },
      riskFreeRate: {
        type: 'number',
        description: 'Risk-free interest rate as decimal'
      },
      volatility: {
        type: 'number',
        description: 'Implied volatility as decimal'
      },
      positionSize: {
        type: 'number',
        description: 'Number of contracts in position (optional, default 1)'
      }
    },
    required: ['optionType', 'stockPrice', 'strikePrice', 'timeToExpiration', 'riskFreeRate', 'volatility']
  }
};

export function calculateOptionGreeks(params) {
  const {
    optionType,
    stockPrice,
    strikePrice,
    timeToExpiration,
    riskFreeRate,
    volatility,
    positionSize = 1
  } = params;

  // Validate inputs
  validateOptionType(optionType);
  validatePositiveNumber(stockPrice, 'Stock price');
  validatePositiveNumber(strikePrice, 'Strike price');
  validatePositiveNumber(timeToExpiration, 'Time to expiration');
  validatePositiveNumber(volatility, 'Volatility');

  // Calculate Greeks for single contract
  const greeks = calculateGreeks(stockPrice, strikePrice, timeToExpiration, riskFreeRate, volatility, optionType);

  // Scale by position size (1 contract = 100 shares typically)
  const contractMultiplier = 100;
  const totalPosition = positionSize * contractMultiplier;

  const positionGreeks = {
    delta: greeks.delta * totalPosition,
    gamma: greeks.gamma * totalPosition,
    theta: greeks.theta * totalPosition,
    vega: greeks.vega * totalPosition,
    rho: greeks.rho * totalPosition
  };

  // Calculate hedging requirements
  const hedgeRatio = -positionGreeks.delta; // Shares needed for delta-neutral hedge

  // Interpret each Greek
  const interpretations = interpretGreeks(greeks, optionType, stockPrice, timeToExpiration);

  // Risk metrics
  const riskMetrics = calculateRiskMetrics(greeks, positionGreeks, stockPrice, timeToExpiration);

  return {
    greeks: {
      delta: Math.round(greeks.delta * 10000) / 10000,
      gamma: Math.round(greeks.gamma * 10000) / 10000,
      theta: Math.round(greeks.theta * 100) / 100,
      vega: Math.round(greeks.vega * 100) / 100,
      rho: Math.round(greeks.rho * 100) / 100
    },
    positionGreeks: {
      contracts: positionSize,
      shares: totalPosition,
      delta: Math.round(positionGreeks.delta * 100) / 100,
      gamma: Math.round(positionGreeks.gamma * 100) / 100,
      theta: Math.round(positionGreeks.theta * 100) / 100,
      vega: Math.round(positionGreeks.vega * 100) / 100,
      rho: Math.round(positionGreeks.rho * 100) / 100
    },
    hedging: {
      deltaHedgeShares: Math.round(hedgeRatio),
      deltaHedgeCost: Math.round(Math.abs(hedgeRatio) * stockPrice * 100) / 100,
      hedgeDirection: hedgeRatio > 0 ? 'Buy stock' : 'Sell stock'
    },
    interpretations,
    riskMetrics,
    recommendations: generateGreeksRecommendations(greeks, positionGreeks, riskMetrics, timeToExpiration)
  };
}

function interpretGreeks(greeks, optionType, stockPrice, timeToExpiration) {
  return {
    delta: {
      value: Math.round(greeks.delta * 10000) / 10000,
      meaning: `For a $1 increase in stock price, option price changes by $${Math.round(Math.abs(greeks.delta) * 100) / 100}`,
      equivalentShares: Math.round(greeks.delta * 100),
      direction: greeks.delta > 0 ? 'Positive (benefits from stock increase)' : 'Negative (benefits from stock decrease)'
    },
    gamma: {
      value: Math.round(greeks.gamma * 10000) / 10000,
      meaning: `Delta changes by ${Math.round(greeks.gamma * 10000) / 10000} for each $1 stock price move`,
      impact: greeks.gamma > 0.05 ? 'High - Delta changes rapidly' : 'Low - Delta relatively stable'
    },
    theta: {
      value: Math.round(greeks.theta * 100) / 100,
      meaning: `Option loses $${Math.round(Math.abs(greeks.theta) * 100) / 100} per day due to time decay`,
      annualDecay: Math.round(greeks.theta * 365 * 100) / 100,
      impact: Math.abs(greeks.theta) > 0.05 ? 'Significant daily decay' : 'Minimal daily decay'
    },
    vega: {
      value: Math.round(greeks.vega * 100) / 100,
      meaning: `For 1% increase in volatility, option price changes by $${Math.round(greeks.vega * 100) / 100}`,
      sensitivity: greeks.vega > 0.2 ? 'High volatility sensitivity' : 'Low volatility sensitivity'
    },
    rho: {
      value: Math.round(greeks.rho * 100) / 100,
      meaning: `For 1% increase in interest rates, option price changes by $${Math.round(greeks.rho * 100) / 100}`,
      relevance: 'Typically minimal impact unless long-dated options'
    }
  };
}

function calculateRiskMetrics(greeks, positionGreeks, stockPrice, timeToExpiration) {
  // One-day P&L from time decay
  const oneDayTheta = positionGreeks.theta;

  // P&L from 1% stock move
  const onePctMove = stockPrice * 0.01;
  const onePctPnL = positionGreeks.delta * onePctMove + 0.5 * positionGreeks.gamma * onePctMove * onePctMove;

  // P&L from 1% volatility change
  const oneVolPnL = positionGreeks.vega;

  // Calculate days to lose 50% of value from theta alone (rough estimate)
  const daysTo50PercentDecay = timeToExpiration > 0
    ? Math.round((stockPrice * Math.abs(greeks.delta) * 0.5) / Math.abs(greeks.theta))
    : 0;

  return {
    oneDayTimeDecay: Math.round(oneDayTheta * 100) / 100,
    pnlFrom1PercentStockMove: Math.round(onePctPnL * 100) / 100,
    pnlFrom1PercentVolMove: Math.round(oneVolPnL * 100) / 100,
    breakEvenStockMove: Math.abs(greeks.delta) > 0
      ? Math.round((Math.abs(greeks.theta) / Math.abs(greeks.delta)) * 100) / 100
      : 'N/A',
    estimatedDaysTo50PercentValue: daysTo50PercentDecay
  };
}

function generateGreeksRecommendations(greeks, positionGreeks, riskMetrics, timeToExpiration) {
  const recommendations = [];

  // Delta recommendations
  if (Math.abs(greeks.delta) > 0.7) {
    recommendations.push({
      type: 'info',
      greek: 'delta',
      message: `High delta of ${Math.round(Math.abs(greeks.delta) * 100) / 100} means option moves almost like stock. Consider stock instead if no leverage needed.`
    });
  } else if (Math.abs(greeks.delta) < 0.3) {
    recommendations.push({
      type: 'risk',
      greek: 'delta',
      message: `Low delta of ${Math.round(Math.abs(greeks.delta) * 100) / 100} means option has low probability of finishing in-the-money.`
    });
  }

  // Gamma recommendations
  if (greeks.gamma > 0.05) {
    recommendations.push({
      type: 'warning',
      greek: 'gamma',
      message: 'High gamma means delta changes rapidly. Position risk increases with stock movement.'
    });
  }

  // Theta recommendations
  if (Math.abs(greeks.theta) > 0.1) {
    recommendations.push({
      type: 'critical',
      greek: 'theta',
      message: `Significant time decay of $${Math.round(Math.abs(greeks.theta) * 100) / 100}/day. Stock must move $${riskMetrics.breakEvenStockMove} daily just to break even.`
    });
  }

  if (timeToExpiration < 0.1) {
    recommendations.push({
      type: 'warning',
      greek: 'theta',
      message: 'Near expiration - theta decay accelerates dramatically. Close or roll position soon.'
    });
  }

  // Vega recommendations
  if (greeks.vega > 0.2) {
    recommendations.push({
      type: 'info',
      greek: 'vega',
      message: `High vega of ${Math.round(greeks.vega * 100) / 100}. Position significantly affected by volatility changes. Monitor implied volatility.`
    });
  }

  // Position sizing recommendations
  if (Math.abs(positionGreeks.delta) > 1000) {
    recommendations.push({
      type: 'risk',
      greek: 'position',
      message: `Position delta of ${Math.round(positionGreeks.delta)} is equivalent to ${Math.round(Math.abs(positionGreeks.delta))} shares. Consider hedging for large exposure.`
    });
  }

  // Hedging recommendations
  const hedgeShares = Math.abs(positionGreeks.delta);
  if (hedgeShares > 500) {
    recommendations.push({
      type: 'action',
      greek: 'hedging',
      message: `Consider delta hedging by ${positionGreeks.delta > 0 ? 'selling' : 'buying'} ${Math.round(hedgeShares)} shares to neutralize directional risk.`
    });
  }

  return recommendations;
}
