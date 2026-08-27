/* global React */

/* ============================================================
   BYO PAGE — Build Your Own
   ------------------------------------------------------------
   Two-path landing page that replaces the legacy form-tool:
     1) Build Yours Now      — open configurator for end users
     2) Dealer Access Build  — gated build flow for dealers
   ============================================================ */

/* ---- 1. HERO -------------------------------------------------------- */
function BYOHero() {
  return (
    <section className="byo-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <span className="here">Build Your Own</span>
        </div>

        <div className="product">The Redekop Configurator</div>

        <h1>
          Find the right fit<br/>
          <span className="y">for your combine.</span>
        </h1>

        <p className="sub">
          Pick your make, your model, your year — we&apos;ll line up every Redekop product engineered for that machine, from MAV straw choppers to Seed Control Units, Blade Kits and KAS pre&#8209;cleaners.
        </p>

        <div className="meta">
          <div className="item">
            <div className="k">5</div>
            <div className="lbl">OEM Combine Brands</div>
          </div>
          <div className="item">
            <div className="k">40+</div>
            <div className="lbl">Compatible Models</div>
          </div>
          <div className="item">
            <div className="k">4</div>
            <div className="lbl">Product Lines</div>
          </div>
          <div className="item">
            <div className="k">~3 min</div>
            <div className="lbl">To a Quote-Ready Build</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 2. PATHS — the two CTAs --------------------------------------- */
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function BYOPaths() {
  const open = (href) => (e) => {
    e.preventDefault();
    // Hook target — in production these go to the configurator routes.
    // Kept as a no-op placeholder so the page is safe to ship.
  };

  return (
    <section className="byo-paths" id="start" data-screen-label="02 Paths">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">01 · Start your build</span>
            <h2>
              Two ways in.<br/>
              <span className="y">One configurator.</span>
            </h2>
          </div>
          <p className="lead">
            Building a quote for your own farm? Hit the first card. Logging in as a Redekop dealer to spec a customer&apos;s combine? Take the second.
          </p>
        </div>

        <div className="grid">
          {/* PATH 1 — Public build */}
          <a className="path-card" href="#" onClick={open("#public")}>
            <div className="num">Option 01</div>
            <span className="badge">Open access</span>
            <h3>
              Build yours<br/>now
            </h3>
            <p className="desc">
              Walk through it on your own. Pick your combine, choose the Redekop products you want fitted, and get a configuration you can send straight to your dealer for a quote.
            </p>
            <ul className="feats">
              <li>No login — start in seconds</li>
              <li>Live compatibility check as you build</li>
              <li>Email the spec to your local Redekop dealer</li>
              <li>Save your build and come back later</li>
            </ul>

            <div className="action">
              <span className="btn-redekop"><span>Build Yours Now</span></span>
            </div>

            <div className="meta-row">
              <div className="m"><div className="v">~3 min</div><div className="l">Avg. build time</div></div>
              <div className="m"><div className="v">No login</div><div className="l">Just pick and go</div></div>
            </div>

            <div className="big-arrow" aria-hidden="true"><ArrowIcon /></div>
          </a>

          {/* PATH 2 — Dealer build */}
          <a className="path-card dealer" href="#" onClick={open("#dealer")}>
            <div className="num">Option 02</div>
            <span className="badge">Dealer login</span>
            <h3>
              Dealer access<br/><span className="y">build</span>
            </h3>
            <p className="desc">
              For Redekop dealers spec&apos;ing a build on a customer&apos;s behalf. Sign in to see dealer pricing, lead times, serial-number lookups, and the full order workflow.
            </p>
            <ul className="feats">
              <li>Dealer net pricing &amp; margin tools</li>
              <li>Serial-number lookup and parts cross-reference</li>
              <li>Submit orders straight to Redekop ops</li>
              <li>Manage customer builds in one place</li>
            </ul>

            <div className="action">
              <span className="btn-redekop is-light"><span>Dealer Access Build</span></span>
            </div>

            <div className="meta-row">
              <div className="m"><div className="v">Secure</div><div className="l">Dealer sign-in required</div></div>
              <div className="m"><div className="v">Full catalogue</div><div className="l">Including service parts</div></div>
            </div>

            <div className="big-arrow" aria-hidden="true"><ArrowIcon /></div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---- 3. STEPS — how it works --------------------------------------- */
function BYOSteps() {
  const steps = [
    {
      n: "01",
      t: "Pick your combine",
      d: "Choose make, model and model year. We support Case IH AFX, Claas Lexion, Fendt, John Deere X9 and New Holland CR — and more on the way.",
    },
    {
      n: "02",
      t: "Choose your products",
      d: "MAV Straw Chopper, Seed Control Unit, Blade Kits, KAS Pre-Cleaner — only what fits your machine shows up.",
    },
    {
      n: "03",
      t: "Review the build",
      d: "See everything in one summary — products, options, OEM compatibility notes, and any service parts you should add.",
    },
    {
      n: "04",
      t: "Send to your dealer",
      d: "Hand the spec off to your local Redekop dealer for a quote and install scheduling. Or save it and come back to it.",
    },
  ];

  return (
    <section className="byo-steps" id="how" data-screen-label="03 How it works">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">02 · How it works</span>
            <h2>
              Four steps from<br/>
              <span className="y">combine to quote.</span>
            </h2>
          </div>
          <p className="lead">
            The configurator is the same one our dealers use. It checks compatibility against the Redekop parts master in real time, so what you build is what fits.
          </p>
        </div>

        <div className="rail">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="tick" aria-hidden="true"></div>
              <div className="num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 4. WHAT YOU CONFIGURE ----------------------------------------- */
function BYOWhat() {
  const brands = [
    { name: "John Deere X9", file: "assets/imagery/combine-x9-field.jpg" },
    { name: "Case IH AFX",   file: "assets/imagery/oem-case-afx.jpg" },
    { name: "Claas Lexion",  file: "assets/imagery/oem-claas-lexion.jpg" },
    { name: "Fendt",         file: "assets/imagery/oem-fendt.jpg" },
    { name: "New Holland CR", file: "assets/imagery/oem-newholland-cr.jpg" },
    { name: "More coming",   file: "" },
  ];

  const products = [
    { name: "MAV Chopper",   d: "Wide-cut, high-velocity straw chopper",       c: "12", u: "models" },
    { name: "SCU",           d: "Seed Control Unit — up to 98% weed seed kill", c: "9",  u: "models" },
    { name: "Blade Kits",    d: "OEM blade conversions for major combines",     c: "20", u: "kits"   },
    { name: "KAS Pre-Cleaner", d: "Engine air pre-cleaning for harsh dust",     c: "6",  u: "models" },
  ];

  return (
    <section className="byo-what" id="what" data-screen-label="04 What you configure">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx">03 · What you configure</span>
            <h2>
              Every brand we fit.<br/>
              <span className="y">Every product we ship.</span>
            </h2>
          </div>
          <p className="lead">
            Start with your combine. Five OEM lines are supported today, with new model years and product variants added as our engineering team validates them.
          </p>
        </div>

        <div className="grid">
          <div className="brands">
            <h4>Combine Brands</h4>
            <div className="list">
              {brands.map((b, i) => (
                <div className="brand" key={i}>
                  {b.file && (
                    <div className="thumb" style={{ backgroundImage: `url("${b.file}")` }} />
                  )}
                  <span className="name">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="products">
            <h4>Product Lines</h4>
            {products.map((p, i) => (
              <div className="row" key={i}>
                <div>
                  <div className="pname">{p.name}</div>
                  <div className="pdesc">{p.d}</div>
                </div>
                <div className="pcount">{p.c}<span className="u">{p.u}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 5. DEALER BENEFITS -------------------------------------------- */
function BYODealer() {
  const cells = [
    { t: "Net pricing",    d: "Dealer cost, MSRP and your margin — all on one screen." },
    { t: "Order workflow", d: "Submit to Redekop ops with PO, ship-to and install notes attached." },
    { t: "Serial lookup",  d: "Pull a customer&apos;s combine by serial and cross-reference fitted parts." },
    { t: "Customer builds", d: "Manage open quotes and saved configurations for every customer." },
  ];

  return (
    <section className="byo-dealer" id="dealer" data-screen-label="05 Dealer">
      <div className="wrap">
        <div className="copy">
          <span className="eyebrow">Dealer access build</span>
          <h2>
            Built for the<br/>
            <span className="y">people behind the counter.</span>
          </h2>
          <p>
            Dealer access unlocks the full configurator: net pricing, serial-number lookup, full parts cross-reference, and a one-click handoff into Redekop&apos;s order system. If you sell Redekop, this is your tool.
          </p>
          <div className="ctas">
            <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()}><span>Dealer Sign In</span></a>
            <a href="sales.html" className="btn-redekop is-ghost-dark"><span>Become a Dealer</span></a>
          </div>
        </div>
        <div className="benefits">
          {cells.map((c, i) => (
            <div className="cell" key={i}>
              <h5>{c.t}</h5>
              <p dangerouslySetInnerHTML={{ __html: c.d }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 6. FAQ -------------------------------------------------------- */
function BYOFAQ() {
  const items = [
    {
      q: "Do I need an account to build?",
      a: "No. The public configurator is open — pick your combine, build a spec, and email it to your dealer. Save-and-resume uses a quick email link, no password.",
    },
    {
      q: "Will the build show pricing?",
      a: "The public build shows MSRP guidance and points you to your local dealer for a firm quote. Dealer access shows net pricing and lead times in real time.",
    },
    {
      q: "What combines are supported?",
      a: "Case IH AFX, Claas Lexion, Fendt, John Deere X9 and New Holland CR are live today. If your machine isn&apos;t listed, contact us — we may have something in validation.",
    },
    {
      q: "Can I save a build and come back?",
      a: "Yes. Save it to a magic-link email and resume from any device. Dealer accounts keep all customer builds in one shared workspace.",
    },
    {
      q: "How do I become a Redekop dealer?",
      a: "Reach out via the Sales Network page. We&apos;ll connect you with your regional Redekop rep to walk through dealer onboarding.",
    },
    {
      q: "What if I have an unusual setup?",
      a: "Talk to a dealer first — they can flag edge cases (older serial ranges, mixed OEM headers) before submitting an order. Or get in touch with us directly.",
    },
  ];

  return (
    <section className="byo-faq" id="faq" data-screen-label="06 FAQ">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">04 · Questions</span>
          <h2>
            What people<br/>
            <span className="y">usually ask first.</span>
          </h2>
        </div>
        <div className="list">
          {items.map((it, i) => (
            <div className="q" key={i}>
              <h4>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                {it.q}
              </h4>
              <p dangerouslySetInnerHTML={{ __html: it.a }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 7. FINAL CTA -------------------------------------------------- */
function BYOCTA() {
  return (
    <section className="byo-cta" id="cta" data-screen-label="07 CTA">
      <div className="wrap">
        <div>
          <h2>
            Ready to<br/>
            spec yours?
          </h2>
          <p>
            Pick the path that fits and start your build. Both flows land in the same Redekop configurator — only the access level changes.
          </p>
        </div>
        <div className="ctas">
          <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>Build Yours Now</span></a>
          <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()}><span>Dealer Access Build</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---- PAGE EXPORT --------------------------------------------------- */
function BYOPage() {
  return (
    <React.Fragment>
      <BYOHero />
      <BYOPaths />
      <BYOSteps />
      <BYOWhat />
      <BYODealer />
      <BYOFAQ />
      <BYOCTA />
    </React.Fragment>
  );
}

Object.assign(window, { BYOPage, BYOHero, BYOPaths, BYOSteps, BYOWhat, BYODealer, BYOFAQ, BYOCTA });
