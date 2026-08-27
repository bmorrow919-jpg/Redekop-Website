/* global React, ReactDOM, Header, Footer, SCUHero, SCUStats, SCUIntro, SCUFieldBreak, SCUPillars, SCUHowItWorks, SCUKillRates, SCUResistance, SCUFeatures, SCUForm */

function SCUApp() {
  return (
    <div className="scu">
      <Header />
      <SCUHero />
      <SCUStats />
      <SCUIntro />
      <SCUFieldBreak />
      <SCUPillars />
      <SCUHowItWorks />
      <SCUKillRates />
      <SCUResistance />
      <SCUFeatures />
      <SCUForm />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SCUApp />);
