'use client'

import { useState, useEffect } from 'react'
import { Question } from '@/lib/types/diagnostic'
import { Card, Button } from '@/components/ui'
import { AudioPlayer } from './AudioPlayer'
import { motion } from 'framer-motion'

interface ListeningQuestionProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (answer: number) => void
}

export function ListeningQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer
}: ListeningQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  // Reset selected answer when question changes
  useEffect(() => {
    setSelectedAnswer(null)
  }, [question.id])

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer)
    }
  }

  return (
    <div className="min-h-screen bg-warm-cream p-6">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-secondary">
              리스닝 {questionNumber} / {totalQuestions}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐻‍❄️</span>
              <span className="text-sm font-semibold text-cocoa-brown">코코</span>
            </div>
          </div>
          <div className="w-full h-2 bg-white rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              className="h-full bg-gradient-to-r from-soft-peach to-strawberry-pink"
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Audio Player */}
        <div className="mb-6">
          <AudioPlayer
            key={question.id}
            audioUrl={question.audioUrl || ''}
            maxPlays={2}
            transcript={question.transcript}
          />
        </div>

        {/* Question Card */}
        <Card variant="white" className="p-6 mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-cocoa-brown">
              {question.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedAnswer(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedAnswer === idx
                    ? 'border-strawberry-pink bg-soft-peach shadow-lg ring-2 ring-strawberry-pink ring-opacity-30'
                    : 'border-transparent bg-warm-cream hover:border-honey-brown hover:shadow-md'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                      selectedAnswer === idx
                        ? 'border-strawberry-pink bg-strawberry-pink shadow-md'
                        : 'border-honey-brown bg-white'
                    }`}
                  >
                    {selectedAnswer === idx && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                    )}
                  </div>
                  <span className={`${selectedAnswer === idx ? 'text-cocoa-brown font-semibold' : 'text-text-primary'}`}>
                    {option}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </Card>

        {/* Submit Button */}
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full"
        >
          {questionNumber < totalQuestions ? '다음 문제' : '리스닝 섹션 완료'}
        </Button>

        {/* Hint */}
        {selectedAnswer === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-sm text-text-secondary"
          >
            답을 선택해주세요
          </motion.div>
        )}
      </div>
    </div>
  )
}
