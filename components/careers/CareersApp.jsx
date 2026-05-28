/* global React, ReactDOM, Header, Footer, CareersPage */

function CareersApp() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <CareersPage />
      </main>
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CareersApp />);
