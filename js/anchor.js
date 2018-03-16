/*
 * jQuery script: Animate anchor link scrolling.
 * Source: Stack Overflow.
 */

$(document).ready(function () {
  /* Set whole html body as the field for animation */
  var $root = $('html, body');
  /* Make up for sticky navbar */
  var scroll_offset = 50;

  /* Listen for click event */
  $('nav a, footer a').click(function () {
    $root.animate({
      scrollTop: $($(this).attr('href')).offset().top - scroll_offset
    }, 300);
  });
});