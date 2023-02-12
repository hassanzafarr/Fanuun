import React from "react";
import "./position.css";
import image from "../../assets/line.png";
import Fade from "react-reveal/Fade";
import { CiLocationOn, CiClock1 } from "react-icons/ci";
const Position = () => (
  <div
    className="position__container section__padding"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="position__cta">
      <div className="position__cta-content">
        <div className="position__heading">
          <h3>Upload Your Resume</h3>
        </div>
      </div>
      <div className="position__cta-btn">
        <button type="button">Upload</button>
      </div>
    </div>
  </div>
);

export default Position;
