// 기술 결정 기록 — content/notes.ts 를 그대로 옮긴다
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/content/notes";
import { NoteBlockView } from "@/components/blocks";

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
    title: n ? `${n.title} · 서한석` : "서한석",
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
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="border-b border-[var(--color-line)] pb-10">
        <Link
          href="/"
          className="text-[13px] text-[var(--color-ink-soft)] underline-offset-4 hover:underline"
        >
          ← 서한석
        </Link>
        <h1 className="mt-5 text-[28px] font-semibold leading-snug tracking-tight sm:text-[32px]">
          {n.title}
        </h1>
        <p className="mt-3 text-[17px] leading-[1.7] text-[var(--color-ink-soft)]">
          {n.subtitle}
        </p>
        <p className="mt-4 text-[13px] text-[var(--color-ink-soft)]">
          {n.period} · {n.tags.join(" · ")}
        </p>
      </header>

      <article>
        {n.body.map((b, i) => (
          <NoteBlockView key={i} block={b} />
        ))}
      </article>

      <footer className="mt-16 flex items-center justify-between border-t border-[var(--color-line)] pt-8 text-[15px]">
        <Link
          href="/"
          className="text-[var(--color-ink-soft)] underline-offset-4 hover:underline"
        >
          ← 서한석
        </Link>
        <a
          href="mailto:seohsirk@gmail.com"
          className="text-[var(--color-accent)] underline-offset-4 hover:underline"
        >
          seohsirk@gmail.com
        </a>
      </footer>
    </main>
  );
}
