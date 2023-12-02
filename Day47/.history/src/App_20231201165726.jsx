import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selector";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./stores/slices/TodoSlice";
import Home from "./pages/Home/Home";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = useSelector(loginSelector);
  useEffect(() => {
    console.log("log 1");
  }, [isLogin]);

  return <div>{!isLogin ? <Login /> : <Home />}</div>;
}
