import React, { useEffect, useState } from "react";
import FormTodoApp from "./components/formTodoApp";
import ListTodoItem from "./components/listTodoItem";
import { client } from "../client";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const getApiKey = async () => {
    const email = prompt("Nhập vào Email của bạn");
    if (email !== null) {
      let { response, data } = await client.get(`/api-key?email=${email}`);
      console.log(data);
      if (response.ok) {
        localStorage.setItem("email", email);
        localStorage.setItem("apiKey", data.data.apiKey);
        client.setApiKey(data.data.apiKey);
        alert(`Chào mừng trở lại ${email}`);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        alert("Không ổn rồi! đã có lỗi xảy ra vui lòng reload");
        setInterval(() => {
          window.location.reload();
        }, 2000);
      }
    } else {
      console.log("not null");
      setIsLogin(true);
      console.log(isLogin);
    }
  };
  const login = async () => {
    let apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      let email = localStorage.getItem("email");
      if (email) {
        client.setApiKey(apiKey);
        alert(` Chào mừng trở lại ${email}`);
        setIsLogin(true);
      } else {
        getApiKey();
      }
    } else {
      getApiKey();
    }
  };

  useEffect(() => {
    console.log("start");
    login();
  }, []);
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to Todo App!</h1>
        <FormTodoApp />
        <ListTodoItem isLogin={isLogin} />
        {console.log("render")}
      </div>
    </div>
  );
}
