/* global React */

function Marquee() {
  const items = [
    "John Deere X9 Compatible",
    "Case IH AFX",
    "New Holland CR",
    "Claas Lexion",
    "AGCO · Fendt IDEAL",
    "MAV Straw Chopper",
    "Seed Control Unit",
    "BSCU",
    "KAS Pre-Cleaner",
    "Built in Saskatoon",
  ];
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span key={i} className="marquee-item">
            {t}<span className="dot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

window.Marquee = Marquee;
