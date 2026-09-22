// 경력 타임라인 — 케이스 스터디와 중복되지 않게 역할과 범위만 적는다
import type { Job } from "./types";

export const career: Job[] = [
  {
    company: "스토리파이",
    title: "Product Manager · 대표",
    period: "2024.01 – 현재",
    summary:
      "제품 세 개를 순서대로 만들고 지표를 보며 방향을 바꿨습니다. 기획과 디자인부터 DB, 서버, 프론트엔드, 배포와 운영까지 직접 했습니다.",
    points: [
      "Storify — 작성·구독·결제·이메일 캠페인을 연결한 뉴스레터 플랫폼",
      "Wordly AI — 검색·글 생성·이미지 제작을 잇는 LangGraph Agent 콘텐츠 제작 서비스. v2 「블로그 팩토리」로 병렬 대량생성·에이전시 B2B 전환",
      "Fitsel — 60만 기업 DB·뉴스 신호·맞춤 제안서 생성을 연결한 B2B 세일즈 인텔리전스",
    ],
    caseSlug: "fitsel",
  },
  {
    company: "메디플로우",
    title: "기획실 부장 · Product Owner",
    period: "2022.11 – 2023.12",
    points: [
      "간호사·간호조무사 채용 플랫폼 메디헌터를 사업 기획부터 출시까지 주도",
      "데이팅 앱의 카드형 탐색과 양방향 매칭을 채용에 적용 — 지역·직무·경력·근무 조건을 매칭 데이터로 구조화",
      "구직자·의료기관·운영자 3면 사용자 흐름, 백오피스, 디자인 시스템 설계",
      "React Native 프론트엔드 개발 참여, 서비스 출시",
    ],
  },
  {
    company: "어니언스",
    title: "CPO",
    period: "2019.02 – 2022.10",
    summary: "10명 규모 디지털 헬스 스타트업에서 제품 전략과 포트폴리오를 총괄했습니다.",
    points: [
      "파프리카케어 v1 – v3, 주치약사, 당뇨 DTx, 건강식 이커머스, 약국 비대면 조제·배송 기획",
      "물류용 RFID 추적을 의료기기 재고의 입출고·위치·수량 관리에 적용한 ERP 기획",
      "LG전자 홈헬스코디 PoC · 삼성화재 애니핏 플러스 PoC · 임직원 앱",
      "Seed · Pre-A 투자 유치",
    ],
    caseSlug: "papricacare",
  },
  {
    company: "액세스모션",
    aka: "액세스모바일 쿠알라룸푸르 법인",
    title: "R&D Manager",
    period: "2017.03 – 2019.01",
    location: "말레이시아 쿠알라룸푸르",
    summary:
      "통신망 트래픽 분석 기반 제품의 기획·디자인·프론트엔드 개발과 동남아 기술영업을 맡았습니다.",
    points: [
      "MobiThru DMP — 트래픽을 행동 데이터로 구조화해 맞춤 광고를 내는 플랫폼. LG U+ · Celcom · XL 적용",
      "KidSafe — 전체 트래픽을 중계하는 MITM 대신 패킷의 Destination 만 복사해 별도 서버가 판별·차단하는 구조로 본망 성능 영향 없이 유해 콘텐츠 차단. Celcom 출시 · XL 현지화 · 기숙학교용 확장",
      "IBN · ISP Ad block 플랫폼 — 베트남·인도네시아·말레이시아 통신사 대상",
      "Celcom(말레이시아 1위) · XL(인도네시아 2위) 파트너 등록, Seed · Pre-A 투자 유치 참여",
    ],
  },
  {
    company: "프리랜서",
    title: "공간디자인 소프트웨어 창업 준비",
    period: "2016.08 – 2017.02",
    location: "런던",
    points: ["공간디자인 경험을 소프트웨어로 옮기는 사업을 준비했습니다."],
  },
  {
    company: "네오펙트",
    aka: "현 다이나믹솔루션",
    title: "서비스기획팀장 · 수석",
    period: "2012.08 – 2016.05",
    points: [
      "재활 학습 솔루션 라파엘 v1 · v2(B2C/B2B)와 스마트 글러브 · 키즈 · 보드 · 바디 제품군 기획",
      "삼성 차세대 스마트 TV 감정인식 UX, 케미온 LED 안경(하드웨어·앱), 아모레 뷰티하우스 모바일 게임 UX 등 기업 협업",
      "의료기기 FDA · CE 인증, 소프트웨어 리스크 관리, 기술영업, 해외 전시",
      "코스닥 기술특례 상장 과정, Pre-A · Series A 투자 유치 참여, 특허 4건 출원",
    ],
    caseSlug: "rapael",
  },
  {
    company: "바인플랜",
    title: "조경 설계",
    period: "2010 – 2011",
    points: ["인턴·파트타임·풀타임 약 1년. 공간과 동선을 다루는 실무를 익혔습니다."],
  },
];

export const education = [
  { school: "University of the Arts London", degree: "공간디자인 학사", period: "2006.09 – 2010.09" },
  { school: "명지대학교", degree: "경영학 학사", period: "1998.02 – 2006.02" },
];

export const extras = [
  {
    label: "영어",
    value: "업무 가능",
    note: "영국 학사 · 말레이시아 근무 2년 · 동남아 통신사 협업",
  },
  {
    label: "특허 출원",
    value: "4건",
    note: "신체움직임 평가방법 및 어플리케이션 · 복수의 디스플레이부 제어방법 · 발광다이오드 안경 · [디자인] 발광 다이오드가 부설된 안경",
  },
  { label: "병역", value: "육군 만기전역" },
];
