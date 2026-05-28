/* global React */

/* ---- placeholder slot ----------------------------------------------- */
function KASSlot({ tag, file, desc, dark, style }) {
  return (
    <div className={"slot" + (dark ? " dark" : "")} style={style}>
      {tag && <span className="tag">{tag}</span>}
      {file && <span className="file">{file}</span>}
      {desc && <span className="desc">{desc}</span>}
    </div>
  );
}

/* ---- 1. HERO -------------------------------------------------------- */
function KASHero() {
  return (
    <section className="kas-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="copy">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="index.html#products">Products</a>
            <span className="sep">/</span>
            <span className="here">KAS Pre&#8209;Cleaner</span>
          </div>

          <div className="product">KAS Pre&#8209;Cleaner</div>

          <h1>
            Your job is dirty.<br/>
            <span className="y">Your filter doesn&apos;t<br/>have to be.</span>
          </h1>

          <p className="sub">
            Revolutionary engine air pre&#8209;cleaning. Our patent&#8209;pending design keeps crop residue, straw, dust, dirt and debris out of your engine intake, for the longest possible filter life, optimal performance and a serious cut in maintenance cost and downtime.
          </p>

          <div className="ctas">
            <a href="#order" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>Order Now</span></a>
            <a href="kas-catalogue.html" className="btn-redekop is-light"><span>Product Catalogue</span></a>
          </div>

          <div className="hero-meta">
            <div className="cell">
              <div className="k">5<small>min</small></div>
              <div className="lbl">Install time</div>
            </div>
            <div className="cell">
              <div className="k">5<small>&times;</small></div>
              <div className="lbl">Dust protection</div>
            </div>
            <div className="cell">
              <div className="k">5</div>
              <div className="lbl">Sizes &middot; 65&ndash;1500 CFM</div>
            </div>
          </div>
        </div>

        <div className="art">
          <img
            src="assets/products/kas-prefilter.png"
            alt="Redekop KAS Pre-Cleaner, patent-pending engine air pre-cleaner"
          />
        </div>
      </div>
    </section>
  );
}

