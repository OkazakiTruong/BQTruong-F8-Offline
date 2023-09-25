Window.prototype.mySetInterval = function (
  myFunction,
  timeStamp,
  timeToStop = null
) {
  let myPlay;
  let frameLoop = Math.floor((timeStamp / 1000) * 60);
  let frameStop = Math.floor((timeToStop / 1000) * 60);
  let index = 0;
  function play() {
    index++;
    if (index >= frameLoop) {
      myFunction();
      index = 0;
      frameStop--;
    }
    window.requestAnimationFrame(play);
  }
  window.requestAnimationFrame(play);
  if (timeToStop !== null && frameStop !== null && frameStop === 0) {
    this.cancelAnimationFrame;
  }
};

timer = 30;
mySetInterval(
  function () {
    console.log(timer--);
    if (timer === 0) {
      console.log("get link");
    }
  },
  1000,
  3000
);
