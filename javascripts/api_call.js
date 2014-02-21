//  url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?%5Bq=United+States%5D&begin_date=20130101&end_date=20130220&api-key=40ff7a229ca515812d3727468dbbefe9:17:57508048',


var rightNow = new Date();
var year = rightNow.getFullYear()
var year_span = 100
var year_past = year - year_span
var month = rightNow.getMonth()+1
var day = rightNow.getDate()

if ( month.toString().length < 2 ) {
    var month = "0"+month.toString()
}

if ( month.toString().length < 2 ) {
    var day = "0"+day.toString()
}

var date_now = year.toString()+month.toString()+day.toString()
var date_past = year_past.toString()+month.toString()+day.toString()


var headlineCombiner = function(results) {
  var combined_article;
  results.response.docs.forEach(function(article) {
    var lead_paragraph = article.lead_paragraph
    var headline = article.headline.main
    combined_article = lead_paragraph+headline
  })
  return combined_article
}
 
var all_articles = [];

var apiCall = function(year_month_day, year){

  console.log("Ajax call made")

  $.ajax({
  url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?end_date='+year_month_day+'&api-key=40ff7a229ca515812d3727468dbbefe9:17:57508048',
  method: 'get',
  dataType: 'json',
  success: function(data){
    console.log("Ajax data returned")
    var combined_article = headlineCombiner(data)
    console.log(combined_article)
    var superlative_data = headlineSuperlativeScore(combined_article)
    all_articles.push({year: year,
                        data: superlative_data
                      })
    }
  })
}

var year_data = {
  start_year: year,
  month: month.toString(),
  day: day.toString(),
  end_year: year_past
}

var multiApiCall = function(year_data){
  for (var i=year_data.start_year; i>year_data.end_year; i-=20) {
    var year_month_day = i+year_data.month+year_data.day
    console.log(i)
    var superlative_data = apiCall(year_month_day, i)
  }
}


// multiApiCall(year_data)

