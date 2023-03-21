import React from "react";
import "./banner.css";

import Fade from "react-reveal/Fade";

const Banner = ({ text, img, textred }) => (
  <div className="banner__expect-main">
    <div className="banner__possiblity-main ">
      <div className="banner__possibilitytop" id="possibility">
        <div className="banner__left-text">
          <Fade left>
            <h1>
              {text} <span class="future">{textred}</span>
            </h1>
          </Fade>
        </div>
        <div className="banner__right-image">
          <Fade right>
            <img src={img} alt="alt" />
          </Fade>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
