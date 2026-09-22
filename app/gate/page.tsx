// 비밀번호 입력 화면 — 사이트의 첫인상이므로 본문과 같은 톤을 쓴다
import { Suspense } from "react";
import GateForm from "./GateForm";

export const metadata = {
  title: "서한석",
  robots: { index: false, follow: false },
};

export default function GatePage() {
  return (
    <main className="gate">
      <div className="gate-inner">
        <p className="label">서한석 · AI Technical Product Manager</p>
        <h1 className="gate-lede">다시 물었다</h1>
        <p className="gate-desc">
          제품을 만들며 부딪힌 질문 넷을 적어 두었습니다. 비공개라 전달받은
          코드가 필요합니다.
        </p>
        <Suspense>
          <GateForm />
        </Suspense>
        <p className="gate-help">
          코드가 없다면{" "}
          <a href="mailto:seohsirk@gmail.com">seohsirk@gmail.com</a>
          으로 연락 주세요.
        </p>
      </div>
    </main>
  );
}
