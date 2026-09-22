// 포트폴리오 전역 레이아웃 — 한국어 폰트·메타데이터·테마 색을 정의한다
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nnm.im"),
  title: "서한석 · AI Technical Product Manager",
  description:
    "2012년부터 디지털 헬스, 통신 데이터, 채용, B2B SaaS, 생성형 AI 제품을 기획하고 출시해 온 Product Manager. 기획부터 DB·서버·프론트엔드까지 직접 만듭니다.",
  openGraph: {
    title: "서한석 · AI Technical Product Manager",
    description: "기획부터 DB·서버·프론트엔드까지 직접 만드는 Product Manager",
    url: "https://nnm.im",
    siteName: "서한석 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  robots: { index: false, follow: false, nocache: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/400.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/500.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
