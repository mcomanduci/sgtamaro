const text = document.querySelector("#text");
const foto = document.querySelector("#foto");
const spider = document.querySelector("#spider");
const amaru = document.querySelector("#amaru");
const push = document.querySelector("#push");
const nestor = document.querySelector("#nestor");
const coruja = document.querySelector("#coruja");
const audio = document.querySelector("audio");
const video = document.querySelector("video");

// Animation timeline configuration
const timeline = [
  {
    time: 5000,
    action: () => {
      text.style.opacity = 0;
    },
  },
  {
    time: 6000,
    action: () => {
      text.style.opacity = 1;
      text.textContent = "SGT AMARO";
    },
  },
  {
    time: 9000,
    action: () => {
      foto.classList.add("animate-scale");
      foto.style.opacity = 1;
      audio.play().catch((err) => console.warn("Audio autoplay failed:", err));
    },
  },
  {
    time: 12000,
    action: () => {
      spider.classList.remove("translate-y-[-1000px]", "translate-x-[-1000px]");
    },
  },
  {
    time: 14000,
    action: () => {
      amaru.classList.remove("translate-x-[1000px]");
      amaru.classList.add("md:translate-x-[230px]");
    },
  },
  {
    time: 16000,
    action: () => {
      push.classList.remove("translate-x-[2000px]");
      push.classList.add("translate-x-1/2");
      startPushAnimation();
    },
  },
  {
    time: 18000,
    action: () => {
      nestor.classList.remove("translate-x-[-1000px]");
    },
  },
  {
    time: 20000,
    action: () => {
      coruja.classList.remove("translate-y-[1000px]");
      coruja.classList.add("-translate-y-1/2", "translate-x-1/2");
    },
  },
  {
    time: 24000,
    action: () => {
      video.classList.remove("hidden", "opacity-0");
    },
  },
  {
    time: 30500,
    action: () => {
      video.classList.add("hidden");
    },
  },
];

// Helper function for push animation
function startPushAnimation() {
  return setInterval(() => {
    push.src = "./flexao-down.png";
    setTimeout(() => {
      push.src = "./flexao-up.png";
    }, 500);
  }, 1000);
}

// Timeline player
function playTimeline() {
  timeline.forEach(({ time, action }) => {
    setTimeout(action, time);
  });
}

// Error handling for media elements
function setupMediaErrorHandling() {
  const mediaElements = [audio, video];
  mediaElements.forEach((element) => {
    element.addEventListener("error", (e) => {
      console.error(`Media error for ${element.tagName}:`, e.target.error);
    });
  });
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  setupMediaErrorHandling();
  playTimeline();
});
