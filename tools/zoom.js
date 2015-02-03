function MouseScroll(e) {
    var evt = window.event || e; //equalize event object
    var delta = evt.detail? evt.detail*(-120) : evt.wheelDelta; //delta returns +120 when wheel is scrolled up, -120 when scrolled down

    if( delta>0 ) calculate(1); // zoom in
    else if( delta<0 ) calculate(-1); // zoom out

    if( evt.preventDefault ) //disable default wheel action of scrolling page
        evt.preventDefault();
    else return false;
}

function Init() {
    // for mouse scrolling in Firefox
	default_width  = document.getElementById("route_map").clientWidth;
    var elem = document.getElementById("route_map");
    if(elem.addEventListener){    // all browsers except IE before version 9
        // Internet Explorer, Opera, Google Chrome and Safari
        elem.addEventListener("mousewheel", MouseScroll, false);
        // Firefox
        elem.addEventListener("DOMMouseScroll", MouseScroll, false);
    }
    else{
        if (elem.attachEvent){ // IE before version 9
            elem.attachEvent("onmousewheel", MouseScroll);
        }
    }
}

window.onload=function(){
    Init();
}

var default_zoom = 12;
var zoom = default_zoom;
function calculate(ii){
	zoom = (ii==0)? default_zoom : zoom+ii;
	if(zoom<=0) zoom = 1;
	/*var ratio = "scale(" + zoom/default_zoom + ")";
	var o = document.getElementById('route_map').style;
	o.MozTransform = ratio;
	o.WebkitTransform = ratio;
	o.MsTransform = ratio;
	o.transform = ratio;*/
	var img_width = default_width * zoom/default_zoom;
	document.getElementById("route_map").setAttribute("style","width:"+img_width+"px");
}