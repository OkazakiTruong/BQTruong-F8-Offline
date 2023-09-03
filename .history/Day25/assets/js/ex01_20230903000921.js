const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel-inner");
const carouselNav = carousel.querySelector(".carousel-nav");
const nextBtn = carouselNav.querySelector(".next");
const prevBtn = carouselNav.querySelector(".prev");
const carouselNavRadio = carousel.querySelector(".carousel-nav-radio");

const carouselItems = carouselInner.children;
const itemWidth = carouselInner.clientWidth;

console.log(itemWidth);
Array.from(carouselItems).forEach((item) => {
  item.style.width = `${itemWidth}px`;
  let radioItem = document.createElement("div");
  radioItem.classList.add("radio-item");
  carouselNavRadio.appendChild(radioItem);
});
carouselNavRadio.children[0].classList.add("active");

const totalWidth = itemWidth * carouselItems.length;
carouselInner.style.width = `${totalWidth}px`;

let currentPosition = 0;

const changePosition = function () {
  carouselInner.style.translate = `-${currentPosition * itemWidth}px`;
};
const changeRadioCarousel = function (position) {
  currentPosition = position;
  Array.from(carouselNavRadio.children).forEach((ele) => {
    ele.classList.remove("active");
  });
  carouselNavRadio.children[position].classList.add("active");
  changePosition();
};
Array.from(carouselNavRadio.children).forEach((ele, index) => {
  ele.addEventListener("click", function () {
    changeRadioCarousel(index);
  });
});

nextBtn.addEventListener("click", function () {
  if (currentPosition <= carouselItems.length - 2) {
    currentPosition++;
    changePosition();
    changeRadioCarousel(currentPosition);
  }
});

prevBtn.addEventListener("click", function () {
  if (currentPosition > 0) {
    currentPosition--;
    changePosition();
    changeRadioCarousel(currentPosition);
  }
});

let isMountDown = false;
let firstCarouselOffsetX = 0;
carouselInner.addEventListener("mousedown", function (e) {
  e.preventDefault();
  firstCarouselOffsetX = e.offsetX;
});
carouselInner.addEventListener("mousemove", function (e) {
  console.log(e.offsetX);
});
document.addEventListener("mouseup", function () {
  console.log("mouse is up");
});
