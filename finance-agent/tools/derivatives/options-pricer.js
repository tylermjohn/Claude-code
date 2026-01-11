/**
 * Options pricing using Black-Scholes model
 */

import { validatePositiveNumber, validateOptionType } from '../../utils/validators.js';
import { blackScholes } from '../../utils/financial-math.js';

export const optionsPricerTool = {
  name: 'price_option',
  description: 'Price European options using the Black-Scholes model. Calculate fair value for call and put options. Essential for options trading, hedging strategies, and derivatives valuation.',
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
        description: 'Time to expiration in years (e.g., 0.25 for 3 months)'
      },
      riskFreeRate: {
        type: 'number',
        description: 'Risk-free interest rate as decimal (e.g., 0.05 for 5%)'
      },
      volatility: {
        type: 'number',
        description: 'Implied volatility as decimal (e.g., 0.25 for 25%)'
      }
    },
    required: ['optionType', 'stockPrice', 'strikePrice', 'timeToExpiration', 'riskFreeRate', 'volatility']
  }
};

export function priceOption(params) {
  const { optionType, stockPrice, strikePrice, timeToExpiration, riskFreeRate, volatility } = params;

  // Validate inputs
  validateOptionType(optionType);
  validatePositiveNumber(stockPrice, 'Stock price');
  validatePositiveNumber(strikePrice, 'Strike price');
  validatePositiveNumber(timeToExpiration, 'Time to expiration');
  validatePositiveNumber(volatility, 'Volatility');

  // Calculate option price
  const price = blackScholes(optionType, stockPrice, strikePrice, timeToExpiration, riskFreeRate, volatility);

  // Calculate intrinsic and time value
  const intrinsicValue = optionType === 'call'
    ? Math.max(0, stockPrice - strikePrice)
    : Math.max(0, strikePrice - stockPrice);

  const timeValue = price - intrinsicValue;

  // Calculate moneyness
  const moneyness = getMoneyness(optionType, stockPrice, strikePrice);

  // Calculate break-even price
  const breakEven = optionType === 'call'
    ? strikePrice + price
    : strikePrice - price;

  // Calculate max profit and loss
  const maxProfit = optionType === 'call'
    ? 'Unlimited'
    : strikePrice - price;

  const maxLoss = price; // Maximum loss for buyer is premium paid

  // Pricing scenarios
  const scenarios = generatePricingScenarios(
    optionType,
    stockPrice,
    strikePrice,
    timeToExpiration,
    riskFreeRate,
    volatility
  );

  return {
    pricing: {
      optionPrice: Math.round(price * 100) / 100,
      intrinsicValue: Math.round(intrinsicValue * 100) / 100,
      timeValue: Math.round(timeValue * 100) / 100,
      moneyness: moneyness.description,
      percentageOfStock: Math.round((price / stockPrice) * 10000) / 100 + '%'
    },
    inputs: {
      optionType: optionType.toUpperCase(),
      stockPrice,
      strikePrice,
      timeToExpiration: timeToExpiration + ' years',
      daysToExpiration: Math.round(timeToExpiration * 365),
      riskFreeRate: (riskFreeRate * 100) + '%',
      volatility: (volatility * 100) + '%'
    },
    profitLoss: {
      breakEvenPrice: Math.round(breakEven * 100) / 100,
      maxProfit: typeof maxProfit === 'number' ? Math.round(maxProfit * 100) / 100 : maxProfit,
      maxLoss: Math.round(maxLoss * 100) / 100,
      riskRewardRatio: typeof maxProfit === 'number'
        ? Math.round((maxProfit / maxLoss) * 100) / 100
        : 'Unlimited'
    },
    scenarios,
    recommendations: generateOptionRecommendations({
      optionType,
      price,
      intrinsicValue,
      timeValue,
      moneyness,
      stockPrice,
      strikePrice,
      timeToExpiration,
      volatility
    })
  };
}

