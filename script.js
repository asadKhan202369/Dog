function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

}


loco();


gsap.to("#dog_video",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#pg2",
      start:"top 60%",
      scrub:1,
    //   markers:true
    },
    x:0,
    filter: "blur(10px)",
    ease:Expo.easeInout
})

var tl = gsap.timeline();
tl.
to("#nav img, #nav_right  ",{
     y:0,
     ease:Expo.easeInout,
     duration:1 
})
.from(".heading",{
     y:100,ease:Expo.easeInout,
     opacity:0,
     duration:1,
     delay:-1
})
.from(".common_para ",{
    opacity:0,
    ease:Expo.easeInout,
    duration:1,
    delay:-.5
})
.to(".common_btn",{
     opacity:1,
     ease:Expo.easeInout,
     delay:-1
})


gsap.to(".mysterybox_images" ,{
    duration:10,
    repeat: -1,
    rotate:"360deg",
    ease: Power0.easeNone
})


gsap.to(".cards_list",{
    opacity:1,
    duration:1,
    stagger:.2,
    ease:Expo.easeIn,
    scrollTrigger: {
        trigger: ".cards_list",
        scroller: "#main",
        start:"top 50%",
        end: "top 20%",
        // pin: true,
        // scrub: true,
        // markers:true
      },
})