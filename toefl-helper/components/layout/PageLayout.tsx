'use client';

import Header from './Header';
import BottomNav from './BottomNav';

interface PageLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showBottomNav?: boolean;
  className?: string;
}

export default function PageLayout({
  children,
  showHeader = true,
  showBottomNav = true,
  className = '',
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {showHeader && <Header />}

      <main className={`flex-1 ${showBottomNav ? 'pb-16 md:pb-0' : ''} pt-5 ${className}`}>
        {children}
      </main>

      {showBottomNav && <BottomNav />}
    </div>
  );
}
