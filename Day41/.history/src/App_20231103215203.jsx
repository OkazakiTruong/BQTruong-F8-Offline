import React from "react";
import "./assets/scss/app.scss";
export default function App() {
  return (
    <div class="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to todo app</h1>
        <form className="todo-app-form">
          <div className="todo-app-input-group">
            <input
              className="input-todo"
              type="text"
              placeholder="Thêm mới một công việc"
            />
            <button className="btn-add">Thêm mới</button>
          </div>
        </form>
        <div className="todo-app-list">
          <div className="todo-app-item">
            <input className="todo" type="text" value={"new task"} readOnly />
            <div className="btn-group"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
