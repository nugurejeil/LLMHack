export interface VocabularyWord {
  id: string
  word: string
  pronunciation: string
  partOfSpeech: string
  definition: string
  exampleSentence: string
  koreanMeaning: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export interface VocabularySession {
  words: VocabularyWord[]
  currentIndex: number
  correctAnswers: string[]
  incorrectAnswers: string[]
}

export interface FlashcardResult {
  wordId: string
  isCorrect: boolean
  timeSpent: number
}
