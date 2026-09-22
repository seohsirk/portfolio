// 포트폴리오 콘텐츠의 형태 정의 — 디자인이 바뀌어도 이 계약은 유지한다
export type Option = {
  name: string;
  desc: string;
  verdict: string;
  chosen?: boolean;
};

export type Fact = { label: string; value: string; note?: string };

export type Block =
  | { kind: "text"; body: string[] }
  | { kind: "options"; intro?: string; items: Option[] }
  | { kind: "facts"; intro?: string; items: Fact[] }
  | { kind: "note"; body: string };

export type CaseSection = {
  label: string;
  title?: string;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  headline: string;
  role: string;
  period: string;
  summary: string;
  live?: { href: string; label: string };
  tags: string[];
  sections: CaseSection[];
};

export type Job = {
  company: string;
  aka?: string;
  title: string;
  period: string;
  location?: string;
  summary?: string;
  points: string[];
  caseSlug?: string;
};

export type SkillGroup = { label: string; items: string[] };

// 기술 결정 기록 — 케이스보다 짧고 서사에 가깝다
export type NoteBlock =
  | { kind: "p"; body: string }
  | { kind: "h"; body: string }
  | { kind: "quote"; body: string; source?: string }
  | { kind: "stats"; items: Fact[] }
  | { kind: "lesson"; items: string[] };

export type Note = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  body: NoteBlock[];
};
