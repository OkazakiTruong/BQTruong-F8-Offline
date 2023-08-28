const $ = (tag) => {
  return document.querySelector(tag);
};
const $$ = (tag) => {
  return document.querySelectorAll(tag);
};

const btnAddNewTask = $(".btn-add");
const thingTodoList = $(".thing-todo-list");
const newTask = $(".new-task");
let tasks = document.querySelectorAll(".task");

// Su kien them moi 1 task
const checkTaskBeforeAdd = function (task) {
  if (task.trim() === "") {
    return false;
  }
  return true;
};
const addNewTask = function () {
  const thingTodoItem = document.createElement("div");
  thingTodoItem.classList.add("thing-todo-item");
  thingTodoItem.innerHTML = `
      <p class="task">${newTask.value}</p>
      <div class="task-controllers">
        <div class="edit-task">
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <div class="delete-task">
          <i class="fa-solid fa-trash"></i>
        </div>
      `;
  if (checkTaskBeforeAdd(newTask.value)) {
    thingTodoList.appendChild(thingTodoItem);
    tasks = thingTodoList.querySelectorAll(".task");
  }
};

btnAddNewTask.addEventListener("click", addNewTask);

// Su kien hoan thanh 1 task
setInterval(function () {
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener("click", function () {
      if (tasks[i].style.textDecoration !== "line-through") {
        tasks[i].style.textDecoration = "line-through";
      } else {
        tasks[i].style.textDecoration = "initial";
      }
    });
  }
}, 100);
