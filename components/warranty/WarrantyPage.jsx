/* global React */
const { useState: useWarrantyState } = React;

/* ============================================================
   WARRANTY REGISTRATION PAGE
   ------------------------------------------------------------
   Reuses .form base from contact.css and .warranty-* from
   warranty.css. Sections: hero, why-register, two-section form.
   ============================================================ */

/* ---- 1. HERO ------------------------------------------------------- */
function WarrantyHero() {
  return (
    <section className="warranty-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <a href="#">Support</a>
          <span className="sep">/</span>
          <span className="here">Warranty</span>
        </div>

        <div className="product">Warranty Registration</div>

        <h1>
          Protect your investment.<br/>
          <span className="y">Register your Redekop.</span>
        </h1>

        <p className="sub">
          Registering your product makes sure your Redekop dealer network is ready to support you — faster service, parts on hand, and a direct line for updates the moment we ship them.
        </p>
      </div>
    </section>
  );
}

/* ---- 2. INTRO / WHY REGISTER -------------------------------------- */
function BenefitIcon({ name }) {
  const props = {
    width: 22, height: 22, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round",
  };
  if (name === "service") return (
    <svg {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  );
  if (name === "shield") return (
    <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  );
  if (name === "bell") return (
    <svg {...props}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
  );
  return null;
}

function WarrantyIntro() {
  const benefits = [
    {
      ico: "service",
      t: "Get faster service",
      d: "Registering gives us the information we need to support you promptly — your dealer, your serials, your install date, all on hand.",
    },
    {
      ico: "shield",
      t: "Protect your investment",
      d: "You&apos;ll be kept up-to-date on product updates, service bulletins and engineering changes for the equipment on your machine.",
    },
    {
      ico: "bell",
      t: "Stay informed",
      d: "Be the first to know about new Redekop products, money-saving offers and developments coming out of Saskatoon.",
    },
  ];

  return (
    <section className="warranty-intro" data-screen-label="02 Why register">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">01 · Warranty registration</span>
          <h2>
            Why registering<br/>
            <span className="y">is a smart move.</span>
          </h2>
          <p>
            Ensure that your Redekop dealer network is prepared to meet your needs by registering your product, whether purchased through a Redekop distributor or as part of an Original Equipment Manufacturer install.
          </p>
          <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}>
            <span>Warranty Policy</span>
          </a>
        </div>

        <div className="benefits">
          {benefits.map((b, i) => (
            <div className="benefit" key={i}>
              <span className="ico" aria-hidden="true"><BenefitIcon name={b.ico} /></span>
              <div>
                <h3>{b.t}</h3>
                <p dangerouslySetInnerHTML={{ __html: b.d }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 3. FORM ------------------------------------------------------- */
function WarrantyForm() {
  const [optIn, setOptIn] = useWarrantyState(true);
  const [submitted, setSubmitted] = useWarrantyState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: e.currentTarget.offsetTop - 100, behavior: "smooth" });
    }
  };

  if (submitted) {
    return (
      <section className="warranty-form-wrap" data-screen-label="03 Form (submitted)">
        <div className="wrap">
          <div className="warranty-form">
            <div className="section" style={{ textAlign: "center", padding: "64px 36px" }}>
              <div style={{
                width: 72, height: 72, margin: "0 auto 24px",
                background: "var(--redekop-yellow)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#231E20" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                  <polyline points="4 12 10 18 20 6"></polyline>
                </svg>
              </div>
              <div style={{
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "var(--redekop-yellow)", marginBottom: 8,
              }}>Registration received</div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 0.98,
                textTransform: "uppercase", color: "var(--redekop-black)",
                margin: "0 0 16px",
              }}>You&apos;re registered.</h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6,
                color: "var(--ink-600)", margin: "0 auto 28px", maxWidth: 540,
              }}>
                Thanks — we&apos;ve forwarded your registration to your selling dealer and added you to our Redekop customer roster. A confirmation is on its way to your email.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="index.html" className="btn-redekop"><span>Back to Home</span></a>
                <a href="#" className="btn-redekop is-light" onClick={(e) => { e.preventDefault(); setSubmitted(false); }}><span>Register Another</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="warranty-form-wrap" data-screen-label="03 Form">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">02 · Register your product</span>
          <h2>Fill out the details below.</h2>
          <p className="req-note">
            Fields marked with <span className="req">*</span> are required. Have your combine serial, Redekop product serial and install date handy.
          </p>
        </div>

        <form className="form warranty-form" onSubmit={onSubmit}>
          {/* ---------------- CUSTOMER ---------------- */}
          <div className="section">
            <div className="section-head">
              <span className="step">Step 01</span>
              <h3>Customer Information</h3>
            </div>

            <div className="row two">
              <div className="field">
                <label>Selling Dealer Name <span className="req">*</span></label>
                <input type="text" required placeholder="e.g. Prairie Ag Solutions" />
              </div>
              <div className="field">
                <label>Dealer Location <span className="req">*</span></label>
                <input type="text" required placeholder="City, Province / State" />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label>First Name <span className="req">*</span></label>
                <input type="text" required />
              </div>
              <div className="field">
                <label>Last Name <span className="req">*</span></label>
                <input type="text" required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Street Address <span className="req">*</span></label>
                <input type="text" required placeholder="123 Main Street" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Address Line 2</label>
                <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label>City <span className="req">*</span></label>
                <input type="text" required />
              </div>
              <div className="field">
                <label>State / Province / Region <span className="req">*</span></label>
                <input type="text" required />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label>ZIP / Postal Code <span className="req">*</span></label>
                <input type="text" required />
              </div>
              <div className="field">
                <label>Country <span className="req">*</span></label>
                <select required defaultValue="">
                  <option value="" disabled>Select a country</option>
                  <option>Canada</option>
                  <option>United States</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label>Phone <span className="req">*</span></label>
                <input type="tel" required placeholder="(306) 555-0100" />
              </div>
              <div className="field">
                <label>Email <span className="req">*</span></label>
                <input type="email" required placeholder="you@example.com" />
              </div>
            </div>
          </div>

          {/* ---------------- PRODUCT ---------------- */}
          <div className="section">
            <div className="section-head">
              <span className="step">Step 02</span>
              <h3>Product Information</h3>
            </div>

            <div className="row two">
              <div className="field">
                <label>Combine Make &amp; Model <span className="req">*</span></label>
                <input type="text" required placeholder="e.g. John Deere X9 1100" />
              </div>
              <div className="field">
                <label>Combine Serial Number <span className="req">*</span></label>
                <input type="text" required />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label>Hour Meter Reading at Install <span className="req">*</span></label>
                <input type="number" required min="0" placeholder="e.g. 250" />
              </div>
              <div className="field">
                <label>Date Installed <span className="req">*</span></label>
                <input type="date" required />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label>Redekop Product Type <span className="req">*</span></label>
                <select required defaultValue="">
                  <option value="" disabled>Select a product type</option>
                  <option>MAV Straw Chopper</option>
                  <option>Seed Control Unit (SCU)</option>
                  <option>BSCU</option>
                  <option>Blade Kit / Conversion</option>
                  <option>KAS Pre-Cleaner</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label>Redekop Product Serial <span className="req">*</span></label>
                <input type="text" required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Installed By <span className="req">*</span></label>
                <input type="text" required placeholder="Dealer technician, owner, or installer name" />
              </div>
            </div>
          </div>

          {/* ---------------- OPT-IN + SUBMIT ---------------- */}
          <div className="section">
            <label className="opt-in">
              <input
                type="checkbox"
                checked={optIn}
                onChange={(e) => setOptIn(e.target.checked)}
              />
              <span className="opt-box" aria-hidden="true"></span>
              <span className="opt-text">
                Stay up to date on Redekop products, service bulletins and harvest weed seed control solutions. You can unsubscribe at any time.
              </span>
            </label>
          </div>

          <div className="section submit-section">
            <button type="submit" className="btn-redekop"><span>Submit Registration</span></button>
            <p className="submit-hint">
              Your information is sent to Redekop Manufacturing and your selling dealer. Questions? <a href="contact.html">Get in touch</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---- 4. WRAPPER ---------------------------------------------------- */
function WarrantyPage() {
  return (
    <React.Fragment>
      <WarrantyHero />
      <WarrantyIntro />
      <WarrantyForm />
    </React.Fragment>
  );
}

Object.assign(window, { WarrantyPage, WarrantyHero, WarrantyIntro, WarrantyForm });
