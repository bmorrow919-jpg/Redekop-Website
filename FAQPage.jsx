/* global React */
const { useState: useFaqState, useMemo: useFaqMemo } = React;

/* ---- DATA --------------------------------------------------------- */
const FAQ_DATA = [
  {
    id: "mav",
    label: "MAV Straw Chopper",
    color: "yellow",
    items: [
      {
        q: "How much horsepower does the MAV chopper need to run?",
        a: "HP requirement is related to the type and volume of straw, how fine the cut is, and moisture conditions. As a result it varies continually, on any given day the same chopper could require as little as 20 HP or upwards of 60 HP.",
      },
      {
        q: "What widths does the MAV chopper spread?",
        a: "The MAV is engineered for uniform spreading from 20 up to 60 feet. Patented fan blades at either end of the rotor generate air speeds up to 160 mph, throwing finely cut straw and chaff evenly across the cutterbar.",
      },
      {
        q: "How long do the blades last?",
        a: "Blade life varies drastically due to cutting conditions, crop conditions and soil type. The typical life of a heat-treated blade is approximately 350 hours. A carbide-coated blade lasts approximately 1.5× the life of the heat-treated blade.",
      },
      {
        q: "Does the chopper need to be rebalanced each time you replace blades?",
        a: "No. By replacing ALL of the blades, not just damaged ones, the rotor will be fully balanced.",
      },
      {
        q: "Can I spread the chaff with the straw?",
        a: "Yes. All MAV complete choppers spread the straw with the chaff unless noted as \u201cStraw Only\u201d. Spreading the chaff with the straw is accomplished by adding an extension to the sieve that allows the chaff to continue into the MAV chopper.",
      },
      {
        q: "Can I chop straw and collect it into a silage wagon?",
        a: "Yes. Most MAV installs can run in chop-and-spread mode or chop-and-deliver mode by removing the tailboard or running with a swath-forming kit. Talk to your dealer about the configuration that matches your operation.",
      },
      {
        q: "Do Redekop blades fit factory combine choppers?",
        a: "Yes. Redekop Blade Conversions are designed to bolt into most major North American combine brands and models, and Redekop Replacement Blades fit your standard factory chopper without the bolts, nuts and bushings. Use the Product Selector to confirm fit for your make and model.",
      },
      {
        q: "Can I chop flax with a MAV chopper?",
        a: "Yes. The MAV handles tough, fibrous crops like flax well, though we always recommend running carbide-coated blades and adjusting feed speed and fin position to match the crop. Contact our team for setup tips.",
      },
      {
        q: "Can I chop corn with a MAV chopper?",
        a: "Yes. The MAV is well-suited to corn residue. Carbide-coated, reversible serrated blades are strongly recommended for corn to maintain cut quality through the season.",
      },
    ],
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    color: "black",
    items: [
      {
        q: "What do I do if I break a blade?",
        a: "Stop running immediately. Locate the broken blade and any debris in the chopper housing, then replace all blades in the rotor, not just the broken one, to keep the rotor in balance. Inspect the bolts and bushings before reassembly.",
      },
      {
        q: "Broken blade and no spare blade replacement available?",
        a: "Contact our sales team or your nearest dealer for an emergency blade order. In a pinch, removing the matching opposing blade from the rotor can keep you running for short distances at low speed, but full replacement should happen as soon as parts arrive.",
      },
      {
        q: "Is a knocking sound heard when starting up the chopper?",
        a: "A knocking sound at startup most often indicates a foreign object in the chopper housing, a damaged or missing blade, or loose mounting hardware. Stop the machine, inspect the rotor and stationary blade bank, and confirm all hardware is torqued to spec.",
      },
      {
        q: "Insufficient clearance of rotor blades past the stationary blades?",
        a: "Adjust the stationary blade bank position to set proper clearance. Refer to the operator\u2019s manual for the exact spec for your model. Worn blade tips on either bank can also reduce clearance and may need replacement.",
      },
      {
        q: "Still insufficient blade clearance?",
        a: "If the stationary bank is at the end of its adjustment range and clearance is still insufficient, both the rotor and stationary blades may be worn beyond service. Contact your dealer for replacement and refer to the manual for measurement specs.",
      },
      {
        q: "Chopper not cutting properly?",
        a: "Check three things: blade sharpness (dull or rounded blades chop poorly and pull HP), stationary blade clearance, and feed rate. Carbide-coated blades self-sharpen as they wear but will eventually need replacement.",
      },
      {
        q: "Is there rowing behind your chopper?",
        a: "Rowing is usually caused by uneven spread fin position or a worn tailboard. Adjust the fins on the affected side and confirm the tailboard is free of debris. Wind direction and ground speed also play a role.",
      },
      {
        q: "How do I find my chopper and rotor serial number?",
        a: "The chopper serial number is on the manufacturer\u2019s plate fixed to the chopper housing, typically on the left-hand side near the drive. The rotor serial number is stamped on the rotor end. Have both numbers handy when contacting support.",
      },
      {
        q: "Are your drive belts slipping?",
        a: "Belt slip usually points to worn belts, incorrect tension, or contamination on the sheaves. Inspect the belts for cracks and glazing, check tension against the manual\u2019s spec, and clean any chaff or grain off the sheaves.",
      },
      {
        q: "Is there chaff or grain embedded in the drive belt?",
        a: "Yes, chaff and grain build-up on the sheaves and inside the belt groove is one of the most common causes of belt slip and premature wear. Clean the sheaves at regular service intervals and check for damaged belt guards.",
      },
    ],
  },
  {
    id: "blades",
    label: "Blades",
    color: "yellow",
    items: [
      {
        q: "What is the difference between heat-treated and carbide-coated blades?",
        a: "Heat-treated blades are the cost-effective standard and last around 350 hours in average conditions. Carbide-coated blades self-sharpen as they wear and last approximately 1.5× the life of a heat-treated blade. Reversible carbide blades double that life again.",
      },
      {
        q: "Are Redekop blades reversible?",
        a: "Some Redekop blade kits include a reversible, carbide-coated serrated design \u2014 once one edge dulls, flip the blade and run the second edge for twice the acres out of every blade.",
      },
      {
        q: "Will Redekop blades work with my existing factory chopper?",
        a: "Yes. Redekop Replacement Blades fit most major OEM choppers with the original bolts, nuts and bushings. Redekop Blade Conversions are full bolt-in kits that upgrade the cut quality of most factory choppers.",
      },
    ],
  },
  {
    id: "scu",
    label: "Weed Seed Control (SCU)",
    color: "yellow",
    items: [
      {
        q: "How effective is the SCU at killing weed seeds?",
        a: "Independent third-party testing shows the SCU mill destroys 98% or more of seeds for most species \u2014 from glyphosate-resistant Palmer amaranth and waterhemp to herbicide-resistant ryegrass. See the kill-rate chart on the SCU page for species-by-species data.",
      },
      {
        q: "Does the SCU slow down my harvest?",
        a: "No. The SCU runs in line with the threshing rotor in a single harvest pass. It is engineered to balance kill rate, throughput and power so it stays efficient at typical harvest ground speeds.",
      },
      {
        q: "Which combines does the SCU fit?",
        a: "The SCU is available for most major North American and European combine lines, including Case IH AFX, Claas Lexion, Fendt, John Deere X9 and New Holland CR. Use Build Your Own or talk to your dealer to confirm fit.",
      },
    ],
  },
  {
    id: "kas",
    label: "KAS Pre-Cleaner",
    color: "yellow",
    items: [
      {
        q: "How long does the KAS take to install?",
        a: "As little as 5 minutes per pre-cleaner on most equipment. The KAS bolts onto the existing intake pipe \u2014 no permanent modifications needed.",
      },
      {
        q: "Which engine sizes does the KAS fit?",
        a: "Five sizes cover everything from 65 CFM (compact diesel gensets) up to 1500 CFM (large combines and dozers). Match the KAS model to your intake-pipe inner diameter and engine HP \u2014 see the spec table on the KAS page.",
      },
      {
        q: "Will the KAS restrict my engine\u2019s airflow?",
        a: "No. The KAS is engineered for a perfect balance between low air restriction and high particulate removal. In independent A4 dust testing it draws less air restriction than competitor pre-cleaners while passing 5\u00d7 more dust before reaching equivalent loading.",
      },
    ],
  },
];

