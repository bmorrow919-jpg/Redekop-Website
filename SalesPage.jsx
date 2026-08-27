/* global React */
const { useState: useSalesState, useMemo: useSalesMemo } = React;

/* ============================================================
   1. HERO
   ============================================================ */
function SalesHero() {
  return (
    <section className="sales-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <span className="here">Sales Network</span>
        </div>

        <div className="product">Sales Network</div>

        <h1>
          Find a Redekop<br/>
          <span className="y">dealer near you.</span>
        </h1>

        <p className="sub">
          Redekop dealers across North America, Australia, Europe, South Africa and South America stock the complete Redekop range, choppers, blade kits, the SCU and the KAS Pre&#8209;Cleaner.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   2. DEALER LOCATOR
   Placeholder dataset, replace `DEALERS` with your real list
   when ready. Coords are [lng, lat] for layout positioning;
   the right-side map is a static Google Maps embed.
   ============================================================ */
const DEALERS = [
  { name: "GT Custom AG Ltd.",       street: "Site 708 Comp 41 RR7", city: "Saskatoon", region: "SK", postal: "S7N 1N2", country: "Canada", phone: "1-306-555-0142", km: 0.2 },
  { name: "SMS Equipment Inc.",      street: "2907 Millar Avenue",   city: "Saskatoon", region: "SK", postal: "S7K 4C2", country: "Canada", phone: "1-306-555-0117", km: 4.6 },
  { name: "Cervus Equipment",        street: "Highway 16 East",      city: "Saskatoon", region: "SK", postal: "S7K 5W6", country: "Canada", phone: "1-306-555-0184", km: 8.1 },
  { name: "Pattison Agriculture",    street: "830 Saskatchewan Cres", city: "Humboldt", region: "SK", postal: "S0K 2A0", country: "Canada", phone: "1-306-555-0226", km: 112 },
  { name: "Young's Equipment Inc.",  street: "1502 Pasqua Street",    city: "Regina",   region: "SK", postal: "S4T 7N6", country: "Canada", phone: "1-306-555-0179", km: 246 },
];

function DealerCard({ d }) {
  return (
    <div className="dealer">
      <div className="badge" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      <div className="body">
        <div className="name">{d.name}</div>
        <div className="addr">
          {d.street}<br/>
          {d.city}, {d.region}, {d.postal}<br/>
          {d.country}
        </div>
        <div className="meta">
          <span className="km">{d.km.toFixed(1)} km</span>
          <a className="dir" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(d.street + ", " + d.city + ", " + d.country)}`} target="_blank" rel="noopener noreferrer">Directions &rarr;</a>
        </div>
      </div>
    </div>
  );
}

function SalesLocator() {
  const [location, setLocation] = useSalesState("");
  const [radius, setRadius] = useSalesState("50");
  const [count, setCount] = useSalesState("25");

  const visible = useSalesMemo(() => {
    const r = parseInt(radius, 10) || 1000000;
    return DEALERS.filter((d) => d.km <= r).slice(0, parseInt(count, 10) || 25);
  }, [radius, count]);

  return (
    <section className="sales-locator" data-screen-label="02 Locator">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">01 · Dealer locator</span>
          <h2>Find your nearest dealer.</h2>
          <p>
            Enter your city or postal code, choose how far you&apos;re willing to travel, and we&apos;ll show you every Redekop dealer in range.
          </p>
        </div>

        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label>Your location</label>
            <input
              type="text"
              placeholder="City, postal code or address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Search radius</label>
            <select value={radius} onChange={(e) => setRadius(e.target.value)}>
              <option value="25">25 km</option>
              <option value="50">50 km</option>
              <option value="100">100 km</option>
              <option value="250">250 km</option>
              <option value="500">500 km</option>
              <option value="1000">1000 km</option>
            </select>
          </div>
          <div className="field">
            <label>Results</label>
            <select value={count} onChange={(e) => setCount(e.target.value)}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <button type="submit" className="btn-redekop"><span>Search</span></button>
        </form>

        <div className="grid">
          <div className="list">
            <div className="list-head">
              <span className="count">{visible.length}</span>
              <span className="lbl">dealer{visible.length === 1 ? "" : "s"} within {radius} km</span>
            </div>
            <div className="list-body">
              {visible.map((d, i) => <DealerCard key={i} d={d} />)}
              {visible.length === 0 && (
                <div className="empty">
                  No dealers in this radius. Try expanding the range, or use the regional contacts below to reach the distributor closest to you.
                </div>
              )}
            </div>
          </div>

          <div className="map">
            <iframe
              title="Redekop dealer locations"
              src="https://www.google.com/maps?q=Saskatoon%20Saskatchewan&output=embed&z=6"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="map-stamp">
              <span className="dot" aria-hidden="true"></span>
              <span className="lbl">{visible.length} pins on map</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. REGIONAL CONTACTS
   ============================================================ */
const REGIONS = [
  {
    id: "canada",
    name: "Canada",
    contacts: [
      { area: "South",       org: "",                    person: "Mike Paul",   phone: "1-306-750-7574", web: "www.redekopmfg.com", email: "mpaul@redekopmfg.com" },
      { area: "North",       org: "",                    person: "Chad Barnett", phone: "1-780-870-4237", web: "www.redekopmfg.com", email: "cbarnett@redekopmfg.com" },
      { area: "Canada",      org: "General Inquiries",   person: "Trevor Millsap", phone: "1-306-380-5215", web: "www.redekopmfg.com", email: "tmillsap@redekopmfg.com" },
      { area: "Eastern Canada", org: "Argis 2000 Limited", phone: "1-519-291-4205", web: "www.argis2000.ca", email: "info@argis2000.ca" },
      { area: "Global",      org: "KAS Pre-Cleaner Sales \u2014 Industrial / Construction", person: "Matt Taylor", phone: "306-480-4088", web: "www.redekopmfg.com", email: "mtaylor@redekopmfg.com" },
    ],
  },
  {
    id: "us",
    name: "United States",
    contacts: [
      { area: "United States", org: "General Inquiries", person: "Trevor Millsap", phone: "1-306-380-5212", web: "www.redekopmfg.com", email: "tmillsap@redekopmfg.com" },
      { area: "United States", org: "U.S. Distributor",  person: "Jake Smith",     phones: [{ lbl: "C", num: "785-545-5165" }, { lbl: "T", num: "785-534-7983" }], email: "smithbalancingandrepair@gmail.com" },
    ],
  },
  {
    id: "anz",
    name: "Australia & New Zealand",
    contacts: [
      { area: "South Australia / Victoria", org: "", person: "Neale Heinrich", phone: "+61 418 823 627", web: "www.redekopmfg.com", email: "nheinrich@redekopmfg.com" },
      { area: "West Australia",   org: "", person: "Tom Fleay",      phone: "+61 428 420 154", web: "www.redekopmfg.com", email: "tfleay@redekopmfg.com" },
      { area: "Australia",        org: "General Inquiries", person: "Marney Strachan", phone: "+61 419 912 903", web: "www.redekopmfg.com", email: "mstrachan@redekopmfg.com" },
    ],
  },
  {
    id: "europe",
    name: "Europe",
    contacts: [
      { area: "Western Europe",  org: "Oria Agriculture", phone: "+33 603 878 078", web: "www.oriaagriculture.com", email: "info@oriaagriculture.com" },
      { area: "Eastern Europe",  org: "Techsystems",      phones: [{ lbl: "T1", num: "+7 714 222 3955" }, { lbl: "T2", num: "+7 701 529 2011" }], web: "www.techsystemskft.com", email: "techsystemskft@gmail.com" },
      { area: "Ukraine",         org: "CT-Agro",          phone: "+38 095 204 6122", web: "www.ctagro-ua.com",       email: "ct-agro@ukr.net" },
      { area: "Russia",          org: "Atecco",           phone: "+7 910 344 6209",  web: "www.atecco.ru",            email: "info@atecco.ru" },
      { area: "Kazakhstan",      org: "Techsystems",      phones: [{ lbl: "T1", num: "+7 714 222 3955" }, { lbl: "T2", num: "+7 701 529 2011" }], web: "www.techsystemskft.com", email: "techsystemskft@gmail.com" },
    ],
  },
  {
    id: "africa",
    name: "South Africa",
    contacts: [
      { area: "South Africa", org: "AGL Systems", person: "Jannes van der Bank", phone: "1-083 235 9985", web: "www.cpfe.co.za", email: "jannesv1@outlook.com" },
    ],
  },
  {
    id: "latam",
    name: "South America",
    contacts: [
      { area: "Latin America", org: "General Inquiries",   person: "Juan Martin Adolfo Giustetti", phone: "+54 9 11 6016-8104", web: "www.redekopmfg.com", email: "jgiustetti@redekopmfg.com" },
      { area: "Argentina",     org: "Nordemaq Distributor", phone: "+54 9 379 481 6911", email: "supventas@nordemaq.com" },
      { area: "Brazil",        org: "",                     person: "Marcos Navai", web: "www.redekopmfg.com", email: "mnavai@redekopmfg.com" },
    ],
  },
];

function ContactCard({ c }) {
  const phones = c.phones || (c.phone ? [{ lbl: "Tel", num: c.phone }] : []);
  const webHref = c.web ? (c.web.startsWith("http") ? c.web : "https://" + c.web) : null;
  return (
    <div className="contact-card">
      <div className="card-head">
        <span className="area">{c.area}</span>
        {c.org && <span className="org">{c.org}</span>}
      </div>
      {c.person && <div className="person">{c.person}</div>}
      <div className="rows">
        {phones.map((p, i) => (
          <div className="row phone" key={"p" + i}>
            {phones.length > 1 && <span className="row-lbl">{p.lbl}</span>}
            <a href={"tel:" + p.num.replace(/[^\d+]/g, "")}>{p.num}</a>
          </div>
        ))}
        {c.web && (
          <div className="row web">
            <a href={webHref} target="_blank" rel="noopener noreferrer">{c.web}</a>
          </div>
        )}
        {c.email && (
          <div className="row email">
            <a href={"mailto:" + c.email}>{c.email}</a>
          </div>
        )}
      </div>
      {c.email && (
        <a className="btn-redekop email-btn" href={"mailto:" + c.email}>
          <span>Email</span>
        </a>
      )}
    </div>
  );
}

function SalesRegions() {
  return (
    <section className="sales-regions" data-screen-label="03 Regions">
      <div className="wrap">
        <div className="head">
          <span className="sec-idx">02 · Worldwide distributors</span>
          <h2>
            Wherever you harvest,<br/>
            <span className="y">we&apos;re close by.</span>
          </h2>
        </div>

        {REGIONS.map((r) => (
          <div className="region" id={"region-" + r.id} key={r.id}>
            <h3 className="region-name">{r.name}</h3>
            <div className="region-grid">
              {r.contacts.map((c, i) => <ContactCard key={i} c={c} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   4. CTA STRIP
   ============================================================ */
function SalesCTA() {
  return (
    <section className="sales-cta" data-screen-label="04 CTA">
      <div className="wrap">
        <div className="stripes" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <h2>Can&apos;t find your region<span className="y">?</span></h2>
        <p>
          Contact us and we&apos;ll help connect you with the sales distributor closest to you.
        </p>
        <div className="buttons">
          <a href="contact.html" className="btn-redekop"><span>Contact Us</span></a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WRAPPER
   ============================================================ */
function SalesPage() {
  return (
    <React.Fragment>
      <SalesHero />
      <SalesLocator />
      <SalesRegions />
      <SalesCTA />
    </React.Fragment>
  );
}

window.SalesPage = SalesPage;
