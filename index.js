// Initialize Typewriter Effect
const app = document.getElementById("app");

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString("Consultant Actuary")
  .pauseFor(3000)
  .deleteAll()
  .typeString("Scroll down for more")
  .pauseFor(3000)
  .deleteAll()
  .start();

// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 1,
      anim: { enable: false },
    },
    size: {
      value: 5,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

// Modal Handling
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  const buttons = document.querySelectorAll("[id^=btn]");
  const closeButtons = document.querySelectorAll("[class^=closeModal]");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      modals[index].style.display = "block";
      if (index === 0) {
        const video = document.getElementById("video1");
        video.play();
      }
    });
  });

  closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener("click", () => {
      modals[index].style.display = "none";
      if (index === 0) {
        const video = document.getElementById("video1");
        video.pause();
      }
    });
  });

  window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
        const video = document.getElementById("video1");
        if (video) video.pause();
      }
    });
  });
});
