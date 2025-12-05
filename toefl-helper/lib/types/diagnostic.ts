export type QuestionType = 'reading' | 'listening'

export interface Question {
  id: string
  type: QuestionType
  question: string
  options: string[]
  correctAnswer: number
  passage?: string // for reading questions
  audioUrl?: string // for listening questions
  transcript?: string // for listening questions - text version of audio
}

export interface DiagnosticTest {
  readingQuestions: Question[]
  listeningQuestions: Question[]
}

export interface UserAnswer {
  questionId: string
  selectedAnswer: number
  isCorrect: boolean
}

export interface DiagnosticResult {
  readingScore: number
  listeningScore: number
  totalScore: number
  readingCorrect: number
  listeningCorrect: number
  readingTotal: number
  listeningTotal: number
  estimatedTOEFLScore: number
  weaknesses: string[]
  strengths: string[]
}
