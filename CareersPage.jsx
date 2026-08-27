/* global React */
const { useState: useCareersState } = React;

/* ============================================================
   CAREERS PAGE
   Sections:
     1. Hero
     2. Why Redekop  (values)
     3. Life at Redekop  (image collage)
     4. Open Roles  (filterable)
     5. Benefits
     6. CTA
   ============================================================ */

/* ---- 1. HERO ------------------------------------------------------- */
function CareersHero() {
  return (
    <section className="careers-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <a href="about.html">Company</a>
          <span className="sep">/</span>
          <span className="here">Careers</span>
        </div>

        <div className="product">Careers at Redekop</div>

        <h1>
          Build the future<br/>
          <span className="y">of harvest.</span>
        </h1>

        <p className="sub">
          For 50 years, we&apos;ve engineered the equipment that helps farmers produce more with less. Join the team building what comes next — straight out of Saskatoon, working in fields around the world.
        </p>

        <div className="meta">
          <div className="item">
            <div className="k">50+</div>
            <div className="lbl">Years in Saskatoon</div>
          </div>
          <div className="item">
            <div className="k">90+</div>
            <div className="lbl">Team members</div>
          </div>
          <div className="item">
            <div className="k">5</div>
            <div className="lbl">Continents shipped to</div>
          </div>
          <div className="item">
            <div className="k">6</div>
            <div className="lbl">Open roles today</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 2. WHY REDEKOP ------------------------------------------------ */
function CareersValues() {
  const values = [
    {
      n: "01",
      t: "Engineered, not assembled",
      d: "We don&apos;t rebadge other people&apos;s parts. Every product is designed in-house, tested in our own labs and proven in real fields.",
    },
    {
      n: "02",
      t: "Built on the prairies",
      d: "Saskatoon is home. Most of the team lives and farms within an hour of the shop, so the work stays close to the people who use it.",
    },
    {
      n: "03",
      t: "Ownership beats hierarchy",
      d: "Engineers, welders and field techs all weigh in on what we build. The best idea wins, regardless of where it comes from.",
    },
    {
      n: "04",
      t: "Long horizon, fast moves",
      d: "Family-owned since 1968. We make decisions for the next decade, not the next quarter — and we move quickly when we&apos;ve made up our minds.",
    },
  ];

  return (
    <section className="careers-values" data-screen-label="02 Why Redekop">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">01 · Why Redekop</span>
            <h2>
              A company<br/>
              <span className="y">worth your career.</span>
            </h2>
          </div>
          <p className="lead">
            We&apos;re a family-owned manufacturer in Saskatoon, Saskatchewan — small enough that you&apos;ll know everyone&apos;s name, big enough that what you build runs in combines on five continents.
          </p>
        </div>

        <div className="grid">
          {values.map((v) => (
            <div className="value" key={v.n}>
              <div className="tick" aria-hidden="true"></div>
              <div className="num">{v.n}</div>
              <h3>{v.t}</h3>
              <p dangerouslySetInnerHTML={{ __html: v.d }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 3. LIFE AT REDEKOP ------------------------------------------- */
function CareersLife() {
  const tiles = [
    { cls: "t-1", tag: "On the floor", h: "Where the steel meets the field.",   img: "assets/about/facility.jpg" },
    { cls: "t-2", tag: "Engineering", h: "Design rooms next to the shop.",     img: "assets/imagery/oem-claas-lexion.jpg" },
    { cls: "t-3", tag: "Validation",  h: "Test on real combines.",             img: "assets/imagery/combine-x9-field.jpg" },
    { cls: "t-4", tag: "Saskatoon",   h: "A short drive from the prairie.",    img: "assets/imagery/combine-x9-yard.jpg" },
    { cls: "t-5", tag: "In the field", h: "We follow the harvest globally.",   img: "assets/imagery/oem-newholland-cr.jpg" },
  ];

  return (
    <section className="careers-life" data-screen-label="03 Life">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">02 · Life at Redekop</span>
            <h2>
              What it&apos;s like<br/>
              <span className="y">to work here.</span>
            </h2>
          </div>
          <p className="lead">
            Open shop floor. Office desks within earshot of welders. Combines in the yard most weeks of the year. We hire people who like to see the thing they made running in a field by Tuesday.
          </p>
        </div>

        <div className="grid">
          {tiles.map((t, i) => (
            <div className={"tile " + t.cls} key={i}>
              <div className="bg" style={t.img ? { backgroundImage: `url("${t.img}")` } : {}}></div>
              <div className="cap">
                <span className="tag">{t.tag}</span>
                <h4>{t.h}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 4. OPEN ROLES ------------------------------------------------ */
const ROLES = [
  {
    title: "Senior Mechanical Design Engineer",
    dept: "Engineering",
    location: "Saskatoon, SK",
    type: "Full-time",
  },
  {
    title: "Welding Fabricator (CWB)",
    dept: "Production",
    location: "Saskatoon, SK",
    type: "Full-time",
  },
  {
    title: "Field Service Technician",
    dept: "Service",
    location: "Saskatoon / On the road",
    type: "Full-time",
  },
  {
    title: "Production Supervisor — 2nd Shift",
    dept: "Production",
    location: "Saskatoon, SK",
    type: "Full-time",
  },
  {
    title: "Quality Assurance Lead",
    dept: "Production",
    location: "Saskatoon, SK",
    type: "Full-time",
  },
  {
    title: "Marketing Coordinator",
    dept: "Marketing",
    location: "Saskatoon, SK",
    type: "Full-time",
  },
];

function ArrowR() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function CareersRoles() {
  const [filter, setFilter] = useCareersState("All");
  const depts = ["All", ...Array.from(new Set(ROLES.map((r) => r.dept)))];
  const counts = depts.reduce((acc, d) => {
    acc[d] = d === "All" ? ROLES.length : ROLES.filter((r) => r.dept === d).length;
    return acc;
  }, {});
  const shown = filter === "All" ? ROLES : ROLES.filter((r) => r.dept === filter);

  return (
    <section className="careers-roles" id="open-roles" data-screen-label="04 Open Roles">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">03 · Open roles</span>
            <h2>
              Six ways in<br/>
              <span className="y">to join the team.</span>
            </h2>
          </div>
          <p className="lead">
            All roles are based out of our Saskatoon facility unless noted. Field Service involves regular travel through harvest season. We hire year-round — apply even if your fit is a few months away.
          </p>
        </div>

        <div className="filters" role="tablist" aria-label="Filter roles by department">
          {depts.map((d) => (
            <button
              key={d}
              className={"filter" + (filter === d ? " is-active" : "")}
              onClick={() => setFilter(d)}
              type="button"
            >
              {d}<span className="count">{counts[d]}</span>
            </button>
          ))}
        </div>

        <div className="list">
          {shown.length === 0 ? (
            <div className="empty">
              <h3>No open roles in this department.</h3>
              <p>Check back soon — or send us your resume.</p>
            </div>
          ) : shown.map((r, i) => (
            <div className="role" key={r.title}>
              <div className="idx">{String(i + 1).padStart(2, "0")}</div>
              <div className="title">{r.title}</div>
              <div className="meta">
                Department
                <strong>{r.dept}</strong>
              </div>
              <div className="meta">
                Location
                <strong>{r.location}</strong>
              </div>
              <div className="meta">
                Type
                <strong>{r.type}</strong>
              </div>
              <a className="apply" href="#apply" onClick={(e) => e.preventDefault()}>
                Apply <ArrowR />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 5. BENEFITS -------------------------------------------------- */
function BenefitIcon({ name }) {
  const p = {
    width: 22, height: 22, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "health":   return <svg {...p}><path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z"/></svg>;
    case "rrsp":     return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "tools":    return <svg {...p}><path d="M14.7 6.3a4 4 0 0 1 5 5l-2-2-3 3 2 2a4 4 0 0 1-5-5l-7.7 7.7a2 2 0 0 0 2.8 2.8L14.7 13"/></svg>;
    case "boots":    return <svg {...p}><path d="M3 14h14v6H3zM3 14V6a3 3 0 0 1 6 0v8M9 8h8M9 11h8"/></svg>;
    case "growth":   return <svg {...p}><path d="M3 17l6-6 4 4 8-8M14 7h7v7"/></svg>;
    case "family":   return <svg {...p}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M14 20c0-2 1.5-4 4-4s3 1.5 3 3"/></svg>;
    case "lunch":    return <svg {...p}><path d="M4 21h16M5 15a7 7 0 0 1 14 0v3H5zM12 4v4M9 6h6"/></svg>;
    case "vacation": return <svg {...p}><path d="M12 2v6M3 12h6M21 12h-6M12 22v-6"/><circle cx="12" cy="12" r="3"/></svg>;
    case "training": return <svg {...p}><path d="M2 9l10-5 10 5-10 5L2 9zM6 11v5a8 4 0 0 0 12 0v-5"/></svg>;
    default: return null;
  }
}

function CareersBenefits() {
  const items = [
    { ico: "health",   t: "Full health benefits",   d: "100% employer-paid medical, dental and vision for you and your family — from day 31." },
    { ico: "rrsp",     t: "Matched RRSP",          d: "Up to 6% employer match on your retirement contributions. Vests immediately." },
    { ico: "vacation", t: "Generous time off",     d: "Three weeks vacation to start, four after five years, plus paid winter shutdown between Christmas and New Year&apos;s." },
    { ico: "tools",    t: "Annual tool allowance", d: "An annual stipend for personal tools and safety gear — yours to keep." },
    { ico: "boots",    t: "Boots &amp; PPE",       d: "We buy your CSA-approved boots, ear pro, eye pro, gloves and FR clothing where it applies." },
    { ico: "training", t: "Paid certifications",   d: "Welding, forklift, CSTS, AutoCAD, SolidWorks — we pay for the certs and the time to take them." },
    { ico: "growth",   t: "Career path",           d: "Welder to lead-hand to production supervisor to plant manager. We hire from within first, every time." },
    { ico: "family",   t: "Family-first culture",  d: "Family-owned since 1968. Reasonable hours, predictable shifts, and a shop that closes when school does at Christmas." },
    { ico: "lunch",    t: "Team lunches",          d: "Fridays in the lunchroom, on the company. Plus barbeques in summer and the legendary Redekop staff Christmas party." },
  ];

  return (
    <section className="careers-benefits" data-screen-label="05 Benefits">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">04 · Benefits</span>
            <h2>
              Treated well<br/>
              <span className="y">because it&apos;s the right thing.</span>
            </h2>
          </div>
          <p className="lead">
            Competitive pay, real benefits, predictable hours and a long history of looking after our people. The basics — done properly.
          </p>
        </div>

        <div className="grid">
          {items.map((it, i) => (
            <div className="cell" key={i}>
              <span className="ico" aria-hidden="true"><BenefitIcon name={it.ico} /></span>
              <h5 dangerouslySetInnerHTML={{ __html: it.t }} />
              <p dangerouslySetInnerHTML={{ __html: it.d }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 6. CTA ------------------------------------------------------- */
function CareersCTA() {
  return (
    <section className="careers-cta" id="apply" data-screen-label="06 CTA">
      <div className="wrap">
        <div>
          <h2>
            Don&apos;t see your role?<br/>
            Tell us anyway.
          </h2>
          <p>
            We hire year-round and we&apos;re always interested in people who want to build for the harvest. Send your resume and a quick note about what you&apos;re looking for — we read every one.
          </p>
        </div>
        <div className="ctas">
          <a href="mailto:careers@redekopmfg.com" className="btn-redekop"><span>Send Resume</span></a>
          <a href="contact.html" className="btn-redekop is-light"><span>Contact Us</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---- PAGE EXPORT -------------------------------------------------- */
function CareersPage() {
  return (
    <React.Fragment>
      <CareersHero />
      <CareersValues />
      <CareersLife />
      <CareersRoles />
      <CareersBenefits />
      <CareersCTA />
    </React.Fragment>
  );
}

Object.assign(window, { CareersPage, CareersHero, CareersValues, CareersLife, CareersRoles, CareersBenefits, CareersCTA });
