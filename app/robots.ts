// 비공개 포트폴리오이므로 모든 크롤러를 차단한다
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", disallow: "/" }] };
}
