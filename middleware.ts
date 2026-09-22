// 포트폴리오 전체를 비밀번호 뒤에 두는 접근 게이트
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const ACCESS_COOKIE = "nnm_access";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 게이트 화면과 검증 API 는 통과시켜야 로그인이 가능하다
  if (pathname === "/gate" || pathname === "/api/gate") {
    return NextResponse.next();
  }

  const granted = req.cookies.get(ACCESS_COOKIE)?.value;
  if (granted && granted === process.env.SITE_ACCESS_TOKEN) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/gate";
  url.search = pathname === "/" ? "" : `?next=${encodeURIComponent(pathname)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // 정적 자산과 메타 파일은 게이트 대상이 아니다
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff2?)).*)",
  ],
};
