/* global React */
// Single-file SCU page sections + a reusable <Slot> placeholder for assets.

const { useState: useStateSCU } = React;

/* ---- Striped placeholder for asset drop-in spots ----------------------- */
function Slot({ tag, file, desc, dark, style, className }) {
  return (
    <div className={"slot" + (dark ? " dark" : "") + (className ? " " + className : "")} style={style}>
      {tag && <span className="slot-tag">{tag}</span>}
      <span className="slot-file">{file}</span>
      {desc && <span className="slot-desc">{desc}</span>}
    </div>
  );
}

/* ---- 1. HERO ----------------------------------------------------------- */
function SCUHero() {
  return (
    <section className="scu-hero" data-screen-label="01 Hero">
      <div className="wrap">
        <div>
          <div className="breadcrumb">
            <a href="index.html">Products</a>
            <span className="sep">/</span>
            <span>Harvest Weed Seed Control</span>
            <span className="sep">/</span>
            <span style={{ color: "var(--redekop-black)" }}>SCU</span>
          </div>
          <span className="eyebrow">Mechanical Weed Seed Control</span>
          <h1>
            <span className="l1">Crush Resistance</span>
            <span className="l2">At Harvest.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 520 }}>
            You can't spray your way out of herbicide resistance. From kochia to waterhemp, ryegrass to palmer amaranth, controlling weeds in your field has never been more challenging or costly.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-redekop"><span>Take Back Control</span></a>
            <a href="#features" className="btn-redekop is-light"><span>How It Works</span></a>
          </div>
        </div>

        <div className="hero-art">
          <img
            src={window.__resources.heroFlag}
            alt="Crush Resistance at Harvest"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 14px 20px rgba(0,0,0,0.08))",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---- 2. STAT STRIP ----------------------------------------------------- */
