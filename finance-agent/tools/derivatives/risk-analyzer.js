/**
 * Portfolio risk analysis for derivatives and securities
 */

import { validatePositiveNumber } from '../../utils/validators.js';
import { sharpeRatio, valueAtRisk } from '../../utils/financial-math.js';

export const riskAnalyzerTool = {
  name: 'analyze_portfolio_risk',
  description: 'Analyze portfolio risk using Value at Risk (VaR), Sharpe ratio, and volatility metrics. Assess risk-adjusted returns and tail risk. Essential for risk management and portfolio optimization.',
  input_schema: {
    type: 'object',
    properties: {
      returns: {
        type: 'array',
        description: 'Historical returns (as decimals, e.g., 0.05 for 5%)',
        items: {
          type: 'number'
        }
      },
      portfolioValue: {
        type: 'number',
        description: 'Current portfolio value in dollars'
      },
      riskFreeRate: {
        type: 'number',
        description: 'Risk-free rate as decimal (e.g., 0.03 for 3%)'
      },
      confidenceLevel: {
        type: 'number',
        description: 'VaR confidence level (e.g., 0.95 for 95%)'
      },
      timeHorizon: {
        type: 'number',
        description: 'Time horizon for VaR in days (default 1)'
      }
    },
    required: ['returns', 'portfolioValue', 'riskFreeRate']
  }
};

