const mySetInterval = function (myFunction, timeStamp) {
  let frameLoop = Math.floor((timeStamp / 1000) * 60);
  let index = 0;
  function play() {
    index++;
    if (index >= frameLoop) {
      myFunction();
      index = 0;
    }
    window.requestAnimationFrame(play);
  }
  window.requestAnimationFrame(play);
};

mySetInterval(function () {
  console.log("hello word");
}, 1000);
