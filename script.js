let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  index++;
  if (index >= slides.length) index = slides.length - 1;
  slides[index].classList.add("active");
}
function playMusic() {
  const music = document.getElementById("bg-music");
  music.play();
}
function startExperience() {
  const music = document.getElementById("bg-music");
  music.play();

  nextSlide();
}