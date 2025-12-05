'use client'

import { useState, useEffect } from 'react'
import { Question } from '@/lib/types/diagnostic'
import { Card, Button } from '@/components/ui'
import { motion } from 'framer-motion'

interface ReadingQuestionProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (answer: number) => void
}

export function ReadingQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer
}: ReadingQuestionProps) {
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
      <div className="max-w-6xl mx-auto">
        {/* Progress Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-secondary">
              리딩 {questionNumber} / {totalQuestions}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📖</span>
              <span className="text-sm font-semibold text-cocoa-brown">토스티</span>
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

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Passage Panel */}
          <Card variant="white" className="p-6 lg:sticky lg:top-6 lg:h-[calc(100vh-180px)] overflow-y-auto">
            <div className="mb-4 pb-4 border-b border-soft-peach">
              <h3 className="text-sm font-semibold text-honey-brown uppercase tracking-wider">
                Reading Passage
              </h3>
            </div>
            <div className="prose prose-sm max-w-none">
              {question.passage?.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-text-primary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Question Panel */}
          <div className="space-y-4">
            <Card variant="cream" className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-cocoa-brown mb-4">
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
                        : 'border-transparent bg-white hover:border-honey-brown hover:shadow-md'
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
              {questionNumber < totalQuestions ? '다음 문제' : '리딩 섹션 완료'}
            </Button>

            {/* Hint */}
            {selectedAnswer === null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-text-secondary"
              >
                답을 선택해주세요
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