export function analyzePortfolioRisk(params) {
  const {
    returns,
    portfolioValue,
    riskFreeRate,
    confidenceLevel = 0.95,
    timeHorizon = 1
  } = params;

  // Validate inputs
  if (!Array.isArray(returns) || returns.length < 2) {
    throw new Error('Returns must be an array with at least 2 data points');
  }
  validatePositiveNumber(portfolioValue, 'Portfolio value');

  // Calculate basic statistics
  const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length;
  const stdDev = Math.sqrt(variance);

  // Annualize metrics (assuming daily returns)
  const annualizedReturn = avgReturn * 252;
  const annualizedVolatility = stdDev * Math.sqrt(252);

  // Calculate Sharpe ratio
  const sharpe = sharpeRatio(returns, riskFreeRate / 252); // Daily risk-free rate
  const annualizedSharpe = sharpe * Math.sqrt(252);

  // Calculate Value at Risk
  const varDecimal = valueAtRisk(returns, confidenceLevel);
  const varDollar = varDecimal * portfolioValue;

  // Adjust VaR for time horizon
  const scaledVaR = varDollar * Math.sqrt(timeHorizon);

  // Calculate Conditional VaR (Expected Shortfall)
  const sortedReturns = [...returns].sort((a, b) => a - b);
  const varIndex = Math.floor((1 - confidenceLevel) * sortedReturns.length);
  const tailReturns = sortedReturns.slice(0, varIndex);
  const cvarDecimal = tailReturns.length > 0
    ? -tailReturns.reduce((sum, r) => sum + r, 0) / tailReturns.length
    : varDecimal;
  const cvarDollar = cvarDecimal * portfolioValue;

  // Calculate maximum drawdown
  const drawdown = calculateMaxDrawdown(returns, portfolioValue);

  // Calculate downside deviation (semi-deviation)
  const downsideReturns = returns.filter(r => r < avgReturn);
  const downsideVariance = downsideReturns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length;
  const downsideDeviation = Math.sqrt(downsideVariance);
  const annualizedDownsideVol = downsideDeviation * Math.sqrt(252);

  // Sortino ratio (uses downside deviation instead of total volatility)
  const sortinoRatio = downsideDeviation > 0
    ? (avgReturn - riskFreeRate / 252) / downsideDeviation
    : 0;
  const annualizedSortino = sortinoRatio * Math.sqrt(252);

  // Distribution statistics
  const skewness = calculateSkewness(returns, avgReturn, stdDev);
  const kurtosis = calculateKurtosis(returns, avgReturn, stdDev);

  // Risk categorization
  const riskCategory = categorizeRisk(annualizedVolatility, annualizedSharpe);

  return {
    summary: {
      portfolioValue: Math.round(portfolioValue * 100) / 100,
      averageDailyReturn: Math.round(avgReturn * 10000) / 100 + '%',
      annualizedReturn: Math.round(annualizedReturn * 10000) / 100 + '%',
      dailyVolatility: Math.round(stdDev * 10000) / 100 + '%',
      annualizedVolatility: Math.round(annualizedVolatility * 10000) / 100 + '%',
      riskCategory: riskCategory.category
    },
    riskMetrics: {
      sharpeRatio: Math.round(annualizedSharpe * 100) / 100,
      sortinoRatio: Math.round(annualizedSortino * 100) / 100,
      downsideVolatility: Math.round(annualizedDownsideVol * 10000) / 100 + '%',
      valueAtRisk: {
        confidenceLevel: (confidenceLevel * 100) + '%',
        timeHorizon: timeHorizon + ' day(s)',
        dollarAmount: Math.round(scaledVaR * 100) / 100,
        percentageOfPortfolio: Math.round((scaledVaR / portfolioValue) * 10000) / 100 + '%'
      },
      conditionalVaR: {
        dollarAmount: Math.round(cvarDollar * 100) / 100,
        percentageOfPortfolio: Math.round((cvarDollar / portfolioValue) * 10000) / 100 + '%',
        description: 'Average loss when VaR is exceeded'
      },
      maxDrawdown: {
        dollarAmount: Math.round(drawdown.maxDrawdownDollar * 100) / 100,
        percentage: Math.round(drawdown.maxDrawdownPercent * 10000) / 100 + '%',
        description: 'Largest peak-to-trough decline'
      }
    },
    distributionAnalysis: {
      skewness: Math.round(skewness * 100) / 100,
      skewnessInterpretation: skewness > 0.5 ? 'Positive skew - more extreme positive returns' :
                              skewness < -0.5 ? 'Negative skew - more extreme negative returns' :
                              'Approximately symmetric',
      kurtosis: Math.round(kurtosis * 100) / 100,
      kurtosisInterpretation: kurtosis > 3 ? 'Fat tails - higher probability of extreme events' :
                              kurtosis < 3 ? 'Thin tails - lower probability of extreme events' :
                              'Normal distribution'
    },
    recommendations: generateRiskRecommendations({
      annualizedSharpe,
      annualizedVolatility,
      varDollar: scaledVaR,
      portfolioValue,
      maxDrawdownPercent: drawdown.maxDrawdownPercent,
      skewness,
      kurtosis,
      riskCategory
    })
  };
}

function calculateMaxDrawdown(returns, initialValue) {
  let peak = initialValue;
  let maxDrawdown = 0;
  let currentValue = initialValue;

  returns.forEach(r => {
    currentValue = currentValue * (1 + r);
    if (currentValue > peak) {
      peak = currentValue;
    }
    const drawdown = (peak - currentValue) / peak;
    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown;
    }
  });

  return {
    maxDrawdownPercent: maxDrawdown,
    maxDrawdownDollar: maxDrawdown * initialValue
  };
}

function calculateSkewness(returns, mean, stdDev) {
  if (stdDev === 0) return 0;

  const n = returns.length;
  const sum = returns.reduce((acc, r) => acc + Math.pow((r - mean) / stdDev, 3), 0);

  return (n / ((n - 1) * (n - 2))) * sum;
}

function calculateKurtosis(returns, mean, stdDev) {
  if (stdDev === 0) return 0;

  const n = returns.length;
  const sum = returns.reduce((acc, r) => acc + Math.pow((r - mean) / stdDev, 4), 0);

  return (n * (n + 1) / ((n - 1) * (n - 2) * (n - 3))) * sum -
         3 * Math.pow(n - 1, 2) / ((n - 2) * (n - 3));
}

