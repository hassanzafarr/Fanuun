import React from "react";
import "./cta.css";
import image from "../../assets/group29.png";
import Fade from "react-reveal/Fade";
const CTA = ({ htag, red, ptext }) => (
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
        {htag}
        {/* <br /> */}
        <span class="future">{red}</span>
      </h3>
      <p>{ptext}</p>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button">Contact Us</button>
    </div>
  </div>
);

export default CTA;
