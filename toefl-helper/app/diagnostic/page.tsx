'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, Button } from '@/components/ui'
import { motion } from 'framer-motion'

export default function DiagnosticIntroPage() {
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)

  const handleStart = () => {
    router.push('/diagnostic/test')
  }

  return (
    <div className="min-h-screen bg-warm-cream p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-cocoa-brown mb-2">
            진단 테스트
          </h1>
          <p className="text-text-secondary">
            현재 실력을 측정하고 맞춤 학습 계획을 받아보세요
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card variant="white" className="p-8 mb-6">
            {/* Character Illustration */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-soft-peach rounded-full flex items-center justify-center text-6xl">
                📚
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-cocoa-brown mb-6">
              시작하기 전에
            </h2>

            {/* Test Info */}
            <div className="space-y-4 mb-8">
              <InfoItem
                icon="⏱️"
                title="소요 시간"
                description="약 15-20분"
              />
              <InfoItem
                icon="📝"
                title="문제 구성"
                description="리딩 3문제 + 리스닝 3문제"
              />
              <InfoItem
                icon="🎯"
                title="목표"
                description="현재 수준 파악 및 맞춤 학습 경로 제공"
              />
            </div>

            {/* Guidelines */}
            <div className="bg-soft-peach p-6 rounded-2xl mb-6">
              <h3 className="font-bold text-cocoa-brown mb-3 flex items-center gap-2">
                <span>💡</span>
                <span>테스트 안내</span>
              </h3>
              <ul className="space-y-2 text-sm text-text-primary">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>조용한 환경에서 진행해주세요 (리스닝 문제 포함)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>한 번 제출한 답은 수정할 수 없습니다</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>시험 중 다른 탭이나 앱을 사용하지 마세요</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>리스닝 문제는 2번까지 들을 수 있습니다</span>
                </li>
              </ul>
            </div>

            {/* Ready Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer mb-6">
              <input
                type="checkbox"
                checked={isReady}
                onChange={(e) => setIsReady(e.target.checked)}
                className="w-5 h-5 rounded border-2 border-honey-brown text-strawberry-pink focus:ring-2 focus:ring-strawberry-pink"
              />
              <span className="text-sm text-text-primary">
                안내사항을 모두 확인했으며, 테스트를 시작할 준비가 되었습니다
              </span>
            </label>

            {/* Start Button */}
            <Button
              variant="primary"
              onClick={handleStart}
              disabled={!isReady}
              className="w-full"
            >
              테스트 시작하기
            </Button>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-text-secondary"
        >
          <p>이 테스트는 학습 계획 수립을 위한 것으로,</p>
          <p>실제 TOEFL 시험과는 다를 수 있습니다</p>
        </motion.div>
      </div>
    </div>
  )
}

function InfoItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-warm-cream rounded-full flex items-center justify-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-cocoa-brown">{title}</h4>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
    </div>
  )
}