function categorizeRisk(annualizedVol, sharpe) {
  let category;
  let description;
  let recommendation;

  if (annualizedVol < 0.10) {
    category = 'Low Risk';
    description = 'Conservative portfolio with low volatility';
    recommendation = 'Suitable for risk-averse investors';
  } else if (annualizedVol < 0.20) {
    category = 'Moderate Risk';
    description = 'Balanced portfolio with moderate volatility';
    recommendation = 'Suitable for moderate risk tolerance';
  } else if (annualizedVol < 0.35) {
    category = 'High Risk';
    description = 'Aggressive portfolio with high volatility';
    recommendation = 'Requires high risk tolerance';
  } else {
    category = 'Very High Risk';
    description = 'Extremely volatile portfolio';
    recommendation = 'Only suitable for very aggressive investors';
  }

  // Adjust based on Sharpe ratio
  if (sharpe > 1.5) {
    recommendation += ' - Excellent risk-adjusted returns';
  } else if (sharpe < 0.5) {
    recommendation += ' - Poor risk-adjusted returns';
  }

  return { category, description, recommendation };
}

function generateRiskRecommendations(metrics) {
  const recommendations = [];

  // Sharpe ratio recommendations
  if (metrics.annualizedSharpe > 2) {
    recommendations.push({
      type: 'success',
      metric: 'sharpe',
      message: `Excellent Sharpe ratio of ${Math.round(metrics.annualizedSharpe * 100) / 100}. Portfolio has strong risk-adjusted returns.`
    });
  } else if (metrics.annualizedSharpe < 0.5) {
    recommendations.push({
      type: 'warning',
      metric: 'sharpe',
      message: `Low Sharpe ratio of ${Math.round(metrics.annualizedSharpe * 100) / 100}. Returns don't adequately compensate for risk taken.`
    });
  } else if (metrics.annualizedSharpe < 0) {
    recommendations.push({
      type: 'critical',
      metric: 'sharpe',
      message: 'Negative Sharpe ratio indicates returns below risk-free rate. Reconsider strategy.'
    });
  }

  // VaR recommendations
  const varPercent = (metrics.varDollar / metrics.portfolioValue) * 100;
  if (varPercent > 10) {
    recommendations.push({
      type: 'risk',
      metric: 'var',
      message: `High VaR of ${Math.round(varPercent * 100) / 100}% of portfolio. Consider reducing position sizes or adding hedges.`
    });
  } else if (varPercent > 5) {
    recommendations.push({
      type: 'caution',
      metric: 'var',
      message: `Moderate VaR of ${Math.round(varPercent * 100) / 100}%. Monitor risk exposure regularly.`
    });
  }

  // Volatility recommendations
  if (metrics.annualizedVolatility > 0.30) {
    recommendations.push({
      type: 'warning',
      metric: 'volatility',
      message: `High volatility of ${Math.round(metrics.annualizedVolatility * 10000) / 100}%. Portfolio experiences significant price swings.`
    });
  }

  // Drawdown recommendations
  if (metrics.maxDrawdownPercent > 0.20) {
    recommendations.push({
      type: 'critical',
      metric: 'drawdown',
      message: `Maximum drawdown of ${Math.round(metrics.maxDrawdownPercent * 10000) / 100}% is significant. Ensure you can tolerate such losses.`
    });
  }

  // Distribution recommendations
  if (metrics.skewness < -0.5) {
    recommendations.push({
      type: 'info',
      metric: 'skewness',
      message: 'Negative skewness indicates higher risk of large losses. Consider tail-risk hedging strategies.'
    });
  }

  if (metrics.kurtosis > 4) {
    recommendations.push({
      type: 'caution',
      metric: 'kurtosis',
      message: 'Fat-tailed distribution increases probability of extreme events. Standard risk models may underestimate risk.'
    });
  }

  // Overall risk category
  recommendations.push({
    type: 'summary',
    metric: 'overall',
    message: `Portfolio classified as ${metrics.riskCategory.category}. ${metrics.riskCategory.recommendation}`
  });

  return recommendations;
}
