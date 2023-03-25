import React from "react";

import image from "../../assets/line.png";
import Fade from "react-reveal/Fade";

import "./expect.css";
const Expect = () => (
  <div
    className="about__expect "
    id="blog"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="about__expect-heading">
      <Fade right>
        <h1 className="gradient__text">What to expect ?</h1>
        <p>
          Our advisors are committed to be readily accessible to our clients.
          Our modern office is equipped with cutting-edge tools and means of
          communication to help us move your request quickly no matter where you
          are located in the world. Our promise to always be be honest to you.
          You are important to us since you are a part of FANUUN.
        </p>
      </Fade>
    </div>
  </div>
);

export default Expect;
