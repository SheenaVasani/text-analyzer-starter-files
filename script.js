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




