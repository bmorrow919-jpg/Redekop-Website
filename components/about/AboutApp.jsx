/* global React, ReactDOM, Header, Footer, AboutHero, AboutStats, AboutStory, AboutTimeline, AboutCapabilities, AboutPartners, AboutBreak, AboutCTA */

function AboutApp() {
  return (
    <div className="about">
      <Header />
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutTimeline />
      <AboutCapabilities />
      <AboutPartners />
      <AboutBreak />
      <AboutCTA />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AboutApp />);
