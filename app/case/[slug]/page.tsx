// 케이스 스터디 상세 — content/cases.ts 를 그대로 옮긴다
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
    title: c ? `${c.name} · 서한석` : "서한석",
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
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="border-b border-[var(--color-line)] pb-10">
        <Link
          href="/"
          className="text-[13px] text-[var(--color-ink-soft)] underline-offset-4 hover:underline"
        >
          ← 서한석
        </Link>
        <p className="mt-5 text-[15px] font-medium text-[var(--color-accent)]">
          {c.name}
        </p>
        <h1 className="mt-1.5 text-[28px] font-semibold leading-snug tracking-tight sm:text-[32px]">
          {c.headline}
        </h1>
        <p className="mt-3 text-[15px] text-[var(--color-ink-soft)]">
          {c.role} · {c.period}
        </p>
        <p className="mt-5 text-[17px] leading-[1.75]">{c.summary}</p>
        {c.live && (
          <a
            href={c.live.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-[15px] text-[var(--color-accent)] underline-offset-4 hover:underline"
          >
            {c.live.label} ↗
          </a>
        )}
      </header>

      {c.sections.map((s) => (
        <section key={s.label} className="mt-14">
          <p className="text-[13px] font-medium tracking-wide text-[var(--color-ink-soft)]">
            {s.label}
          </p>
          {s.title && (
            <h2 className="mt-2 text-xl font-semibold tracking-tight">
              {s.title}
            </h2>
          )}
          <div className="mt-4 space-y-4 text-[16px] leading-[1.75]">
            {s.blocks.map((b, i) => (
              <CaseBlock key={i} block={b} />
            ))}
          </div>
        </section>
      ))}

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
