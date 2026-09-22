// 케이스 스터디 페이지에서 공통으로 쓰는 표시 부품
import Link from "next/link";

export function CaseHeader({
  title,
  role,
  period,
  summary,
  live,
}: {
  title: string;
  role: string;
  period: string;
  summary: string;
  live?: { href: string; label: string };
}) {
  return (
    <header className="border-b border-[var(--color-line)] pb-10">
      <Link
        href="/"
        className="text-[13px] text-[var(--color-ink-soft)] underline-offset-4 hover:underline"
      >
        ← 서한석
      </Link>
      <h1 className="mt-5 text-[28px] font-semibold leading-snug tracking-tight sm:text-[32px]">
        {title}
      </h1>
      <p className="mt-3 text-[15px] text-[var(--color-ink-soft)]">
        {role} · {period}
      </p>
      <p className="mt-5 text-[17px] leading-[1.75]">{summary}</p>
      {live && (
        <a
          href={live.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block text-[15px] text-[var(--color-accent)] underline-offset-4 hover:underline"
        >
          {live.label} ↗
        </a>
      )}
    </header>
  );
}

export function Section({
  label,
  title,
  children,
}: {
  label: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <p className="text-[13px] font-medium tracking-wide text-[var(--color-ink-soft)]">
        {label}
      </p>
      {title && (
        <h2 className="mt-2 text-xl font-semibold tracking-tight">{title}</h2>
      )}
      <div className="mt-4 space-y-4 text-[16px] leading-[1.75]">{children}</div>
    </section>
  );
}

export function Options({
  items,
}: {
  items: { name: string; desc: string; verdict: string; chosen?: boolean }[];
}) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((o) => (
        <li
          key={o.name}
          className={`rounded-xl border p-4 ${
            o.chosen
              ? "border-[var(--color-accent)] bg-[color-mix(in_oklch,var(--color-accent)_7%,transparent)]"
              : "border-[var(--color-line)]"
          }`}
        >
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[15px] font-medium">{o.name}</span>
            <span
              className={`shrink-0 text-[13px] ${
                o.chosen
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-ink-soft)]"
              }`}
            >
              {o.verdict}
            </span>
          </div>
          <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
            {o.desc}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function Facts({ items }: { items: [string, string][] }) {
  return (
    <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
      {items.map(([k, v]) => (
        <div key={k}>
          <dt className="text-[13px] text-[var(--color-ink-soft)]">{k}</dt>
          <dd className="mt-0.5 text-[17px] font-medium tabular-nums">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 border-l-2 border-[var(--color-line)] pl-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
      {children}
    </p>
  );
}
