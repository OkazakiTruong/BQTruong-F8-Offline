import React, { useEffect, useState } from "react";
import FormTodoApp from "./components/formTodoApp";
import ListTodoItem from "./components/listTodoItem";
import { client } from "../client";

const email = "";
export default function App() {
  const getApiKey = async () => {
    email = prompt("Nhập vào Email của bạn");
    let { response, data: apiKey } = await client.get(`/api-key?${email}`);
    if (response.ok) {
      localStorage.setItem("email", email);
    }
  };
  const login = async () => {
    let apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      let email = localStorage.getEmail("email");
      if (email) {
        client.setApiKey(apiKey);
      } else {
      }
    } else {
      email = prompt("Nhập vào Email của bạn");
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
        <ListTodoItem />
        {console.log("render")}
      </div>
    </div>
  );
}
