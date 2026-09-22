// 디자인 시안 비교 — 세 변형을 실제 콘텐츠·실제 폰트로 나란히 본다
import Link from "next/link";

export const metadata = {
  title: "디자인 시안 · 서한석",
  robots: { index: false, follow: false },
};

const OPTIONS = [
  {
    name: "A. 전체 기업에 AI 검색을 돌린다",
    body: "가장 단순하지만 60만 건마다 모델을 호출해야 합니다. 운영 가능한 원가가 나오지 않습니다.",
    verdict: "기각 · 원가",
  },
  {
    name: "B. 사용자가 관심 기업을 먼저 등록한다",
    body: "호출량은 줄지만, 어느 기업을 볼지 고르는 일 자체가 원래 문제였습니다. 일을 사용자에게 돌려주는 셈입니다.",
    verdict: "기각 · 문제 회피",
  },
  {
    name: "C. 뉴스를 먼저 수집하고 거기 등장한 기업만 분석한다",
    body: "뉴스에 나왔다는 것이 이미 하나의 신호입니다. AI 호출을 그 기업분으로 한정하면서도 사용자는 아무것도 등록하지 않습니다.",
    verdict: "채택",
    chosen: true,
  },
];

const FACTS: [string, string][] = [
  ["개발 기간", "10개월"],
  ["기업 데이터", "600,000"],
  ["DB 마이그레이션", "1,270"],
  ["자동화 테스트", "1,071"],
];

export default function Preview() {
  return (
    <main className="pv">
      <nav className="pv-nav">
        <Link href="/">← 서한석</Link>
        <span className="mono">디자인 시안 3안 · 같은 콘텐츠, 다른 처리</span>
      </nav>

      <Variant
        id="A"
        title="A안 · 결정 레일 + 측주"
        note="제안 원안. 기각된 옵션이 본문에 남고, 측주에는 메타만. 레일이 분기한다."
      />
      <Variant
        id="B"
        title="B안 · 레일만"
        note="측주를 없앤 단순형. 본문 한 단. 모바일과 동일한 구조라 일관되다."
      />
      <Variant
        id="C"
        title="C안 · 기각을 측주로 밀어냄"
        note="본문은 채택안만 매끄럽게 흐르고, 죽은 갈래는 왼쪽 각주로. 훑는 사람을 방해하지 않는다."
      />

      <footer className="pv-foot mono">
        nnm.im · 디자인 시안 · Pretendard + JetBrains Mono
      </footer>
    </main>
  );
}

function Variant({
  id,
  title,
  note,
}: {
  id: string;
  title: string;
  note: string;
}) {
  return (
    <section className={`pv-variant v-${id}`}>
      <header className="pv-head">
        <h2>{title}</h2>
        <p>{note}</p>
      </header>

      <article className="doc">
        <div className="doc-margin mono">
          <span className="m-year">2026</span>
          <span className="m-role">기획 · 디자인 · 개발</span>
          {id === "C" && (
            <>
              <span className="m-fn">
                <b>A를 안 한 이유</b>
                60만 건마다 모델을 호출해야 한다. 운영 가능한 원가가 나오지 않는다.
              </span>
              <span className="m-fn">
                <b>B를 안 한 이유</b>
                고르는 일 자체가 원래 문제였다. 일을 사용자에게 돌려주는 셈이다.
              </span>
            </>
          )}
        </div>

        <div className="doc-body">
          <p className="eyebrow mono">Fitsel</p>
          <h3>60만 기업의 뉴스에서 영업 신호를 찾는 비용 문제</h3>

          <p>
            영업하면서 직접 겪은 두 가지 일을 제품으로 만들었습니다. 지금 살 만한
            기업을 찾는 일과, 그 기업에 맞는 제안서를 쓰는 일입니다.
          </p>
          <p>
            기업 데이터베이스는 <span className="mono">600,000</span> 개 규모입니다.
            여기에 <span className="mono">AI</span> 를 어떻게 붙일지가 제품의 원가를
            결정합니다.
          </p>

          {id === "C" ? (
            <div className="rail rail-solo">
              <div className="branch chosen">
                <p className="b-name">
                  뉴스를 먼저 수집하고 거기 등장한 기업만 분석한다
                </p>
                <p className="b-body">
                  뉴스에 나왔다는 것이 이미 하나의 신호입니다. AI 호출을 그
                  기업분으로 한정하면서도 사용자는 아무것도 등록하지 않습니다.
                  전수 호출 없이 영업 신호를 뽑는 파이프라인이 여기서 나왔습니다.
                </p>
              </div>
            </div>
          ) : (
            <div className="rail">
              {OPTIONS.map((o) => (
                <div
                  key={o.name}
                  className={`branch ${o.chosen ? "chosen" : "rejected"}`}
                >
                  <p className="b-name">{o.name}</p>
                  <p className="b-body">{o.body}</p>
                  <p className={`b-verdict mono ${o.chosen ? "is-chosen" : ""}`}>
                    ── {o.verdict}
                  </p>
                </div>
              ))}
            </div>
          )}

          <dl className="facts">
            {FACTS.map(([k, v]) => (
              <div key={k}>
                <dt className="mono">{k}</dt>
                <dd className="mono">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="reflect">
            <span className="mono">↰</span> 돌아보면 — 제안서 품질을 숫자로 재려던
            시도가 세 번 뒤집혔습니다.
          </p>
        </div>
      </article>
    </section>
  );
}
