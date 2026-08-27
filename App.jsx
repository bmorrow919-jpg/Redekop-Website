/* global React, ReactDOM, Header, Hero, Marquee, Products, X9Feature, Voice, Dealer, Footer */

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Marquee />
      <Products />
      <X9Feature />
      <Voice />
      <Dealer />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
