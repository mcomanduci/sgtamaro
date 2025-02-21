const text = document.querySelector("#text");
const foto = document.querySelector("#foto");
const spider = document.querySelector("#spider");
const amaru = document.querySelector("#amaru");
const push = document.querySelector("#push");
const nestor = document.querySelector("#nestor");
const coruja = document.querySelector("#coruja");
const audio = document.querySelector("audio");
const video = document.querySelector("video");

setTimeout(() => {
  text.style.opacity = 0;
}, 5000);

setTimeout(() => {
  text.style.opacity = 1;
  text.textContent = "SGT AMARO";
}, 6000);

setTimeout(() => {
  foto.classList.add("animate-scale");
  foto.style.opacity = 1;
  audio.play();
}, 9000);

setTimeout(() => {
  spider.classList.remove("translate-y-[-1000px]");
  spider.classList.remove("translate-x-[-1000px]");
}, 12000);

setTimeout(() => {
  amaru.classList.remove("translate-x-[1000px]");
  amaru.classList.add("md:translate-x-[230px]");
}, 14000);

setTimeout(() => {
  push.classList.remove("translate-x-[2000px]");
  push.classList.add("translate-x-1/2");
  setInterval(() => {
    push.src = "./flexao-down.png";
    setTimeout(() => {
      push.src = "./flexao-up.png";
    }, 500);
  }, 1000);
}, 16000);

setTimeout(() => {
  nestor.classList.remove("translate-x-[-1000px]");
}, 18000);

setTimeout(() => {
  coruja.classList.remove("translate-y-[1000px]");
  coruja.classList.add("-translate-y-1/2");
  coruja.classList.add("translate-x-1/2");
}, 20000);

setTimeout(() => {
  video.classList.remove("hidden");
  video.classList.remove("opacity-0");
}, 24000);

setTimeout(() => {
  video.classList.add("hidden");
}, 30500);
