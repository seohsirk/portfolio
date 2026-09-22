// 첫 화면 — 소개, 케이스, 기록, 경력을 한 장에 세운다
import Link from "next/link";
import { profile, skills } from "@/content/profile";
import { cases } from "@/content/cases";
import { notes } from "@/content/notes";
import { career, education, extras } from "@/content/career";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <header>
        <p className="label">
          {profile.name} · {profile.title}
        </p>
        <h1 className="hero-lede mt-6">
          {profile.lede.map((l, i) => (
            <span key={i} className="lede-line">
              {l}
            </span>
          ))}
        </h1>
      </header>

      <section className="mt-10 space-y-5 text-[17px] leading-[1.8]">
        {profile.intro.map((p, i) => (
          <p key={i} className={i > 0 ? "text-[var(--color-ink-soft)]" : ""}>
            {p}
          </p>
        ))}
      </section>

      <ul className="mt-8 space-y-2">
        {profile.standout.map((s) => (
          <li key={s} className="flex gap-2.5 text-[15px] leading-relaxed">
            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
            <span>{s}</span>
          </li>
        ))}
      </ul>

      {/* 케이스 */}
      <Block title="만든 것">
        <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {cases.map((c) => (
            <li key={c.slug}>
              <Link href={`/case/${c.slug}`} className="group block py-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-medium group-hover:text-[var(--color-accent)]">
                    {c.name}
                  </span>
                  <span className="text-sm text-[var(--color-ink-soft)]">
                    {c.period}
                  </span>
                </div>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                  {c.headline}
                </p>
                <p className="mt-2 text-[13px] text-[var(--color-ink-soft)]">
                  {c.tags.join(" · ")}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Block>

      {/* 기록 */}
      <Block title="되돌린 결정">
        <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {notes.map((n) => (
            <li key={n.slug}>
              <Link href={`/note/${n.slug}`} className="group block py-5">
                <p className="font-medium leading-snug group-hover:text-[var(--color-accent)]">
                  {n.title}
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                  {n.subtitle}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Block>

      {/* 경력 */}
      <Block title="경력">
        <ul className="space-y-8">
          {career.map((j) => (
            <li key={j.company + j.period}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-medium">{j.company}</span>
                {j.aka && (
                  <span className="text-[13px] text-[var(--color-ink-soft)]">
                    {j.aka}
                  </span>
                )}
                <span className="text-sm text-[var(--color-ink-soft)]">
                  {j.period}
                </span>
              </div>
              <p className="mt-0.5 text-[15px] text-[var(--color-ink-soft)]">
                {j.title}
                {j.location && ` · ${j.location}`}
              </p>
              {j.summary && (
                <p className="mt-2.5 text-[15px] leading-relaxed">{j.summary}</p>
              )}
              <ul className="mt-2.5 space-y-1.5">
                {j.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2.5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]"
                  >
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-line)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {j.caseSlug && (
                <Link
                  href={`/case/${j.caseSlug}`}
                  className="mt-2.5 inline-block text-[14px] text-[var(--color-accent)] underline-offset-4 hover:underline"
                >
                  케이스 보기 →
                </Link>
              )}
            </li>
          ))}
        </ul>
      </Block>

      {/* 기술 */}
      <Block title="기술">
        <dl className="space-y-5">
          {skills.map((g) => (
            <div key={g.label}>
              <dt className="text-[13px] text-[var(--color-ink-soft)]">
                {g.label}
              </dt>
              <dd className="mt-1 text-[15px] leading-relaxed">
                {g.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </Block>

      {/* 학력·기타 */}
      <Block title="학력">
        <ul className="space-y-2.5">
          {education.map((e) => (
            <li key={e.school} className="text-[15px]">
              <span className="font-medium">{e.school}</span>
              <span className="text-[var(--color-ink-soft)]">
                {" "}
                · {e.degree} · {e.period}
              </span>
            </li>
          ))}
        </ul>
        <dl className="mt-7 space-y-4">
          {extras.map((x) => (
            <div key={x.label}>
              <dt className="text-[13px] text-[var(--color-ink-soft)]">
                {x.label}
              </dt>
              <dd className="mt-0.5 text-[15px]">{x.value}</dd>
              {x.note && (
                <p className="mt-0.5 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
                  {x.note}
                </p>
              )}
            </div>
          ))}
        </dl>
      </Block>

      <footer className="mt-16 border-t border-[var(--color-line)] pt-8">
        <a
          href={`mailto:${profile.email}`}
          className="text-[17px] text-[var(--color-accent)] underline-offset-4 hover:underline"
        >
          {profile.email}
        </a>
        <p className="mt-2 text-[14px] text-[var(--color-ink-soft)]">
          {profile.location}
        </p>
      </footer>
    </main>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <h2 className="text-sm font-medium tracking-wide text-[var(--color-ink-soft)]">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
