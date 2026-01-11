/**
 * Input validation utilities for financial data
 */

export function validatePositiveNumber(value, name) {
  if (typeof value !== 'number' || isNaN(value) || value <= 0) {
    throw new Error(`${name} must be a positive number`);
  }
  return true;
}

export function validateNonNegativeNumber(value, name) {
  if (typeof value !== 'number' || isNaN(value) || value < 0) {
    throw new Error(`${name} must be a non-negative number`);
  }
  return true;
}

export function validatePercentage(value, name) {
  if (typeof value !== 'number' || isNaN(value) || value < 0 || value > 100) {
    throw new Error(`${name} must be between 0 and 100`);
  }
  return true;
}

export function validateRate(value, name) {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error(`${name} must be a valid number`);
  }
  return true;
}

export function validateOptionType(value) {
  if (!['call', 'put'].includes(value)) {
    throw new Error('Option type must be "call" or "put"');
  }
  return true;
}

export function validateCashFlows(cashFlows) {
  if (!Array.isArray(cashFlows) || cashFlows.length === 0) {
    throw new Error('Cash flows must be a non-empty array');
  }

  cashFlows.forEach((cf, index) => {
    if (typeof cf !== 'number' || isNaN(cf)) {
      throw new Error(`Cash flow at index ${index} must be a valid number`);
    }
  });

  return true;
}

export function validateDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error('Invalid date format');
  }

  if (end <= start) {
    throw new Error('End date must be after start date');
  }

  return true;
}
