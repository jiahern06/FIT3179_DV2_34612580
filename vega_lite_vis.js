// Variable storing the location of your Vega-Lite JSON file
var vg_1 = "crime_rate_map.vl.json";

// Embed the visualization into the HTML div container with id "crime_map"
vegaEmbed("#crime_map", vg_1).then(function(result) {
  // Access the Vega view instance as result.view if needed
}).catch(console.error);

// Variable storing the location of your second Vega-Lite JSON file
var vg_2 = "hospital_symbol_map.vg.json";

// Embed the second visualization into the HTML div container with id "symbol_map"
vegaEmbed("#symbol_map", vg_2).then(function(result) {
  // Map 2 rendered successfully
}).catch(console.error);

// Variable storing the location of your third Vega-Lite JSON file
var vg_3 = "bivariate_state_map.vg.json";
vegaEmbed("#bivariate_map", vg_3).then(function(result) {
  // Map 3 rendered successfully
}).catch(console.error);

// Variable storing the location of Chart 4 JSON file
var vg_4 = "state_crime_heatmap.vg.json";

// Embed the visualization into the HTML div container with id "crime_heatmap"
vegaEmbed("#crime_heatmap", vg_4).then(function(result) {
  // Chart 4 rendered successfully
}).catch(console.error);

// Variable storing the location of Chart 5 JSON file
var vg_5 = "crime_composition_radial.vg.json";

// Embed the fifth visualization into the HTML div container with id "radial_crime_chart"
vegaEmbed("#radial_crime_chart", vg_5).then(function(result) {
  // Chart 5 rendered successfully
}).catch(console.error);