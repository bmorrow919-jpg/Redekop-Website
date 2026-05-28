/* global React */

function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="hero-img" aria-hidden="true"></div>
      <div className="wrap">
        <div className="hero-eyebrow">
          <span className="bar"></span>
          <span>Saskatoon · Est. 1985 · Built for the harvest</span>
        </div>
        <h1 className="hero-headline">
          Harvest More
          <span className="l2">With Less.</span>
        </h1>
        <p className="hero-sub">
          Redekop Manufacturing engineers crop-residue and seed-control systems for combine harvesters, the MAV Straw Chopper, Seed Control Unit, blade kits, and the KAS Pre-Cleaner. Built in Saskatoon. Working in fields globally.
        </p>
        <div className="hero-ctas">
          <a href="#products" className="btn-redekop"><span>Explore Products</span></a>
          <a href="#byo" className="btn-redekop is-light"><span>Build Your Own</span></a>
        </div>
      </div>

      <div className="hero-meta">
        <div className="item">
          <div className="k">40+</div>
          <div className="v">Years of Engineering</div>
        </div>
        <div className="item">
          <div className="k">25</div>
          <div className="v">Countries Served</div>
        </div>
        <div className="item">
          <div className="k">100%</div>
          <div className="v">OEM-Compatible</div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
