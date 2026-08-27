/* global React */
const { useState } = React;

function Header() {
  const [open, setOpen] = useState(null);
  const items = [
    { key: "products", label: "Products", menu: [
      { label: "Seed Control Unit", href: "scu.html" },
      { label: "BSCU", href: "bscu.html" },
      { label: "MAV Straw Chopper", href: "mav.html" },
      { label: "Blade Conversions", href: "blade.html" },
      { label: "KAS Pre-Cleaner", href: "kas.html" },
      { label: "Seeding", href: "seeding.html" },
    ] },
    { key: "byo", label: "Build Your Own", href: "byo.html" },
    { key: "support", label: "Support", menu: [
      { label: "Sales Network", href: "sales.html" },
      { label: "Testing & Research", href: "research.html" },
      { label: "Manuals" },
      { label: "FAQs", href: "faq.html" },
      { label: "Warranty", href: "warranty.html" },
    ] },
    { key: "about", label: "About", href: "about.html" },
    { key: "careers", label: "Careers", href: "careers-v2.html" },
  ];

  return (
    <React.Fragment>
      <div className="topbar">
        <div className="wrap">
          <span>Saskatoon, SK · Canada, Built for the global harvest</span>
          <div className="right">
            <a href="#">Dealer Login</a>
            <a href="sales.html">Sales Network</a>
            <a href="#">EN / FR</a>
          </div>
        </div>
      </div>

      <header className="nav">
        <div className="wrap">
          <a href="index.html" className="nav-logo" aria-label="Redekop home">
            <img src="assets/logos/redekop-on-black.png" alt="Redekop Manufacturing" />
          </a>
          <nav className="nav-items">
            {items.map((it) => (
              <div
                key={it.key}
                style={{ position: "relative" }}
                onMouseEnter={() => it.menu && setOpen(it.key)}
                onMouseLeave={() => setOpen(null)}
              >
                <a href={it.href || "#"} className={"nav-link" + (it.key === "byo" || it.key === "about" ? " is-alt" : "") + (open === it.key ? " is-active" : "")} onClick={(e) => { if (!it.href) e.preventDefault(); }}>
                  {it.label}
                </a>
                {open === it.key && it.menu && (
                  <div style={{
                    position: "absolute", top: "100%", left: -16,
                    background: "var(--redekop-black)", color: "#fff",
                    minWidth: 240, padding: "12px 0",
                    borderTop: "3px solid var(--redekop-yellow)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
                    zIndex: 90,
                  }}>
                    {it.menu.map((m, i) => (
                      <a key={i} href={m.href || "#"} onClick={(e) => { if (!m.href) e.preventDefault(); }} style={{
                        display: "block", padding: "10px 22px",
                        fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13,
                        color: "#fff", borderLeft: "4px solid transparent",
                        transition: "all 150ms",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = "#EEB94B"; e.currentTarget.style.background = "#2E2A2C"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = "transparent"; e.currentTarget.style.background = "transparent"; }}
                      >{m.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="contact.html" className="nav-cta">
              <span>Contact Us</span>
            </a>
          </nav>
          <button className="nav-mobile-cta" aria-label="Open menu" style={{
            display: "none",
            marginLeft: "auto",
            background: "var(--redekop-yellow)",
            color: "var(--redekop-black)",
            border: 0,
            padding: "12px 20px",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}>
            <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, background: "var(--redekop-black)" }}></span>
            <span style={{ position: "relative", paddingLeft: 4 }}>Menu</span>
          </button>
        </div>
      </header>
    </React.Fragment>
  );
}

window.Header = Header;
