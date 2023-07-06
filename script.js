/* Declare variables below to save the different sections (divs) of your story*/
var start = document.querySelector(".buttons")
var startHide = document.querySelector(".story-opening")
var firstQuestion = document.querySelector(".option-one-screen")
var firstEnd = document.querySelector(".option-two-screen")
var secondEnd = document.querySelector(".option-one-end")
var thirdEnd = document.querySelector(".option-two-end")
var sound = document.getElementById("myAudio");
document.getElementById("introbutton").onclick = function() {
  start.style.display = "block"
  startHide.style.display = "none"
}
document.querySelector(".option-one").onclick = function() {
  firstQuestion.style.display = "block"
  start.style.display = "none"
  sound.play()
  console.log("hi")
}
document.querySelector(".option-two").onclick = function() {
  firstQuestion.style.display = "none"
  firstEnd.style.display = "block"
  start.style.display = "none"
  end.style.display = "block"
}
document.querySelector(".option-three").onclick = function() {
  thirdEnd.style.display = "block"
  firstQuestion.style.display = "none"
  end.style.display = "block"
  sound.pause()
}
document.querySelector(".option-four").onclick = function() {
  secondEnd.style.display = "block"
  firstQuestion.style.display = "none"
  end.style.display = "block"
  sound.pause()
}
document.getElementById("end").onclick = function() {
  startHide.style.display = "block"
  firstQuestion.style.display = "none"
  secondEnd.style.display = "none"
  thirdEnd.style.display = "none"
  start.style.display = "none"
  firstEnd.style.display = "none"
  end.style.display = "none"
  sound.pause()
}