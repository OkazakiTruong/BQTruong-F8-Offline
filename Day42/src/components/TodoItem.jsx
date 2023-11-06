import React, { useEffect, useState } from "react";
import { client } from "../../client";

export default function TodoItem({ render, id, todo, isCompleted, loading }) {
  const [showEdit, setShowEdit] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [todoTask, setTodoTask] = useState(todo);
  const [isDone, setIsDone] = useState(false);

  const handleShowEdit = (e) => {
    setShowEdit(!showEdit);
    setIsReadOnly(!isReadOnly);
    setTodoTask(todo);
    setIsDone(isCompleted);
  };
  const handleChange = (e) => {
    setTodoTask(e.target.value);
  };
  const handleDelete = async () => {
    loading(true);
    const { response } = await client.delete(`/todos/${id}`);
    loading(false);
    if (response.ok) {
      alert("Xóa thành công!");
      render();
    } else {
      alert("Không ổn rồi! Reload lại trạng đi");
      localStorage.removeItem("email");
      localStorage.removeItem("apiKey");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  const handleUpdate = async () => {
    loading(true);
    const { response } = await client.patch(`/todos/${id}`, {
      todo: todoTask,
      isCompleted: isDone,
    });
    loading(false);
    if (response.ok) {
      alert("Update thành công!");
      setShowEdit(!showEdit);
      render();
    } else {
      alert("Không ổn rồi! Reload lại trạng đi");
      localStorage.removeItem("email");
      localStorage.removeItem("apiKey");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  useEffect(() => {
    setTodoTask(todo);
    setIsDone(isCompleted);
  }, []);
  return (
    <>
      <div className="todo-app-item">
        <input
          className={isDone ? "todo isCompleted" : "todo"}
          type="text"
          name="todo"
          value={todoTask}
          onChange={handleChange}
          readOnly={isReadOnly}
        />
        {showEdit ? (
          <div className="btn-edit-groups">
            <label>
              <span>Đã xong</span>
              <input
                type="checkbox"
                name=""
                id=""
                className="isCompleted"
                checked={isDone}
                onChange={() => {
                  setIsDone(!isDone);
                }}
              />
            </label>
            <div className="btn-group">
              <button className="btn btn-exit" onClick={handleShowEdit}>
                Thoát
              </button>
              <button className="btn btn-update" onClick={handleUpdate}>
                Update
              </button>
              <button className="btn btn-delete" onClick={handleDelete}>
                Xóa
              </button>
            </div>
          </div>
        ) : (
          <div className="btn-group">
            <button className="btn btn-edit" onClick={handleShowEdit}>
              Sửa
            </button>
            <button className="btn btn-delete" onClick={handleDelete}>
              Xóa
            </button>
          </div>
        )}
      </div>
    </>
  );
}
