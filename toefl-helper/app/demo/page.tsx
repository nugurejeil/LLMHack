'use client';

import Image from 'next/image';
import { Button, Card, Input, ProgressBar, Badge } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-text-primary">
            TOEFL 80
          </h1>
          <p className="text-xl text-text-secondary">
            바쁜 직장인을 위한 3개월 토플 학습 앱
          </p>
          <Badge variant="info">디자인 시스템 데모</Badge>
        </div>

        {/* Color Palette */}
        <Card variant="white" size="lg">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">컬러 팔레트</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="w-full h-20 rounded-2xl bg-cream border-2 border-text-secondary"></div>
              <p className="text-sm font-medium text-text-primary">Warm Cream</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-2xl bg-peach"></div>
              <p className="text-sm font-medium text-text-primary">Soft Peach</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-2xl bg-pink"></div>
              <p className="text-sm font-medium text-text-primary">Strawberry Pink</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-2xl bg-honey"></div>
              <p className="text-sm font-medium text-text-primary">Honey Brown</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-2xl bg-cocoa"></div>
              <p className="text-sm font-medium text-white">Cocoa Brown</p>
            </div>
          </div>
        </Card>

        {/* Buttons */}
        <Card variant="peach" size="lg">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">버튼</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Small Primary</Button>
            <Button variant="primary" size="md">Medium Primary</Button>
            <Button variant="primary" size="lg">Large Primary</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="outline" size="md">Outline</Button>
            <Button variant="primary" size="md" isLoading>Loading...</Button>
          </div>
        </Card>

        {/* Cards */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-text-primary">카드</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="cream" hoverable>
              <div className="space-y-3">
                <div className="flex justify-center">
                  <Image
                    src="/Mochi_idle.webp"
                    alt="Mochi"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-primary text-center">단어 학습</h3>
                <p className="text-text-secondary text-center">모찌 햄스터와 함께하는 단어 암기</p>
                <div className="flex justify-center">
                  <Badge variant="success">5분 세션</Badge>
                </div>
              </div>
            </Card>
            <Card variant="peach" hoverable>
              <div className="space-y-3">
                <div className="flex justify-center">
                  <Image
                    src="/Toasty_idle.webp"
                    alt="Toasty"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-primary text-center">리딩</h3>
                <p className="text-text-secondary text-center">토스티 고양이와 함께하는 독해</p>
                <div className="flex justify-center">
                  <Badge variant="warning">10분 세션</Badge>
                </div>
              </div>
            </Card>
            <Card variant="white" hoverable>
              <div className="space-y-3">
                <div className="flex justify-center">
                  <Image
                    src="/Coco_idle.webp"
                    alt="Coco"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-primary text-center">리스닝</h3>
                <p className="text-text-secondary text-center">코코 북극곰과 함께하는 듣기</p>
                <div className="flex justify-center">
                  <Badge variant="info">10분 세션</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Input */}
        <Card variant="white" size="lg">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">입력 필드</h2>
          <div className="space-y-4 max-w-md">
            <Input
              label="이메일"
              type="email"
              placeholder="example@email.com"
              fullWidth
            />
            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
              helperText="8자 이상 입력해주세요"
              fullWidth
            />
            <Input
              label="에러 예시"
              type="text"
              error="올바른 형식이 아닙니다"
              fullWidth
            />
          </div>
        </Card>

        {/* Progress Bar */}
        <Card variant="peach" size="lg">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">프로그레스 바</h2>
          <div className="space-y-6">
            <ProgressBar value={25} showLabel size="sm" />
            <ProgressBar value={50} showLabel size="md" />
            <ProgressBar value={75} showLabel size="lg" />
            <ProgressBar value={100} showLabel size="md" />
          </div>
        </Card>

        {/* Badges */}
        <Card variant="cream" size="lg">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">뱃지</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">기본</Badge>
            <Badge variant="success">완료</Badge>
            <Badge variant="warning">주의</Badge>
            <Badge variant="info">정보</Badge>
          </div>
        </Card>

        {/* Mascots Section */}
        <Card variant="white" size="lg">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">마스코트 캐릭터</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/Mochi_idle.webp"
                alt="Mochi the Hamster"
                width={128}
                height={128}
                className="object-contain"
              />
              <h3 className="text-lg font-bold text-text-primary">모찌 (Mochi)</h3>
              <p className="text-sm text-text-secondary text-center">단어 학습 담당 햄스터</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/Toasty_idle.webp"
                alt="Toasty the Cat"
                width={128}
                height={128}
                className="object-contain"
              />
              <h3 className="text-lg font-bold text-text-primary">토스티 (Toasty)</h3>
              <p className="text-sm text-text-secondary text-center">리딩 담당 고양이</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/Coco_idle.webp"
                alt="Coco the Polar Bear"
                width={128}
                height={128}
                className="object-contain"
              />
              <h3 className="text-lg font-bold text-text-primary">코코 (Coco)</h3>
              <p className="text-sm text-text-secondary text-center">리스닝 담당 북극곰</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/Rusty_idle.webp"
                alt="Rusty the Fox"
                width={128}
                height={128}
                className="object-contain"
              />
              <h3 className="text-lg font-bold text-text-primary">러스티 (Rusty)</h3>
              <p className="text-sm text-text-secondary text-center">스피킹 담당 여우</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Image
                src="/Penny_idle.webp"
                alt="Penny the Rabbit"
                width={128}
                height={128}
                className="object-contain"
              />
              <h3 className="text-lg font-bold text-text-primary">페니 (Penny)</h3>
              <p className="text-sm text-text-secondary text-center">라이팅 담당 토끼</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
