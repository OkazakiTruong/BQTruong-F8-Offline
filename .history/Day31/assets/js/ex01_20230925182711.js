document.addEventListener("DOMContentLoaded", function () {});

const mySetInterval = function (myFunction, timeStamp) {
  let timeStamp = Math.floor((500 / 1000) * 60);
  let index = 0;
  function playAnimation(time) {
    index++;
    if (index >= timeStamp) {
      console.log("hello");
      index = 0;
    }
    // console.log(index);
    window.requestAnimationFrame(playAnimation);
  }
  window.requestAnimationFrame(playAnimation);
};
