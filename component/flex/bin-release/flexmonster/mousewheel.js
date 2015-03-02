/*	Flexmonster Pivot Table and Charts Component
*/

function handle(delta, flashobj){
    if(flashobj && flashobj.mousewheelHandler){
        flashobj.mousewheelHandler(delta);
    }
}

function wheel(event, flashobj){
    var delta = 0;
    if (!event) /* IE. */
        event = window.event;
    if (event.wheelDelta) { /* IE/Opera. */
        delta = event.wheelDelta/120;
    } else if (event.detail) { /** Mozilla. */
        /** In Mozilla, sign of delta is different than in IE.
         * Also, delta is multiple of 3.
         */
        delta = -event.detail/3;
    }
    if (delta)
        handle(delta, flashobj);
    if (event.preventDefault)
        event.preventDefault();
    event.returnValue = false;
}

function initScrollListening(flashobj) { /** enable mouse wheel scrolling */
    if(navigator.appName.indexOf("Microsoft")==-1) {
        if(flashobj.addEventListener) {
            /** Mozilla. */
            flashobj.addEventListener('DOMMouseScroll',function(event){wheel(event, flashobj)}, false);
            /** Chrome */
            flashobj.addEventListener('mousewheel', function(event){wheel(event, flashobj)}, false);
        } else if(window.opera) {
            /** Opera*/
            flashobj.onmousewheel = function(event){wheel(event, flashobj)};
        }
    } else {
        /** IE */
        flashobj.onmousewheel = function(event){wheel(event, flashobj)};
    }
}
