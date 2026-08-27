/* global React, ReactDOM, Header, Footer, BladeHero, BladePillars, BladeMoreCut, BladeReplacements, BladeCTA */

function BladeApp() {
  return (
    <div className="blade">
      <Header />
      <BladeHero />
      <BladePillars />
      <BladeMoreCut />
      <BladeReplacements />
      <BladeCTA />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BladeApp />);
