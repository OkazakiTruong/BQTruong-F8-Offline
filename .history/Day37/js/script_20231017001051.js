import { config } from "./config.js";
import { client } from "./client.js";
const { TIME_QUESTION: timeQuestion } = config;
let questionNumber = 1;
let isCountDown = true;

const query = {
  _page: questionNumber,
  _limit: 1,
};
const containerEl = document.querySelector(".container");
const startGame = () => {
  let html = `
    <div class="loading-game">
    <h2>Game start in</h2>
    <p>3</p>
  </div> -->
    `;
  containerEl.innerHTML = html;
  const loadingGameEL = containerEl.querySelector(".loading-game");
  const timeEl = loadingGameEL.querySelector("p");
  let timer = 3;
  timeEl.innerText = timer;
  let intervalId = setInterval(() => {
    timeEl.innerText = --timer;
    if (timer === 0) {
      loadingGameEL.innerHTML = "<h2>GO!</h2>";
    }
    if (timer === -1) {
      renderGameScreen();
      clearInterval(intervalId);
    }
  }, 1000);
};
const renderStartScreen = () => {
  let html = `<div class="start-screen">
    <h2>Quiz Game</h2>
    <button class="btn-start">Start</button>
  </div>`;
  containerEl.innerHTML = html;
  const btnStart = containerEl.querySelector(".btn-start");
  btnStart.addEventListener("click", startGame);
};
renderStartScreen();

function moveToNextQuestion() {
  questionNumber++;
  query._page = questionNumber;
  if (questionNumber <= allQuestions) {
    renderGameScreen();
  } else {
    //xử lý màn hình kết thúc
  }
}
const questionTimeCountDown = (allQuestions) => {
  let timeQuestionCopy = timeQuestion;
  const timerEl = document.querySelector(".game-inner .score-screen .timer");
  let intervalId = setInterval(() => {
    if (isCountDown === false) {
      clearInterval(intervalId);
    }
    timeQuestionCopy -= 100;
    if (timeQuestionCopy <= 0) {
      clearInterval(intervalId);
      timerEl.style.width = "0%";
      moveToNextQuestion();
    } else {
      const timerElWidth = `${(timeQuestionCopy * 100) / timeQuestion}%`;
      timerEl.style.width = timerElWidth;
    }
  }, 100);
};

const renderGameScreen = async () => {
  let params = new URLSearchParams(query);
  let { data: questionObj, response } = await client.get(
    `/questions?${params}`
  );
  let question = questionObj[0];
  console.log(question.answer);
  const allQuestions = response.headers.get("X-total-count");
  let html = `
    <div class="game-inner">
    <div class="score-screen">
      <div>
        <div class="number-question">
          <span>${questionNumber}</span>
          <span>/</span>
          <span>${allQuestions}</span>
        </div>
        <div class="steak-wrapper">
          <div class="steak">
            <div class="steak-init">Steak</div>
          </div>
          <div class="steak-bonus">100</div>
        </div>
      </div>
      <div class="score">Score: <span>100</span></div>
      <div class="timer"></div>
    </div>
    <div class="game-wrapper">
    <div class="question">${question.question}</div>
    <div class="answers">
    ${question.answer
      .map(
        (answer) => `
    <div class="answer">${answer}</div>
    `
      )
      .join("")}

    </div>
  </div>
    <div class="noti">Correct</div>
  </div>`;
  containerEl.innerHTML = html;
  questionTimeCountDown(allQuestions);
  handleAnswer(question.correct);
};

function handleAnswer(correctAnswer) {
  const answers = document.querySelectorAll(".game-wrapper .answer");
  answers.forEach((answers) => {
    answer.addEventListener("click", function () {
      if (answer.innerText === correctAnswer[0]) {
        isCountDown = false;
        showNoti(true, true);
        setTimeout(() => {
          moveToNextQuestion();
        }, 1000);
      } else {
        is;
      }
    });
  });
}

function showNoti(isShow, isCorrect = "true") {
  const noti = document.querySelector(".noti");
  if (isShow) {
    noti.style.display = "flex";
  }
  if (isCorrect) {
    noti.style.background = "green";
    noti.innerText = "Correct Answer";
  } else {
    noti.style.background = "red";
    noti.innerText = "InCorrect Answer";
  }
}
