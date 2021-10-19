import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <div class="lds-dual-ring"></div>
      <h1>Please Wait</h1>
    </div>
  );
}
