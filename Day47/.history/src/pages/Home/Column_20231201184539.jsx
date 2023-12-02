import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import { taskSelector } from "../../stores/selector";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ data }) {
  const [columnName, setColumnName] = useState("");
  const [listTask, setListTask] = useState([]);
  const tasks = useSelector(taskSelector);

  useEffect(() => {
    setColumnName(data.columnName);
    setListTask(tasks);
    console.log(tasks);
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify());
  }, [listTask]);

  const handleChange = (e) => {
    setColumnName.value = e.target.value;
  };
  return (
    <div className="todo-column">
      <div className="column-header">
        <input
          type="text"
          value={columnName}
          className="column-name"
          onChange={handleChange}
        />
        <button className="column-delete-btn">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="column-main">
        <Droppable droppableId="TASK" type="group">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {listTask.map((task) => {
                if (task.column === data.column) {
                  return <Task key={task._id} data={task} />;
                }
              })}
            </div>
          )}
        </Droppable>
      </div>
      <div className="column-footer">+ Add new task</div>
    </div>
  );
}
