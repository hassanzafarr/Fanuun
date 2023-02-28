import React from "react";
import "./homeinfo.css";

export const HInfo = ({ title, text, isList }) => {
  return (
    <div className="hinfo__features-container__feature">
      <div />
      <div className="hinfo__features-container__feature-title">
        <h1>{title}</h1>
      </div>
      <div className="hinfo__features-container_feature-text">
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

export default HInfo;
