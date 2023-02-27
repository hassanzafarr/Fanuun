import React from "react";
import "./info.css";
export const Info = ({ title, text, isList, text2 }) => {
  return (
    <div className="info__features-container__feature">
      <div />
      <div className="info__features-container__feature-title">
        <h1>{title}</h1>
      </div>
      <div className="info__features-container_feature-text">
        {!isList ? (
          <p>{text}</p>
        ) : (
          <ul>
            {text.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Info;
