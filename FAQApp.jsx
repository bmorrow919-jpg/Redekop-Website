/* global React, ReactDOM, Header, Footer, FAQPage */

function FAQApp() {
  return (
    <div className="faq">
      <Header />
      <FAQPage />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<FAQApp />);
