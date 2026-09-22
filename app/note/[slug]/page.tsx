// 되돌린 결정 — 케이스와 같은 꼴로 질문부터 연다
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/content/notes";
import { NoteBlockView } from "@/components/blocks";
import GraphProbe from "@/components/GraphProbe";
import { DocFoot } from "@/app/case/[slug]/page";

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = notes.find((x) => x.slug === slug);
  return {
    title: n ? `${n.question} · 서한석` : "서한석",
    robots: { index: false, follow: false },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = notes.find((x) => x.slug === slug);
  if (!n) notFound();

  return (
    <main className="doc">
      <Link href="/" className="back mono">
        ← 다시 물었다
      </Link>

      <header className="doc-head">
        <p className="label">되돌린 결정 · {n.period}</p>
        <h1 className="doc-q">{n.question}</h1>
        <p className="doc-a">{n.answer}</p>
        <p className="doc-meta mono">{n.tags.join(" · ")}</p>
      </header>

      <article className="doc-body doc-sec">
        {n.body.map((b, i) => (
          <div key={i}>
            <NoteBlockView block={b} />
            {/* 「48시간에 4건」을 글로 주장하는 대신 눌러 보게 한다 */}
            {b.kind === "h" && b.body.includes("실제 쿼리를 세어봤다") && (
              <GraphProbe />
            )}
          </div>
        ))}
      </article>

      <DocFoot />
    </main>
  );
}
