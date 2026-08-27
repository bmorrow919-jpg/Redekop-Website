/* global React */

function Dealer() {
  return (
    <section className="dealer" data-screen-label="Dealer / CTA">
      <div className="dealer-img" aria-hidden="true"></div>
      <div className="wrap">
        <div>
          <span className="sec-idx on-dark">04 · Find a Dealer</span>
          <h2 className="section-title" style={{ color: "#fff", marginTop: 22 }}>
            Plan your<br/>
            <span style={{ color: "var(--redekop-yellow)" }}>best harvest yet.</span>
          </h2>
          <p className="lead" style={{ color: "var(--ink-200)", marginTop: 22, maxWidth: 520 }}>
            It's never too early. Talk to a Redekop dealer about the right configuration for your combine, or use the Build Your Own selector to start narrowing down.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, justifySelf: "end" }}>
          <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()} style={{ fontSize: 26, padding: "20px 44px" }}>
            <span>Find a Dealer</span>
          </a>
          <a href="#" className="btn-redekop is-light" onClick={(e) => e.preventDefault()} style={{ fontSize: 26, padding: "20px 44px" }}>
            <span>Build Your Own</span>
          </a>
          <a href="#" className="btn-redekop" onClick={(e) => e.preventDefault()} style={{ fontSize: 26, padding: "20px 44px" }}>
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

window.Dealer = Dealer;
