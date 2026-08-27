/* Shared HubSpot Forms submission helper for the Redekop site.
   Posts to the HubSpot Forms Submissions API (v3). Works from a static
   site (GitHub Pages) — no server, no API key needed for this endpoint.

   Usage:
     await submitHubSpotForm({
       portalId: "49003392",
       formId:   "e8e2f028-cfe8-4469-a9c7-dc0c6209d310",
       fields:   { email: "x@y.com", firstname: "Jane", ... },
     });

   `fields` keys MUST be the internal names of properties that exist on the
   HubSpot form definition. Empty / null values are dropped automatically.
   Throws an Error (with HubSpot's message) on failure so callers can show it. */
window.submitHubSpotForm = async function submitHubSpotForm(opts) {
  const { portalId, formId, fields = {}, context = {} } = opts;
  const url =
    "https://api.hsforms.com/submissions/v3/integration/submit/" +
    portalId +
    "/" +
    formId;

  const fieldArray = Object.keys(fields)
    .map((name) => ({ name: name, value: fields[name] }))
    .filter((f) => f.value != null && String(f.value).trim() !== "")
    .map((f) => ({ name: f.name, value: String(f.value) }));

  const body = {
    fields: fieldArray,
    context: Object.assign(
      {
        pageUri: window.location.href,
        pageName: document.title,
      },
      context
    ),
  };

  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (networkErr) {
    throw new Error(
      "Network error — could not reach HubSpot. Check your connection and try again."
    );
  }

  let data = {};
  try {
    data = await res.json();
  } catch (e) {
    /* HubSpot returns JSON on success and error; ignore parse misses */
  }

  if (!res.ok) {
    let msg = data && data.message ? data.message : "HTTP " + res.status;
    if (data && Array.isArray(data.errors) && data.errors.length) {
      msg = data.errors.map((e) => e.message || e.errorType).join("; ");
    }
    const err = new Error(msg);
    err.hubspot = data;
    throw err;
  }

  return data;
};
