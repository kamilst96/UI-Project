/*
 * jQuery script that toggles responsive menu visibility.
 */

$(document).ready(function () {
  /* Initialize variables */
  var navitems = $("nav a:not(.navtoggle)");
  var navtoggle = $("nav a.navtoggle");

  /* Listen for click() event */
  navtoggle.click(function () {

    /* Toggle menu visibility */
    navitems.each(function () {
      $(this).toggleClass("responsive");
    });

    navtoggle.each(function() {
      $(this).toggleClass("responsive");
    })

    /* Change navtoggle mode */
    var symbol = navitems.first().hasClass("responsive") ? "&#9652;" : "&#9662;";
    navtoggle.html(symbol + " Menu " + symbol);
  });
});