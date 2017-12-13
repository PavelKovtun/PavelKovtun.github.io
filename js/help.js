var startLocation = window.location.href;
var helper;
document.onhelp = function() {return(false);}
window.onhelp = function() {return(false);}
if (startLocation.substr(-1) == "#") { helper = "window-blackout";}
else {
	helper = "#window-blackout";
}
addEventListener("keydown", function(event) {
    if (event.keyCode == 112) {
	    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
	    window.location.href = startLocation + helper;
    }
  });
 
