// 케이스 상세 — 첫 화면과 같이 질문으로 연다
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "@/content/cases";
import { CaseBlock } from "@/components/blocks";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  return {
    title: c ? `${c.question} · 서한석` : "서한석",
    robots: { index: false, follow: false },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <main className="doc">
      <Link href="/" className="back mono">
        ← 물어야 했던 것들
      </Link>

      <header className="doc-head">
        <p className="label">
          {c.name} · {c.period}
        </p>
        <h1 className="doc-q">{c.question}</h1>
        <p className="doc-a">{c.answer}</p>
        <p className="doc-meta mono">
          {c.role}
          {c.live && (
            <>
              {" · "}
              <a href={c.live.href} target="_blank" rel="noreferrer">
                {c.live.label} ↗
              </a>
            </>
          )}
        </p>
      </header>

      {c.sections.map((s) => (
        <section key={s.label} className="doc-sec">
          <p className="label">{s.label}</p>
          {s.title && <h2 className="doc-h2">{s.title}</h2>}
          <div className="doc-body">
            {s.blocks.map((b, i) => (
              <CaseBlock key={i} block={b} />
            ))}
          </div>
        </section>
      ))}

      <DocFoot />
    </main>
  );
}

export function DocFoot() {
  return (
    <footer className="doc-foot">
      <Link href="/" className="mono">
        ← 물어야 했던 것들
      </Link>
      <a href="mailto:seohsirk@gmail.com">seohsirk@gmail.com</a>
    </footer>
  );
}
