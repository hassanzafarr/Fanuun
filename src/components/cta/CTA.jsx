import React from "react";
import "./cta.css";
import image from "../../assets/group29.png";
import { Link } from "react-router-dom";

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
      <Link to="/contact">
        <button type="button">Contact Us</button>
      </Link>
    </div>
  </div>
);

export default CTA;
