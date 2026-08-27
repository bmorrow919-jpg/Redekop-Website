/* global React */
const { useState: useSeedingState } = React;

const IMG = {
  hero: "assets/seeding/47cab279.jpg",
  aerial: "assets/seeding/7fe9d713.jpg",
  toolbars: "assets/seeding/e4e3ba8a.jpg",
  openers: "assets/seeding/af09b471.jpg",
  carts: "assets/seeding/47cab279.jpg",
  metering: "assets/seeding/901261a2.jpg",
  redekopWhite: "assets/seeding/3b32ac9a.png",
  seedmaster: "assets/seeding/seedmaster-logo.svg",
};

function SeedingAnnounce() {
  return (
    <div className="sd-announce">
      <div className="wrap">
        <span className="dot"></span>
        <span className="txt">Australia exclusive · Redekop is an authorized SeedMaster dealer</span>
        <a href="#lines" className="lnk">See the lineup</a>
      </div>
    </div>
  );
}

/* Australian national flag, drawn to the official 1:2 ratio */
function AUFlag() {
  return (
    <svg viewBox="0 0 100 50" role="img" aria-label="Australia">
      <rect width="100" height="50" fill="#00247D" />
      <g transform="translate(0,0)">
        <path d="M0 0 L50 25 M50 0 L0 25" stroke="#fff" strokeWidth="5" />
        <path d="M0 0 L50 25 M50 0 L0 25" stroke="#CF142B" strokeWidth="2" />
        <path d="M25 0 V25 M0 12.5 H50" stroke="#fff" strokeWidth="8" />
        <path d="M25 0 V25 M0 12.5 H50" stroke="#CF142B" strokeWidth="4" />
      </g>
      <g fill="#fff">
        <circle cx="25" cy="37.5" r="4" />
        <circle cx="71" cy="9" r="2.6" />
        <circle cx="86" cy="20" r="2.6" />
        <circle cx="71" cy="33" r="2.6" />
        <circle cx="60" cy="22" r="1.7" />
        <circle cx="76" cy="21" r="2.6" />
      </g>
    </svg>
  );
}

function SeedingHero() {
  return (
    <section className="sd-hero" data-screen-label="01 Hero">
      <div className="sd-hero-photo" style={{ backgroundImage: 'url("' + IMG.hero + '")' }}></div>
      <div className="sd-hero-scrim"></div>
      <div className="wrap">
        <div className="sd-crumbs">
          <a href="index.html">Home</a><span>/</span>
          <a href="scu.html">Products</a><span>/</span>
          <a href="#lines">Seeding</a><span>/</span>
          <em>SeedMaster</em>
        </div>
        <div className="sd-eyebrow"><span className="rule"></span><span>Now Selling SeedMaster</span></div>
        <div className="sd-au"><span className="flag" aria-hidden="true"><AUFlag /></span><span className="k">Australia Exclusive</span></div>
        <h1>From First Seed<br /><span className="y">To Final Pass.</span></h1>
        <p className="lead">In Australia, Redekop is an authorized SeedMaster dealer carrying the full line of toolbars, openers, air carts and metering. The same shop that helps you manage residue at harvest can now set up your seeding system for the season.</p>
        <div className="sd-ctas">
          <a href="sales.html" className="btn-redekop"><span>Find a Dealer</span></a>
          <a href="#lines" className="btn-redekop is-ghost"><span>Browse Seeding</span></a>
        </div>
        <div className="sd-lockup">
          <img src={IMG.redekopWhite} alt="Redekop Manufacturing" />
          <span className="bar"></span>
          <img src={IMG.seedmaster} alt="SeedMaster" />
          <span className="bar"></span>
          <span className="sd-lockup-au"><AUFlag /><span>Authorized dealer<br /><strong>Australia only</strong></span></span>
        </div>
      </div>
    </section>
  );
}

