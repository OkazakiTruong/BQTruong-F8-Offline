const progressBar = document.querySelector(".progress-bar");
const progress = progressBar.querySelector(".progress");
const progressDot = progress.children[0];

//lấy chiều dài progress bar
const progressBarWidth = progressBar.clientWidth;
//Đặt cờ is Mount down
let isMountDown = false;
let progressBarDistance = -1;
const handleValue = function (value) {
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  progress.style.width = `${value}%`;
};

const changeProgressWidth = function (e) {
  let offsetX = e.clientX - progressBarDistance;
  let value = (offsetX * 100) / progressBarWidth;
  handleValue(value);
};
progressBar.addEventListener("mousedown", function (e) {
  progressBarDistance = e.clientX - e.offsetX;
  if (e.which === 1) {
    changeProgressWidth(e);
    isMountDown = true;
  }
});
progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    if (progressBarDistance === -1) {
      progressBarDistance = 0;
    }
    changeProgressWidth(e);
    isMountDown = true;
  }
});
document.addEventListener("mousemove", function (e) {
  if (isMountDown) {
    changeProgressWidth(e);
  }
});
progressBar.addEventListener("mousemove", function (e) {
  e.stopPropagation();
  if (isMountDown) {
    changeProgressWidth(e);
  }
});
document.addEventListener("mouseup", function () {
  isMountDown = false;
});
