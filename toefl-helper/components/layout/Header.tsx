'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Mascot {
  name: string;
  koreanName: string;
  image: string;
  greeting: string;
}

const mascots: Mascot[] = [
  {
    name: 'Mochi',
    koreanName: '모찌',
    image: '/Mochi_idle.webp',
    greeting: '안녕! 오늘도 열심히 단어 외워볼까?',
  },
  {
    name: 'Toasty',
    koreanName: '토스티',
    image: '/Toasty_idle.webp',
    greeting: '오늘의 리딩 준비됐어? 함께 읽어보자!',
  },
  {
    name: 'Coco',
    koreanName: '코코',
    image: '/Coco_idle.webp',
    greeting: '귀 기울여봐! 오늘도 리스닝 연습하자~',
  },
  {
    name: 'Rusty',
    koreanName: '러스티',
    image: '/Rusty_idle.webp',
    greeting: '목소리 내는 거 부끄럽지 않아. 같이 연습해보자!',
  },
  {
    name: 'Penny',
    koreanName: '페니',
    image: '/Penny_idle.webp',
    greeting: '생각을 글로 표현하는 시간! 오늘도 화이팅!',
  },
];

export default function Header() {
  const [todayMascot, setTodayMascot] = useState<Mascot>(mascots[0]);

  useEffect(() => {
    // 매일 다른 마스코트를 보여주기 (날짜 기반)
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    const mascotIndex = dayOfYear % mascots.length;
    setTodayMascot(mascots[mascotIndex]);
  }, []);

  return (
    <header className="bg-white shadow-[var(--shadow-soft)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-text-primary font-[var(--font-title-en)]">
              TOEFL 80
            </h1>
          </div>

          {/* Today's Mascot Greeting */}
          <motion.div
            className="hidden md:flex items-center gap-3 bg-peach px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={todayMascot.image}
              alt={todayMascot.name}
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xs text-text-secondary">
                오늘의 친구: {todayMascot.koreanName}
              </span>
              <span className="text-sm font-medium text-text-primary">
                {todayMascot.greeting}
              </span>
            </div>
          </motion.div>

          {/* User Menu Placeholder */}
          <div className="flex items-center gap-4">
            {/* TODO: 로그인 후 프로필 아이콘으로 교체 */}
            <button className="text-text-secondary hover:text-text-primary transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
