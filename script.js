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
  const main = document.getElementById("come-over");

  if (main) {
    main.muted = false;
    main.play().catch(err => {
      console.log("Play blocked:", err);
    });
  }

  nextSlide();
}

function controlMusic() {
  const main = document.getElementById("come-over");
  const special = document.getElementById("killinit");

  if (!main || !special) return;

  if (index === 2) {
    main.pause();

    special.currentTime = 0;
    special.volume = 0.8;   // 👈 set here
    special.play().catch(() => {});
  } else {
    special.pause();

    main.volume = 0.2;      // 👈 set here
    main.play().catch(() => {});
  }
}

function testMusic() {
  const main = document.getElementById("come-over");
  main.play().then(() => {
    console.log("playing");
  }).catch(err => {
    console.log("error:", err);
  });
}

function testVolume() {
  const main = document.getElementById("come-over");
  main.volume = 0.1;
  main.play();
}