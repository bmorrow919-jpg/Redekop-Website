/* global React, ReactDOM, Header, Footer, WarrantyPage */

function WarrantyApp() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <WarrantyPage />
      </main>
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WarrantyApp />);
