import React, { useEffect, useState } from "react";
import FormTodoApp from "./components/formTodoApp";
import ListTodoItem from "./components/listTodoItem";

export default function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (login === false) {
      prompt("Nhập vào Email của bạn!");
      // console.log("Nhập vào email của bạn");
    }
  }, []);
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to Todo App!</h1>
        <FormTodoApp />
        <ListTodoItem />
        {console.log("render")}
      </div>
    </div>
  );
}
