import React from "react";
import Fade from "react-reveal/Fade";
import "./process.css";
import gif from "../../assets/Animation.gif";

const Process = () => (
  <div className="immi__possiblity-main">
    
    <div className="immi__possibility " id="possibility">
      <div className="immi__possibility-content">
        <Fade left>
          <h1 className="gradient__text">
            Streamlining the immigration process for you
          </h1>

          <p>
            Facilitating the adaptation, We assist you in shaping your future
            and simplify your experience. Our expensive clientele continues to
            expand, and we look forward to establishing a benchmark in the
            immigration and Visa service market and pursuit of possibilities of
            immigrants.
          </p>
        </Fade>
      </div>

      <div className="immi__possibility-image">
        <Fade right>
          {/* <img src={shape5} alt="possibility" /> */}
          <img src={gif} alt="possibility" />
        </Fade>
      </div>
    </div>
  </div>
);

export default Process;
