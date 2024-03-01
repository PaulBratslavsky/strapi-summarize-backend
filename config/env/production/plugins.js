module.exports = {
  'summary-ai': {
    enabled: true,
    config: {
      openAIApiKey: process.env.OPEN_AI_API_KEY,
      model: process.env.OPEN_AI_MODEL,
      maxTokens: process.env.MAX_TOKENS,
      temp: process.env.TEMP,
    },
  },
}
