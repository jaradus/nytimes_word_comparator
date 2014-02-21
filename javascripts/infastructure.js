function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

$(function(){

  window.canvas = d3.select("body")
              .append("svg")
              .attr("width", window.innerWidth)
              .attr("height", window.innerHeight)

  multiApiCall(year_data, 1)


})



