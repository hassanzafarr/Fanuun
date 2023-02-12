import React from "react";
import image from "../../assets/banner-image.png";
import "./header.css";
import Fade from "react-reveal/Fade";

const Header = () => (
  <div
    className="immi__header section__padding"
    id="home"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="immi__header-content">
      <Fade bottom>
        <h1 className="gradient__text">
          The <span className="future">art</span> of <br />
          immigration
        </h1>
        <p>
          Facilitating the adaptation, integration, and pursuit of <br />
          possiblities of immigrants
        </p>
      </Fade>
      <div className="immi__header-content__input">
        <Fade bottom>
          <button type="button">Calculate Your Chances</button>
        </Fade>
      </div>
    </div>
  </div>
);

export default Header;
