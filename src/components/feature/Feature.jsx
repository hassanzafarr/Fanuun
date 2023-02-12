import React from "react";
import "./feature.css";
export const Feature = ({ title, text, isList }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div />
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
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

export default Feature;
