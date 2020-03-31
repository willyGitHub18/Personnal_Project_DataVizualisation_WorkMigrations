function onMouseOver(d) {
  // Tooltip action when department hovered
  // Tooltip displaying department name when hovered
  var tooltip = d3.select("text#tooltip");

  // initialize if missing
  if (tooltip.size() < 1) {
    tooltip = d3.select("g#plot").append("text").attr("id", "tooltip");
  }

  // calculate bounding box of plot WITHOUT tooltip
  tooltip.style("display", "none");
  onMouseMove(d);

  var bbox = {
    plot: d3.select("g#plot").node().getBBox()
  }

  // restore tooltip display but keep it invisible
  tooltip.style("display", null);
  tooltip.style("visibility", "hidden");

  // now set tooltip text and attributes
  tooltip.text(d.name);

  tooltip.attr("text-anchor", "end");
  tooltip.attr("dx", -5);
  tooltip.attr("dy", -5);

  // calculate resulting bounding box of text
  bbox.text = tooltip.node().getBBox();

  // determine if need to show right of pointer
  if (bbox.text.x < bbox.plot.x) {
    tooltip.attr("text-anchor", "start");
    tooltip.attr("dx", 5);
  }

  // determine if need to show below pointer
  if (bbox.text.y < bbox.plot.y) {
    tooltip.attr("dy", bbox.text.height / 2);

    // also need to fix dx in this case
    // so it doesn't overlap the mouse pointer
    if (bbox.text.x < bbox.plot.x) {
      tooltip.attr("dx", 15);
    }
  }

  tooltip.style("visibility", "visible");
  d3.select(this).classed("selected", true);

  // Paths action when department hovered
  // Shows only paths for the hovered department (incoming and outgoing paths)
  d3.select("#plot").selectAll(".move_NS")
      .filter(function(l) { return l[0].dpt === d.dpt || l[l.length-1].dpt === d.dpt; })
      .classed("highlight", true);
  d3.select("#plot").selectAll(".move_SN")
      .filter(function(l) { return l[0].dpt === d.dpt || l[l.length-1].dpt === d.dpt; })
      .classed("highlight", true);
  d3.select("#plot").selectAll(".move_NS")
      .filter(function(l) { return l[0].dpt != d.dpt && l[l.length-1].dpt != d.dpt; })
      .classed("downlight", true);
  d3.select("#plot").selectAll(".move_SN")
      .filter(function(l) { return l[0].dpt != d.dpt && l[l.length-1].dpt != d.dpt; })
      .classed("downlight", true);

  // On hover, departments hilighted
  cityId = d3.select(this).attr("id")
  d3.select("#" + cityId).classed("landlight", true)
   

}

function onMouseMove(d) {
  var coords = d3.mouse(d3.select("g#plot").node());

  d3.select("text#tooltip")
    .attr("x", coords[0])
    .attr("y", coords[1]);
}

function onMouseOut(d) {
  // Remove tooltip when mouse goes away
  d3.select(this).classed("selected", false);
  d3.select("text#tooltip").style("visibility", "hidden");

  // Map flow is back to normal, every path os displayed
  d3.select("#plot").selectAll(".move_NS")
      .classed("highlight downlight", false);
  d3.select("#plot").selectAll(".move_SN")
      .classed("highlight downlight", false);

  // Departments hover highlight off
  d3.select("#" + cityId).classed("landlight", false)

}