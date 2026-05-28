/* global React, ReactDOM, Header, Footer, BYOPage */

function BYOApp() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <BYOPage />
      </main>
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BYOApp />);
