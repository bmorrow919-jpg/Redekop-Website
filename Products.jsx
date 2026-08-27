/* global React */

const PRODUCTS = [
  {
    n: "01",
    tag: "Hero Product",
    title: "MAV Straw Chopper",
    sub: "Finely cuts and spreads crop residue across the full width of the cutterbar, quite possibly the only tool needed to prepare your land for seeding.",
    img: "assets/products/scu-unit.png",
  },
  {
    n: "02",
    tag: "Harvest Weed Seed Control",
    title: "Seed Control Unit",
    sub: "Pairs with the MAV to crush weed seeds at harvest. Available for all major OEM combines, including the dedicated X9 SCU package.",
    img: "assets/products/mav-chopper.png",
    href: "scu.html",
  },
  {
    n: "03",
    tag: null,
    title: "Blade Kits",
    sub: "Bolt-in blade conversions engineered for most North American combine brands. The HA655C is the hero SKU.",
    img: "assets/products/blade-kit.png",
  },
  {
    n: "04",
    tag: null,
    title: "KAS Pre-Cleaner",
    sub: "Rotary intake pre-cleaner that protects engine air filters from chaff and dust, for the longest possible filter life.",
    img: "assets/products/kas-prefilter.png",
  },
];

function Products() {
  return (
    <section id="products" data-screen-label="Products" style={{ background: "#fff" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", marginBottom: 56 }}>
          <div>
            <span className="sec-idx">01 · The Product Family</span>
            <h2 className="section-title">
              Four systems.<br/>One harvest.
            </h2>
          </div>
          <p className="lead" style={{ maxWidth: 520, justifySelf: "end", margin: 0 }}>
            Every Redekop product is engineered for crop-residue management, to help farmers produce more with less, on whatever combine they already own.
          </p>
        </div>

        <div className="products-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 22,
        }}>
          {PRODUCTS.map((p) => (
            <a key={p.n} href={p.href || "#"} onClick={(e) => { if (!p.href) e.preventDefault(); }} className="pcard">
              <div className="pcard-img">
                {p.tag && <span className="pcard-tag">{p.tag}</span>}
                <span className="pcard-num">{p.n}</span>
                <img src={p.img} alt={p.title} />
              </div>
              <div className="pcard-body">
                <h3 className="pcard-title">{p.title}</h3>
                <p className="pcard-sub">{p.sub}</p>
                <span className="pcard-cta">
                  More Info
                  <span className="arrow"></span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <style>{`
          @media (max-width: 1100px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px)  { .products-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

window.Products = Products;
