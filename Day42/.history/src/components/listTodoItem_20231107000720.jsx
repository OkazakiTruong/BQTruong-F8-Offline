import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";
import { client } from "../../client";

export default function ListTodoItem({ isLogin }) {
  const [login, setLogin] = useState(false);
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    if (login) {
      const { response, data } = await client.get(`/todos`);
      if (response.ok) {
        setTodos(data.data.listTodo);
      } else {
        console.log("Không ổn rồi! Đã có lỗi xảy ra! Vui lòng load lại trang");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  useEffect(() => {
    setLogin(isLogin);
  });

  return (
    <div className="todo-app-list">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo._id}
              id={todo._id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
            />
          );
        })
      ) : (
        <div className="todo-app-item">Không có todo</div>
      )}
    </div>
  );
}
