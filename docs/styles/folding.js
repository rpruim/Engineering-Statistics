$(document).ready(function() {

  $('[fold*=s]').each(function () {
    // add button to source code chunks
    $('pre.r, pre.python', this).prepend('<div class="showopt">Show Source</div><br class="showopt">');
    $('pre.r, pre.python', this).children('code').attr('class', 'folded');
  });

  $('[fold*=o]').each(function () {
    // add button to output chunks
      $('pre:not(.r):not(.python)', this).has('code').prepend('<div class="showopt">Show Output</div><br class="showopt"/>');
      $('pre:not(.r):not(.python)', this).children('code:not(r)').addClass('folded');

      // add button to plots
      $(this).find('img').wrap('<pre class="plot"></pre>');
      $('pre.plot', this).prepend('<div class="showopt">Show Plot</div><br class="showopt"/>');
      $('pre.plot', this).children('img').addClass('folded');
      // add button to tables
//      $(this).find('table').wrap('<pre class="folding-table"></pre>');
//      $('pre.folding-table', this).prepend('<div class="showopt">Show Table</div><br class="showopt"/>');
//      $('pre.folding-table', this).children('table').addClass('folded');
  });

  $('[fold*=S]').each(function () {
    // add button to source code chunks
    $('pre.r, pre.python', this).prepend('<div class="showopt">Hide Source</div><br class="showopt"/>');
  });

  $('[fold*=O]').each(function () {
    // add button to output chunks
      $('pre:not(.r):not(.python)', this).has('code').prepend('<div class="showopt">Hide Output</div><br class="showopt"/>');

      // add button to plots
      $(this).find('img').wrap('<pre class="plot"></pre>');
      $('pre.plot', this).prepend('<div class="showopt">Hide Plot</div><br class="showopt"/>');
      // add button to tables
//      $(this).find('table').wrap('<pre class="folding-table"></pre>');
//      $('pre.folding-table', this).prepend('<div class="showopt">Hide Table</div><br class="showopt"/>');
  });

  // function to toggle the visibility
  $('.showopt').click(function() {
    var label = $(this).html();
    if (label.indexOf('Show') >= 0) {
      $(this).html(label.replace('Show', 'Hide'));
    } else {
      $(this).html(label.replace('Hide', 'Show'));
    }
    $(this).siblings('code, img').slideToggle('fast', 'swing');
//    $(this).siblings('code, table').slideToggle('fast', 'swing');
  });

  $('div.explain').each(function () {
    // wrap in explain-wrapper
    $(this).wrap("<div class='explain-wrapper'></div>")
    // add button
    if ($(this).attr('label')) {
      $(this).before('<button class="explain">' + $(this).attr('label') + '</button>');
    } else {
      $(this).before('<button class="explain">Show Explanation</button>');
    }
    $(this).attr('class', 'explain folded');
    $(this).prepend('<br class = "explain"/>');
  });

  // function to toggle the visibility
  $('button.explain').click(function() {
    var label = $(this).html();
    if (label.indexOf('Show') >= 0) {
      $(this).html(label.replace('Show', 'Hide'));
    } else {
      $(this).html(label.replace('Hide', 'Show'));
    }
    $(this).next('div.explain').slideToggle('fast', 'swing');
  });

  $('div.foldable').each(function () {
    // wrap in foldable-wrapper
    $(this).wrap("<div class='foldable-wrapper'></div>")
    // add button
    if ($(this).attr('label')) {
      $(this).before('<button class="foldable">' + $(this).attr('label') + '</button>');
    } else {
      $(this).before('<button class="foldable">Show Explanation</button>');
    }
    $(this).attr('class', 'foldable folded');
    $(this).prepend('<br class = "foldable"/>');
  });

  // function to toggle the visibility
  $('button.foldable').click(function() {
    var label = $(this).html();
    if (label.indexOf('Show') >= 0) {
      $(this).html(label.replace('Show', 'Hide'));
    } else {
      $(this).html(label.replace('Hide', 'Show'));
    }
    $(this).next('div.foldable').slideToggle('fast', 'swing');
  });

  // hide all folded chunks when document is loaded
  $('.folded').css('display', 'none')
});