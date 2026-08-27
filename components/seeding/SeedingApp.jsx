/* global React, ReactDOM, Header, Footer, SeedingPage */
function SeedingApp() {
  return (
    <div className="seeding-page">
      <Header overlay />
      <SeedingPage />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<SeedingApp />);
