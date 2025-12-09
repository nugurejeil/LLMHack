export interface SpeakingPrompt {
  id: string;
  type: 'independent' | 'integrated';
  topic: string;
  question: string;
  preparationTime: number; // seconds
  responseTime: number; // seconds
  rubric: {
    delivery: string;
    languageUse: string;
    topicDevelopment: string;
  };
}

export interface SpeakingFeedback {
  transcription: string;
  scores: {
    delivery: number; // 0-4
    languageUse: number; // 0-4
    topicDevelopment: number; // 0-4
    overall: number; // 0-4
  };
  feedback: {
    strengths: string[];
    improvements: string[];
    suggestions: string[];
  };
  estimatedScore: number; // TOEFL speaking score out of 30
}

export interface RecordingState {
  isRecording: boolean;
  isPreparing: boolean;
  audioBlob: Blob | null;
  duration: number;
  preparationTimeLeft: number;
  responseTimeLeft: number;
}
