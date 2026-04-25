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
    main.currentTime = 0;
    main.muted = false;
    main.play().then(() => {
      console.log("Music started");
    }).catch(err => {
      console.log("Blocked:", err);
    });
  }

  nextSlide();
}
special.currentTime = 0;
function controlMusic() {
  const main = document.getElementById("come over");
  const special = document.getElementById("killinit");

  if (!main || !special) return;

  if (index === 2) {
    main.pause();
    setTimeout(()=>{
    special.currentTime = 0;
    special.volume = 0.1;   // 👈 set here
    special.play().catch(() => {});
    },200);
    showLyrics();
  } else {
    special.pause();

    main.volume = 0.7;      // 👈 set here
    main.play().catch(() => {});
  }
}
function playMusic() {
  const main = document.getElementById("come over");
  main.play();
}
function showLyrics() {
  const lines = document.querySelectorAll(".line");

  lines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add("show");
    }, i * 1950); // timing gap between lines
  });
}

