/* global React */
const { useState: useContactState } = React;

/* ---- 1. HERO ------------------------------------------------------- */
function ContactHero() {
  return (
    <section className="contact-hero" data-screen-label="01 Hero">
      <div className="stripes-corner" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <span className="here">Contact Us</span>
        </div>

        <div className="product">Contact</div>

        <h1>
          Let&apos;s build the<br/>
          <span className="y">next harvest together.</span>
        </h1>

        <p className="sub">
          We are a team dedicated to designing custom solutions for the agricultural industry. Whether you&apos;re a farmer, a dealer, a fleet manager or an OEM partner, we&apos;d love to hear from you.
        </p>
      </div>
    </section>
  );
}

/* ---- 2. INFO STRIP (3 quick contact cards) ------------------------ */
function ContactQuick() {
  const cards = [
    {
      icon: "phone",
      eyebrow: "Toll free",
      title: "1-866-REDEKOP",
      sub: "1-866-733-3567",
      href: "tel:18667333567",
    },
    {
      icon: "mail",
      eyebrow: "Sales",
      title: "sales@redekopmfg.com",
      sub: "We reply within one business day.",
      href: "mailto:sales@redekopmfg.com",
    },
    {
      icon: "pin",
      eyebrow: "Visit",
      title: "Saskatoon, SK",
      sub: "Mon\u2013Fri \u00b7 8:00 to 5:00 CST",
      href: "#map",
    },
  ];

  const Icon = ({ name }) => {
    const props = {
      width: 22, height: 22, viewBox: "0 0 24 24",
      fill: "none", stroke: "currentColor",
      strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round",
    };
    if (name === "phone") return (
      <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
    );
    if (name === "mail") return (
      <svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    );
    return (
      <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    );
  };

  return (
    <section className="contact-quick" data-screen-label="02 Quick Contact">
      <div className="wrap">
        {cards.map((c) => (
          <a className="card" key={c.eyebrow} href={c.href}>
            <span className="ico" aria-hidden="true"><Icon name={c.icon} /></span>
            <div className="copy">
              <span className="eyebrow">{c.eyebrow}</span>
              <span className="title">{c.title}</span>
              <span className="sub">{c.sub}</span>
            </div>
            <span className="arrow" aria-hidden="true"></span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---- 3. FORM + INFO ----------------------------------------------- */
/* HubSpot form this submits into (Contact Us form, portal 49003392) */
const CONTACT_HS = {
  portalId: "49003392",
  formId: "e8e2f028-cfe8-4469-a9c7-dc0c6209d310",
};

const INTEREST_LABELS = {
  info: "General info",
  quote: "Request a quote",
  demo: "Book a demo",
  dealer: "Find a dealer",
  support: "Service / support",
};

function ContactForm() {
  const [interest, setInterest] = useContactState({
    info: true, demo: false, quote: false, dealer: false, support: false,
  });
  const toggle = (k) => setInterest((p) => ({ ...p, [k]: !p[k] }));

  const [f, setF] = useContactState({
    subject: "", firstname: "", lastname: "", email: "",
    phone: "", location: "", combine: "", message: "",
  });
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const [status, setStatus] = useContactState("idle"); // idle | sending | ok | error
  const [errMsg, setErrMsg] = useContactState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrMsg("");

    const interests = Object.keys(interest)
      .filter((k) => interest[k])
      .map((k) => INTEREST_LABELS[k]);

    // Fold the extra structured fields into the default `message` property
    // so nothing is lost regardless of the HubSpot form's custom fields.
    const extra = [];
    if (f.subject) extra.push("Subject: " + f.subject);
    if (interests.length) extra.push("Interested in: " + interests.join(", "));
    if (f.location) extra.push("Location: " + f.location);
    if (f.combine) extra.push("Combine: " + f.combine);
    const composedMessage =
      (extra.length ? extra.join("\n") + "\n\n" : "") + (f.message || "");

    try {
      await window.submitHubSpotForm({
        portalId: CONTACT_HS.portalId,
        formId: CONTACT_HS.formId,
        fields: {
          firstname: f.firstname,
          lastname: f.lastname,
          email: f.email,
          phone: f.phone,
          message: composedMessage,
        },
      });
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setErrMsg(err && err.message ? err.message : "Something went wrong.");
    }
  };

  if (status === "ok") {
    return (
      <section className="contact-main" data-screen-label="03 Form">
        <div className="wrap">
          <div className="form-col">
            <div className="form-success" role="status">
              <span className="sec-idx">01 · Get in touch</span>
              <h2>Thanks{f.firstname ? ", " + f.firstname : ""}.<br/><span className="y">We&apos;ve got your message.</span></h2>
              <p>A member of our team will be in touch within one business day. For anything urgent, call us toll free at <a href="tel:18667333567">1-866-733-3567</a>.</p>
            </div>
          </div>
          <ContactInfoCol />
        </div>
      </section>
    );
  }

  return (
    <section className="contact-main" data-screen-label="03 Form">
      <div className="wrap">
        {/* LEFT — form */}
        <div className="form-col">
          <div className="head">
            <span className="sec-idx">01 · Get in touch</span>
            <h2>
              Tell us about<br/>
              <span className="y">your operation.</span>
            </h2>
            <p>
              Connect with us to learn more about our custom solutions and how we can leverage your existing equipment to work with our products.
            </p>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <p className="req-note">
              <span className="req">*</span> indicates required fields
            </p>

            <div className="row">
              <div className="field">
                <label>Subject</label>
                <input type="text" placeholder="e.g. SCU enquiry for X9 combine" value={f.subject} onChange={set("subject")} />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label>First Name <span className="req">*</span></label>
                <input type="text" required value={f.firstname} onChange={set("firstname")} />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" value={f.lastname} onChange={set("lastname")} />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label>Email <span className="req">*</span></label>
                <input type="email" required value={f.email} onChange={set("email")} />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" value={f.phone} onChange={set("phone")} />
              </div>
            </div>

            <div className="row two">
              <div className="field">
                <label>Location</label>
                <input type="text" placeholder="City, Province/State, Country" value={f.location} onChange={set("location")} />
              </div>
              <div className="field">
                <label>Combine make &amp; model</label>
                <input type="text" placeholder="e.g. John Deere X9 1100" value={f.combine} onChange={set("combine")} />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>What are you interested in?</label>
                <div className="checks">
                  <label className="check"><input type="checkbox" checked={interest.info} onChange={() => toggle("info")} /><span>General info</span></label>
                  <label className="check"><input type="checkbox" checked={interest.quote} onChange={() => toggle("quote")} /><span>Request a quote</span></label>
                  <label className="check"><input type="checkbox" checked={interest.demo} onChange={() => toggle("demo")} /><span>Book a demo</span></label>
                  <label className="check"><input type="checkbox" checked={interest.dealer} onChange={() => toggle("dealer")} /><span>Find a dealer</span></label>
                  <label className="check"><input type="checkbox" checked={interest.support} onChange={() => toggle("support")} /><span>Service / support</span></label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us what you&apos;re running and what you&apos;re hoping to accomplish." value={f.message} onChange={set("message")}></textarea>
              </div>
            </div>

            <div className="submit-row">
              <button type="submit" className="btn-redekop" disabled={status === "sending"}>
                <span>{status === "sending" ? "Sending\u2026" : "Send message"}</span>
              </button>
              <span className="hint">We&apos;ll be in touch within one business day.</span>
            </div>

            {status === "error" && (
              <p className="form-error" role="alert">
                We couldn&apos;t send your message{errMsg ? " (" + errMsg + ")" : ""}. Please try again, or email <a href="mailto:sales@redekopmfg.com">sales@redekopmfg.com</a>.
              </p>
            )}
          </form>
        </div>

        <ContactInfoCol />
      </div>
    </section>
  );
}

/* ---- Info column (right side), shared by form + success states ---- */
function ContactInfoCol() {
  return (
        <aside className="info-col">
          <div className="info-card">
            <div className="info-eyebrow">Redekop Manufacturing</div>
            <h3>Where to find us.</h3>

            <div className="info-rows">
              <div className="info-row">
                <div className="lbl">Toll free</div>
                <a href="tel:18667333567">1&#8209;866&#8209;REDEKOP</a>
                <div className="alt">1&#8209;866&#8209;733&#8209;3567</div>
              </div>
              <div className="info-row">
                <div className="lbl">Local</div>
                <a href="tel:13069316664">1&#8209;306&#8209;931&#8209;6664</a>
              </div>
              <div className="info-row">
                <div className="lbl">Fax</div>
                <span>1&#8209;306&#8209;933&#8209;1088</span>
              </div>
              <div className="info-row">
                <div className="lbl">Sales</div>
                <a href="mailto:sales@redekopmfg.com">sales@redekopmfg.com</a>
              </div>
            </div>

            <div className="address" id="map">
              <div className="lbl">Address</div>
              <div className="addr-lines">
                PO Box 178A, RR#4<br/>
                Hwy #16 West<br/>
                Saskatoon, SK Canada<br/>
                S7K 3J7
              </div>
            </div>

            <div className="hours">
              <div className="lbl">Hours</div>
              <div className="hours-rows">
                <div><span>Mon &ndash; Fri</span><span>8:00 &ndash; 5:00 CST</span></div>
                <div><span>Sat &ndash; Sun</span><span>Closed</span></div>
              </div>
            </div>
          </div>

          <div className="map" aria-label="Map of Redekop Manufacturing in Saskatoon">
            <iframe
              title="Redekop Manufacturing location"
              src="https://www.google.com/maps?q=Redekop%20Manufacturing%20Saskatoon&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="map-stamp">
              <span className="dot" aria-hidden="true"></span>
              <span className="lbl">Saskatoon, SK</span>
            </div>
          </div>

          <div className="dealer-card">
            <div className="info-eyebrow">Outside your region?</div>
            <h3>Find a dealer near you.</h3>
            <p>Redekop dealers across North America, Europe and Australia carry our complete product range.</p>
            <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()}><span>Sales Network</span></a>
          </div>
        </aside>
  );
}

/* ---- 4. WRAPPER ---------------------------------------------------- */
function ContactPage() {
  return (
    <React.Fragment>
      <ContactHero />
      <ContactQuick />
      <ContactForm />
    </React.Fragment>
  );
}

window.ContactPage = ContactPage;
