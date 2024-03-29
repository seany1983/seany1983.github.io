const jobTitles = ["Your Job Title", "scroll down for more"];
let currentTitle = 0;
let currentChar = 0;
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textDisplay = document.getElementById("job-title");

function type() {
  if (currentChar < jobTitles[currentTitle].length) {
    textDisplay.textContent += jobTitles[currentTitle].charAt(currentChar);
    currentChar++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (currentChar > 0) {
    textDisplay.textContent = jobTitles[currentTitle].substring(
      0,
      currentChar - 1
    );
    currentChar--;
    setTimeout(erase, erasingDelay);
  } else {
    currentTitle = (currentTitle + 1) % jobTitles.length;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Once the document is loaded, start typing
  setTimeout(type, newTextDelay + 250);
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 104,
      density: { enable: true, value_area: 868.0624057955 },
    },
    color: { value: "#00f51c" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
