gsap.from(".hero img", {
   scale: 0.08,
   borderRadius: "35px",
   scrollTrigger: {
    trigger : ".hero",
    start : "top top",
    end : "bottom top",
    scrub : 2,
    pin : true,
    ease : "power4"
   }
})