import React from "react";
import "./cta.css";
import image from "../../assets/group29.png";
import Fade from "react-reveal/Fade";
const CTA = ({ htag, htag2, red, ptext }) => (
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

        <span class="future">{red}</span>
      </h3>
      <br />
      <h3>{htag2}</h3>
      <p>{ptext}</p>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button">Contact Us</button>
    </div>
  </div>
);

export default CTA;
