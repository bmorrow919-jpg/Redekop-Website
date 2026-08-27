/* global React */

function Voice() {
  return (
    <section className="alt voice-sec" data-screen-label="About / Voice">
      <div className="voice-map" aria-hidden="true"><WorldMap /></div>
      <div className="wrap">
        <span className="sec-idx">03 · Engineering, the Redekop way</span>
        <div className="voice-grid" style={{ marginTop: 22 }}>
          <div>
            <h2 className="pull-quote">
              A dedicated team.<br/>
              <span className="y">Custom solutions</span><br/>
              for the agricultural industry.
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.65, color: "var(--ink-700)", margin: "0 0 20px" }}>
              Redekop Manufacturing is a Canadian agricultural-equipment company headquartered in Saskatoon. Our products focus on improving crop residue management, helping farmers produce more with less.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.65, color: "var(--ink-700)", margin: 0 }}>
              Through research and development with farmers, our flexible and nimble team rapidly innovates, engineering superior products effective for the global market and sought after by industry leaders.
            </p>

            <ul className="bullet-yellow" style={{ marginTop: 30 }}>
              <li>Compatible with John Deere, Case IH, New Holland, Claas, and AGCO/Fendt</li>
              <li>OEM-integrated where it matters; bolt-in everywhere else</li>
              <li>Field-tested in Saskatchewan, Australia, Europe, and the US plains</li>
            </ul>

            <div className="voice-legend">
              <span className="sw"></span>
              <span>Regions we operate in — North America, South America, Europe and Australia</span>
            </div>
          </div>
        </div>

        <div className="stats-row" style={{ marginTop: 80 }}>
          <div className="cell">
            <div className="k">1985</div>
            <div className="lbl">Founded · Saskatoon, SK</div>
          </div>
          <div className="cell">
            <div className="k">25<span className="small">+</span></div>
            <div className="lbl">Countries with installs</div>
          </div>
          <div className="cell">
            <div className="k">5</div>
            <div className="lbl">OEM compatibility lines</div>
          </div>
          <div className="cell">
            <div className="k">100<span className="small">%</span></div>
            <div className="lbl">Engineered for the field</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Voice = Voice;
