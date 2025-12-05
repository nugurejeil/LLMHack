'use client';

import { PageLayout } from '@/components/layout';
import {
  StreakCounter,
  LearningCardGrid,
  TodaysPlan,
  ProgressRing,
  DiagnosticTestBanner,
} from '@/components/home';

export default function HomePage() {
  // TODO: 실제로는 Supabase에서 데이터를 가져와야 합니다
  const mockData = {
    streak: {
      current: 7,
      longest: 15,
    },
    progress: {
      currentWeek: 3,
      totalWeeks: 12,
      estimatedScore: 65,
    },
    todaysPlan: [
      { title: '단어 20개 암기', emoji: '🐹', completed: true, duration: '5분' },
      { title: '리딩 1지문', emoji: '🐱', completed: true, duration: '10분' },
      { title: '리스닝 1강의', emoji: '🐻‍❄️', completed: false, duration: '10분' },
    ],
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
            안녕하세요! 👋
          </h1>
          <p className="text-text-secondary">
            오늘도 토플 80점을 향해 한 걸음 더 나아가볼까요?
          </p>
        </div>

        {/* Streak Counter */}
        <StreakCounter
          currentStreak={mockData.streak.current}
          longestStreak={mockData.streak.longest}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Learning Cards & Plan */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Plan */}
            <TodaysPlan planItems={mockData.todaysPlan} />

            {/* Diagnostic Test Banner */}
            <DiagnosticTestBanner />

            {/* Learning Cards Grid */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                학습 섹션 선택
              </h2>
              <LearningCardGrid />
            </div>
          </div>

          {/* Right Column - Progress Ring */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <ProgressRing
                currentWeek={mockData.progress.currentWeek}
                totalWeeks={mockData.progress.totalWeeks}
                estimatedScore={mockData.progress.estimatedScore}
              />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-4 text-center shadow-[var(--shadow-soft)]">
            <p className="text-3xl font-bold text-pink font-[var(--font-number)]">143</p>
            <p className="text-sm text-text-secondary mt-1">암기한 단어</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-[var(--shadow-soft)]">
            <p className="text-3xl font-bold text-honey font-[var(--font-number)]">12</p>
            <p className="text-sm text-text-secondary mt-1">완료한 리딩</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-[var(--shadow-soft)]">
            <p className="text-3xl font-bold text-mint font-[var(--font-number)]">8</p>
            <p className="text-sm text-text-secondary mt-1">완료한 리스닝</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-[var(--shadow-soft)]">
            <p className="text-3xl font-bold text-cocoa font-[var(--font-number)]">
              {mockData.progress.currentWeek * 7}h
            </p>
            <p className="text-sm text-text-secondary mt-1">총 학습 시간</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
