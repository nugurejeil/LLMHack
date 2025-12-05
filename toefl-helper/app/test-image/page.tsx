'use client';

import Image from 'next/image';

export default function TestImagePage() {
  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">이미지 테스트</h1>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Next.js Image 컴포넌트</h2>
          <div className="relative w-32 h-32 bg-white rounded-lg">
            <Image
              src="/Mochi_idle.webp"
              alt="Mochi"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">일반 img 태그</h2>
          <div className="w-32 h-32 bg-white rounded-lg">
            <img
              src="/Mochi_idle.webp"
              alt="Mochi"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">모든 캐릭터 (일반 img)</h2>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img src="/Mochi_idle.webp" alt="Mochi" className="w-full" />
              <p className="text-center">Mochi</p>
            </div>
            <div>
              <img src="/Toasty_idle.webp" alt="Toasty" className="w-full" />
              <p className="text-center">Toasty</p>
            </div>
            <div>
              <img src="/Coco_idle.webp" alt="Coco" className="w-full" />
              <p className="text-center">Coco</p>
            </div>
            <div>
              <img src="/Rusty_idle.webp" alt="Rusty" className="w-full" />
              <p className="text-center">Rusty</p>
            </div>
            <div>
              <img src="/Penny_idle.webp" alt="Penny" className="w-full" />
              <p className="text-center">Penny</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
