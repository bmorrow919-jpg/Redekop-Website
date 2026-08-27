/* global React */

const RESEARCH_UPDATES = [
  { t: "HWSC Mill Efficacy with different Crop Production Systems", h: "assets/research/pdfs/01-hwsc-mill-efficacy-crop-systems.pdf" },
  { t: "Weed Seed Fate through a Combine Harvester with a HWSC mill", h: "assets/research/pdfs/02-weed-seed-fate-combine-hwsc.pdf" },
  { t: "Chaff Flow Throughput Effects on a HWSC mill during harvest", h: "assets/research/pdfs/03-chaff-flow-throughput.pdf" },
  { t: "Chaff Moisture Effects on the efficacy of a HWSC mill during harvest", h: "assets/research/pdfs/04-chaff-moisture-effects.pdf" },
  { t: "Weed Population Density Changes Achieved in Fields managed by HWSC mills", h: "assets/research/pdfs/05-weed-population-density.pdf" },
  { t: "The SCU Works but does it Pay?", h: "assets/research/pdfs/06-scu-works-but-does-it-pay.pdf" },
  { t: "Potential Resistance to HWSC", h: "assets/research/pdfs/07-potential-resistance-to-hwsc.pdf" },
  { t: "Effect of Seed Size on Mill Efficacy rates", h: "assets/research/pdfs/08-effect-of-seed-size.pdf" },
  { t: "Mill Efficacy of Australian Annual Ryegrass Vs. North American Annual Ryegrass", h: "assets/research/pdfs/09-australian-vs-na-ryegrass.pdf" },
];

const ARTICLES = [
  { t: "Kondinin, Weed Seed Warriors 2020 (AUS)", h: "assets/research/pdfs/article-01-kondinin-weed-seed-warriors-2020.pdf" },
  { t: "BOFIN, UK 2-Year Study (U.K.)", h: "https://www.youtube.com/watch?v=DNsjqEgas68&t=728s" },
  { t: "John Deere Testing, X-Series", h: "https://www.deere.com.au/en/news/all-news/redekops-new-seed-control-unit/" },
  { t: "Seed Impact Mill Kill Factsheet", h: "assets/research/pdfs/article-04-virginia-tech-seed-impact-mill-factsheet.pdf" },
  { t: "HWSC in the Pacific Northwest, Farmers Lead the Way", h: "https://growiwm.org/hwsc-in-the-pacific-northwest-farmers-lead-the-way-in-this-series/" },
  { t: "SCU Kills Waterhemp", h: "https://phys.org/news/2025-01-seed-impact-mills-clobber-waterhemp.html" },
];

const PAPERS = [
  { t: "Evaluating Weed Seed Kill Efficacy and Horsepower Draw in Soybean", m: "Virginia Tech · 2025", h: "assets/research/pdfs/paper-01-russell-soybean-2025.pdf" },
  { t: "Evaluating Weed Seed Kill Efficacy and Horsepower Draw in Wheat", m: "Virginia Tech · 2025", h: "assets/research/pdfs/paper-02-russell-wheat-2025.pdf" },
  { t: "Wild radish populations in Western Australia changes to evade HWSC", m: "Ashworth et al · 2024", h: "assets/research/pdfs/paper-03-ashworth-wild-radish-2024.pdf" },
  { t: "SCU Limits waterhemp viability in IA", m: "Meadows et al · 2024", h: "assets/research/pdfs/paper-04-iowa-soybean-waterhemp.pdf" },
  { t: "Testing the Redekop SCU", m: "Virginia Tech / GROW · 2023", h: "https://growiwm.org/a-weed-seed-killing-machine-testing-the-redekop-seed-control-unit/" },
  { t: "Seed devitalization test on the Redekop SCU", m: "PAMI · 2022", h: "https://pami.ca/seed-control-unit-devitalization-test/" },
  { t: "SAGIT", m: "Trengrove · 2021", h: "assets/research/pdfs/paper-07-sagit-trengrove-2021.pdf" },
  { t: "Independent Testing", m: "Ag Foods Canada · 2020", h: "assets/research/pdfs/paper-08-ag-foods-cage-mill-2020.pdf" },
  { t: "Simulation of HWSC shows mill kill rates greater than 80% gain control of waterhemp seed banks in 2-3 years", m: "Shergill et al · 2020", h: "assets/research/pdfs/paper-09-shergill-outlook-2020.pdf" },
  { t: "iHSD mill efficacy testing", m: "Walsh et al · 2017", h: "assets/research/pdfs/paper-10-walsh-ihsd-2017.pdf" },
  { t: "Reduction in ryegrass plant numbers when using HWSC", m: "Newman · 2013", h: "assets/research/pdfs/paper-11-newman-ryegrass-2013.pdf" },
];

