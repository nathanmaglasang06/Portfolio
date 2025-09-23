function Home() {
  window.location.href = "index.html";
}
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  console.log(`User has scrolled: ${scrollPosition}px`);
});
function My_Work() {
  window.location.href = "My Work.html";
}

function Work_With_Me() {
  window.location.href = "Work With Me.html";
}
function Software() {
  window.location.href = "software.html";
}
function Cyber() {
  window.location.href = "cyber.html";
}

let h = 0;
function removeGreyscale() {
  document.images[h].style.webkitFilter = "grayscale(0)";
  document.images[h].style.filter = "grayscale(0)";
  h += 1;
  if (h === 8) {
    h = 0;
  }
}
function myFunction() {
  navigator.clipboard.writeText("nathan.maglasang06@gmail.com");
  alert("My Email Is copied to your Clipboard");
}
function CustomAlert() {
  this.alert = function (message, title) {
    document.body.innerHTML =
      document.body.innerHTML +
      '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

    let dialogoverlay = document.getElementById("dialogoverlay");
    let dialogbox = document.getElementById("dialogbox");

    let winH = window.innerHeight;
    dialogoverlay.style.height = winH + "px";

    dialogbox.style.top = "100px";

    dialogoverlay.style.display = "block";
    dialogbox.style.display = "block";

    document.getElementById("dialogboxhead").style.display = "block";

    if (typeof title === "undefined") {
      document.getElementById("dialogboxhead").style.display = "none";
    } else {
      document.getElementById("dialogboxhead").innerHTML =
        '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title;
    }
    document.getElementById("dialogboxbody").innerHTML = message;
    document.getElementById("dialogboxfoot").innerHTML =
      '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
  };

  this.ok = function () {
    document.getElementById("dialogbox").style.display = "none";
    document.getElementById("dialogoverlay").style.display = "none";
  };
}

let customAlert = new CustomAlert();
const marquee = document.querySelector(".marquee");
let lerpScroll = 0;
let lastScrollPos = 0;
const maxSpeed = 20;
const skewFactor = 0.3;
const lerpFactor = 0.3;

function getScrollPercent() {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

function isInViewport() {
  const rect = marquee.getBoundingClientRect();
  const vOffset = marquee.offsetHeight;
  const percent = getScrollPercent() * -1;
  lerpScroll += (percent - lerpScroll) * lerpFactor;
  marquee.style.transform = `translateX(${lerpScroll * 4}%)`;

  const scrollPos = window.scrollY;
  let scrollDiff = scrollPos - lastScrollPos;
  lastScrollPos = scrollPos;

  scrollDiff = Math.max(-maxSpeed, Math.min(maxSpeed, scrollDiff));

  const container = marquee.querySelector(".inner");
  container.style.transform = `skewX(${scrollDiff * skewFactor}deg)`;

  window.requestAnimationFrame(isInViewport);
}

isInViewport();
document.addEventListener("scroll", function () {
  const landMessage = document.querySelector(".landmessage");
  const memojilanding = document.querySelector(".memojilanding");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop >= 10 && scrollTop <= 100) {
    const opacity = 1 - (scrollTop - 10) / 100;
    landMessage.style.opacity = opacity;
    memojilanding.style.opacity = opacity;
  } else if (scrollTop < 10) {
    landMessage.style.opacity = 1;
    memojilanding.style.opacity = 1;
  } else {
    landMessage.style.opacity = 0;
    memojilanding.style.opacity = 0;
  }
});
const canvas = document.getElementById("particleCanvas");
const context = canvas.getContext("2d");
let circles = [];
const dpr = window.devicePixelRatio || 1;

function resizeCanvas() {
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  context.scale(dpr, dpr);
}

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const hexInt = parseInt(hex, 16);
  return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
}

function createCircle() {
  const x = Math.random() * canvas.offsetWidth;
  const y = Math.random() * canvas.offsetHeight;
  const size = Math.random() * 2 + 0.4;
  const alpha = Math.random() * 0.6 + 0.1;
  const dx = (Math.random() - 0.5) * 0.1;
  const dy = (Math.random() - 0.5) * 0.1;
  return { x, y, size, alpha, dx, dy };
}

function drawCircle(circle) {
  context.beginPath();
  context.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
  context.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`;
  context.fill();
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach((circle) => {
    circle.x += circle.dx;
    circle.y += circle.dy;
    if (
      circle.x < -circle.size ||
      circle.x > canvas.offsetWidth + circle.size ||
      circle.y < -circle.size ||
      circle.y > canvas.offsetHeight + circle.size
    ) {
      circles = circles.filter((c) => c !== circle);
      circles.push(createCircle());
    }
    drawCircle(circle);
  });
  requestAnimationFrame(animate);
}

function initParticles() {
  resizeCanvas();
  circles = [];
  for (let i = 0; i < 100; i++) {
    circles.push(createCircle());
  }
  animate();
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("load", initParticles);

//memoji eyeball move
document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  let eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}

// Duplicate content for seamless looping
document.querySelectorAll(".marquee-w-inner").forEach((inner) => {
  inner.innerHTML += inner.innerHTML;
});

const marqueesW1 = document.querySelectorAll(".marquee-w-1 .marquee-w-inner");
const marqueesW2 = document.querySelectorAll(".marquee-w-2 .marquee-w-inner");

function updateMarqueesW() {
  const scrollY = window.scrollY; // horizontal scroll position

  marqueesW1.forEach((inner) => {
    const height = inner.scrollHeight / 2; // one copy height
    const offset = (((scrollY * 0.5) % height) + height) % height; // ensure positive
    inner.style.transform = `translateY(${-offset}px)`;
  });

  marqueesW2.forEach((inner) => {
    const height = inner.scrollHeight / 2;
    const offset = (((scrollY * 0.5) % height) + height) % height;
    inner.style.transform = `translateY(${offset}px)`;
  });
}

window.addEventListener("scroll", updateMarqueesW);
updateMarqueesW(); // run once on load so it’s visible immediately
