/* global React */
const { useState: useC2FormState } = React;

/* ============================================================
   EMPLOYEE APPLICATION — 3 steps, ported from the live form
   ============================================================ */

const C2_COUNTRIES = ["Canada", "United States", "Australia", "United Kingdom", "Germany", "France", "Ukraine", "New Zealand", "Other"];
const C2_CALL_TIMES = ["Mornings", "Early Afternoon", "Late Afternoon", "Early Evening"];
const C2_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const C2_STEPS = ["Your personal information", "Position you're applying for", "Experience & resume"];

function C2Field({ label, required, hint, children, wide }) {
  return (
    <div className={"c2-fld" + (wide ? " is-wide" : "")}>
      <label>{label}{required && <span className="req">*</span>}</label>
      {children}
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
}

function C2Application() {
  const [step, setStep] = useC2FormState(0);
  const [status, setStatus] = useC2FormState("idle");
  const [err, setErr] = useC2FormState("");

  const [f, setF] = useC2FormState({
    first: "", last: "", email: "", email2: "",
    street: "", street2: "", city: "", region: "", postal: "", country: "Canada",
    phone: "", callTime: "",
    position: "General Submission", startDate: "", endDate: "",
    about: "", resumeName: "",
  });
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const [availability, setAvailability] = useC2FormState(
    C2_DAYS.reduce((a, d) => Object.assign(a, { [d]: "" }), {})
  );
  const [employers, setEmployers] = useC2FormState([{ employer: "", dates: "", position: "", phone: "" }]);

  const setEmp = (i, k) => (e) => {
    const v = e.target.value;
    setEmployers((p) => p.map((row, idx) => (idx === i ? Object.assign({}, row, { [k]: v }) : row)));
  };
  const addEmp = () => setEmployers((p) => p.concat([{ employer: "", dates: "", position: "", phone: "" }]));
  const removeEmp = (i) => setEmployers((p) => (p.length > 1 ? p.filter((_, idx) => idx !== i) : p));

  const onFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) { setF((p) => Object.assign({}, p, { resumeName: "" })); return; }
    if (file.size > 25 * 1024 * 1024) { setErr("That file is over the 25 MB limit."); e.target.value = ""; return; }
    setErr("");
    setF((p) => Object.assign({}, p, { resumeName: file.name }));
  };

  const stepValid = () => {
    if (step === 0) {
      if (!f.first.trim() || !f.last.trim() || !f.email.trim()) return "Please complete your name and email address.";
      if (f.email.trim() !== f.email2.trim()) return "Your email addresses don't match.";
      if (!f.street.trim() || !f.city.trim() || !f.region.trim() || !f.postal.trim()) return "Please complete your address.";
      return "";
    }
    if (step === 1) {
      if (!f.position.trim()) return "Please choose the position you're applying for.";
      return "";
    }
    if (!f.resumeName) return "Please attach your resume.";
    return "";
  };

  const next = () => {
    const problem = stepValid();
    if (problem) { setErr(problem); return; }
    setErr("");
    setStep((s) => Math.min(s + 1, C2_STEPS.length - 1));
  };
  const back = () => { setErr(""); setStep((s) => Math.max(s - 1, 0)); };

  const submit = (e) => {
    e.preventDefault();
    const problem = stepValid();
    if (problem) { setErr(problem); return; }
    setErr("");
    setStatus("ok");
  };

  const pct = Math.round(((step + 1) / C2_STEPS.length) * 100);

  if (status === "ok") {
    return (
      <section className="c2-apply" id="apply" data-screen-label="06 Application">
        <div className="wrap">
          <div className="c2-form-card">
            <div className="c2-form-head">
              <span className="sec-idx">05 · Employee application</span>
              <h2>Application received.</h2>
            </div>
            <div className="c2-done">
              <h3>Thanks{f.first ? ", " + f.first : ""}.</h3>
              <p>We&apos;ve got your application and your resume{f.resumeName ? " (" + f.resumeName + ")" : ""}. Our team reviews every submission and will reach out if there&apos;s a fit. For anything urgent, call us toll free at <a href="tel:18667333567">1-866-733-3567</a>.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="c2-apply" id="apply" data-screen-label="06 Application">
      <div className="wrap">
        <div className="c2-form-card">
          <div className="c2-form-head">
            <span className="sec-idx">05 · Employee application</span>
            <h2>Apply to Redekop.</h2>
            <p>Applications are kept on file. Fields marked <span className="req">*</span> are required.</p>
          </div>

          <div className="c2-progress">
            <div className="c2-progress-meta">
              <span className="s">Step {step + 1} of {C2_STEPS.length}</span>
              <span className="p">{pct}%</span>
            </div>
            <div className="c2-progress-bar"><span style={{ width: pct + "%" }}></span></div>
            <ol className="c2-steps">
              {C2_STEPS.map((s, i) => (
                <li key={s} className={i === step ? "is-on" : i < step ? "is-done" : ""}>
                  <span className="n">{i + 1}</span><span className="t">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <form className="c2-form" onSubmit={submit}>
            {step === 0 && (
              <div className="c2-grid">
                <C2Field label="First name" required><input type="text" value={f.first} onChange={set("first")} /></C2Field>
                <C2Field label="Last name" required><input type="text" value={f.last} onChange={set("last")} /></C2Field>
                <C2Field label="Email address" required><input type="email" value={f.email} onChange={set("email")} /></C2Field>
                <C2Field label="Confirm email" required><input type="email" value={f.email2} onChange={set("email2")} /></C2Field>
                <C2Field label="Street address" required wide><input type="text" value={f.street} onChange={set("street")} /></C2Field>
                <C2Field label="Address line 2" wide><input type="text" value={f.street2} onChange={set("street2")} /></C2Field>
                <C2Field label="City" required><input type="text" value={f.city} onChange={set("city")} /></C2Field>
                <C2Field label="Province / State" required><input type="text" value={f.region} onChange={set("region")} /></C2Field>
                <C2Field label="Postal / ZIP code" required><input type="text" value={f.postal} onChange={set("postal")} /></C2Field>
                <C2Field label="Country" required>
                  <select value={f.country} onChange={set("country")}>
                    {C2_COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </C2Field>
                <C2Field label="Phone"><input type="tel" value={f.phone} onChange={set("phone")} /></C2Field>
                <C2Field label="Best time to call" hint="When is the best time for us to reach you by telephone?">
                  <select value={f.callTime} onChange={set("callTime")}>
                    <option value="">No preference</option>
                    {C2_CALL_TIMES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </C2Field>
              </div>
            )}

            {step === 1 && (
              <div className="c2-grid">
                <C2Field label="Position you're applying for" required wide>
                  <select value={f.position} onChange={set("position")}>
                    <option>General Submission</option>
                    <option>Engineering</option>
                    <option>Production / Welding</option>
                    <option>Service</option>
                    <option>Sales & Marketing</option>
                    <option>Administration</option>
                  </select>
                </C2Field>
                <div className="c2-sub" >Seasonal availability</div>
                <C2Field label="I am available to start" hint="Leave blank if you're available immediately."><input type="date" value={f.startDate} onChange={set("startDate")} /></C2Field>
                <C2Field label="My employment must end by" hint="Only if you're applying for summer or term work."><input type="date" value={f.endDate} onChange={set("endDate")} /></C2Field>
                <div className="c2-sub">Hours you are available for work</div>
                <div className="c2-days">
                  {C2_DAYS.map((d) => (
                    <div className="c2-day" key={d}>
                      <label>{d}</label>
                      <input type="text" placeholder="e.g. 7am – 4pm" value={availability[d]} onChange={(e) => { const v = e.target.value; setAvailability((p) => Object.assign({}, p, { [d]: v })); }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="c2-grid">
                <div className="c2-sub">Previous employment</div>
                <div className="c2-emps">
                  {employers.map((row, i) => (
                    <div className="c2-emp" key={i}>
                      <input type="text" placeholder="Employer" value={row.employer} onChange={setEmp(i, "employer")} />
                      <input type="text" placeholder="Dates" value={row.dates} onChange={setEmp(i, "dates")} />
                      <input type="text" placeholder="Position" value={row.position} onChange={setEmp(i, "position")} />
                      <input type="tel" placeholder="Phone" value={row.phone} onChange={setEmp(i, "phone")} />
                      <button type="button" className="c2-rm" onClick={() => removeEmp(i)} aria-label="Remove this employer" disabled={employers.length === 1}>&times;</button>
                    </div>
                  ))}
                  <button type="button" className="c2-add" onClick={addEmp}>+ Add another employer</button>
                </div>

                <C2Field label="Tell us about yourself" wide>
                  <textarea rows="5" value={f.about} onChange={set("about")} placeholder="What you're looking for, what you've built, why Redekop."></textarea>
                </C2Field>

                <C2Field label="Upload your resume" required wide hint="Accepted file types: PDF, DOC, DOCX. Maximum file size 25 MB.">
                  <div className="c2-file">
                    <input id="c2Resume" type="file" accept=".pdf,.doc,.docx" onChange={onFile} />
                    <label htmlFor="c2Resume" className="c2-file-btn">Choose file</label>
                    <span className="c2-file-name">{f.resumeName || "No file chosen"}</span>
                  </div>
                </C2Field>
              </div>
            )}

            {err && <p className="c2-err" role="alert">{err}</p>}

            <div className="c2-nav">
              {step > 0 && <button type="button" className="btn-redekop is-light" onClick={back}><span>Back</span></button>}
              {step < C2_STEPS.length - 1
                ? <button type="button" className="btn-redekop" onClick={next}><span>Continue</span></button>
                : <button type="submit" className="btn-redekop"><span>Submit Application</span></button>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Careers2Page() {
  return (
    <React.Fragment>
      <C2Hero />
      <C2Why />
      <C2Who />
      <C2Values />
      <C2Positions />
      <C2Application />
    </React.Fragment>
  );
}

Object.assign(window, { Careers2Page, C2Application });
