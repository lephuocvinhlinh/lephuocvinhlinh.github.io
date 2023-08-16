// if (document.addEventListener) {
//    document.addEventListener("mousewheel", MouseWheelHandler, {passive: false}); //IE9, Chrome, Safari, Oper
//    document.addEventListener("DOMMouseScroll", MouseWheelHandler, {passive: false}); //Firefox
// } else {
//    document.attachEvent("onmousewheel", MouseWheelHandler, {passive: false}); //IE 6/7/8
// }

// var i = 0;
// var mouseWheel = true;
// var down = true;



// function MouseWheelHandler(e) {
//    if (!mouseWheel) {
//       return false;
//    }
//    mouseWheel = false;
//    setTimeout(function() {
//       mouseWheel = true;
//    }, 1000); // Stop mouse wheel event for 0.5 seconds 
//    e = window.event || e;
//    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
//    var h = window.innerHeight;
//    console.log(e.detail);
//    var section = document.getElementsByClassName("scroll-section");
//    if (i <= section.length && i >= 0) {
//       //scrolling down?
      
      
//       if (delta < 0) {
//        ++i;
//        if (i > section.length) i = 0;
//          window.scrollTo({
//            top: h * i,
//            behavior: "smooth"
//          });
         
//          down = true;
//          if (i > section.length) i = Math.round(section.length);
//          console.log(i);
//       } else { 
//        --i;
//          //scrolling up?
//          if (i < 0) i = Math.round(section.length) ;

//          window.scrollTo({
//             top: h * i,
//             behavior: "smooth"
//          });
//          down = false;
//          if (i <0) i = 0;
//          console.log(i);
//       }
//    } else {
//       i = 1;
//       window.scrollTo({
//          top: 0,
//          behavior: "smooth"
//       });
//    }
// }

var mouseWheel = true;
function wheel(event) {
   var delta2 = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
   // if (event.wheelDelta) {(delta2 = event.wheelDelta/ 60);}
   // else if (event.detail) {(delta2 = -event.detail / 3);}
   handle(delta2);
  //  if (event.preventDefault) {(event.preventDefault());}
  //  event.returnValue = false;
}

function handle(delta2) {
   var time = 800;
   var distance = window.innerHeight;

   if (!mouseWheel)
   {
      return false
   }
   mouseWheel = false;
   setTimeout(function() {
      mouseWheel = true;
   }, 1000); // Stop mouse wheel event for 0.5 seconds 
   $('html, body').stop().animate({
       scrollTop: $(window).scrollTop() - (distance*delta2)
   }, time );
   
}


if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
window.onmousewheel = document.onmousewheel = wheel;