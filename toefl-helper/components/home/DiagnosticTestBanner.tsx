'use client';

import Link from 'next/link';
import { Card, Button, Badge } from '@/components/ui';
import { motion } from 'framer-motion';

export default function DiagnosticTestBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card variant="peach" className="relative overflow-hidden">
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Left Side - Icon & Text */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-[var(--shadow-soft)]">
                  📊
                </div>
                <div>
                  <Badge variant="info">추천</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  진단 테스트
                </h3>
                <p className="text-text-secondary text-sm md:text-base">
                  현재 실력을 측정하고 맞춤 학습 계획을 받아보세요
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <span>⏱️</span>
                  <span>15-20분</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📝</span>
                  <span>리딩 + 리스닝</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎯</span>
                  <span>수준별 학습 경로 제공</span>
                </div>
              </div>
            </div>

            {/* Right Side - Button */}
            <div className="w-full md:w-auto">
              <Link href="/diagnostic">
                <Button variant="primary" className="w-full md:w-auto whitespace-nowrap">
                  테스트 시작하기 →
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              className="text-cocoa"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.7,55.4,53.6,67,40.1,73.8C26.6,80.6,11.6,82.6,-3.2,88.5C-18,94.4,-36,104.2,-50.5,98.3C-65,92.4,-76,70.8,-82.8,49.1C-89.6,27.4,-92.2,5.6,-89.1,-14.9C-86,-35.4,-77.2,-54.6,-64.2,-63.2C-51.2,-71.8,-34,-69.8,-18.7,-74.3C-3.4,-78.8,10,-89.8,25.3,-94.1C40.6,-98.4,30.6,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </Card>
    </motion.div>
  );
}
