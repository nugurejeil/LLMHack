'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { diagnosticTestData } from '@/lib/data/diagnosticData'
import { UserAnswer, DiagnosticResult } from '@/lib/types/diagnostic'
import { calculateDiagnosticScore } from '@/lib/utils/scoreCalculator'
import { ReadingQuestion } from '@/components/diagnostic/ReadingQuestion'
import { ListeningQuestion } from '@/components/diagnostic/ListeningQuestion'
import { ResultPage } from '@/components/diagnostic/ResultPage'

type TestPhase = 'reading' | 'listening' | 'result'

export default function DiagnosticTestPage() {
  const router = useRouter()
  const [phase, setPhase] = useState<TestPhase>('reading')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [readingAnswers, setReadingAnswers] = useState<UserAnswer[]>([])
  const [listeningAnswers, setListeningAnswers] = useState<UserAnswer[]>([])
  const [result, setResult] = useState<DiagnosticResult | null>(null)

  const readingQuestions = diagnosticTestData.readingQuestions
  const listeningQuestions = diagnosticTestData.listeningQuestions

  const handleReadingAnswer = (answer: number) => {
    const question = readingQuestions[currentQuestionIndex]
    const isCorrect = answer === question.correctAnswer

    const userAnswer: UserAnswer = {
      questionId: question.id,
      selectedAnswer: answer,
      isCorrect
    }

    const newReadingAnswers = [...readingAnswers, userAnswer]
    setReadingAnswers(newReadingAnswers)

    if (currentQuestionIndex < readingQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Move to listening phase
      setPhase('listening')
      setCurrentQuestionIndex(0)
    }
  }

  const handleListeningAnswer = (answer: number) => {
    const question = listeningQuestions[currentQuestionIndex]
    const isCorrect = answer === question.correctAnswer

    const userAnswer: UserAnswer = {
      questionId: question.id,
      selectedAnswer: answer,
      isCorrect
    }

    const newListeningAnswers = [...listeningAnswers, userAnswer]
    setListeningAnswers(newListeningAnswers)

    if (currentQuestionIndex < listeningQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Calculate result and show result page
      const finalResult = calculateDiagnosticScore(readingAnswers, newListeningAnswers)
      setResult(finalResult)
      setPhase('result')
    }
  }

  const handleComplete = () => {
    router.push('/')
  }

  // Render based on phase
  if (phase === 'reading') {
    const question = readingQuestions[currentQuestionIndex]
    return (
      <ReadingQuestion
        question={question}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={readingQuestions.length}
        onAnswer={handleReadingAnswer}
      />
    )
  }

  if (phase === 'listening') {
    const question = listeningQuestions[currentQuestionIndex]
    return (
      <ListeningQuestion
        question={question}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={listeningQuestions.length}
        onAnswer={handleListeningAnswer}
      />
    )
  }

  if (phase === 'result' && result) {
    return <ResultPage result={result} onComplete={handleComplete} />
  }

  return null
}
