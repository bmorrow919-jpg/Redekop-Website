/* global React */

/* ---- placeholder slot ----------------------------------------------- */
function AboutSlot({ tag, file, desc, dark, style }) {
  return (
    <div className={"slot" + (dark ? " dark" : "")} style={style}>
      {tag && <span className="tag">{tag}</span>}
      {file && <span className="file">{file}</span>}
      {desc && <span className="desc">{desc}</span>}
    </div>
  );
}

/* ---- 1. HERO -------------------------------------------------------- */
function AboutHero() {
  return (
    <section className="about-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="copy">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span className="here">About</span>
          </div>

          <div className="product">About Redekop</div>

          <h1>
            Developing innovative<br/>
            <span className="y">solutions for residue<br/>management</span> since 1985.
          </h1>

          <p className="sub">
            From a 35,000 sq&nbsp;ft manufacturing plant outside of Saskatoon, Saskatchewan, we build the harvest technologies that move farmers forward, in fields globally.
          </p>

          <div className="ctas">
            <a href="#contact" className="btn-redekop"><span>Get in touch</span></a>
            <a href="#story" className="btn-redekop is-light"><span>Our story</span></a>
          </div>
        </div>

        <div className="art">
          <img
            src="assets/about/facility.jpg"
            alt="Redekop manufacturing facility outside Saskatoon, Saskatchewan"
          />
        </div>
      </div>
    </section>
  );
}

