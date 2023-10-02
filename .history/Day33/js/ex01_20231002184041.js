const btnSpeak = document.querySelector(".btn-speak");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const speechRecognition = new SpeechRecognition();
speechRecognition.lang = "vi-VN";
const speechSynthesis = window.speechSynthesis;
const request = document.querySelector(".your-request");
const valueContainer = document.querySelector(".value-container");

btnSpeak.addEventListener("click", function () {
  if (this.classList.contains("speaking")) {
    speechRecognition.stop();
  } else {
    speechRecognition.start();
  }
});

speechRecognition.addEventListener("start", function (e) {
  btnSpeak.classList.add("speaking");
});
speechRecognition.addEventListener("result", function (e) {
  let result = e.results[0][0].transcript;
  showRequest(result);
});
speechRecognition.addEventListener("end", function () {
  btnSpeak.classList.remove("speaking");
});

const showRequest = (value) => {
  let html = `<p>Your request: ${value}</p>`;
  request.innerHTML = html;
  doingTask(value);
};
const showInformation = (value) => {
  let html = `<p>${value}</p>`;
  valueContainer.innerHTML = html;
};
const doingTask = (value) => {
  let task = "";
  let flag = false;
  if (value.match(/Facebook/gi)) {
    task = "Opening Facebook";
    flag = true;
    window.open("https://www.facebook.com/");
  }
  if (value.match(/Google/gi)) {
    task = "Opening Google";
    flag = true;
    window.open("https://www.google.com.vn/?hl=vi");
  }
  if (value.match(/Youtube/gi)) {
    task = "Opening Youtube";
    flag = true;
    window.open("https://www.youtube.com/");
  }
  if (value.match(/Google Drive/gi)) {
    task = "Opening Google Drive";
    flag = true;
    window.open("https://drive.google.com/drive/u/0/my-drive");
  }
  if (value.match(/Google Map/gi)) {
    task = "Opening Google Map";
    flag = true;
    window.open(
      "https://www.google.com/maps/@20.9760192,105.8213063,17z?entry=ttu"
    );
  }
  if (value.match(/Chỉ đường/gi) || value.match(/tới/gi)) {
    task = "I'm looking for your way";
    flag = true;
    let regex;
    if (value.match(/tới/gi)) {
      regex = value.match(/(tới)\s(?<position>.+)/);
    } else {
      regex = value.match(/(đường)\s(?<position>.+)/);
    }
    console.log(regex);
    let location = regex.groups.position
      .replaceAll(" ", "%20")
      .replaceAll("/", "%2F");
    let href = "https://www.google.com/maps/search/";
    href += location;
    window.open(href);
  }
  if (!flag) {
    task = "Sorry, i can't understand your require!!!";
  }

  let speak = new SpeechSynthesisUtterance(task);
  speak.voice = speechSynthesis.getVoices[2];
  speechSynthesis.speak(speak);
  showInformation(task);
};
