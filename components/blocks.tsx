// 콘텐츠 블록을 화면으로 옮기는 층 — 디자인 교체는 이 파일만 바꾸면 된다
import type { Block, Fact, NoteBlock, Option } from "@/content/types";

export function Options({ items }: { items: Option[] }) {
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

export function Facts({ items }: { items: Fact[] }) {
  return (
    <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
      {items.map((f) => (
        <div key={f.label}>
          <dt className="text-[13px] text-[var(--color-ink-soft)]">{f.label}</dt>
          <dd className="mt-0.5 text-[17px] font-medium tabular-nums">
            {f.value}
          </dd>
          {f.note && (
            <p className="mt-0.5 text-[12px] text-[var(--color-ink-soft)]">
              {f.note}
            </p>
          )}
        </div>
      ))}
    </dl>
  );
}

export function CaseBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case "text":
      return (
        <>
          {block.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </>
      );
    case "options":
      return (
        <>
          {block.intro && <p>{block.intro}</p>}
          <Options items={block.items} />
        </>
      );
    case "facts":
      return (
        <>
          {block.intro && <p>{block.intro}</p>}
          <Facts items={block.items} />
        </>
      );
    case "note":
      return (
        <p className="border-l-2 border-[var(--color-line)] pl-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
          {block.body}
        </p>
      );
  }
}

export function NoteBlockView({ block }: { block: NoteBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="mt-4 text-[16px] leading-[1.8]">{block.body}</p>;
    case "h":
      return (
        <h2 className="mt-12 text-xl font-semibold tracking-tight">
          {block.body}
        </h2>
      );
    case "quote":
      return (
        <figure className="mt-5 rounded-xl border border-[var(--color-line)] p-4">
          <blockquote className="overflow-x-auto font-mono text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
            {block.body}
          </blockquote>
          {block.source && (
            <figcaption className="mt-2 text-[12px] text-[var(--color-ink-soft)]">
              {block.source}
            </figcaption>
          )}
        </figure>
      );
    case "stats":
      return <Facts items={block.items} />;
    case "lesson":
      return (
        <ol className="mt-5 space-y-4">
          {block.items.map((l, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-[13px] tabular-nums text-[var(--color-ink-soft)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[16px] leading-[1.8]">{l}</p>
            </li>
          ))}
        </ol>
      );
  }
}
