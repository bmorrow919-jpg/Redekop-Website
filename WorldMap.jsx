/* global React, d3, topojson */
const { useEffect: useMapEffect, useRef: useMapRef, useState: useMapState } = React;

const WORLD_ATLAS_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";

/* ISO 3166-1 numeric codes for the regions Redekop operates in.
   Natural Earth occasionally emits "-99" for a few ids, so names are
   matched as a fallback. */
const OPERATING_IDS = new Set([
  "124", "840", "484",                                    // Canada, USA, Mexico
  "032", "76", "076", "152",                              // Argentina, Brazil, Chile
  "36", "036",                                            // Australia
  "008", "040", "112", "056", "070", "100", "191", "203", // Europe
  "208", "233", "246", "250", "276", "300", "348", "352",
  "372", "380", "428", "440", "442", "498", "499", "528",
  "807", "578", "616", "620", "642", "688", "703", "705",
  "724", "752", "756", "804", "826",
]);

const OPERATING_NAMES = new Set([
  "Canada", "United States of America", "Mexico",
  "Argentina", "Brazil", "Chile",
  "Australia",
  "Albania", "Austria", "Belarus", "Belgium", "Bosnia and Herz.", "Bulgaria",
  "Croatia", "Czechia", "Czech Rep.", "Denmark", "Estonia", "Finland", "France",
  "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
  "Latvia", "Lithuania", "Luxembourg", "Moldova", "Montenegro", "Netherlands",
  "North Macedonia", "Macedonia", "Norway", "Poland", "Portugal", "Romania",
  "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
  "Ukraine", "United Kingdom",
]);

function isOperating(feature) {
  const id = feature.id != null ? String(feature.id) : "";
  if (OPERATING_IDS.has(id)) return true;
  const name = (feature.properties && feature.properties.name) || "";
  return OPERATING_NAMES.has(name);
}

/* Renders a Natural Earth world map with the operating regions filled.
   Purely decorative — sits behind the section copy. */
function WorldMap() {
  const svgRef = useMapRef(null);
  const [world, setWorld] = useMapState(null);

  useMapEffect(() => {
    let cancelled = false;
    if (typeof d3 === "undefined" || typeof topojson === "undefined") return;
    d3.json(WORLD_ATLAS_URL)
      .then((topology) => {
        if (cancelled || !topology) return;
        setWorld(topojson.feature(topology, topology.objects.countries));
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  useMapEffect(() => {
    if (!world || !svgRef.current) return;
    const W = 1000;
    const H = 500;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("viewBox", "0 0 " + W + " " + H).attr("preserveAspectRatio", "xMidYMid meet");

    // Trim Antarctica so the inhabited world fills the frame.
    const features = world.features.filter((f) => {
      const n = (f.properties && f.properties.name) || "";
      return n !== "Antarctica";
    });

    const projection = d3.geoNaturalEarth1().fitSize([W, H], { type: "FeatureCollection", features: features });
    const path = d3.geoPath(projection);

    const g = svg.append("g");
    g.selectAll("path")
      .data(features)
      .join("path")
      .attr("d", path)
      .attr("class", (d) => (isOperating(d) ? "wm-on" : "wm-off"));
  }, [world]);

  return <svg ref={svgRef} className="world-map-svg" aria-hidden="true"></svg>;
}

window.WorldMap = WorldMap;
