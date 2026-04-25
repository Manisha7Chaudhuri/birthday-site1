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
  const main = document.getElementById("main-music");
  main.play();
  nextSlide();
}
let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  index++;

  if (index >= slides.length) index = slides.length - 1;

  slides[index].classList.add("active");

  controlMusic();
}
function controlMusic() {
  const main = document.getElementById("main-music");
  const special = document.getElementById("special-music");

  // Example: play special music on slide 3 (index starts from 0)
  if (index === 2) {
    main.pause();
    special.currentTime = 0;
    special.play();
  } else {
    special.pause();
    main.play();
  }
}