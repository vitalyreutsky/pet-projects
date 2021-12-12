const images = document.getElementById("imgs");
const img = document.querySelectorAll("img");

const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

let index = 0;
let interval = setInterval(run, 3000);

rightBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});

function changeImage() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }

  images.style.transform = `translateX(${-index * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

function run() {
  index++;
  changeImage();
}
