//typing
var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// parallex hover
$.fn.parallax = function(resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2, {
      x: -((mouse.clientX - window.innerWidth / 2) / resistance),
      y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
  };
  
  $(document).mousemove(function(e) {
    $(".background").parallax(-30, e);
    $(".cloud").parallax(10, e);
    $(".cloud2").parallax(20, e);
    $(".cloud3").parallax(30, e);
    });


// window.onload = function(){
//   var imgTop = document.querySelector('#about .about-bg');
//   console.log(imgTop)
//   imgTop.style.height = '65vh';
//   imgTop.style.width = '45vw';
//   imgTop.style.left = '0';
//   imgTop.style.top = '15%';
//   imgTop.style.transition = "all 2s cubic-bezier(0.43, 0.01, 0, 1) 0s";
// }

function hideNav(){
  var navFp = document.querySelector('.nav-fp ul');
  var pageNum = document.querySelector('#about .page-num p');
  navFp.style.transform = 'translateX(-110%)';
  navFp.style.transition = 'all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)';
  pageNum.style.transform = 'translateY(110%)';
  pageNum.style.transition = 'all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)';
}