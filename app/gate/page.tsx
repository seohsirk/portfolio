// 비밀번호 입력 화면 — 사이트의 첫인상이므로 본문과 같은 톤을 쓴다
import { Suspense } from "react";
import GateForm from "./GateForm";

export const metadata = {
  title: "서한석",
  robots: { index: false, follow: false },
};

export default function GatePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-sm flex-col justify-center px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">서한석</h1>
      <p className="mt-2 text-[15px] text-[var(--color-ink-soft)]">
        AI Technical Product Manager
      </p>
      <p className="mt-8 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
        비공개 포트폴리오입니다. 전달받은 코드를 입력해 주세요.
      </p>
      <Suspense>
        <GateForm />
      </Suspense>
      <p className="mt-10 text-[13px] text-[var(--color-ink-soft)]">
        코드가 없다면{" "}
        <a
          href="mailto:seohsirk@gmail.com"
          className="text-[var(--color-accent)] underline-offset-4 hover:underline"
        >
          seohsirk@gmail.com
        </a>
        으로 연락 주세요.
      </p>
    </main>
  );
}
