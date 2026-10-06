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