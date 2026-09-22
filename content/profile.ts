// 인물 소개와 연락처 — 사이트 전역에서 쓰는 기본 정보
import type { SkillGroup } from "./types";

export const profile = {
  name: "서한석",
  title: "AI Technical Product Manager",
  email: "seohsirk@gmail.com",
  location: "인천광역시",

  // 질문 목록을 여는 한 줄. 설명하지 않고 이름만 붙인다
  lede: ["내가 마주한 질문들"],

  // 한 줄로 요약되는 차별점. 과장 없이.
  standout: [
    "기획과 디자인만이 아니라 데이터베이스 스키마, 서버, 프론트엔드를 직접 씁니다.",
    "의료기기 인증과 소비자 앱, B2B SaaS를 모두 출시해 봤습니다.",
    "지표가 가설과 다르면 방향을 바꿉니다. 세 번 바꿨습니다.",
  ],
} as const;

export const skills: SkillGroup[] = [
  {
    label: "Product",
    items: [
      "제품 전략",
      "고객 문제 정의",
      "PRD · 유저 스토리",
      "정보구조 · UX/UI",
      "디자인 시스템",
      "0→1 출시",
    ],
  },
  {
    label: "AI",
    items: [
      "LangGraph",
      "Agent 오케스트레이션",
      "RAG · 검색",
      "모델 라우팅",
      "토큰 원가 관리",
      "출력 품질 평가",
    ],
  },
  {
    label: "Engineering",
    items: [
      "Next.js · React · TypeScript",
      "FastAPI · Python",
      "PostgreSQL · Supabase",
      "Vercel · GCP Cloud Run",
    ],
  },
  {
    label: "Business",
    items: ["투자 유치", "기술영업", "해외 파트너십", "의료기기 인허가"],
  },
];
