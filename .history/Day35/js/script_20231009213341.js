import { client } from "./client.js";

const listTasks = document.querySelector(".list-tasks");
const inputSearchTask = document.querySelector(".input-search-task");
const searchTask = function () {
  const taskContents = document.querySelectorAll(".task-content");

  inputSearchTask.addEventListener("keydown", function () {
    if (inputSearchTask.value === "") {
      showListTask();
    } else {
      html = taskContents.map((taskContent) => {
        let regexp = new RegExp(inputSearchTask.value, "gi");
        if (taskContent.match(regexp)) {
          return taskContent;
        }
      });
    }
  });
};
searchTask();

const deleteATask = async (id) => {
  await client.delete(`tasks/${id}`);
};

const addEventForTaskController = () => {
  const taskControllers = [...document.querySelectorAll(".task-controller")];
  taskControllers.forEach((taskController) => {
    const taskId = taskController.dataset.id;
    const btnDelete = taskController.querySelector(".btn-delete");
    const btnEdit = taskController.querySelector(".btn-edit");
    const btnDone = taskController.querySelector(".btn-done");

    btnDelete.addEventListener("click", async () => {
      await deleteATask(taskId);
      await showListTask();
    });
    btnEdit.addEventListener("click", function () {
      console.log("edit");
    });
    btnDone.addEventListener("click", function () {
      console.log("done");
    });
  });
};

const showListTask = async () => {
  const { data: tasks } = await client.get("tasks");
  const html = tasks
    .map(
      (task) => `
  <div class="task" >
  <div class="task-content">${task.content}</div>
  <div class="task-controller" data-id = ${task.id}>
    <button class="btn-delete">
      <i class="fa-solid fa-trash"></i>
    </button>
    <button class="btn-edit">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="btn-done">
      <i class="fa-solid fa-check"></i>
    </button>
  </div>
</div>
  `
    )
    .join("");
  listTasks.innerHTML = html;
  addEventForTaskController();
};
showListTask();
