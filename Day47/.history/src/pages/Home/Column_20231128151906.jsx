import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Task from "./Task";

export default function Column({ data }) {
  const [columnName, setColumnName] = useState("");
  useEffect(() => {
    setColumnName(data.columnName);
  }, []);
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
        <Task />
      </div>
      <div className="column-footer">+ Add new task</div>
    </div>
  );
}
