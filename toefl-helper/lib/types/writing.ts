export type WritingTaskType = 'integrated' | 'independent';

export interface WritingPrompt {
  id: string;
  type: WritingTaskType;
  topic: string;
  prompt: string;
  readingPassage?: string; // For integrated tasks
  wordLimit: {
    min: number;
    max: number;
  };
  timeLimit: number; // in seconds
  rubric: {
    organization: string;
    development: string;
    languageUse: string;
    grammar: string;
  };
  sampleAnswer?: string;
}

export interface WritingFeedback {
  scores: {
    organization: number; // 0-5
    development: number; // 0-5
    languageUse: number; // 0-5
    grammar: number; // 0-5
    overall: number; // 0-5
  };
  estimatedScore: number; // 0-30 TOEFL scale
  wordCount: number;
  feedback: {
    strengths: string[];
    improvements: string[];
    suggestions: string[];
  };
  detailedAnalysis: {
    organization: string;
    development: string;
    languageUse: string;
    grammar: string;
  };
}
