import React, { Component } from "react";
import { client } from "../client";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props._id,
      todo: props.todo,
      isCompleted: props.isCompleted,
      getTodoList: props.getTodoList,
    };
  }
  handleDelete = async (e) => {};
  render() {
    const { id, todo, isCompleted } = this.state;
    return (
      <div className="todo-app-item">
        <input className="todo" type="text" value={todo} readOnly />
        <div className="btn-group">
          <button className="btn-edit">Sửa</button>
          <button className="btn-delete">Xóa</button>
        </div>
      </div>
    );
  }
}
