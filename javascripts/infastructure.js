$(function(){

  window.canvas = d3.select("body")
              .append("svg")
              .attr("width", window.innerWidth)
              .attr("height", window.innerHeight);

  multiApiCall(year_data)
})