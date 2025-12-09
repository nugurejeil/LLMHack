'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, FileText } from 'lucide-react';

interface WritingEditorProps {
  value: string;
  onChange: (value: string) => void;
  timeLimit: number; // in seconds
  wordLimit: { min: number; max: number };
  onTimeUp?: () => void;
  disabled?: boolean;
}

export default function WritingEditor({
  value,
  onChange,
  timeLimit,
  wordLimit,
  onTimeUp,
  disabled = false,
}: WritingEditorProps) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isActive, setIsActive] = useState(false);

  // Calculate word count
  const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
  const isWithinLimit = wordCount >= wordLimit.min && wordCount <= wordLimit.max;
  const isOverLimit = wordCount > wordLimit.max;

  // Timer
  useEffect(() => {
    if (!isActive || disabled) return;

    if (timeLeft <= 0) {
      onTimeUp?.();
      setIsActive(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, disabled, onTimeUp]);

  // Start timer on first input
  useEffect(() => {
    if (value.length > 0 && !isActive) {
      setIsActive(true);
    }
  }, [value, isActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (timeLeft > 300) return 'text-mint-green';
    if (timeLeft > 60) return 'text-butter-yellow';
    return 'text-strawberry-pink';
  };

  const getWordCountColor = () => {
    if (isOverLimit) return 'text-strawberry-pink';
    if (isWithinLimit) return 'text-mint-green';
    return 'text-text-secondary';
  };

  return (
    <div className="space-y-4">
      {/* Stats bar */}
      <div className="flex items-center justify-between p-4 bg-warm-cream rounded-lg">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock size={20} className={getTimeColor()} />
            <span className={`font-bold font-baloo ${getTimeColor()}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="h-4 w-px bg-text-secondary/20" />
          <div className="flex items-center gap-2">
            <FileText size={20} className={getWordCountColor()} />
            <span className={`font-bold font-baloo ${getWordCountColor()}`}>
              {wordCount} / {wordLimit.min}-{wordLimit.max}
            </span>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="text-sm text-text-secondary">
          {wordCount < wordLimit.min && (
            <span>최소 {wordLimit.min - wordCount}자 더 필요해요</span>
          )}
          {isWithinLimit && <span className="text-mint-green">✓ 적정 길이</span>}
          {isOverLimit && (
            <span className="text-strawberry-pink">
              {wordCount - wordLimit.max}자 초과
            </span>
          )}
        </div>
      </div>

      {/* Text editor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="여기에 작성을 시작하세요..."
          className="w-full h-96 p-6 bg-white rounded-lg border-2 border-warm-cream focus:border-honey-brown focus:outline-none resize-none font-pretendard text-text-primary leading-relaxed transition-colors disabled:bg-warm-cream/50 disabled:cursor-not-allowed"
          style={{
            fontSize: '16px',
            lineHeight: '1.75',
          }}
        />

        {/* Character count at bottom right */}
        <div className="absolute bottom-4 right-4 text-xs text-text-secondary bg-white/80 px-2 py-1 rounded">
          {value.length} characters
        </div>
      </motion.div>

      {/* Tips */}
      {!isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-mint-green/10 p-4 rounded-lg"
        >
          <p className="text-sm text-text-secondary">
            💡 <strong>팁:</strong> 작성을 시작하면 타이머가 자동으로 시작됩니다.
            {wordLimit.min}~{wordLimit.max} 단어 내로 작성해주세요.
          </p>
        </motion.div>
      )}
    </div>
  );
}
