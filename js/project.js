// let skillList= document.querySelectorAll('.skills .skill-bar');
window.onscroll = function appear() { 
    // skillList.forEach(skill => { 
    //     var skillSize = skill.getBoundingClientRect();
    //     var skillBottomPart = skillSize.bottom;    
    //     if (((window.innerHeight+70)  >= skillBottomPart) && (skillBottomPart>50)  ){
    //         skill.classList.add('in');
    //     }
    // });
    // console.log(window.scrollY);
    // console.log(window.innerHeight);
    var top = document.querySelector('.navigation__icon .topBar');
    var bottom = document.querySelector('.navigation__icon .bottomBar');
    var socials = document.querySelectorAll('.navigation .social-icon a');
    if(window.scrollY > window.innerHeight){
        top.style.background = 'black';
        bottom.style.background = 'black';
        socials.forEach(social=>{
            social.style.color = 'black';
        })
    }
    else{
        top.style.background = 'white';
        bottom.style.background = 'white';
        socials.forEach(social=>{
            social.style.color = 'white';
        })
    }

}

// window.onscroll = function() {appear()};
// console.log(window.scrollY);
// function appear(){
//         console.log('aaaaaaaaaa');
// }

// if (document.addEventListener) {
//     document.addEventListener("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
//     document.addEventListener("DOMMouseScroll", MouseWheelHandler, false); //Firefox
//  } else {
//     document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
//  }


window.onload = function(){
    console.log('aaaa');
    var imgTop = document.querySelector('.container .top-page .img-top');
    console.log(imgTop)
    imgTop.style.height = '100%';
    imgTop.style.width = '60%';
    imgTop.style.left = '40%';
    imgTop.style.top = '0';
    imgTop.style.transition = "all 2s cubic-bezier(0.43, 0.01, 0, 1) 0s";
}

 