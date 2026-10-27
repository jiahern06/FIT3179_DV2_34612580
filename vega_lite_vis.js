var embedOptions = {
  actions: false,
  renderer: "svg"
};

function embedVisualization(container, specification) {
  return vegaEmbed(container, specification, embedOptions).catch(function(error) {
    console.error("Unable to render " + specification, error);
  });
}

embedVisualization("#crime_map", "crime_rate_map.vl.json");
embedVisualization("#symbol_map", "hospital_symbol_map.vg.json");
embedVisualization("#bivariate_map", "bivariate_state_map.vg.json");
embedVisualization("#crime_heatmap", "state_crime_heatmap.vg.json");
embedVisualization("#radial_crime_chart", "crime_composition_radial.vg.json");
embedVisualization("#crime_mix_scatterplot", "connected_scatterplot.vg.json");
embedVisualization("#bump_chart", "internet_bump_spec.vg.json");
embedVisualization("#stream_chart", "healthstream.vg.json");
embedVisualization("#dot_chart", "internet_dotplot.vg.json");
embedVisualization("#pcp_chart", "District_pcp.vg.json");