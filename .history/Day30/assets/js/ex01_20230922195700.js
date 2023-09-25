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
const undoOption = document.querySelector(".undo-option");
undoOption.addEventListener("click", function () {
  document.execCommand("undo");
  autoNumberKeyAndWords();
});

const redoOption = document.querySelector(".redo-option");
redoOption.addEventListener("click", function () {
  document.execCommand("redo");
  autoNumberKeyAndWords();
});

const justifyCenter = document.querySelector(".justifycenter-option");
justifyCenter.addEventListener("click", function () {
  document.execCommand("justifyCenter");
});
const justifyLeft = document.querySelector(".justifyleft-option");
justifyLeft.addEventListener("click", function () {
  document.execCommand("justifyLeft");
});
const justifyRight = document.querySelector(".justifyright-option");
justifyRight.addEventListener("click", function () {
  document.execCommand("justifyRight");
});
const justifyFull = document.querySelector(".justifyfull-option");
justifyFull.addEventListener("click", function () {
  document.execCommand("justifyFull");
});

const copyOption = document.querySelector(".copy-option");
copyOption.addEventListener("click", function () {
  if (editorMain.innerText !== "") {
    document.execCommand("selectAll");
    document.execCommand("copy");
    msg = document.execCommand("copy")
      ? "Yes sir, everything is copied into your clip broad!"
      : "opp, i can't copy this";
  } else {
    msg = "Opp, there is nothing!!!";
  }
  let toast = document.querySelector(".toast");
  toast.innerText = msg;
  toast.classList.add("active");
  setTimeout(function () {
    toast.innerText = "";
    toast.classList.remove("active");
  }, 1000);
});

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
  link.download = fileName.value === "" ? "noName" : fileName.value;
  let blob = new Blob([editorMain.innerText], {
    type: "text/plain",
  });
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
};
dropItems[1].addEventListener("click", downloadTxtFile);

const downloadPfdFile = function () {
  let opt = {
    filename: fileName.value,
    margin: 2,
  };
  html2pdf().from(editorMain).set(opt).save();
};
dropItems[2].addEventListener("click", downloadPfdFile);
