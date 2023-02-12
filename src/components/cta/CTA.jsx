import React from "react";
import "./cta.css";
import image from "../../assets/group29.png";
import Fade from "react-reveal/Fade";
const CTA = () => (
  <div
    className="gpt3__cta"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="gpt3__cta-content">
      <h3>
        Are You Interested in <br /> <span class="future">Immigration?</span>
      </h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button">Contact Us</button>
    </div>
  </div>
);

export default CTA;
