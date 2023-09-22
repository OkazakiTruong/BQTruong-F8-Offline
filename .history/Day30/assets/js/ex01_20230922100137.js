const dropdownSelect = document.querySelector(".dropdown-select");
const dropdownList = dropdownSelect.nextElementSibling;
const changeColorDropDownSelect = function (dropdownList) {
  if (dropdownList.classList.contains("dropdown--active")) {
    dropdownSelect.style.background = "#5f9ea0";
  } else {
    dropdownSelect.style.background = "#7fffd4";
  }
};
document.body.addEventListener("click", function () {
  dropdownList.classList.remove("dropdown--active");
  changeColorDropDownSelect(dropdownList);
});
dropdownSelect.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownList.classList.toggle("dropdown--active");
  changeColorDropDownSelect(dropdownList);
});

const editorFooter = document.querySelector(".editor-footer");
let numberKey = editorFooter.querySelector(".number-keys");
let numberWords = editorFooter.querySelector(".number-words");

const editorMain = document.querySelector(".editor-main");
const autoNumberKeyAndWords = function () {
  const editorText = editorMain.innerText;
  const numKey = editorText.trim().replace(" ", "").length;
  const numWord =
    editorText.trim().split(" ")[0] === ""
      ? 0
      : editorText.trim().split(" ").length;
  numberKey.innerText = numKey;
  numberWords.innerText = numWord;
};
editorMain.addEventListener("keyup", autoNumberKeyAndWords);

const boldOption = document.querySelector(".bold-option");
boldOption.addEventListener("click", function () {
  document.execCommand("bold");
});

const underlineOption = document.querySelector(".underline-option");
underlineOption.addEventListener("click", function () {
  document.execCommand("underline");
});

const italicOption = document.querySelector(".italic-option");
italicOption.addEventListener("click", function () {
  document.execCommand("italic");
});

const colorOption = document.querySelector(".color-option");
colorOption.addEventListener(
  "change",
  function (e) {
    document.execCommand("foreColor", false, e.target.value);
  },
  false
);

let fileName = document.querySelector(".file-name");
const clear = function () {
  editorMain.innerText = "";
  autoNumberKeyAndWords();
  fileName.value = "untitled";
};

const dropItems = [...dropdownList.children];
dropItems[0].addEventListener("click", clear);
const downloadTxtFile = function () {
  let link = document.createElement("a");
  link.download = fileName.value;
  fileName.value === "" ? console.log("nothing") : console.log("no nothing");
};
dropItems[1].addEventListener("click", function () {
  console.log("txt");
});
dropItems[2].addEventListener("click", function () {
  console.log("pfd");
});
