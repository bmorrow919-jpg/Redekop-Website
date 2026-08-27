/* global React */
const { useState, useEffect } = React;

/* Nav items — shared across every page */
const NAV_ITEMS = [
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

/* `overlay` floats the rail transparently over a dark full-bleed hero and
   condenses it to a solid white bar on scroll. Without it the rail is a
   normal sticky white bar (correct for light-background pages). */
function Header({ overlay }) {
  const [open, setOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(!overlay);

  useEffect(() => {
    if (!overlay) { setSolid(true); return; }
    const onScroll = () => setSolid(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const cls = "nav" + (overlay ? " is-overlay" : "") + (solid ? " is-solid" : "");

  return (
    <header className={cls}>
      <div className="wrap">
        <a href="index.html" className="nav-logo" aria-label="Redekop home">
          <img className="on-dark" src="assets/logos/redekop-on-black.png" alt="Redekop Manufacturing" />
          <img className="on-light" src="assets/logos/redekop-on-white.png" alt="Redekop Manufacturing" />
        </a>

        <nav className="nav-items">
          {NAV_ITEMS.map((it) => (
            <div className="nav-item" key={it.key}
              onMouseEnter={() => it.menu && setOpen(it.key)}
              onMouseLeave={() => setOpen(null)}>
              <a href={it.href || "#"} className={"nav-link" + (open === it.key ? " is-active" : "")}
                onClick={(e) => { if (!it.href) e.preventDefault(); }}>{it.label}</a>
              {open === it.key && it.menu && (
                <div className="nav-menu">
                  {it.menu.map((m, i) => (
                    <a key={i} href={m.href || "#"} onClick={(e) => { if (!m.href) e.preventDefault(); }}>{m.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a href="contact.html" className="nav-cta"><span>Contact Us</span></a>

        <button className="nav-mobile-cta" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          <span className="bars" aria-hidden="true"><i></i><i></i><i></i></span>
          <span className="txt">{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="nav-drawer">
          {NAV_ITEMS.map((it) => (
            <div className="grp" key={it.key}>
              {it.href
                ? <a className="top" href={it.href}>{it.label}</a>
                : <span className="top">{it.label}</span>}
              {it.menu && (
                <div className="sub">
                  {it.menu.map((m, i) => (
                    <a key={i} href={m.href || "#"} onClick={(e) => { if (!m.href) e.preventDefault(); }}>{m.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a className="drawer-cta" href="contact.html">Contact Us</a>
        </div>
      )}
    </header>
  );
}

window.Header = Header;
window.NAV_ITEMS = NAV_ITEMS;