/* ---- 2. STATS STRIP ------------------------------------------------- */
function AboutStats() {
  const stats = [
    { k: "1985",        lbl: "Founded" },
    { k: "25,000",      suf: "+", lbl: "Combines worldwide" },
    { k: "35,000",      suf: "sq ft", lbl: "Manufacturing plant" },
    { k: "Saskatoon",   lbl: "Saskatchewan · Canada" },
  ];
  return (
    <section className="about-stats" data-screen-label="02 Stats">
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

/* ---- 3. STORY ------------------------------------------------------- */
function AboutStory() {
  return (
    <section className="about-story" id="story" data-screen-label="03 Story">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">01 · Who we are</span>
          <h2>
            From Saskatoon to every<br/>
            <span className="y">harvest that matters.</span>
          </h2>
        </div>
        <div className="body">
          <p className="lead">
            Redekop focuses on developing innovative harvest technologies that reduce labour and improve a farmer&apos;s profitability. We work closely with equipment manufacturers to develop and provide technological support for residue management equipment.
          </p>
          <p>
            In our 35,000 square foot manufacturing plant outside of Saskatoon, we use state&#8209;of&#8209;the&#8209;art manufacturing technologies to produce high&#8209;quality, dependable products for customers worldwide.
          </p>
          <p>
            Redekop is the leading supplier of straw chopper technology to combine manufacturers and has placed Redekop technology on over <strong>25,000 combine harvesters</strong> worldwide. In fact, Redekop straw and chaff management technology is now standard equipment on many new combine models.
          </p>
          <p>
            As a manufacturer of straw chopper upgrades for combines, Redekop has also turned its attention to harvest weed seed control, blade conversions, and engine air pre&#8209;cleaning, building a full system for clean, efficient, profitable harvesting.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---- 4. TIMELINE — milestones -------------------------------------- */
function AboutTimeline() {
  const milestones = [
    { year: "1985", t: "Founded in Saskatoon", d: "Redekop opens its doors with a focus on practical, farmer&#8209;first harvest equipment." },
    { year: "1995", t: "MAV Straw Chopper", d: "Launch of the MAV system, the first wide&#8209;cut, high&#8209;velocity chopper to truly spread residue across modern headers." },
    { year: "2010", t: "OEM partnerships", d: "Redekop technology becomes factory&#8209;fit on major North American and European combine lines." },
    { year: "2018", t: "Seed Control Unit", d: "Mechanical harvest weed&#8209;seed control hits the field, up to 98% kill rate in a single pass." },
    { year: "Today", t: "25,000+ combines, globally", d: "From the Canadian prairies to Australia, Europe and South America, Redekop runs every harvest." },
  ];
  return (
    <section className="about-timeline" data-screen-label="04 Timeline">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx on-dark">02 · 40 years of harvest</span>
          <h2>
            Forty years.<br/>
            <span className="y">One mission.</span>
          </h2>
        </div>

        <div className="rail">
          <div className="track" aria-hidden="true"></div>
          <div className="rows">
            {milestones.map((m, i) => (
              <div className="row" key={i}>
                <div className="dot" aria-hidden="true"></div>
                <div className="year">{m.year}</div>
                <h3>{m.t}</h3>
                <p dangerouslySetInnerHTML={{ __html: m.d }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 5. WHAT WE DO — capabilities ---------------------------------- */
function AboutCapabilities() {
  const caps = [
    {
      n: "01",
      t: "Residue management",
      d: "Straw choppers, blade conversions and tailboards that finely cut and uniformly spread crop residue across the widest cutterbars.",
      products: ["MAV Straw Chopper", "Blade Conversions"],
      href: "mav.html",
    },
    {
      n: "02",
      t: "Weed seed control",
      d: "Mechanical, single&#8209;pass crushing of weed seeds at harvest, resistance management built into the season you&apos;re already running.",
      products: ["SCU", "BSCU"],
      href: "scu.html",
    },
    {
      n: "03",
      t: "Engine air pre\u2011cleaning",
      d: "Patent&#8209;pending pre&#8209;cleaners that keep dust, dirt and crop debris out of your engine intake, for longest filter life and lowest downtime.",
      products: ["KAS Pre-Cleaner"],
      href: "kas.html",
    },
  ];
  return (
    <section className="about-caps" data-screen-label="05 Capabilities">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">03 · What we build</span>
          <h2>
            Three product families.<br/>
            <span className="y">One clean harvest.</span>
          </h2>
        </div>
        <div className="grid">
          {caps.map((c) => (
            <a className="cell" key={c.n} href={c.href}>
              <span className="num">{c.n}</span>
              <h3>{c.t}</h3>
              <div className="rule" aria-hidden="true"></div>
              <p dangerouslySetInnerHTML={{ __html: c.d }}></p>
              <div className="products">
                {c.products.map((p) => <span key={p} className="chip">{p}</span>)}
              </div>
              <span className="arrow" aria-hidden="true">
                <span className="line"></span>
                <span className="head"></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 6. OEM partners ------------------------------------------------ */
function AboutPartners() {
  const partners = [
    { name: "John Deere",  img: "assets/imagery/combine-x9-field.jpg" },
    { name: "Case IH",     img: "assets/imagery/oem-case-afx.jpg" },
    { name: "Claas",       img: "assets/imagery/oem-claas-lexion.jpg" },
    { name: "Fendt",       img: "assets/imagery/oem-fendt.jpg" },
    { name: "New Holland", img: "assets/imagery/oem-newholland-cr.jpg" },
  ];
  return (
    <section className="about-partners" data-screen-label="06 OEM Partners">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">04 · OEM partners</span>
          <h2>
            Factory&#8209;fit on the names<br/>
            <span className="y">you already trust.</span>
          </h2>
          <p className="lead">
            Redekop straw and chaff management technology is now standard equipment on many new combine models, built into the line by the manufacturers who run it.
          </p>
        </div>
        <div className="rail" role="list">
          {partners.map((p) => (
            <div className="logo" key={p.name} role="listitem">
              <div className="thumb" style={{ backgroundImage: `url(${p.img})` }} aria-hidden="true"></div>
              <span className="label">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 7. FACILITY break / banner ------------------------------------ */
function AboutBreak() {
  return (
    <section className="about-break" data-screen-label="07 Field Break" aria-hidden="false">
      <div className="bg"></div>
      <div className="veil"></div>
      <div className="stripes" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="copy">
          <span className="eyebrow">Built in Saskatoon</span>
          <h2>
            Engineered on the prairie,<br/>
            <span className="y">running every harvest.</span>
          </h2>
          <p>
            Redekop is privately held, family&#8209;rooted, and built by the same kind of people who put our products to work, farmers, fabricators, machinists and engineers from across Western Canada.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---- 8. CTA --------------------------------------------------------- */
function AboutCTA() {
  return (
    <section className="about-cta" id="contact" data-screen-label="08 CTA">
      <div className="wrap">
        <div className="stripes" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <h2>
          Let&apos;s talk<span className="y">.</span>
        </h2>
        <p>
          Whether you&apos;re a farmer, a fleet manager, a dealer or an OEM partner, we&apos;d like to hear from you.
        </p>
        <div className="buttons">
          <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>Contact Us</span></a>
          <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()}><span>Sales Network</span></a>
          <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>Careers</span></a>
        </div>
      </div>
    </section>
  );
}

window.AboutHero = AboutHero;
window.AboutStats = AboutStats;
window.AboutStory = AboutStory;
window.AboutTimeline = AboutTimeline;
window.AboutCapabilities = AboutCapabilities;
window.AboutPartners = AboutPartners;
window.AboutBreak = AboutBreak;
window.AboutCTA = AboutCTA;
