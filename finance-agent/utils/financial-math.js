/**
 * Financial mathematics utilities
 * Standard formulas for time value of money, options pricing, etc.
 */

/**
 * Calculate present value
 * PV = FV / (1 + r)^n
 */
export function presentValue(futureValue, rate, periods) {
  return futureValue / Math.pow(1 + rate, periods);
}

/**
 * Calculate future value
 * FV = PV * (1 + r)^n
 */
export function futureValue(presentValue, rate, periods) {
  return presentValue * Math.pow(1 + rate, periods);
}

/**
 * Calculate net present value
 * NPV = Σ(CF_t / (1 + r)^t) - Initial Investment
 */
export function netPresentValue(cashFlows, rate, initialInvestment) {
  const npv = cashFlows.reduce((sum, cf, index) => {
    return sum + cf / Math.pow(1 + rate, index + 1);
  }, 0);
  return npv - initialInvestment;
}

/**
 * Calculate internal rate of return using Newton-Raphson method
 */
export function internalRateOfReturn(cashFlows, initialInvestment, guess = 0.1) {
  const maxIterations = 100;
  const tolerance = 0.0001;
  let rate = guess;

  for (let i = 0; i < maxIterations; i++) {
    let npv = -initialInvestment;
    let derivative = 0;

    cashFlows.forEach((cf, index) => {
      const period = index + 1;
      npv += cf / Math.pow(1 + rate, period);
      derivative -= (period * cf) / Math.pow(1 + rate, period + 1);
    });

    const newRate = rate - npv / derivative;

    if (Math.abs(newRate - rate) < tolerance) {
      return newRate;
    }

    rate = newRate;
  }

  return rate;
}

/**
 * Calculate compound annual growth rate
 * CAGR = (Ending Value / Beginning Value)^(1/n) - 1
 */
export function compoundAnnualGrowthRate(beginningValue, endingValue, years) {
  return Math.pow(endingValue / beginningValue, 1 / years) - 1;
}

/**
 * Standard normal cumulative distribution function
 * Used in Black-Scholes model
 */
export function normalCDF(x) {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp(-x * x / 2);
  const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));

  return x > 0 ? 1 - prob : prob;
}

/**
 * Standard normal probability density function
 */
export function normalPDF(x) {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

/**
 * Black-Scholes option pricing model
 * @param {string} type - 'call' or 'put'
 * @param {number} S - Current stock price
 * @param {number} K - Strike price
 * @param {number} T - Time to expiration (years)
 * @param {number} r - Risk-free rate
 * @param {number} sigma - Volatility (annualized)
 */
export function blackScholes(type, S, K, T, r, sigma) {
  const d1 = (Math.log(S / K) + (r + sigma * sigma / 2) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);

  if (type === 'call') {
    return S * normalCDF(d1) - K * Math.exp(-r * T) * normalCDF(d2);
  } else {
    return K * Math.exp(-r * T) * normalCDF(-d2) - S * normalCDF(-d1);
  }
}

/**
 * Calculate option Greeks
 */
export function calculateGreeks(S, K, T, r, sigma, type = 'call') {
  const d1 = (Math.log(S / K) + (r + sigma * sigma / 2) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);

  const delta = type === 'call'
    ? normalCDF(d1)
    : normalCDF(d1) - 1;

  const gamma = normalPDF(d1) / (S * sigma * Math.sqrt(T));

  const vega = S * normalPDF(d1) * Math.sqrt(T) / 100;

  const theta = type === 'call'
    ? (-S * normalPDF(d1) * sigma / (2 * Math.sqrt(T)) - r * K * Math.exp(-r * T) * normalCDF(d2)) / 365
    : (-S * normalPDF(d1) * sigma / (2 * Math.sqrt(T)) + r * K * Math.exp(-r * T) * normalCDF(-d2)) / 365;

  const rho = type === 'call'
    ? K * T * Math.exp(-r * T) * normalCDF(d2) / 100
    : -K * T * Math.exp(-r * T) * normalCDF(-d2) / 100;

  return { delta, gamma, theta, vega, rho };
}

/**
 * Calculate Sharpe ratio
 * (Return - Risk-free rate) / Standard deviation
 */
export function sharpeRatio(returns, riskFreeRate) {
  const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
  const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length;
  const stdDev = Math.sqrt(variance);

  return (avgReturn - riskFreeRate) / stdDev;
}

/**
 * Calculate Value at Risk (VaR) using historical method
 * @param {number[]} returns - Historical returns
 * @param {number} confidenceLevel - e.g., 0.95 for 95% confidence
 */
export function valueAtRisk(returns, confidenceLevel = 0.95) {
  const sorted = [...returns].sort((a, b) => a - b);
  const index = Math.floor((1 - confidenceLevel) * sorted.length);
  return -sorted[index];
}
