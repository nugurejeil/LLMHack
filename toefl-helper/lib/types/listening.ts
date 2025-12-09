export interface ListeningPassage {
  id: string
  title: string
  topic: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  audioUrl: string
  transcript: string
  duration: number // in seconds
}

export interface ListeningQuestion {
  id: string
  passageId: string
  questionType: 'main-idea' | 'detail' | 'inference' | 'function' | 'attitude'
  question: string
  options: string[]
  correctAnswer: number // index of correct option
  explanation: string
}

export interface ListeningSessionState {
  currentQuestionIndex: number
  answers: (number | null)[]
  showExplanation: boolean
  isCompleted: boolean
}
