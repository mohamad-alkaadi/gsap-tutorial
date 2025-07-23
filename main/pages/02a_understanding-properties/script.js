import gsap from "gsap"

gsap.to(".box", {
  opacity: 1,
  duration: 2,
  rotation: 360,
  background: "#ccc",
  borderRadius: "50%",
  border: "5px solid black",
  scale: 1.25,
  x: 200,
  onComplete: () => {
    gsap.to(".box", {
      x: -200,
      duration: 4,
      rotation: 360,
      borderRadius: "0",
      background: "#ff5f51",
      ease: "bounce.inOut",
      border: "none",
      yoyo: true,
      repeat: -1,
      repeatDelay: 2,
    })
  },
})

// you can't put 2 repeats
