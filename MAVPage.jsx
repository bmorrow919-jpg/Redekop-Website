/* global React */

/* ---- shared <Slot> placeholder for asset spots ----------------------- */
function MAVSlot({ tag, file, desc, dark, style }) {
  return (
    <div className={"slot" + (dark ? " dark" : "")} style={style}>
      {tag && <span className="tag">{tag}</span>}
      <span className="file">{file}</span>
      {desc && <span className="desc">{desc}</span>}
    </div>
  );
}

/* ---- 1. HERO ----------------------------------------------------------- */
function MAVHero() {
  return (
    <section className="mav-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div>
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="index.html#products">Products</a>
            <span className="sep">/</span>
            <span>Straw Choppers</span>
            <span className="sep">/</span>
            <span className="here">MAV Straw Chopper</span>
          </div>

          <div className="product">MAV Straw Chopper</div>

          <h1>
            A breakthrough in<br/>
            <span className="y">residue management.</span>
          </h1>

          <p className="sub">
            The MAV Straw Chopper system finely cuts and spreads crop residue across the width of the cutterbar. With unmatched cutting and spreading, the MAV is quite possibly the only tool you'll need to prepare your land for seeding.
          </p>

          <div className="ctas">
            <a href="#contact" className="btn-redekop"><span>Contact Us</span></a>
            <a href="#byo" className="btn-redekop is-light"><span>Build Your Own</span></a>
          </div>

          <div className="tag-line">
            No heavy harrows. <span className="y">No discers. No cultivators.</span>
          </div>
        </div>

        <div className="art">
          <img
            src="assets/mav/hero.png"
            alt="MAV Straw Chopper, full product render"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: "scale(2)",
              transformOrigin: "center center",
              filter: "drop-shadow(0 22px 36px rgba(0,0,0,0.55))",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---- 2. PILLARS — Finer / Wider / Faster ------------------------------ */
function MAVPillars() {
  const pillars = [
    {
      n: "01",
      t: "Finer",
      bullets: [
        "Improve seeding performance with a consistent, fine cut",
        "Reduce the risk of hair-pinning, toxic chaff and other issues",
      ],
    },
    {
      n: "02",
      t: "Wider",
      bullets: [
        "Spread residue further and more evenly",
        "Get the perfect spread to fit your header size",
      ],
    },
    {
      n: "03",
      t: "Faster",
      bullets: [
        "A sharper cut uses less power, so you can cover more acres more quickly",
        "Skip vertical tillage and heavy harrowing to finish your field faster",
      ],
    },
  ];

  return (
    <section className="mav-pillars" data-screen-label="02 Finer Wider Faster">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx on-dark">01 · What the MAV delivers</span>
          <h2>
            Finer. Wider.<br/>
            <span className="y">Faster.</span>
          </h2>
        </div>
        <div className="grid">
          {pillars.map((p) => (
            <div className="cell" key={p.n}>
              <span className="num">{p.n}</span>
              <h3>{p.t}</h3>
              <div className="rule" aria-hidden="true"></div>
              <ul>
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 3. TESTIMONIAL ---------------------------------------------------- */
function MAVTestimonial() {
  return (
    <section className="mav-testimonial" data-screen-label="03 Testimonial">
      <div className="wrap">
        <div className="card">
          <div className="quote-mark" aria-hidden="true">&ldquo;</div>
          <div>
            <blockquote>
              We were extremely happy when the MAV shredded and spread the straw the width of the header and all preparations for seeding in the spring were taken care of. It's performance was amazing even in tough conditions. By eliminating the need for heavy harrowing and bunching it paid for itself in one year.
            </blockquote>
            <div className="attribution">
              <div className="avatar">
                <img
                  src="assets/mav/testimonial-farmer.png"
                  alt="Ryan Hennenfent"
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <div className="person">Ryan Hennenfent</div>
                <div className="place">Caronport, Saskatchewan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 4. CUTTING + SPREADING ZONES ------------------------------------ */
function MAVZones() {
  return (
    <section className="mav-zones" data-screen-label="04 Zones">
      <div className="mav-zone">
        <div className="wrap">
          <div className="copy">
            <span className="sec-idx">02 · Cutting Zone</span>
            <h2>Cutting Zone</h2>
            <ul className="bullet-yellow">
              <li>Tightly spaced, high-quality carbide-coated blades</li>
              <li>Straight sharpened reversible blades finely cut straw into uniform sizes</li>
              <li>A new rotating knife bank can help reduce blade damage from rocks and foreign objects passing through the chopper</li>
            </ul>
          </div>
          <div className="art">
            <img
              src="assets/mav/cutting-zone.png"
              alt="MAV Straw Chopper cutting zone, orange paddle blades and rotor detail"
              style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="mav-zone flip">
        <div className="wrap">
          <div className="copy">
            <span className="sec-idx">03 · Spreading Zone</span>
            <h2>Spreading Zone</h2>
            <ul className="bullet-yellow">
              <li>Paddle blades increase chopper air flow, spread width and uniformity in wide body choppers</li>
              <li>Fan blades create air speeds in excess of 160 mph</li>
              <li>Unique tailboard design spreads residue up to 60 feet</li>
            </ul>
          </div>
          <div className="art">
            <img
              src="assets/mav/spreading-zone.jpg"
              alt="MAV Straw Chopper spreading zone, green airflow arrows showing rotor action"
              style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 5. VIDEO — Chopper vs Factory ----------------------------------- */
function MAVVideo() {
  return (
    <section className="mav-video" data-screen-label="05 Video">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="sec-idx on-dark">04 · See the difference</span>
            <h2>
              Redekop chopper<br/>
              <span className="y">vs. factory.</span>
            </h2>
          </div>
          <p className="lead">
            Side-by-side aerial footage of a Redekop-equipped combine and a factory chopper running the same field, same crop, same conditions, very different results.
          </p>
        </div>

        <div className="stage">
          <span className="badge">Watch · MAV vs Factory</span>
          <span className="corners" aria-hidden="true">
            <i className="tl"></i><i className="tr"></i><i className="bl"></i><i className="br"></i>
          </span>
          <iframe
            src="https://www.youtube.com/embed/udOv9thf8B4?rel=0&modestbranding=1"
            title="Redekop MAV Straw Chopper vs Factory"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

/* ---- 6. SPREAD WIDTH DIAGRAM ----------------------------------------- */
function MAVSpread() {
  return (
    <section className="mav-spread" data-screen-label="06 Spread">
      <div className="wrap">
        <div>
          <span className="sec-idx">05 · Spread Width</span>
          <h2>
            Uniform spreading from<br/>20 up to 60 feet.
          </h2>
          <p>
            The airflow-generating zone uses Redekop's patented fan blades tucked away outside of the cutting zone. Specially designed shrouds build up air speed around the six fan blades at either end of the rotor.
          </p>
          <p>
            The MAV generates extra-high velocity air speeds up to 160&nbsp;mph to blow the finely cut straw and chaff uniformly across the cutterbar width for unmatched spreading performance.
          </p>
        </div>

        <div className="diagram" aria-hidden="true">
          <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="mavFan" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#EEB94B" stopOpacity="0.95"/>
                <stop offset="100%" stopColor="#EEB94B" stopOpacity="0.35"/>
              </linearGradient>
            </defs>
            {/* Outer 60ft fan */}
            <polygon points="300,80 80,340 520,340" fill="url(#mavFan)" opacity="0.55"/>
            {/* 42ft fan */}
            <polygon points="300,140 145,340 455,340" fill="#EEB94B" opacity="0.65"/>
            {/* 30ft fan */}
            <polygon points="300,200 188,340 412,340" fill="#EEB94B" opacity="0.78"/>
            {/* 20ft fan */}
            <polygon points="300,240 226,340 374,340" fill="#EEB94B" opacity="0.92"/>

            {/* Rotor origin dot */}
            <circle cx="300" cy="78" r="6" fill="#231E20"/>

            {/* Width labels with dashed measure lines */}
            {[
              { y: 50,  x1: 60,  x2: 540, label: "60 FT" },
              { y: 150, x1: 130, x2: 470, label: "42 FT" },
              { y: 210, x1: 175, x2: 425, label: "30 FT" },
              { y: 250, x1: 215, x2: 385, label: "20 FT" },
            ].map((m, i) => (
              <g key={i}>
                <line x1={m.x1} y1={m.y} x2={m.x2} y2={m.y} stroke="#231E20" strokeWidth="1" strokeDasharray="3 4"/>
                <text x="300" y={m.y - 6} textAnchor="middle" fontFamily="Bebas Neue, Impact, sans-serif" fontSize="20" fontWeight="700" fill="#231E20" letterSpacing="2">{m.label}</text>
              </g>
            ))}

            {/* Ground line */}
            <line x1="40" y1="340" x2="560" y2="340" stroke="#231E20" strokeWidth="2"/>
            <text x="40" y="362" fontFamily="Open Sans, sans-serif" fontSize="10" fontWeight="700" letterSpacing="2" fill="#6E6E6E">GROUND</text>

            {/* Tick marks on ground */}
            {[80, 145, 188, 226, 300, 374, 412, 455, 520].map((x, i) => (
              <line key={i} x1={x} y1="340" x2={x} y2="350" stroke="#231E20" strokeWidth="1"/>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ---- 7. OPTIONS — Easy Adjustments + MAV Plus+ ----------------------- */
function MAVOptions() {
  return (
    <section className="mav-options" data-screen-label="07 Options">
      <div className="wrap">
        <div className="head" style={{ marginBottom: 36 }}>
          <span className="sec-idx on-dark">06 · Options &amp; adjustments</span>
        </div>
        <div className="grid">
          <div className="cell">
            <h3>Easy Adjustments</h3>
            <p>
              The MAV residue manager allows you to easily fine-tune the spread to match changing field conditions. In the field, the easily adjustable fins and tailboard fine-tune the spread for uniform residue distribution across the width of the cutterbar.
            </p>
            <p>
              Complete replacement choppers feature independent left and right rapid adjustment with Redekop's exclusive split tailboard design.
            </p>
          </div>
          <div className="cell">
            <h3>MAV Plus+ Option</h3>
            <p>
              The MAV Plus+ Option for Redekop complete choppers provides the extra spread needed when using 40+ft headers. All MAV Plus+ rotors run larger 50mm bearings on a forged end rotor, giving the chopper extra durability and longevity.
            </p>
            <p>
              MAV Plus+ rotors are fitted with larger tight-tolerance fan blades which increase air velocity up to 150&nbsp;mph and the use of specially scooped tailboard fins to spread the straw the extra distance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 7b. FIELD BREAK — full-bleed photo divider ---------------------- */
function MAVFieldBreak() {
  return (
    <section className="mav-break" data-screen-label="07b Field Break" aria-hidden="true">
      <div className="bg"></div>
      <div className="veil"></div>
      <div className="stripes" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="copy">
          <span className="eyebrow">Built for the field</span>
          <h2>
            Where the<br/>
            <span className="y">work gets done.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

/* ---- 8. CTA STRIP — Interested? -------------------------------------- */
function MAVCTA() {
  return (
    <section className="mav-cta" id="byo" data-screen-label="08 CTA">
      <div className="wrap">
        <div className="stripes" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <h2>Interested<span className="y">?</span></h2>
        <p>
          Check out the Build Your Own section to find a compatible model for your combine.
        </p>
        <div className="buttons">
          <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>Build Your Own</span></a>
          <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()}><span>Brochures</span></a>
          <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>Sales Network</span></a>
        </div>
      </div>
    </section>
  );
}

window.MAVHero = MAVHero;
window.MAVPillars = MAVPillars;
window.MAVTestimonial = MAVTestimonial;
window.MAVZones = MAVZones;
window.MAVVideo = MAVVideo;
window.MAVSpread = MAVSpread;
window.MAVFieldBreak = MAVFieldBreak;
window.MAVOptions = MAVOptions;
window.MAVCTA = MAVCTA;
