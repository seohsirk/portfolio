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
    <form onSubmit={submit} className="mt-5">
      <label htmlFor="code" className="sr-only">
        접근 코드
      </label>
      <input
        id="code"
        type="password"
        autoFocus
        autoComplete="current-password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (state === "error") setState("idle");
        }}
        aria-invalid={state === "error"}
        className="w-full rounded-lg border border-[var(--color-line)] bg-transparent px-3.5 py-2.5 text-[15px] outline-none transition focus:border-[var(--color-accent)]"
      />
      <button
        type="submit"
        disabled={state === "loading" || !password.trim()}
        className="mt-2.5 w-full rounded-lg bg-[var(--color-accent)] px-3.5 py-2.5 text-[15px] font-medium text-white transition disabled:opacity-40"
      >
        {state === "loading" ? "확인하는 중" : "들어가기"}
      </button>
      <p
        role="status"
        className="mt-2.5 min-h-5 text-[13px] text-red-500"
      >
        {state === "error" ? "코드가 맞지 않습니다." : ""}
      </p>
    </form>
  );
}
