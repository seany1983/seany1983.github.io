var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
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

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#149414" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#149414" },
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
      color: "#149414",
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

//BUTTON 1
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btnModal1 = document.getElementById("btn1");

// Get the <span> element that closes the modal
var spanModal1 = document.getElementsByClassName("closeModal1")[0];

// When the user clicks on the button, open the modal
btnModal1.onclick = function () {
  modal1.style.display = "block";
  var video = document.getElementById("video1");
  video.play();
};

// When the user clicks on <span> (x), close the modal
spanModal1.onclick = function () {
  modal1.style.display = "none";
  var video = document.getElementById("video1");
  video.pause();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

//BUTTON 2
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btnModal2 = document.getElementById("btn2");

// Get the <span> element that closes the modal
var spanModal2 = document.getElementsByClassName("closeModal2")[0];

// When the user clicks on the button, open the modal
btnModal2.onclick = function () {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanModal2.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};