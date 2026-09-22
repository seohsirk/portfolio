// 비밀번호를 검증하고 통과 쿠키를 심는다
import { NextResponse } from "next/server";
import { ACCESS_COOKIE } from "@/middleware";

const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function POST(req: Request) {
  const { password } = (await req.json().catch(() => ({}))) as {
    password?: string;
  };

  const expected = process.env.SITE_PASSWORD;
  const token = process.env.SITE_ACCESS_TOKEN;

  if (!expected || !token) {
    return NextResponse.json(
      { ok: false, reason: "not_configured" },
      { status: 500 },
    );
  }

  if (typeof password !== "string" || password.trim() !== expected) {
    // 무차별 대입을 늦추기 위한 최소 지연
    await new Promise((r) => setTimeout(r, 600));
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ACCESS_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: THIRTY_DAYS,
  });
  return res;
}
