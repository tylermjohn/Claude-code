/**
 * Configuration management for the Finance Agent
 */

export const DEFAULT_CONFIG = {
  model: 'claude-sonnet-4-5-20250929',
  maxTokens: 4096,
  temperature: 1.0,
  apiKey: process.env.ANTHROPIC_API_KEY
};

export class Config {
  constructor(options = {}) {
    this.model = options.model || DEFAULT_CONFIG.model;
    this.maxTokens = options.maxTokens || DEFAULT_CONFIG.maxTokens;
    this.temperature = options.temperature || DEFAULT_CONFIG.temperature;
    this.apiKey = options.apiKey || DEFAULT_CONFIG.apiKey;

    if (!this.apiKey) {
      throw new Error('API key is required. Set ANTHROPIC_API_KEY environment variable or pass apiKey in options.');
    }
  }

  validate() {
    const errors = [];

    if (typeof this.apiKey !== 'string' || this.apiKey.length === 0) {
      errors.push('Invalid API key');
    }

    if (this.maxTokens < 1 || this.maxTokens > 8192) {
      errors.push('maxTokens must be between 1 and 8192');
    }

    if (this.temperature < 0 || this.temperature > 1) {
      errors.push('temperature must be between 0 and 1');
    }

    if (errors.length > 0) {
      throw new Error(`Configuration validation failed: ${errors.join(', ')}`);
    }

    return true;
  }

  toObject() {
    return {
      model: this.model,
      maxTokens: this.maxTokens,
      temperature: this.temperature
    };
  }
}
