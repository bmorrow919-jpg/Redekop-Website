/* global React, ReactDOM, Header, Footer, ContactPage */

function ContactApp() {
  return (
    <div className="contact">
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
