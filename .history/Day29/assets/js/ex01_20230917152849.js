const autoIndex = function () {
  //auto index for all module
  const modules = [...document.querySelectorAll(".list-item.active")];
  modules.forEach((module, index) => {
    module.innerText = `Module : ${index + 1} : ${module.innerText}`;
  });
  //auto index for all list-item not index
  const items = [...document.querySelectorAll(".list-item:not(.active)")];
  items.forEach((item, index) => {
    item.innerText = `Bài : ${index + 1} : ${item.innerText} `;
  });
};
autoIndex();

const itemDraggables = [...document.querySelectorAll(".list-item")];
itemDraggables.forEach((itemDraggable) => {
  itemDraggable.addEventListener("dragstart", () => {
    itemDraggable.classList.add("dragging");
  });
  itemDraggable.addEventListener("dragend", () => {
    itemDraggable.classList.remove("dragging");
  });
});

const list = document.querySelector(".list");
list.addEventListener("dragover", (e) => {
  e.preventDefault();
  const itemDragging = document.querySelector(".list-item.dragging");
  list.append(itemDragging);
  getAfterElement(e.clientY);
});

const getAfterElement = function (y) {
  const draggableElement = [
    ...document.querySelectorAll(".list-item:not(.dragging)"),
  ];
  return draggableElement.reduce(
    (closetEle, child) => {
      let box = child.getBoundingClientRect();
      let offsetY = y - box.top - box.length / 2;
      if (offsetY < 0 && offsetY > closetEle.offsetY) {
        return { offsetY: offsetY, element: child };
      } else {
        return closetEle;
      }
    },
    {
      offsetY: Number.NEGATIVE_INFINITY,
    }
  ).element;
};
