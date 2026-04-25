let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  index++;

  if (index >= slides.length) index = slides.length - 1;

  slides[index].classList.add("active");

  controlMusic();
}

function startExperience() {
  const main = document.getElementById("come over");

  if (main) {
    main.play().catch(() => {});
  }

  nextSlide();
}

function controlMusic() {
  const main = document.getElementById("come over");
  const special = document.getElementById("killinit");

  if (!main || !special) return;

  // 👉 change this index to your special slide
  if (index === 2) {
    main.pause();
    special.currentTime = 0;
    special.play().catch(() => {});
  } else {
    special.pause();
    main.play().catch(() => {});
  }
}