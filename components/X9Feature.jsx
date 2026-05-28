/* global React */
const { useState: useStateOEM, useEffect: useEffectOEM } = React;

const OEMS = [
  {
    id: "jd-x9",
    label: "John Deere X9",
    tagline: "For the John Deere X9",
    titleStart: "X9",
    titleAccent: "MAV \u00b7 SCU.",
    accent: "#2DD64B",
    accentDeep: "#108C28",
    img: "assets/imagery/combine-x9-yard.jpg",
    imgPos: "center 40%",
    stamp1: "X9",
    stamp2: "MAV \u00b7 SCU",
    desc: "Purpose-built for the X9 combine. The X9 SCU integrates Redekop's Harvest Weed Seed Control directly into the John Deere platform, no field retrofits, no compromises on throughput.",
    bullets: [
      "OEM-engineered mounting and drive integration",
      "Crushes weed seeds at harvest, non-chemical control",
      "Cuts and spreads residue across full cutterbar width",
      "Quick-service rotor access for in-season maintenance",
    ],
    specs: [
      { k: "98", suf: "%", lbl: "Weed-seed kill rate" },
      { k: "18.3", suf: "m", sub: "60 ft", lbl: "Spread width" },
      { k: "0", suf: "", lbl: "Field retrofits" },
    ],
    cta: "X9 SCU Details",
  },
  {
    id: "cih-afx",
    label: "Case IH AFX",
    tagline: "For Case IH Axial-Flow",
    titleStart: "AFX",
    titleAccent: "MAV \u00b7 SCU.",
    accent: "#FF4040",
    accentDeep: "#B5000F",
    img: "assets/imagery/oem-case-afx.jpg",
    imgPos: "center 55%",
    stamp1: "AFX",
    stamp2: "MAV \u00b7 SCU",
    desc: "Drop-in MAV Straw Chopper and Seed Control Unit for the Case IH Axial-Flow 250-series and AFX combines. Engineered to mate to the factory rotor, no field welding, no compromises.",
    bullets: [
      "Fits AFX 7250 · 8250 · 9250 and current Axial-Flow models",
      "Bolt-in conversion, complete with drive components",
      "Available as MAV-only or MAV + SCU bundle",
      "OEM-grade torque rating for high-residue conditions",
    ],
    specs: [
      { k: "98", suf: "%", lbl: "Weed-seed kill rate" },
      { k: "18.3", suf: "m", sub: "60 ft", lbl: "Spread width" },
      { k: "<1", suf: "d", lbl: "Install time" },
    ],
    cta: "AFX MAV Details",
  },
  {
    id: "nh-cr",
    label: "New Holland CR",
    tagline: "For New Holland CR Series",
    titleStart: "CR",
    titleAccent: "MAV \u00b7 SCU.",
    accent: "#FFC72C",
    accentDeep: "#1F3F8B",
    img: "assets/imagery/oem-newholland-cr.jpg",
    imgPos: "center 50%",
    stamp1: "CR",
    stamp2: "MAV \u00b7 SCU",
    desc: "The MAV Straw Chopper for the New Holland CR family, including CR9.90 and the Twin Rotor lineup. Delivers Redekop's signature cut-and-spread across the cutterbar from day one.",
    bullets: [
      "Fits CR8.90 · CR9.90 · CR10.90 Twin Rotor combines",
      "Drop-in chopper system with factory mounting points",
      "Available with SCU package for weed-seed control",
      "Compatible with current model-year drive packages",
    ],
    specs: [
      { k: "98", suf: "%", lbl: "Weed-seed kill rate" },
      { k: "18.3", suf: "m", sub: "60 ft", lbl: "Spread width" },
      { k: "2x", suf: "", lbl: "Throughput vs OEM chopper" },
    ],
    cta: "CR MAV Details",
  },
  {
    id: "claas-lexion",
    label: "Claas Lexion",
    tagline: "For Claas Lexion",
    titleStart: "LEXION",
    titleAccent: "SCU.",
    accent: "#7BC142",
    accentDeep: "#00712B",
    img: "assets/imagery/oem-claas-lexion.jpg",
    imgPos: "center 55%",
    stamp1: "LEXION",
    stamp2: "SCU",
    desc: "Seed Control Unit for the Claas Lexion 7000 and 8000 series, engineered to integrate with the Lexion's APS Synflow threshing system and deliver weed-seed kill at full throughput.",
    bullets: [
      "Fits Lexion 7400 · 7500 · 7700 · 8700 · 8800 · 8900",
      "Integrates downstream of the APS Synflow rotor",
      "Maintains spread quality at full Lexion ground speed",
      "Compatible with TerraTrac and tire configurations",
    ],
    specs: [
      { k: "98", suf: "%", lbl: "Weed-seed kill rate" },
      { k: "APS", suf: "", lbl: "Synflow integration" },
    ],
    cta: "Lexion SCU Details",
  },
  {
    id: "fendt-ideal",
    label: "Fendt IDEAL",
    tagline: "For Fendt IDEAL · 10T",
    titleStart: "FENDT",
    titleAccent: "SCU.",
    accent: "#94C84C",
    accentDeep: "#3F6118",
    img: "assets/imagery/oem-fendt.jpg",
    imgPos: "center 60%",
    stamp1: "FENDT",
    stamp2: "SCU",
    desc: "MAV and SCU for the Fendt IDEAL series, including the 10T flagship. Built to handle the IDEAL's class-leading grain tank and throughput without slowing your harvest pace.",
    bullets: [
      "Fits Fendt IDEAL 7 · 8 · 9 · 10T configurations",
      "Engineered for high-capacity, full-throughput residue flow",
      "OEM-spec drive integration; no field modifications",
      "Available as MAV-only or full MAV + SCU package",
    ],
    specs: [
      { k: "98", suf: "%", lbl: "Weed-seed kill rate" },
      { k: "10T", suf: "", lbl: "Class compatibility" },
    ],
    cta: "Fendt SCU Details",
  },
];

