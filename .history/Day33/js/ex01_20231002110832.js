const btnSpeak = document.querySelector(".btn-speak");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const speechRecognition = new SpeechRecognition();
speechRecognition.lang = "vi-VN";
const speechSynthesis = window.speechSynthesis;
const voices = speechSynthesis.getVoices();

// speechSynthesis.getVoices();
console.log(speechSynthesis.getVoices());
// console.log(speechSynthesis.getVoices());

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
  showInformation(result);
});
speechRecognition.addEventListener("end", function () {
  btnSpeak.classList.remove("speaking");
});

const showInformation = (value) => {
  const valueContainer = document.querySelector(".value-container");
  let html = `<p>You said: ${value}</p>`;
  valueContainer.innerHTML = html;
  doingTask(value);
};
const doingTask = (value) => {
  if (value === "Open Facebook") {
    // const speak = new SpeechSynthesisUtterance("Openning Facebook");
    // speechSynthesis.speak(speak);
  }
  console.log(speechSynthesis.getVoices());
  const speak = new SpeechSynthesisUtterance(
    "Xin lỗi tôi không hiểu yêu cầu của bạn"
  );
  utterance.voice = voices.find((voice) => voice.lang === "vi-VN");
  speechSynthesis.speak(speak);
};
