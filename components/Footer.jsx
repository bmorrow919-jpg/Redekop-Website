/* global React */

function Footer() {
  const cols = [
    {
      title: "Products",
      links: [
        { label: "MAV Straw Chopper", href: "mav.html" },
        { label: "Seed Control Unit", href: "scu.html" },
        { label: "BSCU", href: "bscu.html" },
        { label: "Blade Kits", href: "blade.html" },
        { label: "KAS Pre-Cleaner", href: "kas.html" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Sales Network", href: "sales.html" },
        { label: "Build Your Own", href: "byo.html" },
        { label: "Manuals", href: "#" },
        { label: "FAQs", href: "faq.html" },
        { label: "Warranty", href: "warranty.html" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "about.html" },
        { label: "Careers", href: "careers.html" },
        { label: "News", href: "#" },
        { label: "Contact", href: "contact.html" },
      ],
    },
  ];

  return (
    <footer className="f">
      <div className="wrap">
        <div className="f-top">
          <div className="f-col">
            <img src="assets/logos/redekop-on-black.png" alt="Redekop Manufacturing" style={{ height: 44, marginBottom: 22 }} />
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
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href || "#"}
                  onClick={(e) => { if (!l.href || l.href === "#") e.preventDefault(); }}
                >{l.label}</a>
              ))}
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
