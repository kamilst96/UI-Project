/*
 * jQuery script: Toggle responsive menu visibility.
 */

$(function () {
  /* Initialize variables */
  var $nav = $('nav a');
  var $navtoggle = $('nav a.navtoggle');

  /* Listen for click event */
  $navtoggle.click(function () {

    /* Toggle menu visibility */
    $nav.each(function () {
      $(this).toggleClass('responsive');
    });

    /* Change navtoggle mode */
    var symbol = $nav.first().hasClass('responsive') ? '&#9652;' : '&#9662;';
    $navtoggle.html(symbol + ' Menu ' + symbol);
  });
});