
import { GoogleGenAI } from '@google/genai';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: 'GEMINI_API_KEY is missing. Add it to .env.local and restart the server.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { prompt, candidates = [] } = body;

    if (typeof prompt !== 'string' || !prompt.trim()) {
      return Response.json(
        { error: 'Prompt is required.' },
        { status: 400 }
      );
    }

    if (!Array.isArray(candidates)) {
      return Response.json(
        { error: 'Candidates must be an array.' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const result = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        'Recruiter question:',
        prompt,
        '',
        'Candidate data:',
        JSON.stringify(candidates),
      ].join('\n'),
      config: {
        systemInstruction:
          'You are TalentFlow Copilot, an ethical recruiting assistant. Answer concisely using only supplied data. Rank candidates using job relevance, documented skills, and supplied scores. Scores are indicators, not proof of job performance. Do not infer missing qualifications or use protected characteristics. Explain the evidence and tell the recruiter what to verify.',
      },
    });

    return Response.json({
      answer: result.text || 'The AI returned an empty response.',
    });
  } catch (error) {
    console.error('TalentFlow Copilot error:', error);

    const message =
      error instanceof Error ? error.message : String(error);

    return Response.json(
      { error: message },
      { status: 500 }
    );
  }
}
