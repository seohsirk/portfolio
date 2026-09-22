"use client";
// 게이트 입력 폼 — 검증 결과에 따라 원래 가려던 경로로 보낸다
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GateForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim() || state === "loading") return;
    setState("loading");

    const res = await fetch("/api/gate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      setState("error");
      setPassword("");
      return;
    }
    router.replace(params.get("next") || "/");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="gate-form">
      <label htmlFor="code" className="sr-only">
        접근 코드
      </label>
      <div className="gate-row">
        <input
          id="code"
          type="password"
          autoFocus
          autoComplete="current-password"
          placeholder="접근 코드"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (state === "error") setState("idle");
          }}
          aria-invalid={state === "error"}
          className="gate-input mono"
        />
        <button
          type="submit"
          disabled={state === "loading" || !password.trim()}
          className="gate-btn"
        >
          {state === "loading" ? "확인하는 중" : "들어가기"}
        </button>
      </div>
      <p role="status" className="gate-err">
        {state === "error" ? "코드가 맞지 않습니다" : ""}
      </p>
    </form>
  );
}
