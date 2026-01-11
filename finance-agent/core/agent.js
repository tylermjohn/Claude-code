/**
 * Finance Agent - Main orchestrator for Claude API integration
 */

import Anthropic from '@anthropic-ai/sdk';
import { Config } from './config.js';
import { getToolDefinitions, executeTool, getAvailableTools } from './tools.js';

export class FinanceAgent {
  constructor(options = {}) {
    this.config = new Config(options);
    this.config.validate();

    this.client = new Anthropic({
      apiKey: this.config.apiKey
    });

    this.conversationHistory = [];
  }

  /**
   * Query the finance agent with a question or request
   * @param {string} query - The user's question or request
   * @param {Object} options - Query options
   * @param {string[]} options.tools - Tool categories to enable (e.g., ['budgeting', 'derivatives'])
   * @param {boolean} options.stream - Whether to stream the response
   * @param {number} options.maxIterations - Maximum tool use iterations
   * @returns {Promise<Object>} Agent response with analysis and recommendations
   */
  async query(query, options = {}) {
    const {
      tools = ['all'],
      stream = false,
      maxIterations = 5
    } = options;

    // Get tool definitions for specified categories
    const toolDefinitions = getToolDefinitions(tools);

    // Build messages
    const messages = [
      ...this.conversationHistory,
      {
        role: 'user',
        content: query
      }
    ];

    // System prompt for financial analysis
    const systemPrompt = this.buildSystemPrompt(tools);

    let iteration = 0;
    let response = null;

    while (iteration < maxIterations) {
      iteration++;

      // Call Claude API
      response = await this.client.messages.create({
        model: this.config.model,
        max_tokens: this.config.maxTokens,
        temperature: this.config.temperature,
        system: systemPrompt,
        messages: messages,
        tools: toolDefinitions
      });

      // Check if we're done
      if (response.stop_reason === 'end_turn') {
        break;
      }

      // Process tool use
      if (response.stop_reason === 'tool_use') {
        const toolResults = [];

        for (const content of response.content) {
          if (content.type === 'tool_use') {
            const result = executeTool(content.name, content.input);

            toolResults.push({
              type: 'tool_result',
              tool_use_id: content.id,
              content: JSON.stringify(result, null, 2)
            });
          }
        }

        // Add assistant response and tool results to messages
        messages.push({
          role: 'assistant',
          content: response.content
        });

        messages.push({
          role: 'user',
          content: toolResults
        });
      } else {
        break;
      }
    }

    // Extract final response
    const finalResponse = this.extractResponse(response);

    // Update conversation history
    this.conversationHistory = messages;

    return {
      response: finalResponse,
      toolsUsed: this.extractToolsUsed(messages),
      iterations: iteration,
      conversationId: this.conversationHistory.length
    };
  }

  /**
   * Clear conversation history
   */
  clearHistory() {
    this.conversationHistory = [];
  }

  /**
   * Get conversation history
   */
  getHistory() {
    return this.conversationHistory;
  }

  /**
   * Build system prompt based on enabled tools
   */
  buildSystemPrompt(toolCategories) {
    const availableTools = toolCategories.flatMap(cat => getAvailableTools(cat));

    return `You are a financial analysis assistant with expertise in budgeting, project planning, and derivatives trading.

Your role is to help users make informed financial decisions by:
1. Analyzing their financial situation using appropriate tools
2. Providing clear, actionable recommendations
3. Explaining complex financial concepts in understandable terms
4. Highlighting risks and opportunities

Available tool categories:
${toolCategories.includes('all') || toolCategories.includes('budgeting') ? `
- Budgeting: Track expenses, plan savings goals, analyze cash flow
` : ''}${toolCategories.includes('all') || toolCategories.includes('project-planning') ? `
- Project Planning: Calculate ROI, analyze NPV/IRR, estimate costs
` : ''}${toolCategories.includes('all') || toolCategories.includes('derivatives') ? `
- Derivatives: Price options, calculate Greeks, analyze portfolio risk
` : ''}

When responding:
- Always use tools to perform calculations rather than estimating
- Provide specific numbers and percentages
- Explain the reasoning behind recommendations
- Highlight important risks and caveats
- Use clear formatting with sections and bullet points
- Be concise but thorough

Financial Disclaimer: All analysis is for informational purposes only and should not be considered financial advice. Users should consult with qualified financial professionals before making investment decisions.`;
  }

  /**
   * Extract text response from Claude's response
   */
  extractResponse(response) {
    const textContent = response.content
      .filter(content => content.type === 'text')
      .map(content => content.text)
      .join('\n\n');

    return textContent;
  }

  /**
   * Extract which tools were used in the conversation
   */
  extractToolsUsed(messages) {
    const tools = new Set();

    messages.forEach(message => {
      if (message.role === 'assistant' && Array.isArray(message.content)) {
        message.content.forEach(content => {
          if (content.type === 'tool_use') {
            tools.add(content.name);
          }
        });
      }
    });

    return Array.from(tools);
  }

  /**
   * Get available tool categories
   */
  static getToolCategories() {
    return ['budgeting', 'project-planning', 'derivatives', 'all'];
  }

  /**
   * Get list of all available tools
   */
  static listTools(category = 'all') {
    return getAvailableTools(category);
  }
}

export default FinanceAgent;
