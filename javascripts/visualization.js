var addVisualization = function(){
  
  var dataset = all_articles.sort(dynamicSort("year"))
  var bar_height = window.innerHeight/80
  var margin_bottom = 50
  var bar_padding = 1

  window.canvas.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .on("mouseover", function(d,i) {
                                        d3.select(this)
                                        // .style("fill", "#333333")                                      
                                        $('#headline_container').html(d.data.original_article.forEach(function(article){
                                                                                                                console.log(article)
                                                                                                                }))
                                        $('#headline_container').html(d.data.words)
                                        $('#headline_container').css("color", "#ef4223")


                                        })
        .on("mouseout", function(d,i) {
                                        d3.select(this)
                                        .style("fill", "#ef4223")
                                        })
        .attr("x", function(d, i){
          return i * (window.innerWidth / dataset.length) })
        .attr("y", function(d){
          return window.innerHeight - d.data.count*bar_height - margin_bottom})
        .attr("width", function(d){
          return window.innerWidth/dataset.length - bar_padding
        })
        //ADDED PADDING
        .attr("height", 0)
        .style("fill", "#ef4223")
        .transition()
        .attr("height", function(d){
          return d.data.count*bar_height
        })
        .duration(1000)
        .ease("bounce")

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
        .style("fill", "#ef4223")

        d3.select("body").style("background-color", "#33150d");
        
}