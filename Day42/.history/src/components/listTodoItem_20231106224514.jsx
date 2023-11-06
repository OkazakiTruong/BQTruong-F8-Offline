import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";

export default function ListTodoItem(isLogin) {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(isLogin);
    console.log(login);
  }, []);
  return (
    <div className="todo-app-list">
      <div className="todo-app-item">
        {console.log(login)}
        {login ? (
          <div>Có todo</div>
        ) : (
          <div className="todo-app-item">Không có todo</div>
        )}
      </div>
    </div>
  );
}
