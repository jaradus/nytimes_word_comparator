var addVisualization = function(){
  
  var dataset = all_articles.sort(dynamicSort("year"))
  var bar_height = window.innerHeight/80
  var margin_bottom = 50

  // window.canvas.selectAll("rect.total_article_count")
  //         .data(dataset)
  //         .enter()
  //         .append("rect")
  //         .attr("class", "total_article_count")
  //         .attr("x", function(d, i){
  //           return i * (window.innerWidth / dataset.length) })
  //         .attr("y", function(d){
  //           return window.innerHeight - d.data.count*bar_height - margin_bottom})
  //         .attr("width", function(d){
  //           return window.innerWidth/dataset.length
  //         })
  //         .attr("height", 0)
  //         .style("fill", "#ff6666")
  //         .transition()
  //         .attr("height", function(d){
  //           return d.data['article_word_count']*bar_height
  //         })

  window.canvas.selectAll("rect.superlative_words")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class", "superlative_words")
        .on("mouseover", function(d,i) {
                                        d3.select(this)
                                        .style("fill", "#333333")                                      
                                        $('#headline_container').html(d.data.original_article.forEach(function(article){
                                                                                                                console.log(article)
                                                                                                                }))
                                        // $('#headline_container').html(d.data.words)


                                        })
        .on("mouseout", function(d,i) {
                                        d3.select(this)
                                        .style("fill", "#000000")
                                        })
        .attr("x", function(d, i){
          return i * (window.innerWidth / dataset.length) })
        .attr("y", function(d){
          return window.innerHeight - d.data.count*bar_height - margin_bottom})
        .attr("width", function(d){
          return window.innerWidth/dataset.length
        })
        .attr("height", 0)
        .style("fill", "black")
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
        
}