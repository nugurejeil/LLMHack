export interface ReadingPassage {
  id: string
  title: string
  passage: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  topic: string
  wordCount: number
}

export interface ReadingQuestion {
  id: string
  passageId: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  questionType: 'main-idea' | 'detail' | 'inference' | 'vocabulary'
}

export interface ReadingSession {
  passage: ReadingPassage
  questions: ReadingQuestion[]
  currentQuestionIndex: number
  answers: ReadingAnswer[]
}

export interface ReadingAnswer {
  questionId: string
  selectedAnswer: number
  isCorrect: boolean
  timeSpent: number
}

export interface ReadingResult {
  passageId: string
  correctCount: number
  totalQuestions: number
  accuracy: number
  timeSpent: number
}
