'use client'

import { useState } from 'react'
import { VocabularyWord } from '@/lib/types/vocabulary'
import { Card } from '@/components/ui'
import { motion, AnimatePresence } from 'framer-motion'

interface FlashcardProps {
  word: VocabularyWord
  isFlipped: boolean
  onFlip: () => void
}

export default function Flashcard({ word, isFlipped, onFlip }: FlashcardProps) {
  return (
    <div className="perspective-1000 w-full max-w-2xl mx-auto">
      <motion.div
        className="relative w-full h-[400px] cursor-pointer"
        onClick={onFlip}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Card variant="white" className="h-full flex flex-col items-center justify-center p-8 shadow-card">
            <div className="text-center space-y-6">
              <div className="text-5xl font-bold text-cocoa-brown font-[var(--font-english)]">
                {word.word}
              </div>
              <div className="text-lg text-honey-brown">
                {word.pronunciation}
              </div>
              <div className="inline-block px-4 py-2 bg-soft-peach rounded-full text-sm text-cocoa-brown">
                {word.partOfSpeech}
              </div>

              <div className="pt-8">
                <p className="text-text-secondary text-sm">카드를 클릭하여 뒤집기</p>
                <p className="text-text-secondary text-2xl mt-2">👆</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <Card variant="peach" className="h-full flex flex-col justify-center p-8 shadow-card">
            <div className="space-y-6">
              {/* Definition */}
              <div>
                <h4 className="text-sm font-semibold text-honey-brown uppercase mb-2">
                  Definition
                </h4>
                <p className="text-text-primary leading-relaxed">
                  {word.definition}
                </p>
              </div>

              {/* Korean Meaning */}
              <div>
                <h4 className="text-sm font-semibold text-honey-brown uppercase mb-2">
                  한국어 뜻
                </h4>
                <p className="text-xl font-bold text-cocoa-brown">
                  {word.koreanMeaning}
                </p>
              </div>

              {/* Example Sentence */}
              <div>
                <h4 className="text-sm font-semibold text-honey-brown uppercase mb-2">
                  Example
                </h4>
                <p className="text-text-primary leading-relaxed italic">
                  "{word.exampleSentence}"
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-text-secondary text-sm">다시 클릭하여 뒤집기</p>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
