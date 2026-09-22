// 디자인 시안 v2 — 스케일을 벌리고 장면을 나눈 판본
import Link from "next/link";

export const metadata = {
  title: "디자인 시안 · 서한석",
  robots: { index: false, follow: false },
};

const OPTIONS = [
  {
    name: "전체 기업에 AI 검색을 돌린다",
    body: "가장 단순하지만 60만 건마다 모델을 호출해야 합니다. 운영 가능한 원가가 나오지 않습니다.",
    verdict: "기각 — 원가",
  },
  {
    name: "사용자가 관심 기업을 먼저 등록한다",
    body: "호출량은 줄지만, 어느 기업을 볼지 고르는 일 자체가 원래 문제였습니다. 일을 사용자에게 돌려주는 셈입니다.",
    verdict: "기각 — 문제 회피",
  },
  {
    name: "뉴스를 먼저 수집하고 거기 등장한 기업만 분석한다",
    body: "뉴스에 나왔다는 것이 이미 하나의 신호입니다. AI 호출을 그 기업분으로 한정하면서도 사용자는 아무것도 등록하지 않습니다.",
    verdict: "채택",
    chosen: true,
  },
];

const FACTS: [string, string][] = [
  ["개발 기간", "10개월"],
  ["기업 데이터", "600,000"],
  ["마이그레이션", "1,270"],
  ["테스트", "1,071"],
  ["내 커밋", "94%"],
];

export default function Preview() {
  return (
    <main className="pv">
      <nav className="pv-nav">
        <Link href="/">← 서한석</Link>
        <span className="mono">디자인 시안 v2</span>
      </nav>

      {/* 장면 1 — 히어로. 첫 문장이 주인공 */}
      <section className="scene">
        <div className="scene-inner">
          <p className="label">서한석 · AI Technical Product Manager</p>
          <h1 className="hero-lede">
            2012년에 뇌졸중 환자를 위한 재활 학습 솔루션을 기획하는 일로
            시작했습니다.
          </h1>
          <p className="hero-sub">
            지금은 영업 담당자를 위한 AI 제안서 생성 서비스를 직접 만들고
            있습니다. 그 사이에 통신망에서 유해 콘텐츠를 차단하는 구조, 처방전
            기반 복약관리 앱, 간호사 채용 플랫폼을 만들었습니다.
          </p>
          <div className="hero-meta mono">
            <span>2012 — 2026</span>
            <span>기획 · 디자인 · DB · 서버 · 프론트엔드</span>
          </div>
        </div>
      </section>

      {/* 장면 2 — 케이스 도입 */}
      <section className="scene">
        <div className="scene-inner">
          <p className="label">Case 01 · Fitsel · 2026</p>
          <h2 className="case-title">
            60만 기업의 뉴스에서 영업 신호를 찾는 비용 문제
          </h2>
          <p className="case-lede">
            영업하면서 직접 겪은 두 가지 일을 제품으로 만들었습니다. 지금 살 만한
            기업을 찾는 일과, 그 기업에 맞는 제안서를 쓰는 일입니다.
          </p>
        </div>
      </section>

      {/* 장면 3 — 결정 레일 */}
      <section className="scene">
        <div className="scene-inner">
          <p className="label">결정</p>
          <div className="prose">
            <p>
              기업 데이터베이스는{" "}
              <span className="mono">600,000</span> 개 규모입니다. 여기에{" "}
              <span className="mono">AI</span> 를 어떻게 붙일지가 제품의 원가를
              결정합니다. 세 가지를 놓고 봤습니다.
            </p>
          </div>

          <div className="rail">
            {OPTIONS.map((o, i) => (
              <div
                key={o.name}
                className={`branch ${o.chosen ? "chosen" : "rejected"}`}
              >
                <p className="rail-q mono">{String.fromCharCode(65 + i)}</p>
                <p className="b-name">{o.name}</p>
                <p className="b-body">{o.body}</p>
                <p className="b-verdict">{o.verdict}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 장면 4 — 만든 것 + 데이터 */}
      <section className="scene">
        <div className="scene-inner">
          <p className="label">만든 것</p>
          <div className="prose">
            <p>
              뉴스 수집 → 기업 식별 → 선별된 기사 분석 → 영업 신호의 4단계로
              파이프라인을 세웠습니다. 기업을 정식 명칭으로만 찾으면 상당수가
              누락되기 때문에, 기업별 별칭과 그 별칭의 신뢰도를 따로 관리합니다.
            </p>
          </div>
          <dl className="facts">
            {FACTS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 장면 5 — 돌아보면 */}
      <section className="scene">
        <div className="scene-inner">
          <p className="label">돌아보면</p>
          <h2 className="case-title">측정을 먼저 의심해야 했습니다</h2>
          <div className="reflect">
            <p>
              제안서 품질을 올리는 일에 가장 많은 시간을 썼습니다. 그런데 품질을
              숫자로 재려던 시도가 세 번 뒤집혔습니다. 생성 기록{" "}
              <span className="mono">86</span> 건을 근거로 결함 빈도를
              계산했는데, 열어보니 타겟 기업은 <span className="mono">16</span>{" "}
              개뿐이었고 한 회사가 <span className="mono">43%</span> 를
              차지했습니다.
            </p>
          </div>
        </div>
      </section>

      <footer className="pv-foot mono">nnm.im · 디자인 시안 v2</footer>
    </main>
  );
}
