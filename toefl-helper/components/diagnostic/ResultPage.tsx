'use client'

import { DiagnosticResult } from '@/lib/types/diagnostic'
import { Card, Button, Badge } from '@/components/ui'
import { motion } from 'framer-motion'
import { getScoreLevel, getRecommendedStudyPlan } from '@/lib/utils/scoreCalculator'

interface ResultPageProps {
  result: DiagnosticResult
  onComplete: () => void
}

export function ResultPage({ result, onComplete }: ResultPageProps) {
  const overallLevel = getScoreLevel(result.totalScore)
  const studyPlan = getRecommendedStudyPlan(result)

  return (
    <div className="min-h-screen bg-warm-cream p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-cocoa-brown mb-2">
            진단 테스트 완료!
          </h1>
          <p className="text-text-secondary">
            당신의 현재 수준을 분석했습니다
          </p>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card variant="white" className="p-8 mb-6 text-center">
            <div className="mb-4">
              <Badge variant="info">{overallLevel.level}</Badge>
            </div>
            <div className="text-6xl font-bold text-cocoa-brown mb-2">
              {result.totalScore}
              <span className="text-2xl text-text-secondary">점</span>
            </div>
            <p className="text-text-secondary mb-4">평균 점수</p>
            <div className="max-w-md mx-auto">
              <div className="w-full h-4 bg-warm-cream rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${result.totalScore}%` }}
                  className="h-full bg-gradient-to-r from-soft-peach to-strawberry-pink"
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
            <p className="text-sm text-honey-brown mt-4">
              {overallLevel.message}
            </p>
          </Card>
        </motion.div>

        {/* Section Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          {/* Reading Score */}
          <Card variant="cream" className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">📖</div>
              <div>
                <h3 className="font-bold text-cocoa-brown">리딩</h3>
                <p className="text-xs text-text-secondary">토스티와 함께</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-cocoa-brown mb-2">
              {result.readingScore}
              <span className="text-lg text-text-secondary">점</span>
            </div>
            <p className="text-sm text-text-secondary mb-3">
              {result.readingCorrect} / {result.readingTotal} 정답
            </p>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.readingScore}%` }}
                className="h-full bg-honey-brown"
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </Card>

          {/* Listening Score */}
          <Card variant="cream" className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🎧</div>
              <div>
                <h3 className="font-bold text-cocoa-brown">리스닝</h3>
                <p className="text-xs text-text-secondary">코코와 함께</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-cocoa-brown mb-2">
              {result.listeningScore}
              <span className="text-lg text-text-secondary">점</span>
            </div>
            <p className="text-sm text-text-secondary mb-3">
              {result.listeningCorrect} / {result.listeningTotal} 정답
            </p>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.listeningScore}%` }}
                className="h-full bg-mint-green"
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
          </Card>
        </motion.div>

        {/* TOEFL Estimation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card variant="peach" className="p-6 mb-6">
            <h3 className="font-bold text-cocoa-brown mb-3 flex items-center gap-2">
              <span>🎯</span>
              <span>예상 TOEFL 점수 (리딩+리스닝)</span>
            </h3>
            <div className="text-3xl font-bold text-cocoa-brown">
              약 {result.estimatedTOEFLScore} / 60점
            </div>
            <p className="text-sm text-text-secondary mt-2">
              * 이는 진단 테스트 기반 추정치이며, 실제 점수와 다를 수 있습니다
            </p>
          </Card>
        </motion.div>

        {/* Strengths & Weaknesses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          {/* Strengths */}
          <Card variant="white" className="p-6">
            <h3 className="font-bold text-cocoa-brown mb-3 flex items-center gap-2">
              <span>💪</span>
              <span>강점</span>
            </h3>
            <ul className="space-y-2">
              {result.strengths.map((strength, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-mint-green">✓</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Weaknesses */}
          <Card variant="white" className="p-6">
            <h3 className="font-bold text-cocoa-brown mb-3 flex items-center gap-2">
              <span>📈</span>
              <span>개선 영역</span>
            </h3>
            <ul className="space-y-2">
              {result.weaknesses.map((weakness, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-strawberry-pink">•</span>
                  <span>{weakness}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Study Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card variant="white" className="p-6 mb-6">
            <h3 className="font-bold text-cocoa-brown mb-4 flex items-center gap-2">
              <span>📅</span>
              <span>맞춤 학습 계획</span>
            </h3>

            {/* Daily Goal */}
            <div className="bg-soft-peach p-4 rounded-xl mb-4">
              <div className="text-sm text-honey-brown font-semibold mb-1">
                일일 목표
              </div>
              <div className="text-cocoa-brown font-bold">
                {studyPlan.dailyGoal}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="mb-4">
              <div className="text-sm font-semibold text-cocoa-brown mb-2">
                집중 학습 영역
              </div>
              <div className="flex flex-wrap gap-2">
                {studyPlan.focusAreas.map((area, idx) => (
                  <Badge key={idx} variant="default">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Weekly Plan */}
            <div>
              <div className="text-sm font-semibold text-cocoa-brown mb-2">
                주간 학습 계획
              </div>
              <ul className="space-y-2">
                {studyPlan.weeklyPlan.map((plan, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-honey-brown">→</span>
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="primary"
            onClick={onComplete}
            className="w-full"
          >
            학습 시작하기
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
