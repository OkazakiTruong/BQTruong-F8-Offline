import React, { useEffect } from "react";
import "./assets/scss/style.scss";
import Login from "./components/Login/Login";
import { UseSelector } from "react-redux/es/hooks/useSelector";

export default function App() {
  return (
    <div>
      <Login />
    </div>
  );
}
