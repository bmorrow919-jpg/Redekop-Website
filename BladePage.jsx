/* global React */

/* ---- placeholder slot ----------------------------------------------- */
function BladeSlot({ tag, file, desc, dark, style }) {
  return (
    <div className={"slot" + (dark ? " dark" : "")} style={style}>
      {tag && <span className="tag">{tag}</span>}
      {file && <span className="file">{file}</span>}
      {desc && <span className="desc">{desc}</span>}
    </div>
  );
}

/* ---- 1. HERO -------------------------------------------------------- */
function BladeHero() {
  return (
    <section className="blade-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="copy">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="index.html#products">Products</a>
            <span className="sep">/</span>
            <span>Straw Choppers &amp; Blades</span>
            <span className="sep">/</span>
            <span className="here">Blade Kits</span>
          </div>

          <div className="product">Blade Kits</div>

          <h1>
            The best blades<br/>
            <span className="y">in the business.</span>
          </h1>

          <p className="sub">
            Redekop has designed blade conversions to work with most major combine brands and models sold across North America, bolt-in upgrades engineered to cut finer, last longer and pull less power than the factory blades they replace.
          </p>

          <div className="ctas">
            <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>Manuals</span></a>
            <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()}><span>Build Your Own</span></a>
          </div>

          <div className="tag-line">
            In side&#8209;by&#8209;side tests, customers are<br/>
            <span className="y">amazed at the improvement.</span>
          </div>
        </div>

        <div className="art">
          <img
            src="assets/products/blade-kit.png"
            alt="Redekop HA655C carbide-coated blade kit"
          />
        </div>
      </div>
    </section>
  );
}

/* ---- 2. PILLARS — Better Cut / Longer Life / Save Power ------------ */
function BladePillars() {
  const pillars = [
    {
      n: "01",
      t: "Better Cut",
      bullets: [
        "Start sharp, stay sharp",
        "Serrated edge for superior cutting action in tough conditions",
        "Noticeable increase in chop quality",
        "Self-sharpening for the best straw-cutting action",
      ],
    },
    {
      n: "02",
      t: "Longer Life",
      bullets: [
        "Optimized, high-quality carbide coating for the longest life and sharpest cut",
        "Reversible, carbide-coated serrated design for twice the wear of some factory blades",
      ],
    },
    {
      n: "03",
      t: "Save Power",
      bullets: [
        "Carbide coating allows blades to self-sharpen and slice through straw with less force",
        "Sharper blades cut straw more efficiently, conserving fuel and horsepower",
      ],
    },
  ];

  return (
    <section className="blade-pillars" data-screen-label="02 Why Redekop Blades">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx on-dark">01 · Why Redekop blades</span>
          <h2>
            Better cut. Longer life.<br/>
            <span className="y">Less power.</span>
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

/* ---- 3. MORE CUT, LESS COST band ----------------------------------- */
function BladeMoreCut() {
  const rows = [
    { worn: 1, hp: 0,  bars: 0, label: "Brand new" },
    { worn: 2, hp: 7,  bars: 1, label: "Lightly worn" },
    { worn: 3, hp: 14, bars: 2, label: "Worn" },
    { worn: 4, hp: 21, bars: 3, label: "Heavily worn" },
  ];
  return (
    <section className="blade-morecut" data-screen-label="03 More Cut Less Cost">
      <div className="wrap">
        <div className="art">
          <div className="draining">
            <div className="corner-stripes" aria-hidden="true">
              <i></i><i></i><i></i><i></i>
            </div>
            <div className="title">
              <span className="eyebrow-mini">A quiet thief</span>
              <h3>
                How much power<br/>
                are your blades <span className="y">draining?</span>
              </h3>
            </div>
            <div className="rows">
              {rows.map((r) => (
                <div className="row" key={r.worn}>
                  <div className="blade-cell">
                    <img src={`assets/blade/worn-${r.worn}.png`} alt={`Blade wear stage ${r.worn}: ${r.label}`} />
                  </div>
                  <div className="bars" aria-hidden="true">
                    {[0,1,2].map((j) => (
                      <span
                        key={j}
                        className={"bar " + (j < r.bars ? "on shade-" + j : "off")}
                      ></span>
                    ))}
                  </div>
                  <div className="hp">
                    <span className="num">{r.hp}</span>
                    <span className="unit">HP</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="footnote">
              Worn, dull blades quietly steal horsepower, up to <span className="y">21 HP</span> on a four-stage wear profile. Sharp Redekop blades give it back.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="quote-mark" aria-hidden="true">&ldquo;</div>
          <span className="sec-idx on-dark" style={{ marginBottom: 12 }}>02 · The bottom line</span>
          <h2>More Cut,<br/>Less Cost.</h2>
          <p>
            Redekop blades not only cost less than OEM blades, with self&#8209;sharpening carbide technology they also last longer and require less energy, helping to reduce fuel consumption. Some are even reversible, giving you twice the acres out of every blade.
          </p>
          <div className="stats">
            <div className="stat">
              <div className="k">2&times;</div>
              <div className="lbl">Acres per blade<span>(reversible models)</span></div>
            </div>
            <div className="stat">
              <div className="k">&minus;21<small>HP</small></div>
              <div className="lbl">Power saved<span>vs. worn blades</span></div>
            </div>
            <div className="stat">
              <div className="k">$</div>
              <div className="lbl">Lower price<span>than OEM</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 4. REPLACEMENTS & UPGRADES ------------------------------------ */
function BladeReplacements() {
  return (
    <section className="blade-repl" data-screen-label="04 Replacements & Upgrades">
      <div className="wrap">
        <div className="copy">
          <span className="sec-idx">03 · Replacements &amp; Upgrades</span>
          <h2>Drop&#8209;in replacements.<br/>Bolt&#8209;in upgrades.</h2>
          <p>
            In addition to our high-quality Blade Conversions, Redekop also offers Replacement Blades, the same long&#8209;life blades to fit your standard factory chopper, without the bolts, nuts and bushings.
          </p>
          <p>
            Use the Product Selector to find the right kit for your make, model and year.
          </p>
          <ul className="bullet-yellow">
            <li>Bolt&#8209;in Blade Conversions for most major combine brands</li>
            <li>Replacement Blades that fit the OEM chopper you already own</li>
            <li>Carbide&#8209;coated, reversible serrated designs available</li>
          </ul>
          <div className="ctas">
            <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()}><span>Product Selector</span></a>
            <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()}><span>Manuals</span></a>
          </div>
        </div>
        <div className="art">
          <img
            src="assets/products/blade-kit.png"
            alt="Redekop replacement blade pair"
          />
        </div>
      </div>
    </section>
  );
}

/* ---- 5. CTA STRIP --------------------------------------------------- */
function BladeCTA() {
  return (
    <section className="blade-cta" id="byo" data-screen-label="05 CTA">
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

window.BladeHero = BladeHero;
window.BladePillars = BladePillars;
window.BladeMoreCut = BladeMoreCut;
window.BladeReplacements = BladeReplacements;
window.BladeCTA = BladeCTA;
