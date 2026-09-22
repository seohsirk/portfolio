// 콘텐츠 블록을 화면으로 옮기는 층 — 디자인 교체는 이 파일만 바꾸면 된다
import type { Block, Fact, NoteBlock, Option } from "@/content/types";

export function Options({ items }: { items: Option[] }) {
  return (
    <div className="rail">
      {items.map((o) => (
        <div
          key={o.name}
          className={`branch ${o.chosen ? "chosen" : "rejected"}`}
        >
          <p className="b-name">{o.name}</p>
          <p className="b-body">{o.desc}</p>
          <p className="b-verdict">{o.verdict}</p>
        </div>
      ))}
    </div>
  );
}

export function Facts({ items }: { items: Fact[] }) {
  return (
    <dl className="facts">
      {items.map((f) => (
        <div key={f.label}>
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
          {f.note && <p className="f-note">{f.note}</p>}
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
    case "list":
      return (
        <>
          {block.intro && <p>{block.intro}</p>}
          <ul className="spec">
            {block.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
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
        <p className="aside-note">{block.body}</p>
      );
  }
}

export function NoteBlockView({ block }: { block: NoteBlock }) {
  switch (block.kind) {
    case "p":
      return <p>{block.body}</p>;
    case "h":
      return (
        <h2 className="doc-h2">{block.body}</h2>
      );
    case "quote":
      return (
        <figure className="quote">
          <blockquote className="mono">{block.body}</blockquote>
          {block.source && <figcaption className="mono">{block.source}</figcaption>}
        </figure>
      );
    case "stats":
      return <Facts items={block.items} />;
    case "lesson":
      return (
        <ol className="lessons">
          {block.items.map((l, i) => (
            <li key={i}>
              <span className="l-num mono">{String(i + 1).padStart(2, "0")}</span>
              <p>{l}</p>
            </li>
          ))}
        </ol>
      );
  }
}
