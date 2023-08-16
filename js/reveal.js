let sections = document.querySelectorAll(".main .scroll-section");

window.onscroll = function fadeIn() {
    sections.forEach(section => {
        console.log(window.scrollY);
        var id = section.getAttribute('id');
        let sectionSize = section.getBoundingClientRect();
        let bottomPart = sectionSize.bottom;
        let middlePart = (sectionSize.bottom + sectionSize.top)/2;
        if (id === 'home')
        {
            var a = section.querySelector('.home-content a');
            var divs = section.querySelectorAll('.home-content div');
            var imgs = section.querySelectorAll('.home-img img');
            var main_img = section.querySelectorAll('.home-img .background');
            var nav_fp = document.querySelector('.nav-fp li:nth-child(1) a')
            var scroll = document.querySelector('#home .scroll-noti p')
            
            if (((window.innerHeight)  >= middlePart) && (middlePart>50)){
                // if (window.scrollY >= 0 && window.scrollY < 792){
                // section.style.opacity = "1";
                // section.style.transition = "3s ease-in-out";
                divs.forEach(div => {
                    div.style.transition = "cubic-bezier(0.075, 0.82, 0.165, 1) " + (Math.floor(Math.random() * (2)) + 1) +"s";
                    div.style.transform = 'translateX(0)';
                    // a.style.opacity = "1";
                })
                
                imgs.forEach(img => {
                    img.style.transition = "cubic-bezier(0.075, 0.82, 0.165, 1) " + (Math.floor(Math.random() * (2)) + 5) +"s";
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                    // a.style.opacity = "1";
                })
                
                nav_fp.classList.add('active');
                scroll.style.transform = 'translateY(0)';
                scroll.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1.16) 0s";
            } else {
                divs.forEach(div => {
                    div.style.transition = "cubic-bezier(0.075, 0.82, 0.165, 1) 5ms";
                    div.style.transform = 'translateX(-500px)';
                    // a.style.opacity = "1";
                })
                imgs.forEach(img => {
                    img.style.transition = "cubic-bezier(0.075, 0.82, 0.165, 1) " + (Math.floor(Math.random() * (2)) + 5) +"s";
                    img.style.opacity = '0';
                    img.style.transform = 'scale(0.7) translateX(10%)';
                    // a.style.opacity = "1";
                })
                
                // a.style.opacity = "0";
                nav_fp.classList.remove('active');

                scroll.style.transform = 'translateY(210%)';
                scroll.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1.16) 0s";

            }
        }
        // REVEAL BIRTHDAY
        else if (id === 'contact')
        {
            var over = document.querySelectorAll('#contact .img-box .image-cover');
            var cover = over[0];
            var coverFront = over[1];

            var h1 = document.querySelector('#contact .card h1');
            var spans = document.querySelectorAll('#contact .card span');
            var btn = document.querySelector('#contact .btn .gift');
            var pageNumber = document.querySelector('#contact .page-num p');
            
            var img = document.querySelector('#contact .card')
            
            var nav_fp = document.querySelector('.nav-fp li:nth-child(4) a')
            if (((window.innerHeight)  >= middlePart) && (middlePart>50)){
                // if (window.scrollY > (0+window.innerHeight)/2 && window.scrollY <= window.innerHeight){
                cover.style.transform = 'translateX(110%) ';
                cover.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1.16) 0s";
                coverFront.style.transform = 'translateX(110%)';
                coverFront.style.transition = "all 1.5s cubic-bezier(0.23, 0.02, 0, 1.16) 0s";

                h1.style.transform = 'translateX(0) ';
                h1.style.transition = "all 2s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                spans.forEach(span => {
                    span.style.transform = 'translateX(0) ';
                    span.style.transition = "all" + (Math.floor(Math.random() * (2)) + 1) + "cubic-bezier(0.43, 0.01, 0, 1) 0s";
                })


                pageNumber.style.transform = 'translateY(0)';
                pageNumber.style.transition = "all 2s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                console.log(img);
                img.style.transform = 'scale(1) translateX(0)';
                setTimeout(() => { img.style.pointerEvents = 'all' }, 1400);
                
                img.style.transition = "all 1s cubic-bezier(0.51, 0.66, 0, 1.06) 0s";   
                
                nav_fp.classList.add('active');
                
            } else {
                cover.style.transform = 'translateX(0) ';
                cover.style.transition = "all 1.5s cubic-bezier(0.23, 0.02, 0, 1.16) 0s";
                coverFront.style.transform = 'translateX(0)';
                coverFront.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1.16) 0s";

                h1.style.transform = 'translateX(-110%) ';
                h1.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                spans.forEach(span => {
                    span.style.transform = 'translateX(-210%) ';
                    span.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";
                })

                pageNumber.style.transform = 'translateY(350%)';
                pageNumber.style.transition = "all 2s cubic-bezier(0.43, 0.01, 0, 1) 0s";
                
                img.style.transform = 'scale(0.85) translateX(10%)';
                img.style.pointerEvents = 'none';
                img.style.transition = "all 1.5s  cubic-bezier(0.51, 0.66, 0, 1.06) 0s !important";
                
                nav_fp.classList.remove('active');
            }
        }
        else if (id === 'project')
        {
            var over = document.querySelectorAll('#project .open-project .image-cover');
            cover = over[0];
            var coverFront = over[1];
            
            var img = document.querySelector('#project .open-project');
            var h1 = document.querySelector('#project .text-content h1');
            var spans = document.querySelectorAll('#project .text-content span');
            var btn = document.querySelector('#project .btn .show-more');
            var pageNumber = document.querySelector('#project .page-num p');
            var article = document.querySelector('#project article'); 

            var nav_fp = document.querySelector('.nav-fp li:nth-child(2) a')
            if (((window.innerHeight)  >= middlePart) && (middlePart>50)){
            // if (window.scrollY > (window.innerHeight*3)/2 && window.scrollY <= window.innerHeight*2){
                
                cover.style.transform = 'translateX(110%) ';
                cover.style.transition = "all 2s cubic-bezier(0.43, 0.01, 0, 1.16) 0.1s";
                coverFront.style.transform = 'translateX(110%)';
                coverFront.style.transition = "all 2s cubic-bezier(0.23, 0.02, 0, 1.16) 0.1s";
                
                h1.style.transform = 'translateX(0) ';
                h1.style.transition = "all 1.5s cubic-bezier(0.23, 0.01, 0, 1) 0s";

                spans.forEach(span => {
                    span.style.transform = 'translateX(0) ';
                    span.style.transition = "all" + (Math.floor(Math.random() * (2)) + 1) + "cubic-bezier(0.43, 0.01, 0, 1) 0s";
                })

                btn.style.transform = 'translateY(0) ';
                btn.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";
                
                article.style.transform = 'translateX(0) ';
                article.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                pageNumber.style.transform = 'translateY(0)';
                pageNumber.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                img.style.transform = 'scale(1) translateX(0)';
                img.style.transition = "all 1s cubic-bezier(0.51, 0.66, 0, 1.06) 0s";
                
                nav_fp.classList.add('active');
            } else {
                cover.style.transform = 'translateX(0) ';
                cover.style.transition = "all 1.5s cubic-bezier(0.23, 0.02, 0, 1.16) 0s";
                coverFront.style.transform = 'translateX(0)';
                coverFront.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1.16) 0s";
                
                h1.style.transform = 'translateX(-110%) ';
                h1.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                spans.forEach(span => {
                    span.style.transform = 'translateX(-210%) ';
                    span.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";
                })

                article.style.transform = 'translateX(-210%) ';
                article.style.transition = "all 3s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                btn.style.transform = 'translateY(210%) ';
                btn.style.transition = "all 3s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                pageNumber.style.transform = 'translateY(350%)';
                pageNumber.style.transition = "all 3s cubic-bezier(0.43, 0.01, 0, 1) 0s";
            
                img.style.transform = 'scale(0.85) translateX(10%)';
                img.style.transition = "all 1.5s  cubic-bezier(0.51, 0.66, 0, 1.06) 0s !important";
                
                nav_fp.classList.remove('active');
            }
        }
        else if (id === 'about')
        {

            var over = document.querySelectorAll('#about .about-bg .image-cover');
            cover = over[0];
            var coverFront = over[1];
            
            var h1 = document.querySelector('#about .text-content h1');
            var spans = document.querySelectorAll('#about .text-content span');
            var btn = document.querySelector('#about .btn .show-more');
            var pageNumber = document.querySelector('#about .page-num p');
            var article = document.querySelector('#about article');

            var img = document.querySelector('#about .about-bg');

            var nav_fp = document.querySelector('.nav-fp li:nth-child(3) a')
            if (((window.innerHeight)  >= middlePart) && (middlePart>50)){
                
                cover.style.transform = 'translateX(110%) ';
                cover.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1.16) 0s";
                coverFront.style.transform = 'translateX(110%)';
                coverFront.style.transition = "all 1.5s cubic-bezier(0.23, 0.02, 0, 1.16) 0s";
                
                h1.style.transform = 'translateX(0) ';
                h1.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                spans.forEach(span => {
                    span.style.transform = 'translateX(0) ';
                    span.style.transition = "all" + (Math.floor(Math.random() * (2)) + 1) + "cubic-bezier(0.43, 0.01, 0, 1) 0s";
                })

                btn.style.transform = 'translateY(0) ';
                btn.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";
                
                article.style.transform = 'translateX(0) ';
                article.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                pageNumber.style.transform = 'translateY(0)';
                pageNumber.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                img.style.transform = 'scale(1) translateX(0)';
                img.style.transition = "all 1s cubic-bezier(0.51, 0.66, 0, 1.06) 0s";
                
                nav_fp.classList.add('active');
            } else {
                cover.style.transform = 'translateX(0) ';
                cover.style.transition = "all 1.5s cubic-bezier(0.23, 0.02, 0, 1.16) 0s";
                coverFront.style.transform = 'translateX(0)';
                coverFront.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1.16) 0s";
            
                h1.style.transform = 'translateX(110%) ';
                h1.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                spans.forEach(span => {
                    span.style.transform = 'translateX(210%) ';
                    span.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";
                })

                article.style.transform = 'translateX(210%) ';
                article.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                btn.style.transform = 'translateY(210%) ';
                btn.style.transition = "all 3s cubic-bezier(0.43, 0.01, 0, 1) 0s";

                pageNumber.style.transform = 'translateY(350%)';
                pageNumber.style.transition = "all 1.5s cubic-bezier(0.43, 0.01, 0, 1) 0s";
                
                img.style.transform = 'scale(0.85) translateX(-10%)';
                img.style.transition = "all 1s cubic-bezier(0.51, 0.66, 0, 1.06) 0s";
                
                nav_fp.classList.remove('active');
            }
        }
    });
   
}

