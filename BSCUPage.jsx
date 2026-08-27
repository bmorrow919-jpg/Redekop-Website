/* global React */
const { useState: useStateBSCU } = React;

/* ---- 1. HERO ----------------------------------------------------------- */
function BSCUHero() {
  return (
    <section className="bscu-hero" data-screen-label="01 Hero">
      <div className="wrap">
        <div>
          <div className="breadcrumb">
            <a href="index.html">Products</a>
            <span className="sep">/</span>
            <span>Harvest Weed Seed Control</span>
            <span className="sep">/</span>
            <span className="here">BSCU</span>
          </div>

          <div className="status">
            <span className="pulse"></span>
            Coming Soon
          </div>

          <div className="product">The BSCU</div>

          <h1>
            Neutralizing weeds<br/>
            is <span className="y">light work.</span>
          </h1>

          <p className="sub">
            The next generation of Harvest Weed Seed Control from Redekop. The BSCU uses targeted Blue Light and Mid-Infrared to neutralize weed seeds directly in the residue stream, no crushing, no chemistry, no compromise on throughput.
          </p>

          <div className="ctas">
            <a href="#notify" className="btn-redekop"><span>Get Notified</span></a>
            <a href="#how" className="btn-redekop is-light"><span>How it works</span></a>
          </div>
        </div>

        <div className="glyph">
          <div className="meta-line">Next Generation · 202X</div>
          <div className="stripes" aria-hidden="true">
            <i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <div className="meta-line">Light-based · Non-mechanical</div>
        </div>
      </div>
    </section>
  );
}

/* ---- 2. HOW IT WORKS — Video + 3 step cards --------------------------- */
function BSCUHow() {
  return (
    <section className="bscu-how" id="how" data-screen-label="02 How It Works">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">01 · How the BSCU works</span>
            <h2>
              Three bands of light.<br/>
              <span className="y">Zero moving parts.</span>
            </h2>
          </div>
          <p className="lead">
            The BSCU intercepts the residue stream from your combine and exposes it to a calibrated sequence of light, disrupting the seed coat, denaturing the embryo, and rendering weed seeds non-viable before they hit your field.
          </p>
        </div>

        <div className="stage">
          <span className="badge">Watch · BSCU cross-section</span>
          <span className="corners" aria-hidden="true">
            <i className="tl"></i><i className="tr"></i><i className="bl"></i><i className="br"></i>
          </span>
          <video
            src="assets/bscu/cross-section.mp4"
            controls
            preload="metadata"
            playsInline
            autoPlay
            loop
            muted
          />
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">Step 01</div>
            <h3>Capture</h3>
            <p>
              Chaff and small material from the threshing rotor are diverted into the BSCU chamber, capturing weed seeds at the source, in a single harvest pass.
            </p>
            <span className="tag">From the combine</span>
          </div>
          <div className="step">
            <div className="step-num">Step 02</div>
            <h3>Blue Light</h3>
            <p>
              High-intensity blue light targets the outer seed coat, disrupting the protective layer that resistant weed seeds rely on to germinate next season.
            </p>
            <span className="tag">Seed coat</span>
          </div>
          <div className="step">
            <div className="step-num">Step 03</div>
            <h3>Mid-Infrared</h3>
            <p>
              Calibrated mid-infrared denatures the embryo and shoot apex, neutralizing seed viability while the residue keeps moving through the combine at full speed.
            </p>
            <span className="tag">Embryo · Shoot Apex</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 3. WHY THE BSCU --------------------------------------------------- */
function BSCUWhy() {
  const pillars = [
    {
      n: "01",
      title: "Chemical-free resistance",
      desc: "Tackles herbicide resistance without adding another chemistry. Reduces reliance on spray programs and the costs that come with them.",
    },
    {
      n: "02",
      title: "Non-mechanical",
      desc: "No mills. No wear parts in the kill chamber. Light does the work, meaning fewer service intervals and a longer in-field life.",
    },
    {
      n: "03",
      title: "Future-proof platform",
      desc: "Built to scale with your operation. Designed to integrate with the same OEM platforms Redekop already supports, John Deere, Case IH, New Holland, Claas, and AGCO.",
    },
  ];

  return (
    <section className="bscu-why" data-screen-label="03 Why BSCU">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">02 · Why the BSCU</span>
          <h2>
            A new kind of<br/>weed seed control.
          </h2>
        </div>

        <div className="grid">
          {pillars.map((p) => (
            <div className="card" key={p.n}>
              <span className="accent" aria-hidden="true"></span>
              <span className="num">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 4. NOTIFY / EARLY ACCESS ----------------------------------------- */
function BSCUNotify() {
  const [interest, setInterest] = useStateBSCU({ launch: true, demo: false, dealer: false, research: false });
  const toggle = (k) => setInterest((p) => ({ ...p, [k]: !p[k] }));

  return (
    <section className="bscu-notify" id="notify" data-screen-label="04 Notify">
      <div className="wrap">
        <div>
          <span className="sec-idx on-dark">03 · Be the first to know</span>
          <h2>
            Get on the<br/>
            <span className="y">BSCU shortlist.</span>
          </h2>
          <p className="lead">
            The BSCU is in development at Redekop's Saskatoon facility. Add your name and we'll reach out the moment we open the next round of dealer briefings and field testing.
          </p>
          <ul className="bullet-yellow on-dark">
            <li>First-look access at launch announcement</li>
            <li>Priority for field-test partner invitations</li>
            <li>Early specs, brochures, and OEM compatibility list</li>
          </ul>
        </div>

        <div className="form">
          <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-400)", margin: "0 0 22px", letterSpacing: "0.06em" }}>
            <span style={{ color: "var(--redekop-yellow)" }}>*</span> indicates required fields
          </p>

          <div className="row">
            <div className="field">
              <label>First Name <span className="req">*</span></label>
              <input type="text" />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="field">
            <label>Email <span className="req">*</span></label>
            <input type="email" />
          </div>

          <div className="row">
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
              <label>Combine Make & Model</label>
              <input type="text" placeholder="e.g. John Deere X9 1100" />
            </div>
          </div>

          <div className="field">
            <label>What are you interested in?</label>
            <div className="checks">
              <label className="check"><input type="checkbox" checked={interest.launch} onChange={() => toggle("launch")} /> Launch announcement</label>
              <label className="check"><input type="checkbox" checked={interest.demo} onChange={() => toggle("demo")} /> Field test partner</label>
              <label className="check"><input type="checkbox" checked={interest.dealer} onChange={() => toggle("dealer")} /> Dealer briefing</label>
              <label className="check"><input type="checkbox" checked={interest.research} onChange={() => toggle("research")} /> Research collaboration</label>
            </div>
          </div>

          <div className="submit-row">
            <button className="btn-redekop" onClick={(e) => e.preventDefault()} style={{ border: 0, cursor: "pointer" }}>
              <span>Notify Me</span>
            </button>
            <span className="small">We'll only use this to reach out about the BSCU.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.BSCUHero = BSCUHero;
window.BSCUHow = BSCUHow;
window.BSCUWhy = BSCUWhy;
window.BSCUNotify = BSCUNotify;