function SeedingWhy() {
  const points = [
    ["One supplier, both passes", "Residue management and seeding equipment quoted, ordered and supported by the same people."],
    ["Seed into standing stubble", "SeedMaster openers are built to run in tall stubble, so the residue you already manage becomes moisture you keep."],
    ["Australian dealer network", "Sold, delivered and serviced through Redekop's Australian dealers — SeedMaster equipment is available from Redekop in Australia only."],
    ["Parts and service, in season", "Genuine SeedMaster parts stocked alongside MAV and SCU inventory, shipped when you need them."],
  ];
  return (
    <section className="sd-why" data-screen-label="02 Why">
      <div className="wrap">
        <div>
          <span className="sec-idx">Harvest to Seeding</span>
          <h2>Next Year&apos;s Crop Is Decided At Harvest.</h2>
          <p>Cut and spread residue evenly, keep the weed seed out of the field, and you have handed yourself a clean, level seedbed. What happens next is placement: depth, spacing, fertilizer separation.</p>
          <p>That is the half of the season Redekop did not build for. SeedMaster does, and in Australia we now sell and service the full line.</p>
        </div>
        <div className="sd-points">
          {points.map(([t, d]) => (
            <div className="sd-point" key={t}>
              <span className="dot"></span>
              <div>
                <div className="t">{t}</div>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeedingBand() {
  return (
    <section className="sd-band" data-screen-label="03 Band">
      <div className="sd-band-photo" style={{ backgroundImage: 'url("' + IMG.aerial + '")' }}></div>
      <div className="sd-band-copy">
        <div className="wrap">
          <div className="k">Precision, Simplified</div>
          <p>Every SeedMaster opener works independently, on-row packed and ground-following, placing each seed at the depth you set across rolling ground.</p>
        </div>
      </div>
    </section>
  );
}

function SeedingLineup() {
  const cards = [
    { t: "Toolbars", img: IMG.toolbars, pos: "40% 62%", d: "Single and dual-rank toolbars in widths to match your acres, built to carry the opener through variable ground without wandering." },
    { t: "Openers", img: IMG.openers, pos: "center 78%", d: "Active-hydraulic, ground-following openers with on-row packing, maintenance-free pivots and extended-wear knives. Single or dual shoot." },
    { t: "E Series Air Carts", img: IMG.carts, pos: "58% 46%", d: "High-capacity tanks with sectional metering and quick fill, sized so you spend the day seeding instead of loading." },
    { t: "Metering & Controls", img: IMG.metering, pos: "center 40%", d: "UltraPro metering for accurate canola rates down to the acre, with in-cab control of depth and product placement." },
  ];
  return (
    <section className="sd-lines" id="lines" data-screen-label="04 Lineup">
      <div className="wrap">
        <div className="sd-lines-head">
          <span className="sec-idx">Available Now Through Redekop In Australia</span>
          <h2>The SeedMaster Line</h2>
          <p className="sd-lines-note"><span className="flag" aria-hidden="true"><AUFlag /></span>Redekop is an authorized SeedMaster dealer in Australia. Outside Australia, contact SeedMaster directly.</p>
        </div>
        <div className="sd-grid">
          {cards.map((c) => (
            <article className="sd-card" key={c.t}>
              <div className="ph" style={{ backgroundImage: 'url("' + c.img + '")', backgroundPosition: c.pos }}></div>
              <div className="bd">
                <div className="t">{c.t}</div>
                <p>{c.d}</p>
                <a href="https://seedmaster.ca/" target="_blank" rel="noopener">More Info</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeedingCTA() {
  return (
    <section className="sd-cta" id="dealer" data-screen-label="05 Dealer CTA">
      <div className="wrap">
        <div>
          <span className="sec-idx on-dark">Talk to Redekop Australia</span>
          <h2>Find The Dealer Closest To Your Farm.</h2>
          <p>Tell us your combine, your acres and your seeding system. We will match a package and put you in touch with your nearest Australian dealer.</p>
        </div>
        <div className="sd-cta-btns">
          <a href="sales.html" className="btn-redekop"><span>Find a Dealer</span></a>
          <a href="contact.html" className="btn-redekop is-ghost"><span>Contact Us</span></a>
        </div>
      </div>
    </section>
  );
}

function SeedingTrademark() {
  return (
    <div className="sd-tm">
      <div className="wrap">
        <div className="sd-tm-logos">
          <img src={IMG.redekopWhite} alt="Redekop Manufacturing" />
          <span className="bar"></span>
          <img src={IMG.seedmaster} alt="SeedMaster" />
        </div>
        <p>SeedMaster and Precision, Simplified are trademarks of SeedMaster Manufacturing. Redekop is an authorized SeedMaster dealer in Australia only.</p>
      </div>
    </div>
  );
}

function SeedingPage() {
  return (
    <React.Fragment>
      <SeedingAnnounce />
      <SeedingHero />
      <SeedingWhy />
      <SeedingBand />
      <SeedingLineup />
      <SeedingCTA />
      <SeedingTrademark />
    </React.Fragment>
  );
}

Object.assign(window, { SeedingPage });
