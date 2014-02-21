// ##################################################################
// ###  Cleans the headlines into characterless lowercase arrays  ###
// ##################################################################

var cleanHeadline = function(combined_articles){
  var combined_articles_string = combined_articles.join('')

  // Removes all non-word characters and downcases the string
  var scrubbed_string   = combined_articles_string.toLowerCase().replace(/[^\w\s]/g, '');
  // Splits the combined_articles into an array
  var headline_in_array = scrubbed_string.split(' ');

  return headline_in_array;
}

// ==================================================================


// #########################################################################
// ###  Get the count of superlatives included in the combined articles  ###
// #########################################################################

var totalSuperlativeCount = function(combined_articles){

  var getSuperlativeCount = function(combined_articles){
    // Superlatives that do not end in 'est'
    var superlative_list       = word_bank;
    var headline_in_array      = cleanHeadline(combined_articles);
    var superlative_count      = 0;
    var superlative_word_array = [];

    superlative_list.forEach(function(superlative){
      headline_in_array.forEach(function(headline_word){
        if (headline_word == superlative) {
          superlative_count += 1;
          superlative_word_array.push(headline_word+" ");
          //ADDED SPACES
        }
      })
    })

    return {'totalNumberOfWords': headline_in_array.length, 'numberOfSuperlativeWords': superlative_count, 'superlativeWordList': superlative_word_array};

  }

  var getEstCount = function(combined_articles){

    var headline_in_array = cleanHeadline(combined_articles);

    var est_count       = 0;
    var est_word_array = [];

    // Iterates through each word in the combined_articles and counts the number of words end with 'est'
    headline_in_array.forEach(function(word){
      if (word.slice(-3) == "est") {
        est_count += 1;
        est_word_array.push(word);
      }
    })

    return {'numberOfEstWords': est_count, 'estWordList': est_word_array};

  }

  var netCount = function(get_superlative_count, get_est_count){
    var all_superlatives = [];

    var total_number_of_superlatives = get_superlative_count.numberOfSuperlativeWords + get_est_count.numberOfEstWords;

    var superlative_word_list = all_superlatives.concat(get_superlative_count.superlativeWordList).concat(get_est_count.estWordList);

    return {'article_word_count': get_superlative_count.totalNumberOfWords, 'words': superlative_word_list, 'count': total_number_of_superlatives};
  }

  // Where all the above functions get called:
  
  return netCount(
                  getSuperlativeCount(combined_articles),
                  getEstCount(combined_articles)
                  );

}

// ================================================================


// ###################################
// ###  Give the headline a score  ###
// ###################################

var headlineSuperlativeScore = function(combined_articles){

  var superlatives = totalSuperlativeCount(combined_articles);
  var number_of_superlatives = superlatives.count;

  var headline_length = cleanHeadline(combined_articles).length;

  var superlative_ratio = (number_of_superlatives/headline_length);

  return {
          words: superlatives.words,
          count: superlatives.count,
          ratio: superlative_ratio,
          original_article: combined_articles,
          'article_word_count': superlatives.article_word_count
          } 

}

// ===================================