/* ---- 2. THE KAS DIFFERENCE — 4 pillars ----------------------------- */
function KASDifference() {
  const pillars = [
    {
      n: "01",
      t: "Low air restriction",
      d: "Outstanding fuel economy and performance, the KAS cleans without choking the airflow your engine needs.",
    },
    {
      n: "02",
      t: "Highest particulate removal",
      d: "Up to 5&times; the efficiency of competitor pre&#8209;cleaners in independent A4 dust testing.",
    },
    {
      n: "03",
      t: "Drastic downtime cuts",
      d: "Longer filter life, fewer service stops, lower operating cost, less time wrenching, more time working.",
    },
    {
      n: "04",
      t: "Reduced carbon footprint",
      d: "A cleaner intake means less wasted fuel, fewer filters in the landfill, and an engine running at its best.",
    },
  ];
  return (
    <section className="kas-diff" data-screen-label="02 The KAS Difference">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">01 · The KAS difference</span>
          <h2>
            Engineered for a perfect balance between<br/>
            <span className="y">low air restriction</span> and <span className="y">highest particulate removal.</span>
          </h2>
          <p className="lead">
            And with as little as a five&#8209;minute install, operators across North America are switching to the Redekop KAS in waves. Because dirt, dust, debris and snow shouldn&apos;t slow you down.
          </p>
        </div>

        <div className="grid">
          {pillars.map((p) => (
            <div className="cell" key={p.n}>
              <span className="num">{p.n}</span>
              <h3>{p.t}</h3>
              <div className="rule" aria-hidden="true"></div>
              <p dangerouslySetInnerHTML={{ __html: p.d }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 3. PROOF — two comparison bar charts -------------------------- */
function KASProof() {
  const restriction = [
    { name: "Competitor One",   v: 70, shade: "ink-500" },
    { name: "Competitor Two",   v: 75, shade: "ink-300" },
    { name: "Competitor Three", v: 50, shade: "black" },
    { name: "Redekop KAS",      v: 49, shade: "yellow", winner: true },
  ];
  const protection = [
    { name: "Competitor One",   v: 30,  shade: "ink-500" },
    { name: "Competitor Two",   v: 40,  shade: "ink-300" },
    { name: "Competitor Three", v: 40,  shade: "black" },
    { name: "Redekop KAS",      v: 200, shade: "yellow", winner: true },
  ];

  const Chart = ({ data, max, suffix, unitsLabel }) => (
    <div className="bars">
      {data.map((b) => {
        const h = (b.v / max) * 100;
        return (
          <div className={"col" + (b.winner ? " is-winner" : "")} key={b.name}>
            <div className="track">
              <div className={"bar shade-" + b.shade} style={{ height: h + "%" }}>
                <span className="val">
                  <span className="num">{b.v}</span>
                  <span className="unit">{unitsLabel}</span>
                </span>
              </div>
            </div>
            <div className="label">{b.name}</div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="kas-proof" data-screen-label="03 Proof">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">02 · Independent A4 test dust</span>
          <h2>
            The numbers don&apos;t lie.
          </h2>
        </div>
        <div className="grid">
          <div className="card">
            <h3>The lowest air restriction.</h3>
            <p className="sub">Air restriction at 50&nbsp;g/hr feed rate, lower is better.</p>
            <Chart data={restriction} max={80} unitsLabel="" />
            <div className="foot">Independent A4 test dust &middot; Air restriction, 50&nbsp;g/hr feed rate</div>
          </div>
          <div className="card">
            <h3>5&times; dust protection.</h3>
            <p className="sub">Hours to pass 1000&nbsp;g of dust at 50&nbsp;g/hr, higher is better.</p>
            <Chart data={protection} max={220} unitsLabel="hrs" />
            <div className="foot">Independent A4 test dust &middot; Hours to pass 1000&nbsp;grams, 50&nbsp;g/hr feed rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 4. EFFICIENCY CHART ------------------------------------------- */
function KASEfficiency() {
  // efficiency-vs-CFM curves for KAS 3" / 4" / 5" / 6" / 8"
  // Each entry is a stylized polyline: [cfm, efficiency%] pairs.
  const series = [
    { name: "KAS 3\"",  color: "#5CA8E8", min: 50,  max: 200,  pts: [[50,82],[80,82.5],[110,84],[140,85],[170,86.5],[200,88]] },
    { name: "KAS 4\"",  color: "#E07F3A", min: 100, max: 350,  pts: [[100,82],[150,84],[200,85.5],[250,86.5],[300,86],[350,85.5]] },
    { name: "KAS 5\"",  color: "#231E20", min: 275, max: 550,  pts: [[275,82],[330,84.5],[400,86],[460,86.8],[510,87],[550,86.8]] },
    { name: "KAS 6\"",  color: "#EEB94B", min: 400, max: 850,  pts: [[400,79],[500,82],[600,83.5],[700,84],[780,84.2],[850,84]] },
    { name: "KAS 8\"",  color: "#3F8B3F", min: 800, max: 1400, pts: [[800,77],[950,81.5],[1100,82.5],[1250,82.8],[1400,82.5]] },
  ];

  const W = 760, H = 360;
  const padL = 50, padR = 28, padT = 24, padB = 44;
  const xMin = 0, xMax = 1400;
  const yMin = 75, yMax = 90;
  const sx = (v) => padL + ((v - xMin) / (xMax - xMin)) * (W - padL - padR);
  const sy = (v) => padT + (1 - (v - yMin) / (yMax - yMin)) * (H - padT - padB);

  const yTicks = [75, 80, 85, 90];
  const xTicks = [0, 200, 400, 600, 800, 1000, 1200, 1400];

  const toPath = (pts) => pts.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p[0])},${sy(p[1])}`).join(" ");

  return (
    <section className="kas-eff" data-screen-label="04 Efficiency">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx on-dark">03 · KAS efficiency</span>
            <h2>
              Engine air pre&#8209;cleaner efficiency<br/>
              <span className="y">vs. air flow.</span>
            </h2>
          </div>
          <p className="lead">
            Five sizes cover everything from compact diesel gensets at 65&nbsp;CFM up to the largest combines and dozers at 1500&nbsp;CFM, with sustained 80&ndash;88% removal efficiency across the operating range.
          </p>
        </div>

        <div className="chart-wrap">
          <div className="chart">
            <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
              {/* gridlines */}
              {yTicks.map((t) => (
                <g key={"y" + t}>
                  <line x1={padL} y1={sy(t)} x2={W - padR} y2={sy(t)} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <text x={padL - 10} y={sy(t) + 4} fontFamily="Open Sans, sans-serif" fontSize="11" fontWeight="700" fill="#9A9A9A" textAnchor="end">{t}%</text>
                </g>
              ))}
              {xTicks.map((t) => (
                <g key={"x" + t}>
                  <line x1={sx(t)} y1={padT} x2={sx(t)} y2={H - padB} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  <text x={sx(t)} y={H - padB + 18} fontFamily="Open Sans, sans-serif" fontSize="11" fontWeight="700" fill="#9A9A9A" textAnchor="middle">{t}</text>
                </g>
              ))}
              {/* axes */}
              <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="#3E3A3C" strokeWidth="1.5" />
              <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="#3E3A3C" strokeWidth="1.5" />
              <text x={padL} y={padT - 8} fontFamily="Open Sans, sans-serif" fontSize="10" fontWeight="700" letterSpacing="2" fill="#9A9A9A">EFFICIENCY (%)</text>
              <text x={W - padR} y={H - 6} fontFamily="Open Sans, sans-serif" fontSize="10" fontWeight="700" letterSpacing="2" fill="#9A9A9A" textAnchor="end">CFM</text>

              {/* series */}
              {series.map((s, i) => (
                <g key={s.name}>
                  <path d={toPath(s.pts)} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* end-of-line dot */}
                  <circle cx={sx(s.pts[s.pts.length - 1][0])} cy={sy(s.pts[s.pts.length - 1][1])} r="3.5" fill={s.color} />
                </g>
              ))}
            </svg>
          </div>
          <div className="legend">
            {series.map((s) => (
              <div className="key" key={s.name}>
                <span className="swatch" style={{ background: s.color }}></span>
                <span className="name">{s.name}</span>
                <span className="range">{s.min}&ndash;{s.max} CFM</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 5. SPECS TABLE ------------------------------------------------- */
function KASSpecs() {
  const rows = [
    { m: "KAS-003", cfm: "65 – 190",   inIn: "3.05", inMm: "77.4", odIn: "6.49",  odMm: "165", hIn: "5.13",  hMm: "130", lbs: "1.65", kg: "0.75" },
    { m: "KAS-004", cfm: "100 – 350",  inIn: "4.04", inMm: "102",  odIn: "8.50",  odMm: "216", hIn: "6.77",  hMm: "172", lbs: "2.9",  kg: "1.30" },
    { m: "KAS-005", cfm: "275 – 550",  inIn: "5.04", inMm: "128",  odIn: "10.63", odMm: "270", hIn: "8.46",  hMm: "215", lbs: "5.1",  kg: "2.33" },
    { m: "KAS-006", cfm: "400 – 850",  inIn: "6.06", inMm: "154",  odIn: "12.80", odMm: "325", hIn: "10.12", hMm: "257", lbs: "8.1",  kg: "3.66" },
    { m: "KAS-008", cfm: "800 – 1500", inIn: "8.06", inMm: "205",  odIn: "17.42", odMm: "442", hIn: "13.77", hMm: "350", lbs: "15.5", kg: "7.03" },
  ];
  return (
    <section className="kas-specs" data-screen-label="05 Specs">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">04 · Sizing &amp; specs</span>
          <h2>Get the right KAS<br/><span className="y">for your engine.</span></h2>
          <p className="lead">
            Five sizes from 65 to 1500&nbsp;CFM cover compact diesel gensets, ag tractors and combines, road graders, dozers and on&#8209;highway truck applications.
          </p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th rowSpan="2" className="m">Model</th>
                <th rowSpan="2" className="cfm">CFM Range</th>
                <th colSpan="2" className="grp">Inlet Size</th>
                <th colSpan="2" className="grp">Outside Diameter</th>
                <th colSpan="2" className="grp">Height</th>
                <th colSpan="2" className="grp">Weight</th>
              </tr>
              <tr className="units">
                <th>inches</th><th>mm</th>
                <th>inches</th><th>mm</th>
                <th>inches</th><th>mm</th>
                <th>lbs</th><th>kg</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.m}>
                  <td className="m"><span className="chip">{r.m}</span></td>
                  <td className="cfm">{r.cfm}</td>
                  <td>{r.inIn}</td><td className="dim">{r.inMm}</td>
                  <td>{r.odIn}</td><td className="dim">{r.odMm}</td>
                  <td>{r.hIn}</td><td className="dim">{r.hMm}</td>
                  <td>{r.lbs}</td><td className="dim">{r.kg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---- 6. TESTIMONIALS ------------------------------------------------ */
function KASTestimonials() {
  const quotes = [
    {
      body: "It was a relief to run the grader all day and not have to take the guys a replacement filter. The KAS pre-cleaners have been a game changer for sure.",
      name: "Andy Shooter",
      role: "Foreman, RM of Francis No.127",
    },
    {
      body: "We work in dust and dirt all day. Costs are now controllable, we're saving a lot on fuel and maintenance. It's so simple and I would recommend this to any diesel operator company.",
      name: "Neil Bruce",
      role: "Maintenance Manager, Curtis Construction LTD",
    },
    {
      body: "In some of the harshest winter conditions we've seen, the KAS proved itself allowing us to achieve a 250-hour service interval, and upon inspecting the filter it was dry and able to head back out to work.",
      name: "Willy",
      role: "RM of Leroy No.339 · 150AWD plow Graders",
    },
  ];
  return (
    <section className="kas-quotes" data-screen-label="06 Testimonials">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">05 · In the field</span>
          <h2>What operators are<br/><span className="y">saying about KAS.</span></h2>
        </div>
        <div className="grid">
          {quotes.map((q, i) => (
            <div className="card" key={i}>
              <div className="mark" aria-hidden="true">&ldquo;</div>
              <blockquote>{q.body}</blockquote>
              <div className="rule" aria-hidden="true"></div>
              <div className="attr">
                <div className="name">{q.name}</div>
                <div className="role">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 7. CTA STRIP --------------------------------------------------- */
function KASCTA() {
  return (
    <section className="kas-cta" id="order" data-screen-label="07 CTA">
      <div className="wrap">
        <div className="stripes" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <h2>Interested<span className="y">?</span></h2>
        <p>
          Give your engine the clean air it deserves. Your equipment will thank you.
        </p>
        <div className="buttons">
          <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>Order KAS Pre-Cleaner</span></a>
          <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()}><span>Become a Dealer</span></a>
          <a href="kas-catalogue.html" className="btn-redekop"><span>Product Catalogue</span></a>
        </div>
      </div>
    </section>
  );
}

window.KASHero = KASHero;
window.KASDifference = KASDifference;
window.KASProof = KASProof;
window.KASEfficiency = KASEfficiency;
window.KASSpecs = KASSpecs;
window.KASTestimonials = KASTestimonials;
window.KASCTA = KASCTA;
