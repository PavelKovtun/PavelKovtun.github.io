var startLocation = window.location.href;
var helper;
document.onhlep=new Function(“return false”);
window.onhelp=new Function(“return false”);
if (startLocation.substr(-1) == "#") { helper = "window-blackout";}
else {
	helper = "#window-blackout";
}
addEventListener("keydown", function(event) {
    if (event.keyCode == 112)
		window.location.href = startLocation + helper;
  });

window.addEventListener("keydown",function(event) {
if (event.keyCode === 112) { 
	if ( window.event ) {
		window.event.keyCode = 0;
	}
}
})
 
