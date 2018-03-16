/*
 * jQuery script: Animate anchor link scrolling.
 * Source: Stack Overflow.
 */

$(document).ready(function () {
  /* Set whole html body as the field for animation */
  var $root = $('html, body');

  /* Listen for click event */
  $('nav a, footer a').click(function () {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
  });
});