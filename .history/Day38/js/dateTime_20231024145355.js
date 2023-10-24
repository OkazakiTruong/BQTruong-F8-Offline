export const dateTime = (inputTimeEl) => {
  const dateTimeCustomer = document.querySelector(".custom-datetime");
  const dateEl = dateTimeCustomer.querySelector(".time");
  const daysEl = dateTimeCustomer.querySelector(".days");
  const prevNextIcon = dateTimeCustomer.querySelectorAll(".icon i");

  let getMonth = new Date().getMonth();
  let getYear = new Date().getFullYear();
  let getDate = new Date().getDate();

  let chooseMonth = getMonth;
  let chooseYear = getYear;

  const day = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "Chủ nhật",
  ];
  const month = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  function removeActive(liTags) {
    liTags.forEach((li) => {
      li.classList.remove("active");
    });
  }
  const renderCalender = () => {
    let lastDateOfMonth = new Date(getYear, getMonth + 1, 0).getDate();
    let firstDayOfMonth = new Date(getYear, getMonth, 1).getDay();
    let lastDateOfLastMonth = new Date(getYear, getMonth, 0).getDate();
    let lastDayOfMonth = new Date(getYear, getMonth, lastDateOfMonth).getDay();
    console.log(lastDayOfMonth);
    console.log("day", firstDayOfMonth);
    let liTag = "";
    for (let i = firstDayOfMonth; i > 0; i--) {
      liTag += `<li class = in-active>${lastDateOfLastMonth--}</li>`;
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
      if (i === getDate) {
        liTag += `<li class = "date--now">${i}</li>`;
      } else {
        liTag += `<li>${i}</li>`;
      }
    }
    for (let i = lastDayOfMonth; i < 6; i++) {
      liTag += `<li class = in-active>${i - lastDayOfMonth + 1}</li>`;
    }
    daysEl.innerHTML = liTag;
    dateEl.innerText = `${month[getMonth]} ${getYear}`;

    const liTags = daysEl.querySelectorAll("li:not(.in-active)");
    console.log(liTags);
    liTags.forEach((item) => {
      item.addEventListener("click", function () {
        inputTimeEl.value = `${
          Number(item.innerText) < 10
            ? `0${item.innerText}`
            : `${item.innerText}`
        }/${chooseMonth}/${chooseYear}`;
        removeActive();
        item.classList.classList.add("active");
      });
    });
  };

  prevNextIcon.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (btn.classList.contains("prev")) {
        getMonth--;
        if (getMonth < 0) {
          getMonth = 11;
          getYear--;
        }
      }
      if (btn.classList.contains("next")) {
        getMonth++;
        if (getMonth > 11) {
          getMonth = 0;
          getYear++;
        }
      }
      chooseMonth = getMonth;
      chooseYear = getYear;
      renderCalender();
    });
  });
  renderCalender();
};
