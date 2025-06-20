const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const promptTemplate = (text) => `
You are a meeting assistant. Analyze the following meeting notes:

${text}

Respond in JSON format with the following structure:
{
  "summary": "2-3 sentence summary",
  "decisions": ["decision 1", "decision 2"],
  "actionItems": [
    {
      "task": "What needs to be done",
      "owner": "Optional person responsible",
      "deadline": "Optional deadline"
    }
  ]
}
`;

async function processMeetingNotes(text) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

  const result = await model.generateContent(promptTemplate(text));
  const response = await result.response;
  const content = response.text();

  const jsonMatch = content.match(/{[\s\S]*}/);
  if (!jsonMatch) throw new Error('Invalid Gemini response format.');

  return JSON.parse(jsonMatch[0]);
}

module.exports = { processMeetingNotes };
