// Test Headlines
var old_headline1 = "To the Editor of The New York Times: The net profits in 1899 of a certain corporation engaged in the manufacture of steel and iron are said to have exceeded $21,000,000, and they are expected to reach $42,000,000 in the current year, 1900. Concerning that corporation, Mr. Abram S. Hewittt is quoted in your issue of this morning as saying that it makes nearly one-half of the steel manufactured in this country.";
var old_headline2 = "CHICAGO, Feb. 19. -- 'American securities will not suffer appreciably from the Boer war, no matter what setbacks the British forces may receive,' said Secretary of the Treasury Gage to-day. 'The same, indeed, may be said of English securities. The financial condition of England is recognized by financiers as so Strong that every demand for the prosecution of the war can easily be met.'";
var new_headline1 = "Vietnam and the United States are close to an agreement allowing Americans to adopt Vietnamese children again, five years after a ban was imposed amid allegations of baby-selling and babies offered without parents' consent, a visiting U.S. senator said.";
var new_headline2 = "Kellogg Co &lt;K.N.&gt; said 36,000 packages of its Special K Red Berries cereal could contain dangerous glass fragments and have been pulled from the market, the latest in a series of recalls of its popular brands."

// ##################################################################
// ###  Cleans the headlines into characterless lowercase arrays  ###
// ##################################################################

var cleanHeadline = function(headline){
  // Removes all non-word characters and downcases the string
  var scrubbed_string   = headline.toLowerCase().replace(/[^\w\s]/g, '');
  // Splits the headline into an array
  var headline_in_array = scrubbed_string.split(' ');

  return headline_in_array;
}

// ==================================================================


// ################################################################
// ###  Get the count of superlatives included in the headline  ###
// ################################################################

var totalSuperlativeCount = function(headline){

  var getSuperlativeCount = function(headline){

    // Superlatives that do not end in 'est'
    // var superlative_list       = ['very', 'awesome', 'incredible', 'ever', 'everything', 'heartbreaking'];
    var superlative_list       = word_bank
    var headline_in_array      = cleanHeadline(headline);
    var superlative_count      = 0;
    var superlative_word_array = [];

    superlative_list.forEach(function(superlative){
      headline_in_array.forEach(function(headline_word){
        if (headline_word == superlative) {
          superlative_count += 1;
          superlative_word_array.push(headline_word);
        }
      })
    })

    return {'numberOfSuperlativeWords': superlative_count, 'superlativeWordList': superlative_word_array};

  }

  var getEstCount = function(headline){

    var headline_in_array = cleanHeadline(headline);

    var est_count       = 0;
    var est_word_array = [];

    // Iterates through each word in the headline and counts the number of words end with 'est'
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

    return {'words': superlative_word_list, 'count': total_number_of_superlatives};
  }

  // Where all the above functions get called:
  
  return netCount(
                  getSuperlativeCount(headline),
                  getEstCount(headline)
                  );

}

// ================================================================


// ###################################
// ###  Give the headline a score  ###
// ###################################

var headlineSuperlativeScore = function(headline){

  var superlatives = totalSuperlativeCount(headline);
  var number_of_superlatives = superlatives.count;

  var headline_length = cleanHeadline(headline).length;

  var superlative_ratio = (number_of_superlatives/headline_length);

  return {
          words: superlatives.words,
          count: superlatives.count,
          ratio: superlative_ratio
          } 

}

// ===================================



