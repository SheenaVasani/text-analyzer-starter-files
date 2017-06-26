// ====================================================================================================
//
// Text Analyzer
//
// ====================================================================================================

// --------------------------------------------------
// Initialize when the DOM is ready
// --------------------------------------------------

$(function() {

    // Cache Elements
    // -----------------------------
    var textarea   = $('#js-text'),
        submitBtn  = $('#js-submit'),
        countElem  = $('.js-wordcount'),
        uniqueElem = $('.js-unique'),
        avgElem    = $('.js-average'),
        report     = $('.text-report');

    // Add analysis to the DOM
    // -----------------------------
    var updateDom = function(wordCount, uniques, average) {
        countElem.text(wordCount);
        uniqueElem.text(uniques);
        avgElem.text(average);
        report.removeClass('hidden');
    };

    // Submit button handler
    // -----------------------------
    submitBtn.click(function(e) {
        e.preventDefault();

        var wordList  = textarea.val().split(' '),
            wordCount = wordList.length,
            uniques   = $.unique(wordList).length,
            sum       = 0,
            average;

        $.each(wordList, function(index, item) {
           sum += item.length;
        });

        average = Math.round(sum / wordCount);

        updateDom(wordCount, uniques, average);
    });

});


// //previous drafts:
// //function wordCounter() {

// $(document).ready(function(){
// $("textarea").click(function(){

//     return var totalWordCount = totalWordCount(words);
//     return var uniqueWordCount = uniqueWordCount(words);
//     return var averageWordLength = averageWordLength(words);

//     var words = $(event.currentTarget).find("#user-text");
//     //variable with global scope containing user text will pass through as a parameter to each of the functions below

// // this.Total_Word_Count: 

// function totalWordCount (words) {
//     var words = $(event.currentTarget).find("#user-text");
//     var wordLength = words.length;
//     return $(.wordcount).text(wordLength);
    
//     ///go back to css, add a wordcount class to differentiate from the others. 
//     // replace the text content of
//     ///dd.wordcount with whatever the value of the variable, wordLength is.
// }


// //this.Average_Word_Length:

//  function averageWordLength(words) {

// var totalWordCount = totalWordCount();
// //or, if that doesn't return the variable but like html, then just do
// /// var inputTotal = $(event.currentTarget).find(".usertext");
//     //var wordLength = inputTotal.length;
// var characters = totalWordCount.split();
// var averageWordLength = characters.length/totalWordCount.length;

// return $(.average).text(averageWordLength);

// }

// //this.Unique_Word_Count: 

// function uniqueWordCount (words) {
//     var words = $(event.currentTarget).find("#user-text");
//     var uniqueWord = [];
//     var currentWord = words[0];
//     for (var i=0; i <= words.length; i++) {
//      if (words[i] != currentWord) {
//        uniqueWord.push(words[i]);
//     }
//     return var uniqueTotal = uniqueWord.length;
//   }
//   return $(.unique).text(uniqueTotal);
// }

// // we set `currentWord` to the value
// //   // of first item in `words`,
// //   // then we loop through `words`,
// //   // comparing each item to `currentWord`.
// //   // if the item is the same as 'currentWord'
// //   // we remove and push that word into the 'not UniqueWord' array
//     // whatever is left in the 'words' array are the unique words

// ///refer back to total word length either through passing first function in, or doing all over again...which i may do because not sure
// //if will return back the variable value i want, but the html element? and if that makes a difference?
// ///split each word into characters
// ///find length of characters and put into array or variable
// ///take that new array or variabe and divide it by total word length
// ///that is the result

//     ]

//     //at the end here, once you've finished calculating all the totals, show these results. 
// ///so remove the hidden text-report class and make visible.

// $("button").click(function(){
//     $("dl").removeClass("hidden");


// });

// $(function() {
//     wordCounter();
// });






// //TEST:
// // $(document).ready(function(){
// //     $("p").click(function(){
// //         $("p").hide();
// //     });
// // });

