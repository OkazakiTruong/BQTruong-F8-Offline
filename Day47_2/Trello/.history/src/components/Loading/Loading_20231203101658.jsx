import React from "react";
import "./loading.scss";
const loadingGif = import("../../assets/gif/Loading_1.gif");

export default function Loading() {
  return (
    <div>
      <img src={loadingGif} alt="loading-gif" />
    </div>
  );
}
