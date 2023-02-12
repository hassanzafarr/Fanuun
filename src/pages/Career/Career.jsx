import React from "react";

import "./career.css";
import Fade from "react-reveal/Fade";
import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";
import Position from "./Positions";

const Career = () => (
  <div className="career__expect-main">
    <Navbar />
    <div
      className="career__possiblity-main section__padding"
      //   style={{
      //     backgroundImage: `url(${image})`,
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "contain",
      //   }}
    >
      <div className="career__possibilitytop" id="possibility">
        <div className="career__left-text">
          <Fade left>
            <h1>
              Be a part of
              <span class="future"> FANUUN</span>
            </h1>
          </Fade>
        </div>
        <div className="career__right-text">
          <Fade right>
            <p>
              FANUUN is always on the lookout for talented and dedicated
              individuals to join our team. We offer a variety of exciting
              career opportunities, competitive salary pakages, and
              opportunities for professional grwoth and development
            </p>
          </Fade>
        </div>
      </div>

      <div className="career__sectiontwo">
        <Fade top>
          <h1>
            If you are passionate, driven and looking for rewarding career, we
            would love to hear from you!
          </h1>
          <p>
            Please see below for current job openings(if any),and don't hesitate
            to react out to us if you have any questions.
          </p>
        </Fade>
      </div>
    </div>

    <Position />
    <Brand />
    <Footer />
  </div>
);

export default Career;
