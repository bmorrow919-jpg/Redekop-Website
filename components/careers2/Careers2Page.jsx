/* global React */
const { useState: useCareers2State } = React;

/* ============================================================
   CAREERS PAGE — v2
   Content ported from redekopmfg.com/career-opportunities/
   Sections: hero · why work with us · who we're looking for ·
             core values · open positions · 3-step application
   ============================================================ */

/* ---- 1. HERO ------------------------------------------------------- */
function C2Hero() {
  return (
    <section className="c2-hero" data-screen-label="01 Hero">
      <div className="c2-hero-photo" style={{ backgroundImage: 'url("assets/about/hero-aerial.jpg")' }}></div>
      <div className="c2-hero-scrim"></div>
      <div className="wrap">
        <div className="c2-crumbs">
          <a href="index.html">Home</a><span>/</span><em>Careers</em>
        </div>
        <div className="c2-eyebrow"><span className="rule"></span><span>Careers at Redekop</span></div>
        <h1>Interested in joining<br /><span className="y">the Redekop team?</span></h1>
        <p className="lead">We are pioneers in agricultural innovation, committed to developing cutting-edge solutions that empower farmers around the globe.</p>
        <div className="c2-ctas">
          <a href="#positions" className="btn-redekop"><span>Open Positions</span></a>
          <a href="#apply" className="btn-redekop is-ghost"><span>Apply Now</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---- 2. INTRO + WHY WORK WITH US ---------------------------------- */
const C2_WHY = [
  ["Innovative solutions", "Be part of a team that is revolutionizing agriculture with advanced technologies designed to improve efficiency and sustainability."],
  ["Global impact", "Our products are used by farmers worldwide, making a tangible difference in how food is grown and harvested."],
  ["Collaborative culture", "We value teamwork, creativity and mutual respect, and foster an environment where your ideas and contributions truly matter."],
  ["Growth opportunities", "Whether you're just starting your career or looking to advance, we offer opportunities to develop your skills and achieve your professional goals."],
  ["Community focused", "Headquartered in Saskatoon, SK, we take pride in supporting our local community while maintaining a global outlook."],
];

function C2Why() {
  return (
    <section className="c2-why" data-screen-label="02 Why work with us">
      <div className="wrap">
        <div className="c2-why-intro">
          <span className="sec-idx">01 · Join the team</span>
          <h2>A legacy of excellence,<br /><span className="y">a forward-thinking approach.</span></h2>
          <p>At Redekop Manufacturing we design and manufacture world-class crop residue management equipment that helps maximize yield potential while promoting sustainable farming practices.</p>
        </div>
        <div className="c2-why-grid">
          {C2_WHY.map(([t, d], i) => (
            <div className="c2-why-cell" key={t}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 3. WHO WE'RE LOOKING FOR ------------------------------------- */
function C2Who() {
  return (
    <section className="c2-who" data-screen-label="03 Who we want">
      <div className="c2-who-photo" style={{ backgroundImage: 'url("assets/about/facility.jpg")' }}></div>
      <div className="c2-who-copy">
        <div className="wrap">
          <span className="sec-idx on-dark">02 · Who we&apos;re looking for</span>
          <h2>Every role plays<br /><span className="y">a vital part.</span></h2>
          <p>We seek passionate individuals who share our commitment to innovation, quality and sustainability. From engineering to production and sales, every role at Redekop plays a vital part in our mission to shape the future of agriculture.</p>
        </div>
      </div>
    </section>
  );
}

/* ---- 4. CORE VALUES ----------------------------------------------- */
const C2_VALUES = [
  ["Integrity", "We are honest and transparent in everything we do."],
  ["Innovation", "We embrace creativity and strive for continuous improvement."],
  ["Sustainability", "We are dedicated to creating solutions that support long-term environmental health."],
  ["Customer focus", "We prioritize the needs of farmers and their success in every product we design."],
];

function C2Values() {
  return (
    <section className="c2-values" data-screen-label="04 Core values">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">03 · Our core values</span>
          <h2>What we hire for.</h2>
        </div>
        <div className="grid">
          {C2_VALUES.map(([t, d]) => (
            <div className="cell" key={t}>
              <div className="tick" aria-hidden="true"></div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 5. OPEN POSITIONS -------------------------------------------- */
/* Live site currently lists none. Add entries here to populate. */
const C2_POSITIONS = [];

function C2Positions() {
  return (
    <section className="c2-positions" id="positions" data-screen-label="05 Positions">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">04 · Available opportunities</span>
          <h2>Open positions.</h2>
        </div>
        {C2_POSITIONS.length === 0 ? (
          <div className="c2-empty">
            <div className="c2-empty-mark" aria-hidden="true"></div>
            <div>
              <h3>No available positions at this time.</h3>
              <p>We hire year-round and keep every application on file. Submit the form below and we&apos;ll be in touch when a role opens that fits.</p>
              <a href="#apply" className="btn-redekop"><span>Submit an Application</span></a>
            </div>
          </div>
        ) : (
          <div className="c2-roles">
            {C2_POSITIONS.map((r, i) => (
              <div className="c2-role" key={r.title}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="title">{r.title}</span>
                <span className="meta">{r.location}</span>
                <span className="meta">{r.type}</span>
                <a href="#apply">Apply</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { C2Hero, C2Why, C2Who, C2Values, C2Positions });
