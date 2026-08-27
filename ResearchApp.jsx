/* global React, ReactDOM, Header, Footer, ResearchHero, ResearchTwoCol, ResearchPapers */

function ResearchApp() {
  return (
    <div className="research">
      <Header />
      <ResearchHero />
      <ResearchTwoCol />
      <ResearchPapers />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ResearchApp />);
