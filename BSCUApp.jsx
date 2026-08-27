/* global React, ReactDOM, Header, Footer, BSCUHero, BSCUHow, BSCUWhy, BSCUNotify */

function BSCUApp() {
  return (
    <div className="bscu">
      <Header />
      <BSCUHero />
      <BSCUHow />
      <BSCUWhy />
      <BSCUNotify />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BSCUApp />);