const ROTATE_MS = 7000;

function OEMShowcase() {
  const [idx, setIdx] = useStateOEM(0);
  const [paused, setPaused] = useStateOEM(false);
  const oem = OEMS[idx];

  useEffectOEM(() => {
    if (paused) return undefined;
    const t = setTimeout(() => setIdx((i) => (i + 1) % OEMS.length), ROTATE_MS);
    return () => clearTimeout(t);
  }, [idx, paused]);

  return (
    <section
      className="x9 oem"
      data-screen-label="OEM Compatibility"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "end", marginBottom: 40 }}>
          <div>
            <span className="sec-idx on-dark">02 · OEM Compatibility</span>
            <h2 className="section-title" style={{ color: "#fff", marginTop: 16, fontSize: "clamp(40px, 5.4vw, 76px)" }}>
              Built for every<br/>
              <span style={{ color: "var(--redekop-yellow)" }}>combine in the shed.</span>
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--ink-300)", maxWidth: 380, margin: 0 }}>
            Redekop MAV and SCU systems are engineered for the major OEM platforms, drop-in, OEM-grade, no field retrofits.
          </p>
        </div>

        {/* OEM tab bar */}
        <div className="oem-tabs" role="tablist">
          {OEMS.map((o, i) => {
            const active = i === idx;
            return (
              <button
                key={o.id}
                role="tab"
                aria-selected={active}
                className={"oem-tab" + (active ? " is-active" : "")}
                onClick={() => setIdx(i)}
                style={{ "--accent": o.accent, "--accentDeep": o.accentDeep }}
              >
                <span className="oem-tab-num">0{i + 1}</span>
                <span className="oem-tab-label">{o.label}</span>
                {active && !paused && <span className="oem-tab-bar" key={"bar-" + idx}></span>}
                {active && paused && <span className="oem-tab-bar paused"></span>}
              </button>
            );
          })}
        </div>

        <div className="x9-grid" style={{ marginTop: 56 }}>
          <div className="oem-copy" key={"copy-" + oem.id}>
            <span className="green-pill" style={{ background: oem.accentDeep, color: "#fff" }}>
              <span style={{ width: 6, height: 6, borderRadius: 50, background: oem.accent }}></span>
              {oem.tagline}
            </span>
            <h3 className="section-title" style={{ color: "#fff", marginTop: 22 }}>
              The Redekop{" "}
              <span style={{ whiteSpace: "nowrap" }}>
                {oem.titleStart}{" "}
                <span style={{ color: oem.accent }}>{oem.titleAccent}</span>
              </span>
            </h3>
            <p className="lead" style={{ color: "var(--ink-200)", marginTop: 22, maxWidth: 560 }}>
              {oem.desc}
            </p>
            <ul className="bullet-yellow on-dark" style={{ marginTop: 28, maxWidth: 560 }}>
              {oem.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>

            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: `repeat(${oem.specs.length}, minmax(0, 1fr))`, gap: 24, maxWidth: 560 }}>
              {oem.specs.map((s, i) => (
                <div className="spec" key={i}>
                  <div className="num num-sm">
                    {s.k}
                    {s.suf && <span style={{ fontSize: 22, color: "var(--ink-400)", marginLeft: 2 }}>{s.suf}</span>}
                  </div>
                  {s.sub && <div className="sub">{s.sub}</div>}
                  <div className="lbl lbl-sm">{s.lbl}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 44, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>{oem.cta}</span></a>
              <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()}><span>Find a Dealer</span></a>
            </div>
          </div>

          {/* Image stack: all images mounted, only active is visible — cross-fade */}
          <div className="oem-image-stack">
            {OEMS.map((o, i) => (
              <div
                key={o.id}
                className={"oem-image-slide" + (i === idx ? " is-on" : "")}
                style={{ backgroundImage: `url("${o.img}")`, backgroundPosition: o.imgPos }}
                aria-hidden={i !== idx}
              />
            ))}
            <div className="oem-image-overlay" aria-hidden="true"></div>
            <div className="stripes" aria-hidden="true">
              <i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
            <div className="oem-stamp" key={"stamp-" + oem.id}>
              <span className="s1">{oem.stamp1}</span>
              <span className="s2" style={{ color: oem.accent }}>{oem.stamp2}</span>
            </div>
            <div className="oem-counter">
              <span className="cur">0{idx + 1}</span>
              <span className="sep">/</span>
              <span className="tot">0{OEMS.length}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .oem-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          border-top: 1px solid var(--ink-700);
          border-bottom: 1px solid var(--ink-700);
        }
        .oem-tab {
          flex: 1 1 0;
          min-width: 150px;
          background: transparent;
          border: 0;
          border-right: 1px solid var(--ink-700);
          color: var(--ink-400);
          padding: 22px 20px 20px;
          text-align: left;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: color 200ms, background 200ms;
        }
        .oem-tab:last-child { border-right: 0; }
        .oem-tab:hover { color: #fff; background: rgba(255,255,255,0.03); }
        .oem-tab.is-active { color: #fff; background: rgba(255,255,255,0.04); }
        .oem-tab-num {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.18em;
          color: var(--ink-500);
        }
        .oem-tab.is-active .oem-tab-num { color: var(--accent); }
        .oem-tab-label { font-size: 14px; letter-spacing: 0.06em; }
        .oem-tab-bar {
          position: absolute;
          left: 0; top: -1px;
          height: 3px;
          background: var(--accent);
          width: 0;
          animation: oemFill ${ROTATE_MS}ms linear forwards;
        }
        .oem-tab-bar.paused {
          width: 100%;
          animation: none;
          opacity: 0.6;
        }
        @keyframes oemFill {
          from { width: 0; }
          to   { width: 100%; }
        }

        .oem-copy { animation: oemCopyIn 500ms var(--ease-out); }
        @keyframes oemCopyIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .oem-image-stack {
          position: relative;
          background: #1a1517;
          aspect-ratio: 4 / 5;
          overflow: hidden;
        }
        .oem-image-slide {
          position: absolute; inset: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0;
          transition: opacity 700ms ease, transform 8000ms linear;
          transform: scale(1.04);
          filter: contrast(1.08);
        }
        .oem-image-slide.is-on {
          opacity: 1;
          transform: scale(1);
        }
        .oem-image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.7) 100%);
          z-index: 1;
        }
        .oem-image-stack .stripes {
          position: absolute; top: 22px; right: 22px;
          display: flex; flex-direction: column; gap: 4px; z-index: 2;
        }
        .oem-image-stack .stripes i { display: block; width: 56px; height: 4px; background: var(--redekop-yellow); }
        .oem-image-stack .stripes i:nth-child(odd) { background: var(--yellow-200); }

        .oem-stamp {
          position: absolute; left: 26px; bottom: 26px; z-index: 2;
          font-family: var(--font-display);
          font-weight: 700;
          line-height: 0.86;
          text-transform: uppercase;
          color: #fff;
          text-shadow: 0 2px 24px rgba(0,0,0,0.6);
          animation: oemStampIn 600ms var(--ease-out);
        }
        .oem-stamp .s1 { display: block; font-size: clamp(46px, 5.4vw, 72px); }
        .oem-stamp .s2 { display: block; font-size: clamp(36px, 4.4vw, 60px); margin-top: 4px; }
        @keyframes oemStampIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .oem-counter {
          position: absolute; right: 22px; bottom: 22px; z-index: 2;
          font-family: var(--font-display);
          font-weight: 700;
          color: #fff;
          display: flex; align-items: baseline; gap: 4px;
          text-shadow: 0 2px 12px rgba(0,0,0,0.6);
        }
        .oem-counter .cur { font-size: 26px; }
        .oem-counter .sep { font-size: 18px; color: var(--ink-400); }
        .oem-counter .tot { font-size: 18px; color: var(--ink-400); }

        @media (max-width: 980px) {
          .oem-tabs { overflow-x: auto; flex-wrap: nowrap; }
          .oem-tab { flex: 0 0 auto; min-width: 180px; }
          .oem-image-stack { aspect-ratio: 4 / 3; }
        }
      `}</style>
    </section>
  );
}

window.X9Feature = OEMShowcase;
