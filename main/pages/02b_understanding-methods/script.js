import gsap from "gsap"

const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const resume = document.querySelector(".resume")
const restart = document.querySelector(".restart")
const reverse = document.querySelector(".reverse")
const kill = document.querySelector(".kill")
const yoyo = document.querySelector(".yoyo")
const repeat = document.querySelector(".repeat")

const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  scale: 1.25,
  duration: 2,
})

play.addEventListener("click", () => {
  //   same as resume but in case of reverse it goes in the direction of the original animation not the reverse
  animation.play()
})
pause.addEventListener("click", () => {
  animation.pause()
})
resume.addEventListener("click", () => {
  //   same as play but in case of reverse it continues the reverse
  animation.resume()
})
restart.addEventListener("click", () => {
  animation.restart()
})

reverse.addEventListener("click", () => {
  animation.reverse()
})

kill.addEventListener("click", () => {
  // it kills the animation so you cant reverse or play or pause or restart it because it is killed and you need to reload the page for it to work
  animation.kill()
})
yoyo.addEventListener("click", () => {
  //you need to combine it with repeat
  animation.yoyo(true)
  yoyo.style.backgroundColor = "blue"
})

repeat.addEventListener("click", () => {
  animation.repeat(2)
  repeat.style.backgroundColor = "blue"
})
