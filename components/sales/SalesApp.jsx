/* global React, ReactDOM, Header, Footer, SalesPage */

function SalesApp() {
  return (
    <div className="sales">
      <Header />
      <SalesPage />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SalesApp />);
