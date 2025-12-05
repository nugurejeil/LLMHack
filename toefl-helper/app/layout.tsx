import type { Metadata } from "next";
import { Quicksand, Nunito, Baloo_2 } from "next/font/google";
import "./globals.css";

// English Title Font - Quicksand (Bold, rounded sans-serif)
const quicksand = Quicksand({
  variable: "--font-title-en",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// English Body Font - Nunito (Regular)
const nunito = Nunito({
  variable: "--font-body-en",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Number/Accent Font - Baloo 2 (cute rounded font)
const baloo2 = Baloo_2({
  variable: "--font-number",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOEFL 80 - 바쁜 직장인을 위한 3개월 토플 학습 앱",
  description: "풀타임 직장인이 3개월 안에 토플 80점대를 달성할 수 있도록 설계된 학습 앱입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard Font CDN */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body
        className={`${quicksand.variable} ${nunito.variable} ${baloo2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
