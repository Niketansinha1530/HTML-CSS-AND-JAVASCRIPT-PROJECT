//  locomotive js github scroll for webpage
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation()
{
    // when mouse enter in video container
var videocon=document.querySelector("#video-container")
var playbtn=document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
//when mouse leave the video-container
videocon.addEventListener("mouseleave",function()
{
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

//follow cursor
videocon.addEventListener("mousemove",function(dets)
{
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-50
    })
})
}
videoconAnimation();

//when page reload text transition
function loadingAnimation()
{
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger :0.3
    })
    gsap.from("#page1 #video-container",{
        scale:0.8,
        opacity:0,
        delay:1.3,
        duration:1.5,
        stagger :0.3
    })
}
loadingAnimation();

function cursorAnimation(){
document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y
    })
})

document.querySelectorAll(".child").forEach(function (elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(".cursor",{
            transform: 'translate(-50% , -50%) scale(1)',
        });
    });
    elem.addEventListener("mouseleave", function(){
        gsap.to(".cursor",{
            transform: 'translate(-50% , -50%) scale(0)',
        });
    });
})
}
cursorAnimation();