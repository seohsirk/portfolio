// 포트폴리오 첫 화면 — 히어로와 현재 만들고 있는 제품을 소개한다
const PRODUCTS = [
  {
    name: "Fitsel",
    href: "https://fitsel.im",
    year: "2026",
    desc: "60만 기업의 뉴스에서 영업 신호를 찾고, 그 기업에 맞는 제안서를 만드는 B2B 세일즈 인텔리전스",
  },
  {
    name: "Wordly AI",
    year: "2025",
    desc: "검색·글 생성·이미지 제작을 하나로 묶은 LangGraph 기반 콘텐츠 제작 Agent",
  },
  {
    name: "Storify",
    year: "2024",
    desc: "작성·구독·결제·이메일 캠페인을 연결한 뉴스레터 플랫폼",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          서한석
        </h1>
        <p className="mt-2 text-[var(--color-ink-soft)]">
          AI Technical Product Manager
        </p>
      </header>

      <section className="mt-12 space-y-5 text-[17px] leading-[1.75]">
        <p>
          2012년에 뇌졸중 환자를 위한 재활 학습 솔루션을 기획하는 일로
          시작했습니다. 지금은 영업 담당자를 위한 AI 제안서 생성 서비스를 혼자
          만들고 있습니다.
        </p>
        <p className="text-[var(--color-ink-soft)]">
          그 사이에 통신망에서 유해 콘텐츠를 차단하는 구조, 처방전 기반
          복약관리 앱, 간호사 채용 플랫폼을 만들었습니다. 분야는 달랐지만 일하는
          방식은 같았습니다. 사용자의 행동을 관찰해 구조로 바꿉니다. 거기에 맞는
          기술과 사업 조건을 붙인 뒤 출시해서 지표로 확인합니다.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-medium tracking-wide text-[var(--color-ink-soft)]">
          지금 만드는 것
        </h2>
        <ul className="mt-5 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {PRODUCTS.map((p) => (
            <li key={p.name} className="py-5">
              <div className="flex items-baseline gap-3">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[var(--color-accent)] underline-offset-4 hover:underline"
                  >
                    {p.name}
                  </a>
                ) : (
                  <span className="font-medium">{p.name}</span>
                )}
                <span className="text-sm text-[var(--color-ink-soft)]">
                  {p.year}
                </span>
              </div>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                {p.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 border-t border-[var(--color-line)] pt-8 text-[15px]">
        <p className="text-[var(--color-ink-soft)]">
          케이스 스터디는 준비 중입니다.
        </p>
        <p className="mt-4">
          <a
            href="mailto:seohsirk@gmail.com"
            className="text-[var(--color-accent)] underline-offset-4 hover:underline"
          >
            seohsirk@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}
