import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Anthropic API 클라이언트 초기화
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('audio') as File;
    const prompt = formData.get('prompt') as string;

    if (!audioFile || !prompt) {
      return NextResponse.json(
        { error: 'Audio file and prompt are required' },
        { status: 400 }
      );
    }

    // Step 1: Transcribe audio using OpenAI Whisper API
    const transcription = await transcribeAudio(audioFile);

    if (!transcription) {
      return NextResponse.json(
        { error: 'Failed to transcribe audio' },
        { status: 500 }
      );
    }

    // Step 2: Get feedback from Claude
    const feedback = await getFeedbackFromClaude(prompt, transcription);

    return NextResponse.json(feedback);
  } catch (error) {
    console.error('Error in speaking analysis:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function transcribeAudio(audioFile: File): Promise<string | null> {
  try {
    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('model', 'whisper-1');
    formData.append('language', 'en');

    const response = await fetch(
      'https://api.openai.com/v1/audio/transcriptions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      console.error('Whisper API error:', await response.text());
      return null;
    }

    const result = await response.json();
    return result.text;
  } catch (error) {
    console.error('Error transcribing audio:', error);
    return null;
  }
}

async function getFeedbackFromClaude(
  prompt: string,
  transcription: string
): Promise<any> {
  const systemPrompt = `You are an expert TOEFL speaking evaluator. Your task is to evaluate English speaking responses based on TOEFL speaking rubrics.

Evaluate the response on three criteria (each 0-4):
1. Delivery (pronunciation, pacing, fluency)
2. Language Use (grammar, vocabulary, sentence structure)
3. Topic Development (coherence, organization, supporting details)

Provide detailed feedback in Korean, but keep the transcription in English.

Return your evaluation in the following JSON format:
{
  "transcription": "the original transcription",
  "scores": {
    "delivery": 0-4,
    "languageUse": 0-4,
    "topicDevelopment": 0-4,
    "overall": 0-4 (average of the three)
  },
  "feedback": {
    "strengths": ["strength 1 in Korean", "strength 2 in Korean"],
    "improvements": ["improvement 1 in Korean", "improvement 2 in Korean"],
    "suggestions": ["suggestion 1 in Korean", "suggestion 2 in Korean"]
  },
  "estimatedScore": 0-30 (TOEFL speaking score estimation)
}`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 2000,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: `Question: ${prompt}\n\nStudent's Response: ${transcription}\n\nPlease evaluate this TOEFL speaking response and provide detailed feedback.`,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type from Claude');
    }

    // Extract JSON from the response
    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not extract JSON from Claude response');
    }

    const feedback = JSON.parse(jsonMatch[0]);
    return feedback;
  } catch (error) {
    console.error('Error getting feedback from Claude:', error);
    throw error;
  }
}
