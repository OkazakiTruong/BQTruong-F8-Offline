// document.addEventListener("visibilitychange", function () {
//   if (document.hidden) {
//     console.log("change");
//   } else {
//     console.log("in");
//   }
// });
const timerEle = document.querySelector(".timer");
let timer = 30;
document.addEventListener("DOMContentLoaded", function () {});

const mySetInterval = function (timeStamp) {
  let counter = (timeStamp / 1000) * 60;
  let frame = window.requestAnimationFrame(mySetInterval);
  if (frame % counter === 0) {
    console.log(frame / 60);
  }
};
mySetInterval(1000);

// function show() {
//   if (Math.floor(time) <= 30) {
//     let frame = requestAnimationFrame(show);
//     time = frame / 60;
//     console.log(Math.floor(frame));
//     timer--;
//   } else {
//     console.log("End show");
//   }
// }
// // show();
// setTimeout(function () {
//   for (let i = 0; i < 1000; i++) {
//     console.log(i);
//   }
// }, 1000);