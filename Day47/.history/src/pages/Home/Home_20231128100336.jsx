import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="todo-column">
        <div className="column-header">
          <h2 className="column-name">Column 1</h2>
          <button className="column-delete-btn"></button>
        </div>
      </div>
    </div>
  );
}
