/* global React */

function Footer() {
  const cols = [
    {
      title: "Products",
      links: ["MAV Straw Chopper", "Seed Control Unit", "BSCU", "Blade Kits", "KAS Pre-Cleaner"],
    },
    {
      title: "Support",
      links: ["Sales Network", "Build Your Own", "Manuals", "FAQs", "Warranty"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "News", "Contact"],
    },
  ];

  return (
    <footer className="f">
      <div className="wrap">
        <div className="f-top">
          <div className="f-col">
            <img src={window.__resources.logoBlack} alt="Redekop Manufacturing" style={{ height: 44, marginBottom: 22 }} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-300)", maxWidth: 320, margin: 0 }}>
              Helping farmers produce more with less. Engineered in Saskatoon, Saskatchewan, working in fields globally.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-400)", marginTop: 22 }}>
              Box 178, Saskatoon, SK · Canada<br/>
              +1 (306) 931-6664
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="f-col">
              <h5>{c.title}</h5>
              {c.links.map((l) => <a key={l} href="#" onClick={(e) => e.preventDefault()}>{l}</a>)}
            </div>
          ))}
        </div>

        <div className="f-bottom">
          <span>© 2026 Redekop Manufacturing Ltd. All rights reserved.</span>
          <span>
            <a href="#" style={{ color: "inherit", marginRight: 18 }}>Terms of Use</a>
            <a href="#" style={{ color: "inherit", marginRight: 18 }}>Privacy Policy</a>
            <a href="#" style={{ color: "inherit" }}>Dealer Login</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
