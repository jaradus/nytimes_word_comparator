var addVisualization = function(){
  
  var dataset = all_articles.sort(dynamicSort("year"))
  var bar_height = 40
  var margin_bottom = 50

  window.canvas.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i){
          return i * (window.innerWidth / dataset.length) })
        .attr("y", function(d){
          return window.innerHeight - d.data.count*bar_height - margin_bottom})
        .attr("width", function(d){
          return window.innerWidth/dataset.length
        })
        .attr("height", function(d){
          return d.data.count*bar_height
        })
        .style("fill", "black")


  window.canvas.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d){
          return d.year;
        })
        .attr("x", function(d, i){
          return i * (window.innerWidth / dataset.length)
        })
        .attr("y", function(d){
          return window.innerHeight - margin_bottom + 20})
        

}