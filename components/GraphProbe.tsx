"use client";
// 실제로 돌던 쿼리 셋을 눌러 보게 한다. 홉이 한 번도 2를 넘지 않는 것이 눈으로 끝난다
import { useState } from "react";

type Probe = { id: string; label: string; nodes: string[]; hops: number; real: boolean };

const NODES: { id: string; x: number; y: number; label: string }[] = [
  { id: "co", x: 50, y: 50, label: "Company" },
  { id: "ind", x: 16, y: 20, label: "Industry" },
  { id: "seg", x: 50, y: 12, label: "Segment" },
  { id: "pain", x: 85, y: 22, label: "PainPoint" },
  { id: "tech", x: 96, y: 38, label: "Technology" },
  { id: "inv", x: 80, y: 85, label: "Investor" },
  { id: "prod", x: 46, y: 88, label: "Product" },
  { id: "kw", x: 14, y: 82, label: "Keyword" },
  { id: "sol", x: 8, y: 52, label: "Solution" },
  { id: "rivalco", x: 92, y: 55, label: "경쟁사" },
  { id: "cust", x: 70, y: 70, label: "그 고객사" },
];

const EDGES: [string, string][] = [
  ["co", "ind"], ["co", "seg"], ["co", "pain"], ["co", "tech"],
  ["co", "inv"], ["co", "prod"], ["co", "kw"], ["pain", "sol"], ["sol", "co"],
  ["co", "rivalco"], ["rivalco", "cust"],
];

const PROBES: Probe[] = [
  { id: "match", label: "추천 후보 뽑기", nodes: ["co", "pain", "sol"], hops: 1, real: true },
  { id: "industry", label: "회사–산업 매칭", nodes: ["co", "ind", "seg"], hops: 1, real: true },
  { id: "rival", label: "유사 경쟁사", nodes: ["co", "tech"], hops: 1, real: true },
  // 그래프를 고른 이유였던 질의. 실제로는 거의 안 돌았다
  { id: "chain", label: "경쟁사의 고객사", nodes: ["co", "tech", "rivalco", "cust"], hops: 2, real: false },
];

export default function GraphProbe() {
  const [active, setActive] = useState<Probe | null>(null);
  const on = (id: string) => !active || active.nodes.includes(id);

  return (
    <figure className="probe">
      <div className="probe-btns">
        {PROBES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(active?.id === p.id ? null : p)}
            className={`probe-btn mono ${active?.id === p.id ? "is-on" : ""} ${p.real ? "" : "is-rare"}`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 100 100" className="probe-svg" aria-hidden>
        {EDGES.map(([a, b]) => {
          const A = NODES.find((n) => n.id === a)!;
          const B = NODES.find((n) => n.id === b)!;
          const lit = on(a) && on(b);
          return (
            <line
              key={`${a}-${b}`}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              className={lit ? "e-on" : "e-off"}
            />
          );
        })}
        {NODES.map((n) => (
          <g key={n.id} className={on(n.id) ? "n-on" : "n-off"}>
            <circle cx={n.x} cy={n.y} r="2.6" />
            <text x={n.x} y={n.y - 4.6} textAnchor="middle">
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      <figcaption className="probe-cap mono">
        {active
          ? `${active.label} — 최대 홉 ${active.hops} · ${
              active.real ? "실제로 돌던 질의" : "그래프를 고른 이유였지만 48시간에 4건"
            }`
          : "앞의 셋은 매일 돌던 질의다. 마지막 하나가 그래프를 고른 이유였다"}
      </figcaption>
    </figure>
  );
}
