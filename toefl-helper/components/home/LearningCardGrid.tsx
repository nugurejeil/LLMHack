'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, Badge } from '@/components/ui';

interface LearningSection {
  id: string;
  title: string;
  description: string;
  mascot: {
    name: string;
    koreanName: string;
    emoji: string;
    image: string;
  };
  duration: string;
  sessionType: 'quick' | 'standard' | 'deep';
  path: string;
  color: 'cream' | 'peach' | 'white';
}

const learningSections: LearningSection[] = [
  {
    id: 'vocabulary',
    title: '단어 학습',
    description: '모찌 햄스터와 함께하는 단어 암기',
    mascot: {
      name: 'Mochi',
      koreanName: '모찌',
      emoji: '🐹',
      image: '/Mochi_idle.webp',
    },
    duration: '5분',
    sessionType: 'quick',
    path: '/learn/vocabulary',
    color: 'cream',
  },
  {
    id: 'reading',
    title: '리딩',
    description: '토스티 고양이와 함께하는 독해',
    mascot: {
      name: 'Toasty',
      koreanName: '토스티',
      emoji: '🐱',
      image: '/Toasty_idle.webp',
    },
    duration: '10분',
    sessionType: 'standard',
    path: '/learn/reading',
    color: 'peach',
  },
  {
    id: 'listening',
    title: '리스닝',
    description: '코코 북극곰과 함께하는 듣기',
    mascot: {
      name: 'Coco',
      koreanName: '코코',
      emoji: '🐻‍❄️',
      image: '/Coco_idle.webp',
    },
    duration: '10분',
    sessionType: 'standard',
    path: '/learn/listening',
    color: 'white',
  },
  {
    id: 'speaking',
    title: '스피킹',
    description: '러스티 여우와 함께하는 말하기',
    mascot: {
      name: 'Rusty',
      koreanName: '러스티',
      emoji: '🦊',
      image: '/Rusty_idle.webp',
    },
    duration: '15분',
    sessionType: 'deep',
    path: '/learn/speaking',
    color: 'cream',
  },
  {
    id: 'writing',
    title: '라이팅',
    description: '페니 토끼와 함께하는 글쓰기',
    mascot: {
      name: 'Penny',
      koreanName: '페니',
      emoji: '🐰',
      image: '/Penny_idle.webp',
    },
    duration: '15분',
    sessionType: 'deep',
    path: '/learn/writing',
    color: 'peach',
  },
];

const sessionTypeLabels = {
  quick: { text: 'Quick Session', color: 'success' as const },
  standard: { text: 'Standard Session', color: 'warning' as const },
  deep: { text: 'Deep Session', color: 'info' as const },
};

export default function LearningCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {learningSections.map((section) => (
        <Link key={section.id} href={section.path}>
          <Card variant={section.color} hoverable className="h-full">
            <div className="space-y-4">
              {/* Mascot & Title */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src={section.mascot.image}
                    alt={section.mascot.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{section.mascot.emoji}</span>
                    <h3 className="text-lg font-bold text-text-primary">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    with {section.mascot.koreanName} ({section.mascot.name})
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary">
                {section.description}
              </p>

              {/* Duration & Session Type */}
              <div className="flex items-center justify-between">
                <Badge variant={sessionTypeLabels[section.sessionType].color}>
                  {sessionTypeLabels[section.sessionType].text}
                </Badge>
                <span className="text-sm font-medium text-text-primary">
                  {section.duration}
                </span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
