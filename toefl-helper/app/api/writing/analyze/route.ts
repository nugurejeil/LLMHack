import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { essay, prompt, taskType } = body;

    if (!essay || !prompt) {
      return NextResponse.json(
        { error: 'Essay and prompt are required' },
        { status: 400 }
      );
    }

    // Count words
    const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;

    // Analyze essay with Claude
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2048,
      messages: [
        {
          role: 'user',
          content: `당신은 TOEFL Writing 전문 평가자입니다. 다음 에세이를 분석하고 한글로 상세한 피드백을 제공해주세요.

Task Type: ${taskType || 'independent'}
Prompt: ${prompt}

Essay:
${essay}

Word Count: ${wordCount}

아래 JSON 형식으로 평가 결과를 제공해주세요. 모든 피드백은 한글로 작성해야 합니다:

{
  "scores": {
    "organization": <0-5>,
    "development": <0-5>,
    "languageUse": <0-5>,
    "grammar": <0-5>,
    "overall": <0-5>
  },
  "estimatedScore": <0-30>,
  "feedback": {
    "strengths": ["잘한 점 1", "잘한 점 2", "잘한 점 3"],
    "improvements": ["개선할 점 1", "개선할 점 2", "개선할 점 3"],
    "suggestions": ["제안 1", "제안 2", "제안 3"]
  },
  "detailedAnalysis": {
    "organization": "구성에 대한 상세 분석 (한글)",
    "development": "전개에 대한 상세 분석 (한글)",
    "languageUse": "언어 사용에 대한 상세 분석 (한글)",
    "grammar": "문법에 대한 상세 분석 (한글)"
  }
}

채점 가이드:
- Organization (0-5): 에세이 구조, 서론, 본문 단락, 결론, 전환 표현
- Development (0-5): 아이디어의 깊이, 예시, 뒷받침 세부사항
- Language Use (0-5): 어휘의 다양성, 단어 선택, 문장 구조의 다양성
- Grammar (0-5): 문법 정확성, 문장 구조, 구두점
- Overall (0-5): 전체적인 평가
- Estimated Score (0-30): TOEFL 점수로 환산

건설적이고 격려하는 피드백을 제공하되, 구체적이고 실행 가능한 조언을 해주세요. 모든 피드백은 반드시 한글로 작성해야 합니다.`,
        },
      ],
    });

    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : '';

    // Extract JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse response from Claude');
    }

    const feedback = JSON.parse(jsonMatch[0]);

    return NextResponse.json({
      ...feedback,
      wordCount,
    });
  } catch (error) {
    console.error('Error analyzing essay:', error);
    return NextResponse.json(
      { error: 'Failed to analyze essay' },
      { status: 500 }
    );
  }
}