/* ---- HERO --------------------------------------------------------- */
function FAQHero({ query, setQuery, activeCat, setActiveCat }) {
  return (
    <section className="faq-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <span>Support</span>
          <span className="sep">/</span>
          <span className="here">FAQs</span>
        </div>

        <div className="product">FAQs</div>

        <h1>
          Answers from<br/>
          <span className="y">the harvest team.</span>
        </h1>

        <p className="sub">
          Common questions about MAV straw choppers, blade kits, the SCU and the KAS Pre&#8209;Cleaner, collected from dealers, operators and our own field testing.
        </p>

        <form className="search" onSubmit={(e) => e.preventDefault()} role="search">
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="20" y1="20" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="search"
            placeholder={"Search questions \u2014 e.g. blade life, KAS sizes, weed seed kill rate..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search FAQs"
          />
          {query && (
            <button type="button" className="clear" onClick={() => setQuery("")} aria-label="Clear search">&times;</button>
          )}
        </form>

        <div className="cats" role="tablist" aria-label="FAQ categories">
          <button
            role="tab"
            className={"cat" + (activeCat === "all" ? " is-active" : "")}
            onClick={() => setActiveCat("all")}
          >
            All
          </button>
          {FAQ_DATA.map((c) => (
            <button
              role="tab"
              key={c.id}
              className={"cat" + (activeCat === c.id ? " is-active" : "")}
              onClick={() => setActiveCat(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- ACCORDION ITEM ---------------------------------------------- */
function FAQItem({ q, a, open, onToggle, isHighlight }) {
  return (
    <div className={"q" + (open ? " is-open" : "") + (isHighlight ? " is-match" : "")}>
      <button className="q-btn" onClick={onToggle} aria-expanded={open}>
        <span className="q-marker" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
        <span className="q-text">{q}</span>
      </button>
      <div className="q-body" hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

/* ---- MAIN LIST ---------------------------------------------------- */
function FAQList({ query, activeCat, openMap, toggle }) {
  const cats = useFaqMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_DATA
      .filter((c) => activeCat === "all" || c.id === activeCat)
      .map((c) => ({
        ...c,
        items: c.items.filter((it) => !q || (it.q + " " + it.a).toLowerCase().includes(q)),
      }))
      .filter((c) => c.items.length > 0);
  }, [query, activeCat]);

  const totalMatches = useFaqMemo(
    () => cats.reduce((n, c) => n + c.items.length, 0),
    [cats]
  );

  if (cats.length === 0) {
    return (
      <div className="faq-empty">
        <div className="empty-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="20" y1="20" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
        <h3>No matches for &ldquo;{query}&rdquo;</h3>
        <p>Try a different keyword, or get in touch with our team for a direct answer.</p>
      </div>
    );
  }

  return (
    <div className="faq-list">
      {query.trim() && (
        <div className="faq-count">
          {totalMatches} question{totalMatches === 1 ? "" : "s"} match &ldquo;{query.trim()}&rdquo;
        </div>
      )}
      {cats.map((c) => (
        <div className={"faq-cat shade-" + c.color} key={c.id} id={"cat-" + c.id}>
          <div className="cat-head">
            <span className="cat-dot" aria-hidden="true"></span>
            <h2>{c.label}</h2>
            <span className="cat-num">{c.items.length} question{c.items.length === 1 ? "" : "s"}</span>
          </div>
          <div className="cat-items">
            {c.items.map((it, i) => {
              const key = c.id + "::" + i;
              return (
                <FAQItem
                  key={key}
                  q={it.q}
                  a={it.a}
                  open={!!openMap[key]}
                  onToggle={() => toggle(key)}
                  isHighlight={!!query.trim()}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---- SIDEBAR ----------------------------------------------------- */
function FAQSidebar() {
  return (
    <aside className="faq-side">
      <div className="card primary">
        <div className="card-eyebrow">Get in touch</div>
        <h3>Still have a question?</h3>
        <p>
          Connect with our dedicated team of crop residue experts. We&apos;ll help you find the right kit, the right setup, or the right answer.
        </p>
        <a href="contact.html" className="btn-redekop"><span>Contact Us</span></a>
        <div className="contact">
          <div className="row">
            <span className="lbl">Sales</span>
            <a href="mailto:sales@redekopmfg.com">sales@redekopmfg.com</a>
          </div>
          <div className="row">
            <span className="lbl">Toll free</span>
            <a href="tel:18667333567">1&#8209;866&#8209;733&#8209;3567</a>
          </div>
          <div className="row">
            <span className="lbl">Local</span>
            <a href="tel:13069316664">1&#8209;306&#8209;931&#8209;6664</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-eyebrow">More support</div>
        <a className="side-link" href="#" onClick={(e) => e.preventDefault()}>
          <span className="title">Manuals &amp; Brochures</span>
          <span className="desc">Operator&apos;s manuals, install guides and product catalogues.</span>
        </a>
        <a className="side-link" href="#" onClick={(e) => e.preventDefault()}>
          <span className="title">Sales Network</span>
          <span className="desc">Find a Redekop dealer in your region.</span>
        </a>
        <a className="side-link" href="#" onClick={(e) => e.preventDefault()}>
          <span className="title">Warranty</span>
          <span className="desc">Coverage, registration and warranty claims.</span>
        </a>
      </div>
    </aside>
  );
}

/* ---- PAGE WRAPPER ------------------------------------------------- */
function FAQPage() {
  const [query, setQuery] = useFaqState("");
  const [activeCat, setActiveCat] = useFaqState("all");
  const [openMap, setOpenMap] = useFaqState({ "mav::0": true });

  const toggle = (key) => setOpenMap((p) => ({ ...p, [key]: !p[key] }));

  return (
    <React.Fragment>
      <FAQHero
        query={query}
        setQuery={setQuery}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      <section className="faq-main" data-screen-label="02 FAQs">
        <div className="wrap">
          <FAQList
            query={query}
            activeCat={activeCat}
            openMap={openMap}
            toggle={toggle}
          />
          <FAQSidebar />
        </div>
      </section>
    </React.Fragment>
  );
}

window.FAQPage = FAQPage;
