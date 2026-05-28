/* global React, ReactDOM, Header, Footer, KASHero, KASDifference, KASProof, KASEfficiency, KASSpecs, KASTestimonials, KASCTA */

function KASApp() {
  return (
    <div className="kas">
      <Header />
      <KASHero />
      <KASDifference />
      <KASProof />
      <KASEfficiency />
      <KASSpecs />
      <KASTestimonials />
      <KASCTA />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<KASApp />);
