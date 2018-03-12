function toggleNavbar() {

  // Get all navitems and the toggle.
  var navitems = document.getElementsByClassName("navitem");
  var navtoggle = document.getElementById("navtoggle");

  // Determine current navbar state by looking at first array element.
  var navbarClosed = navitems[0].className == "navitem";

  // Determine navitems visibility and button state.
  var mode = navbarClosed ? "navitem responsive" : "navitem";
  var symbol = navbarClosed ? "&#9652;" : "&#9662;";

  // Apply navitems visibility and button state (arrows + background).
  for (i = 0; i < navitems.length; i++) {
    navitems[i].className = mode;
  }
  navtoggle.innerHTML = symbol + " Menu " + symbol;
  navtoggle.style.background = navbarClosed ? "#f9f9f9" : "#ffffff";
}