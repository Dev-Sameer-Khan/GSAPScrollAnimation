let page4 = document.querySelector("#page4")
let page5 = document.querySelector("#page5")


   // let tl = gsap.timeline({
   //    scrollTrigger: {
   //       trigger : ".hero",
   //       start : "top top",
   //       end : "bottom top",
   //       scrub : 2,
   //       pin : true,
   //       ease : "power4",
   //      }
   // })

// tl.from(".hero img", {
//    // scale: 0.08,
//    borderRadius: "40px",
//    duration : 4
// })
// .to(".hero img", {
//    // scale: 0.9,
//    borderRadius: "40px",
//    duration : 4
// },"b")

// tl.to(".hero .txt", {
//    display : "none",
//    duration : 2
// },"b")
// .to(".hero img",{
//    rotateX : "-90deg",
//    transformOrigin : "top",
//    duration : 4
// },"a")

let tl = gsap.timeline({
   scrollTrigger: {
      trigger: ".hero",
      start: "top top", 
      end: "bottom top",
      scrub: 2,
 
   }
})

tl.from(".hero img", {
   scale: 0.08,
   borderRadius: "40px",
   duration: 2
})
.to(".hero",{
   scale : 0.9,
   borderRadius: "40px",
   duration: 2
})
.to("main",{
   backgroundColor : "yellow"
},"a")
.to(".hero",{
   rotateX : "-60deg",
   transformOrigin : "top",
   duration: 2
})


document.querySelector("#hover").addEventListener("mouseenter", () => {
   gsap.to("#hide", { 
      x: 0,
      opacity : 1,
      duration : 0.5,
      ease : "power4"
   });
   gsap.to("#up2",{
      y: -24,
      ease : "power4",
      delay : 0.1
    });
    gsap.to("#up1",{
      y: -48,
      ease : "power4",
      delay : 0.1
    });
});
document.querySelector("#hover").addEventListener("mouseleave", () => {
   gsap.to("#hide", { 
      x: 20,
      opacity : 0,
      duration : 0.5,
      ease : "power4"
   });
   gsap.to("#up2",{
      y: 0,
      ease : "power4"
    });
    gsap.to("#up1",{
      y: 0,
      ease : "power4"
    });
});




