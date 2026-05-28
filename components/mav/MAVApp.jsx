/* global React, ReactDOM, Header, Footer, MAVHero, MAVPillars, MAVTestimonial, MAVZones, MAVVideo, MAVSpread, MAVFieldBreak, MAVOptions, MAVCTA */

function MAVApp() {
  return (
    <div className="mav">
      <Header />
      <MAVHero />
      <MAVPillars />
      <MAVTestimonial />
      <MAVZones />
      <MAVVideo />
      <MAVSpread />
      <MAVFieldBreak />
      <MAVOptions />
      <MAVCTA />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MAVApp />);
