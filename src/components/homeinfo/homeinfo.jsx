import React from "react";
import "./homeinfo.css";
import wavy from "../../assets/wavy.png";

export const HInfo = ({ title, text, isList }) => {
  return (
    <div className="hinfo__main-container">
      <div className="hinfo__features-container__feature">
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
      {/* <div className="hinfo__logo-container">
        <p>Hello</p>
      </div> */}
    </div>
  );
};

export default HInfo;
