'use client';

import { Card, ProgressBar, Badge } from '@/components/ui';

interface PlanItem {
  title: string;
  emoji: string;
  completed: boolean;
  duration: string;
}

interface TodaysPlanProps {
  planItems?: PlanItem[];
}

const defaultPlanItems: PlanItem[] = [
  { title: '단어 20개 암기', emoji: '🐹', completed: false, duration: '5분' },
  { title: '리딩 1지문', emoji: '🐱', completed: false, duration: '10분' },
  { title: '리스닝 1강의', emoji: '🐻‍❄️', completed: false, duration: '10분' },
];

export default function TodaysPlan({ planItems = defaultPlanItems }: TodaysPlanProps) {
  const completedCount = planItems.filter((item) => item.completed).length;
  const totalCount = planItems.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <Card variant="white">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-text-primary">오늘의 학습 플랜</h2>
            <p className="text-sm text-text-secondary mt-1">
              {completedCount}/{totalCount} 완료
            </p>
          </div>
          <div className="text-3xl">📅</div>
        </div>

        {/* Progress Bar */}
        <ProgressBar value={progress} showLabel={false} />

        {/* Plan Items */}
        <div className="space-y-3">
          {planItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                item.completed
                  ? 'bg-mint/20 border-2 border-mint'
                  : 'bg-peach border-2 border-transparent'
              }`}
            >
              {/* Checkbox */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  item.completed
                    ? 'bg-mint text-white'
                    : 'bg-white border-2 border-text-secondary'
                }`}
              >
                {item.completed && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>

              {/* Emoji */}
              <span className="text-2xl">{item.emoji}</span>

              {/* Task Info */}
              <div className="flex-1">
                <p
                  className={`font-medium ${
                    item.completed
                      ? 'text-text-secondary line-through'
                      : 'text-text-primary'
                  }`}
                >
                  {item.title}
                </p>
              </div>

              {/* Duration */}
              <Badge variant={item.completed ? 'success' : 'default'}>
                {item.duration}
              </Badge>
            </div>
          ))}
        </div>

        {/* Encouragement */}
        {completedCount === totalCount && totalCount > 0 ? (
          <div className="text-center p-3 bg-mint/10 rounded-xl">
            <p className="text-pink font-medium">🎉 오늘 학습 완료! 정말 멋져요!</p>
          </div>
        ) : (
          <div className="text-center p-3 bg-peach rounded-xl">
            <p className="text-sm text-text-secondary">
              {totalCount - completedCount}개 남았어요. 화이팅! 💪
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
