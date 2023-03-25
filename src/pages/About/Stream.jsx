import React from "react";

import image from "../../assets/aboutlogo.png";
import Fade from "react-reveal/Fade";

import "./stream.css";
const Stream = () => (
  <div
    className="about__blog "
    id="blog"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    }}
  >
    <div className="about__blog-heading">
      <Fade bottom>
        <h1 className="gradient__text">
          Streamlining the immigration process for you
        </h1>
        <p>
          We assist you in shaping your future and simplify your experience. Our
          expensive clientele continues to expand, and we look forward to
          establishing a bechmark in the Immigration and Visa service market.
        </p>
      </Fade>
    </div>
  </div>
);

export default Stream;
