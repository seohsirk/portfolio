// 첫 화면 — 질문 넷이 사이트의 뼈대다. 설명하지 않고 물어본다
import Link from "next/link";
import { profile, skills } from "@/content/profile";
import { cases } from "@/content/cases";
import { notes } from "@/content/notes";
import { career, education, extras } from "@/content/career";

type Q = { href: string; question: string; answer: string; tag: string; kind?: boolean };

// 순서 = 가장 강한 것 먼저, 그 다음 시간 역순.
// 「다시 물었다」를 가장 크게 증명하는 것이 되돌린 결정이라 맨 앞에 둔다.
const QUESTIONS: Q[] = [
  ...notes.map((n) => ({
    href: `/note/${n.slug}`,
    question: n.question,
    answer: n.answer,
    tag: n.kind,
    kind: true,
  })),
  ...cases.map((c) => ({
    href: `/case/${c.slug}`,
    question: c.question,
    answer: c.answer,
    tag: c.name,
  })),
];

export default function Home() {
  return (
    <main className="home">
      <header className="home-head">
        <p className="label">
          {profile.name} · {profile.title}
        </p>
        <h1 className="home-lede">
          {profile.lede.map((l, i) => (
            <span key={i} className="lede-line">
              {l}
            </span>
          ))}
        </h1>
      </header>

      {/* 질문 목록 — 이 사이트의 본문 */}
      <ol className="qlist">
        {QUESTIONS.map((q, i) => (
          <li key={q.href}>
            <Link href={q.href} className="q">
              <span className="q-num mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="q-body">
                <span className="q-ask">{q.question}</span>
                <span className="q-ans">{q.answer}</span>
              </span>
              <span className={`q-tag mono ${q.kind ? "kind" : ""}`}>{q.tag}</span>
            </Link>
          </li>
        ))}
      </ol>

      <section className="home-about">
        <p className="label">일한 곳</p>
        <ul className="worklist">
          {career.map((j) => (
            <li key={j.company + j.period}>
              <span className="w-period mono">{j.period}</span>
              <span className="w-company">
                {j.company}
                {j.aka && <em className="w-aka"> {j.aka}</em>}
              </span>
              <span className="w-title">{j.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-about">
        <p className="label">쓰는 도구</p>
        <dl className="skilllist">
          {skills.map((g) => (
            <div key={g.label}>
              <dt className="mono">{g.label}</dt>
              <dd>{g.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="home-about">
        <p className="label">그 밖에</p>
        <ul className="worklist">
          {education.map((e) => (
            <li key={e.school}>
              <span className="w-period mono">{e.period}</span>
              <span className="w-company">{e.school}</span>
              <span className="w-title">{e.degree}</span>
            </li>
          ))}
          {extras.map((x) => (
            <li key={x.label}>
              <span className="w-period mono">{x.label}</span>
              <span className="w-company">{x.value}</span>
              <span className="w-title">{x.note ?? ""}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="home-foot">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span className="mono">{profile.location}</span>
      </footer>
    </main>
  );
}