function getMoneyness(optionType, stockPrice, strikePrice) {
  const percentDiff = ((stockPrice - strikePrice) / strikePrice) * 100;

  let status;
  let description;

  if (optionType === 'call') {
    if (stockPrice > strikePrice) {
      status = 'ITM';
      description = `In-the-money (${Math.round(percentDiff * 100) / 100}% ITM)`;
    } else if (stockPrice === strikePrice) {
      status = 'ATM';
      description = 'At-the-money';
    } else {
      status = 'OTM';
      description = `Out-of-the-money (${Math.round(Math.abs(percentDiff) * 100) / 100}% OTM)`;
    }
  } else {
    if (stockPrice < strikePrice) {
      status = 'ITM';
      description = `In-the-money (${Math.round(Math.abs(percentDiff) * 100) / 100}% ITM)`;
    } else if (stockPrice === strikePrice) {
      status = 'ATM';
      description = 'At-the-money';
    } else {
      status = 'OTM';
      description = `Out-of-the-money (${Math.round(percentDiff * 100) / 100}% OTM)`;
    }
  }

  return { status, description, percentDiff };
}

function generatePricingScenarios(optionType, S, K, T, r, sigma) {
  const scenarios = [
    { name: 'Stock -10%', multiplier: 0.9 },
    { name: 'Stock -5%', multiplier: 0.95 },
    { name: 'Current', multiplier: 1.0 },
    { name: 'Stock +5%', multiplier: 1.05 },
    { name: 'Stock +10%', multiplier: 1.10 }
  ];

  return scenarios.map(scenario => {
    const newStockPrice = S * scenario.multiplier;
    const newPrice = blackScholes(optionType, newStockPrice, K, T, r, sigma);
    const priceDiff = newPrice - blackScholes(optionType, S, K, T, r, sigma);
    const percentChange = (priceDiff / blackScholes(optionType, S, K, T, r, sigma)) * 100;

    return {
      scenario: scenario.name,
      stockPrice: Math.round(newStockPrice * 100) / 100,
      optionPrice: Math.round(newPrice * 100) / 100,
      priceChange: Math.round(priceDiff * 100) / 100,
      percentChange: Math.round(percentChange * 100) / 100 + '%'
    };
  });
}

function generateOptionRecommendations(metrics) {
  const recommendations = [];
  const { optionType, price, intrinsicValue, timeValue, moneyness, stockPrice, strikePrice, timeToExpiration, volatility } = metrics;

  // Time value analysis
  const timeValuePercent = (timeValue / price) * 100;
  if (timeValuePercent > 80) {
    recommendations.push({
      type: 'info',
      message: `${Math.round(timeValuePercent)}% of option value is time value. Time decay risk is significant.`
    });
  }

  // Moneyness recommendations
  if (moneyness.status === 'OTM') {
    recommendations.push({
      type: 'risk',
      message: `Option is ${Math.round(Math.abs(moneyness.percentDiff))}% out-of-the-money. Requires stock movement to become profitable.`
    });
  } else if (moneyness.status === 'ITM') {
    recommendations.push({
      type: 'success',
      message: `Option is ${Math.round(Math.abs(moneyness.percentDiff))}% in-the-money with $${Math.round(intrinsicValue * 100) / 100} of intrinsic value.`
    });
  }

  // Time to expiration
  if (timeToExpiration < 0.1) { // Less than ~36 days
    recommendations.push({
      type: 'warning',
      message: 'Option is near expiration. Time decay will accelerate significantly.'
    });
  } else if (timeToExpiration > 1) {
    recommendations.push({
      type: 'info',
      message: 'Long-dated option with over 1 year to expiration. Less sensitive to time decay but higher premium.'
    });
  }

  // Volatility considerations
  if (volatility > 0.5) {
    recommendations.push({
      type: 'caution',
      message: `High volatility of ${volatility * 100}% indicates significant price uncertainty. Option premiums are elevated.`
    });
  } else if (volatility < 0.15) {
    recommendations.push({
      type: 'info',
      message: `Low volatility of ${volatility * 100}% results in lower premiums. Consider buying options in low-vol environments.`
    });
  }

  // Price relative to stock
  const pricePercent = (price / stockPrice) * 100;
  if (pricePercent > 10) {
    recommendations.push({
      type: 'cost',
      message: `Option costs ${Math.round(pricePercent * 100) / 100}% of stock price. High leverage but also high risk.`
    });
  }

  return recommendations;
}
