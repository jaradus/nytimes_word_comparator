

  var dataset = all_articles


var addVisualization = function(){
  


  window.canvas.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i){
          return i * (window.innerWidth / dataset.length) })
        .attr("y", function(d){
          return window.innerHeight - d.data.count*40})
        .attr("width", function(d){
          return window.innerWidth/dataset.length
        })
        .attr("height", function(d){
          return d.data.count*40
        })
        .style("fill", "red")
        .text(function(d){
          return d.data.words
        })
        .style("fill", "black")

}