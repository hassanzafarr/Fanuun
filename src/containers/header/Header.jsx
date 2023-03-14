import React from "react";
import image from "../../assets/banner-image.png";
import "./header.css";
import Fade from "react-reveal/Fade";
import backgroudVideo from "../../assets/vidbanner.mp4";

const Header = () => (
  <div className="immi__header " id="home">
    <div
      className="immi__header-content"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {/* <video id="video" src={backgroudVideo} autoPlay loop muted /> */}

      <Fade bottom>
        <h1 className="gradient__text section__padding">
          The <span className="future">art</span> of <br />
          immigration
        </h1>
        <p>
          Facilitating the adaptation, integration, and pursuit of <br />
          possiblities of immigrants
        </p>
      </Fade>
      <div className="immi__header-content__input section__padding">
        <Fade bottom>
          <button type="button">Calculate Your Chances</button>
        </Fade>
      </div>
    </div>
  </div>
);

export default Header;