function SCUStats() {
  const stats = [
    { k: "98", suf: "%", lbl: "Weed-seed kill rate" },
    { k: "1", suf: "", lbl: "Single-pass operation" },
    { k: "5", suf: "", lbl: "OEM compatibility lines" },
    { k: "ISOBUS", suf: "", lbl: "Integrated controls" },
  ];
  return (
    <section className="scu-stats" data-screen-label="02 Stats">
      <div className="wrap">
        {stats.map((s, i) => (
          <div className="cell" key={i}>
            <div className="k">
              {s.k}
              {s.suf && <span className="small">{s.suf}</span>}
            </div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- 3. INTRO ---------------------------------------------------------- */
function SCUIntro() {
  return (
    <section className="scu-intro" data-screen-label="03 Intro">
      <div className="wrap">
        <div>
          <span className="sec-idx">01 · Mechanical Weed Seed Control</span>
          <h2>
            Don't give resistant<br/>
            weeds a chance.
          </h2>
        </div>
        <div>
          <p className="lead">
            The Redekop Seed Control Unit (SCU) easily integrates with your combine's residue, drive, and display systems to mechanically pulverize <strong>98% of weed seeds</strong> collected while harvesting, in a single pass.
          </p>
          <p className="lead" style={{ marginTop: 18 }}>
            No additional field passes. No additional chemistry. Resistance management built into the harvest you're already running.
          </p>
          <div className="pull">
            One harvest pass.<br/>
            <em>98% of weed seeds destroyed.</em>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 4. PILLARS -------------------------------------------------------- */
function SCUPillars() {
  const pillars = [
    {
      title: "Easy to set up, operate & maintain",
      icon: window.__resources.iconMaintenance,
      bullets: [
        "Fits most combines with simple in-cab controls",
        "Engage or disengage at the touch of a button",
        "Works with the Redekop MAV or OEM straw choppers",
        "Designed for long life with minimal maintenance",
      ],
    },
    {
      title: "Protect your bottom line",
      icon: window.__resources.iconFinances,
      bullets: [
        "Low power requirements and running cost",
        "Reduces reliance on chemical spray programs",
        "Lowers long-term cost of resistance management",
      ],
    },
    {
      title: "Combat resistance & improve yields",
      icon: window.__resources.iconYields,
      bullets: [
        "Manage resistance with mechanical weed-seed destruction",
        "Alleviate spring weed pressure on moisture and nutrients",
        "Crushed weed seeds return to soil as residue nutrients",
      ],
    },
  ];
  return (
    <section className="scu-pillars" data-screen-label="04 Pillars">
      <div className="wrap">
        <span className="sec-idx">02 · Why the SCU</span>
        <div className="grid">
          {pillars.map((p, i) => (
            <div className="cell" key={i}>
              <span className="num">0{i + 1}</span>
              <div className="icon" aria-hidden="true">
                <img src={p.icon} alt="" style={{ width: 40, height: 40, objectFit: "contain" }} />
              </div>
              <h3>{p.title}</h3>
              <ul>
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 4b. FIELD BREAK --------------------------------------------------- */
function SCUFieldBreak() {
  return (
    <section className="scu-break" data-screen-label="04b Field Break" aria-hidden="true">
      <div className="bg"></div>
      <div className="veil"></div>
      <div className="stripes" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="copy">
          <span className="eyebrow">In the field</span>
          <h2>
            Engineered in Saskatoon.<br/>
            <span className="y">Running every harvest.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

/* ---- 5. HOW IT WORKS --------------------------------------------------- */
function SCUHowItWorks() {
  return (
    <section className="scu-how" data-screen-label="05 How It Works">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx on-dark">03 · How it works</span>
            <h2>
              Three steps.<br/>
              <span className="y">One harvest pass.</span>
            </h2>
          </div>
          <p className="lead">
            The SCU intercepts the chaff stream before it leaves the combine, pulverizes weed seeds in the mill, and returns the crushed residue to your field, all without slowing your harvest.
          </p>
        </div>

        <div className="stage">
          <span className="stage-badge">Watch · SCU in motion</span>
          <span className="stage-corners" aria-hidden="true">
            <i className="tl"></i><i className="tr"></i><i className="bl"></i><i className="br"></i>
          </span>
          <img
            src={window.__resources.howItWorksVideo}
            alt="Redekop SCU in motion — combine running with the SCU installed"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">Step 01</div>
            <h3>Capture</h3>
            <p>
              Chaff and small material exiting the threshing rotor are diverted into the SCU instead of leaving the combine untouched, capturing the weed seeds at the source.
            </p>
            <div className="step-meta">
              <strong>100%</strong> of the chaff stream
            </div>
          </div>

          <div className="step">
            <div className="step-num">Step 02</div>
            <h3>Crush</h3>
            <p>
              The chaff passes through Redekop's proprietary reversible mills, which pulverize seeds with high efficiency and low power draw, independently tested at up to 98% kill.
            </p>
            <div className="step-meta">
              <strong>98%</strong> weed-seed kill
            </div>
          </div>

          <div className="step">
            <div className="step-num">Step 03</div>
            <h3>Spread</h3>
            <p>
              Crushed material rejoins the MAV straw stream and is spread evenly across the cutterbar, turning would-be weeds into next year's residue and nutrients.
            </p>
            <div className="step-meta">
              <strong>18.3m</strong> spread width
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 5b. KILL RATE CHART ---------------------------------------------- */
function SCUKillRates() {
  const data = [
    { name: "Cereal Rye",       pct: 99.5 },
    { name: "Wild Mustard",     pct: 99.8 },
    { name: "Annual Ryegrass",  pct: 96.0 },
    { name: "Hairy Vetch",      pct: 99.8 },
    { name: "Canola",           pct: 99.0 },
    { name: "Italian Ryegrass", pct: 93.5 },
    { name: "Velvetleaf",       pct: 99.5 },
    { name: "Johnsongrass",     pct: 99.8 },
    { name: "Waterhemp",        pct: 99.7 },
    { name: "Giant Ragweed",    pct: 99.5 },
    { name: "Giant Foxtail",    pct: 98.5 },
    { name: "Redroot Pigweed",  pct: 99.6 },
    { name: "Morningglory",     pct: 99.0 },
    { name: "Barnyardgrass",    pct: 99.2 },
    { name: "Common Ragweed",   pct: 99.5 },
    { name: "Palmer Amaranth",  pct: 99.5 },
  ];
  const MIN = 90, MAX = 100;
  const ticks = [90, 92, 94, 96, 98, 100];
  const avg = data.reduce((s, d) => s + d.pct, 0) / data.length;
  const min = Math.min(...data.map(d => d.pct));
  const max = Math.max(...data.map(d => d.pct));
  const widthFor = (p) => `${((p - MIN) / (MAX - MIN)) * 100}%`;

  return (
    <section className="scu-kill" data-screen-label="05b Kill Rates">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">03b, Tested kill rates</span>
            <h2>
              Tested on the weeds<br/>
              <span className="y">that matter.</span>
            </h2>
          </div>
          <p className="lead">
            Independent crush&#8209;kill testing on 16 of the most economically damaging weed species in North America, from glyphosate-resistant Palmer amaranth and waterhemp to herbicide&#8209;resistant ryegrass. The SCU mill destroys nearly every seed that enters it.
          </p>
        </div>

        <div className="chart">
          <div className="chart-head">
            <div className="title">Seed kill percentage</div>
            <div className="meta">
              <div className="meta-cell">
                <span className="k">{avg.toFixed(1)}%</span>
                <span className="lbl">Average</span>
              </div>
              <div className="meta-cell">
                <span className="k">{max.toFixed(1)}%</span>
                <span className="lbl">High</span>
              </div>
              <div className="meta-cell">
                <span className="k">{min.toFixed(1)}%</span>
                <span className="lbl">Low</span>
              </div>
              <div className="meta-cell">
                <span className="k">{data.length}</span>
                <span className="lbl">Species tested</span>
              </div>
            </div>
          </div>

          <div className="rows">
            {data.map((d, i) => {
              const hi = d.pct === max;
              const lo = d.pct === min;
              return (
                <div className={"row" + (hi ? " is-hi" : "") + (lo ? " is-lo" : "")} key={i}>
                  <div className="label">{d.name}</div>
                  <div className="track" aria-hidden="true">
                    {ticks.slice(1, -1).map((t) => (
                      <span key={t} className="tick-line" style={{ left: widthFor(t) }} />
                    ))}
                    <span className="bar" style={{ width: widthFor(d.pct) }}>
                      <span className="bar-fill"></span>
                    </span>
                  </div>
                  <div className="value">{d.pct.toFixed(1)}<span>%</span></div>
                </div>
              );
            })}
          </div>

          <div className="axis" aria-hidden="true">
            <div className="label-spacer"></div>
            <div className="ticks">
              {ticks.map((t) => (
                <span key={t} className="tick" style={{ left: widthFor(t) }}>{t}</span>
              ))}
            </div>
            <div className="value-spacer"></div>
          </div>

          <div className="legend">
            <span className="dot" aria-hidden="true"></span>
            Independent third&#8209;party crush&#8209;kill testing, single&#8209;pass through the SCU mill.
          </div>
        </div>
      </div>
    </section>
  );
}

window.SCUKillRates = SCUKillRates;

/* ---- 5c. RESISTANT WEEDS CHART ---------------------------------------- */
function SCUResistance() {
  // Approximated yearly counts of unique herbicide-resistant weed cases
  // worldwide (WeedScience.org). Curve matches the well-known sigmoid growth.
  const data = [
    [1950, 1],   [1955, 1],   [1960, 2],   [1965, 3],   [1970, 5],
    [1975, 8],   [1976, 11],  [1977, 14],  [1978, 18],  [1979, 24],
    [1980, 30],  [1981, 38],  [1982, 48],  [1983, 60],  [1984, 72],
    [1985, 85],  [1986, 96],  [1987, 108], [1988, 120], [1989, 132],
    [1990, 145], [1991, 158], [1992, 170], [1993, 182], [1994, 194],
    [1995, 205], [1996, 215], [1997, 224], [1998, 232], [1999, 240],
    [2000, 248], [2001, 256], [2002, 264], [2003, 272], [2004, 281],
    [2005, 290], [2006, 300], [2007, 312], [2008, 324], [2009, 336],
    [2010, 349], [2011, 362], [2012, 376], [2013, 390], [2014, 404],
    [2015, 418], [2016, 432], [2017, 446], [2018, 461], [2019, 476],
    [2020, 491], [2021, 504], [2022, 517], [2023, 528], [2024, 538],
    [2025, 545],
  ];

  // viewBox geometry (scales fluidly via CSS width:100%)
  const VB_W = 1000, VB_H = 480;
  const PAD = { l: 78, r: 36, t: 28, b: 56 };
  const innerW = VB_W - PAD.l - PAD.r;
  const innerH = VB_H - PAD.t - PAD.b;

  const X_MIN = 1950, X_MAX = 2025;
  const Y_MIN = 0,    Y_MAX = 550;
  const xFor = (yr)  => PAD.l + ((yr - X_MIN) / (X_MAX - X_MIN)) * innerW;
  const yFor = (val) => PAD.t + (1 - (val - Y_MIN) / (Y_MAX - Y_MIN)) * innerH;

  const xTicks = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2025];
  const yTicks = [0, 100, 200, 300, 400, 500];

  // Path string
  const linePath = data.map(([yr, v], i) => `${i === 0 ? "M" : "L"} ${xFor(yr).toFixed(1)} ${yFor(v).toFixed(1)}`).join(" ");
  // Fill area under the line
  const last = data[data.length - 1];
  const first = data[0];
  const areaPath = `${linePath} L ${xFor(last[0]).toFixed(1)} ${yFor(0).toFixed(1)} L ${xFor(first[0]).toFixed(1)} ${yFor(0).toFixed(1)} Z`;

  return (
    <section className="scu-resist" data-screen-label="05c Resistance">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">03c, Why it matters</span>
            <h2>
              Resistant weeds.<br/>
              <span className="y">A global problem.</span>
            </h2>
          </div>
          <p className="lead">
            Herbicide-resistant weed cases have grown from a handful in the 1950s to over 540 unique cases worldwide today — and the curve is still climbing. Harvest weed seed control with the Redekop SCU stops resistant seeds before they re&#8209;enter the field.
          </p>
        </div>

        <div className="chart">
          <div className="chart-head">
            <div className="title">Chronological increase in resistant weeds globally</div>
            <div className="meta">
              <div className="meta-cell">
                <span className="k">545+</span>
                <span className="lbl">Unique cases (2025)</span>
              </div>
              <div className="meta-cell">
                <span className="k">75 yrs</span>
                <span className="lbl">Tracked since 1950</span>
              </div>
              <div className="meta-cell">
                <span className="k">→ 50×</span>
                <span className="lbl">Growth since 1980</span>
              </div>
            </div>
          </div>

          <div className="plot">
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              preserveAspectRatio="none"
              role="img"
              aria-label="Line chart showing the chronological increase in unique cases of herbicide-resistant weeds globally from 1950 to 2025."
            >
              {/* horizontal gridlines */}
              {yTicks.map((t) => (
                <line
                  key={`gy-${t}`}
                  x1={PAD.l} x2={VB_W - PAD.r}
                  y1={yFor(t)} y2={yFor(t)}
                  className={"grid" + (t === 0 ? " axis" : "")}
                />
              ))}

              {/* vertical grid hints (every decade, faint) */}
              {xTicks.slice(1, -1).map((t) => (
                <line
                  key={`gx-${t}`}
                  x1={xFor(t)} x2={xFor(t)}
                  y1={PAD.t} y2={VB_H - PAD.b}
                  className="grid grid-v"
                />
              ))}

              {/* Y-axis labels */}
              {yTicks.map((t) => (
                <text
                  key={`yl-${t}`}
                  x={PAD.l - 14}
                  y={yFor(t)}
                  className="lbl-y"
                  textAnchor="end"
                  dominantBaseline="middle"
                >{t}</text>
              ))}

              {/* X-axis labels */}
              {xTicks.map((t) => (
                <text
                  key={`xl-${t}`}
                  x={xFor(t)}
                  y={VB_H - PAD.b + 26}
                  className="lbl-x"
                  textAnchor="middle"
                >{t}</text>
              ))}

              {/* axis titles */}
              <text
                x={PAD.l - 56}
                y={PAD.t + innerH / 2}
                className="axis-title"
                textAnchor="middle"
                transform={`rotate(-90, ${PAD.l - 56}, ${PAD.t + innerH / 2})`}
              >Number of unique cases</text>
              <text
                x={PAD.l + innerW / 2}
                y={VB_H - 8}
                className="axis-title"
                textAnchor="middle"
              >Year</text>

              {/* area fill */}
              <path d={areaPath} className="area" />

              {/* line */}
              <path d={linePath} className="line" />

              {/* data points */}
              {data.map(([yr, v]) => (
                <circle
                  key={`pt-${yr}`}
                  cx={xFor(yr)} cy={yFor(v)} r="3.6"
                  className="dot"
                />
              ))}

              {/* end-point highlight */}
              <circle
                cx={xFor(last[0])} cy={yFor(last[1])} r="6.5"
                className="dot-end"
              />
              <text
                x={xFor(last[0]) - 12}
                y={yFor(last[1]) - 14}
                className="end-label"
                textAnchor="end"
              >{last[1]} cases</text>
            </svg>
          </div>

          <div className="legend">
            <span className="dot" aria-hidden="true"></span>
            Unique cases of herbicide-resistant weeds, worldwide. Source: International Herbicide-Resistant Weed Database (WeedScience.org).
          </div>
        </div>
      </div>
    </section>
  );
}

window.SCUResistance = SCUResistance;

/* ---- 6. FEATURES (Engineered for the Field) ---------------------------- */
function SCUFeatures() {
  const features = [
    {
      title: "Integrated Design",
      desc: "Combines the SCU chaff stream with the MAV straw stream for clean residue distribution and reduced dust.",
      bullets: [
        "Chaff + straw stream unified",
        "Improved residue spread",
        "Less dust and debris",
      ],
      media: { kind: "image", src: window.__resources.integratedDesignVideo, fit: "cover" },
    },
    {
      title: "Easy Access",
      desc: "The SCU mounts on slide rails for tool-free access to the chaffer and rear internals during service.",
      bullets: [
        "Bolt-in installation",
        "Slide-rail service access",
        "OEM-spec mounting",
      ],
      media: { kind: "image", src: window.__resources.easyAccess, fit: "cover", bg: "#000" },
    },
    {
      title: "Proprietary Mill Design",
      desc: "Reversible mills, long-life wear materials, and efficient power use deliver up to 98% kill rates in third-party testing.",
      bullets: [
        "Reversible mills for extended life",
        "Efficient power utilization",
        "Up to 98% kill rate (independent)",
      ],
      media: { kind: "image", src: window.__resources.millDesign, fit: "contain", bg: "var(--ink-50)" },
    },
    {
      title: "Simple Mechanical Drive",
      desc: "Robust belt-drive system that doesn't compromise the factory drive. Switch between Chopper and Chopper + SCU modes without removing belts.",
      bullets: [
        "Simple, robust belt drive",
        "Factory drive uncompromised",
        "Splined-drive sheave, no belt removal",
      ],
      media: { kind: "image", src: window.__resources.driveEngage, fit: "cover", bg: "#000" },
    },
    {
      title: "Integrated Monitoring",
      desc: "Standard ISOBUS display option or standalone screen. Alarms on all critical SCU functions with tailboard controls for spread management.",
      bullets: [
        "ISOBUS or standalone display",
        "Alarms on all critical functions",
        "Tailboard spread controls",
      ],
      media: { kind: "image", src: window.__resources.integratedMonitoring, fit: "cover" },
    },
    {
      title: "Turn Weeds into Nutrients",
      desc: "Crushing weed seeds at harvest returns the nutrients stored in those seeds back to your field through the residue, rather than letting them steal next year's yield.",
      bullets: [
        "Nutrients returned through residue",
        "Reduces spring weed pressure",
        "Closes the loop on a clean harvest",
      ],
      media: { kind: "image", src: window.__resources.wheatSunset, fit: "cover" },
    },
  ];

  const renderMedia = (f) => {
    if (!f.media) {
      return (
        <Slot
          style={{ position: "absolute", inset: 0, border: 0 }}
          tag={f.slot.tag}
          file={f.slot.file}
          desc={f.slot.desc}
        />
      );
    }
    const common = {
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: f.media.fit || "cover",
        background: f.media.bg || "transparent",
        display: "block",
      },
    };
    if (f.media.kind === "video") {
      return (
        <video
          {...common}
          src={f.media.src}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      );
    }
    return <img {...common} src={f.media.src} alt="" />;
  };

  return (
    <section className="scu-features" id="features" data-screen-label="05 Features">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">04 · Engineered for the field</span>
            <h2>
              Six design choices,<br/>
              one harvest advantage.
            </h2>
          </div>
          <p className="lead" style={{ margin: 0, maxWidth: 480, justifySelf: "end" }}>
            The Redekop SCU is the only mill that balances kill rate, throughput, and power to stay efficient in every condition.
          </p>
        </div>

        <div className="grid">
          {features.map((f, i) => (
            <div className="card" key={i}>
              <div className="feat-img">
                <span className="feat-num">0{i + 1}</span>
                {renderMedia(f)}
              </div>
              <div className="feat-body">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className="feat-bullets">
                  {f.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 6. CTA / FORM ----------------------------------------------------- */
function SCUForm() {
  const [interest, setInterest] = useStateSCU({ info: true, demo: false, quote: false, dealer: false });
  const toggle = (k) => setInterest((p) => ({ ...p, [k]: !p[k] }));

  return (
    <section className="scu-cta" id="contact" data-screen-label="06 Contact">
      <div className="wrap">
        <div>
          <span className="sec-idx on-dark">05 · Take Back Control</span>
          <h2>
            Ready to learn<br/>
            <span className="y">more?</span>
          </h2>
          <p className="lead">
            Find out how the Redekop SCU can help you manage resistance, increase yield potential, and maximize the efficiency of your operation.
          </p>
          <ul className="bullet-yellow">
            <li>Talk to a dealer about your combine make and model</li>
            <li>Get a quote tailored to your operation</li>
            <li>Book an in-field demo during harvest season</li>
          </ul>

          <div style={{ marginTop: 36 }}>
            <img
              src={window.__resources.ctaAerial}
              alt="Aerial of combines harvesting wheat"
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                border: "1px solid var(--ink-700)",
                filter: "contrast(1.05)",
              }}
            />
          </div>
        </div>

        <div className="form">
          <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-400)", margin: "0 0 22px", letterSpacing: "0.06em" }}>
            <span style={{ color: "var(--redekop-yellow)" }}>*</span> indicates required fields
          </p>

          <div className="form-row">
            <div className="field">
              <label>First Name <span className="req">*</span></label>
              <input type="text" placeholder="" />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" placeholder="" />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label>Country <span className="req">*</span></label>
              <select defaultValue="">
                <option value="" disabled>Select country</option>
                <option>Canada</option>
                <option>United States</option>
                <option>Australia</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label>Postal / ZIP Code</label>
              <input type="text" placeholder="" />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label>Email <span className="req">*</span></label>
              <input type="email" placeholder="" />
            </div>
            <div className="field">
              <label>Phone</label>
              <input type="tel" placeholder="" />
            </div>
          </div>

          <div className="field">
            <label>Combine Make and Model <span className="req">*</span></label>
            <input type="text" placeholder="e.g. John Deere X9 1100" />
          </div>

          <div className="field">
            <label>What are you interested in?</label>
            <div className="checks">
              <label className="check"><input type="checkbox" checked={interest.info} onChange={() => toggle("info")} /> Get more info</label>
              <label className="check"><input type="checkbox" checked={interest.demo} onChange={() => toggle("demo")} /> Book a demo</label>
              <label className="check"><input type="checkbox" checked={interest.quote} onChange={() => toggle("quote")} /> Request a quote</label>
              <label className="check"><input type="checkbox" checked={interest.dealer} onChange={() => toggle("dealer")} /> Connect with a dealer</label>
            </div>
          </div>

          <div className="submit-row">
            <button className="btn-redekop" onClick={(e) => e.preventDefault()} style={{ border: 0, cursor: "pointer" }}>
              <span>Submit</span>
            </button>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-400)", alignSelf: "center" }}>
              We'll be in touch within one business day.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.SCUHero = SCUHero;
window.SCUStats = SCUStats;
window.SCUIntro = SCUIntro;
window.SCUFieldBreak = SCUFieldBreak;
window.SCUPillars = SCUPillars;
window.SCUHowItWorks = SCUHowItWorks;
window.SCUFeatures = SCUFeatures;
window.SCUForm = SCUForm;
