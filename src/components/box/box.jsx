import React from "react";
import "./box.css";

function Box({ texthead, textcont, imghere }) {
  return (
    <div className="box">
      <div className="content-container">
        <div className="logocont">
          <img src={imghere} alt="slide" />
        </div>
        <h1>{texthead}</h1>
        <p>{textcont}</p>
      </div>
    </div>
  );
}

export default Box;
