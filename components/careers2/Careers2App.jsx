/* global React, ReactDOM, Header, Footer, Careers2Page */
function Careers2App() {
  return (
    <div className="careers2-page">
      <Header overlay />
      <Careers2Page />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Careers2App />);