/* ---- 1. HERO ----------------------------------------------------------- */
function ResearchHero() {
  return (
    <section className="research-hero" data-screen-label="01 Hero">
      <div className="wrap">
        <div className="breadcrumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <a href="index.html#products">Products</a>
          <span className="sep">/</span>
          <span>Harvest Weed Seed Control</span>
          <span className="sep">/</span>
          <span className="here">SCU Testing &amp; Research</span>
        </div>

        <div className="eyebrow">Independently tested · Field-proven</div>

        <h1>
          SCU Testing,<br/>
          Research, and <span className="y">Articles.</span>
        </h1>

        <p className="sub">
          The Redekop Seed Control Unit has been studied by farmers, universities, and independent third-party organizations on three continents. Every report below documents kill rates, throughput, and field performance in real harvest conditions.
        </p>

        <div className="stats">
          <div className="stat">
            <div className="k">{PAPERS.length}</div>
            <div className="lbl">Independent research papers</div>
          </div>
          <div className="stat">
            <div className="k">{RESEARCH_UPDATES.length + ARTICLES.length}</div>
            <div className="lbl">Internal updates &amp; articles</div>
          </div>
          <div className="stat">
            <div className="k">98<span style={{ fontSize: 26, color: "var(--ink-400)", marginLeft: 2 }}>%</span></div>
            <div className="lbl">Documented kill rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 2. UPDATES + ARTICLES (2 col) ------------------------------------ */
function ResearchTwoCol() {
  return (
    <section className="research-two" data-screen-label="02 Updates + Articles">
      <div className="wrap">
        <div className="grid">
          {/* RESEARCH UPDATES */}
          <div className="research-col">
            <div className="col-hero">
              <span className="tag">Internal Testing</span>
              <img
                src="assets/research/tarp-test.jpg"
                alt="Combine with tarp collection setup for SCU testing"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span className="eyebrow" style={{ marginTop: 28, display: "inline-block" }}>01 · From the Redekop team</span>
            <h2>Research Updates</h2>
            <p className="intro">
              The following information has been summarized by Redekop using both internal testing and external testing by third parties.
            </p>

            <ol className="list" style={{ counterReset: "ru" }}>
              {RESEARCH_UPDATES.map((u, i) => (
                <li key={i}>
                  <a
                    className="row"
                    href={u.h || "#"}
                    target={u.h ? "_blank" : undefined}
                    rel={u.h ? "noopener noreferrer" : undefined}
                    onClick={(e) => { if (!u.h) e.preventDefault(); }}
                  >
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="title">{u.t}</span>
                    <span className="arrow" aria-hidden="true"></span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* ARTICLES */}
          <div className="research-col">
            <div className="col-hero">
              <span className="tag">Press &amp; Articles</span>
              <img
                src="assets/research/trailer-test.jpg"
                alt="Tractor with SCU trailer testing rig"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span className="eyebrow" style={{ marginTop: 28, display: "inline-block" }}>02 · From the field, the press, and our partners</span>
            <h2>Articles</h2>
            <p className="intro">
              Coverage and case studies from farming publications, OEM partners, and growers who have run the SCU in their own fields.
            </p>

            <ol className="list">
              {ARTICLES.map((a, i) => (
                <li key={i}>
                  <a
                    className="row"
                    href={a.h || "#"}
                    target={a.h ? "_blank" : undefined}
                    rel={a.h ? "noopener noreferrer" : undefined}
                    onClick={(e) => { if (!a.h) e.preventDefault(); }}
                  >
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="title">{a.t}</span>
                    <span className="arrow" aria-hidden="true"></span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 3. RESEARCH PAPERS (2-col grid, full width) ---------------------- */
function ResearchPapers() {
  return (
    <section className="research-papers" data-screen-label="03 Papers">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx on-dark">03 · Independent studies</span>
            <h2>
              Research<br/>
              <span className="y">Papers.</span>
            </h2>
          </div>
          <p>
            The following studies have been carried out by third-party organizations on the Seed Control Unit. Each report documents kill rates and mill efficiency in real harvest conditions.
          </p>
        </div>

        <div className="papers">
          {PAPERS.map((p, i) => (
            <a
              className="paper"
              href={p.h || "#"}
              target={p.h ? "_blank" : undefined}
              rel={p.h ? "noopener noreferrer" : undefined}
              key={i}
              onClick={(e) => { if (!p.h) e.preventDefault(); }}
            >
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="title">{p.t}</span>
              <span className="meta">{p.m}</span>
              <span className="arr" aria-hidden="true"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ResearchHero = ResearchHero;
window.ResearchTwoCol = ResearchTwoCol;
window.ResearchPapers = ResearchPapers;
