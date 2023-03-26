import React from "react";

import Fade from "react-reveal/Fade";
import "./provide.css";
import image from "../../assets/lowlogo.svg";
// import shape1 from "../../assets/shape1.png";
// import shape2 from "../../assets/shape2.png";
// import shape3 from "../../assets/shape3.png";
// import shape4 from "../../assets/shape4.png";

import survey from "../../lotties/41070-notepad-with-a-list-of-tick-boxes-and-5-star-feedback.json";
import app from "../../lotties/nodata.json";
import dataa from "../../lotties/95561-data-analyst.json";

import Lottie from "react-lottie";
import high from "../../lotties/120404-business-target-achievement.json";

const Provide = () => {
  const lottiegif = {
    loop: true,
    autoplay: true,
    animationData: high,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const surveyop = {
    loop: true,
    autoplay: true,
    animationData: survey,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const appop = {
    loop: true,
    autoplay: true,
    animationData: app,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const dataop = {
    loop: true,
    autoplay: true,
    animationData: dataa,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="fanuun__possiblity-main">
      <div className="fanuun__possiblity-sub">
        <img src={image} className="fBack" />
        <div className="fanuun__provide-content-heading ">
          <Fade left>
            <h1 className="gradient__text">
              Why do people choose <br /> Fanuun for immigration
            </h1>
          </Fade>
        </div>
        <div className="fanuun__provide " id="provide1">
          <div className="fanuun__provide-content">
            <Fade left>
              <h1 className="gradient__text">Highest success rate</h1>
              <p>
                We know what to look for and how to best frame your prior work
                experience. The success of your relocation request depends on
                your abilty to present your case as a captivating narrative
                rather than a collection of documents.
              </p>
            </Fade>
          </div>
          <div className="fanuun__provide-image" id="provideImg1">
            <Fade right>
              <Lottie
                options={lottiegif}
                // height={270}
                isClickToPauseDisabled={true}
              />
            </Fade>
          </div>
        </div>
        <div className="fanuun__providetwo " id="provide1">
          <div className="fanuun__provide-image" id="provideImg2">
            <Fade left>
              <Lottie
                options={surveyop}
                // height={260}
                isClickToPauseDisabled={true}
              />
            </Fade>
          </div>
          <div
            className="fanuun__provide-content"
            id="fanuun__provide_content_id2"
          >
            <Fade right>
              <h1 className="gradient__text">
                Customized surveys and feedbacks
              </h1>
              <p>
                When communicating with customers, we use a common lexicon.
                Following your input, the system will compile the guidelines and
                prompts you need to succeed.
              </p>
            </Fade>
          </div>
        </div>

        <div className="fanuun__provide " id="provide3">
          <div className="fanuun__provide-content" id="provideImg1">
            <Fade left>
              <h1 className="gradient__text">
                Countless successful applications
              </h1>
              <p>
                With our assistance, hundreds of industry experts have
                transitioned into foreign positions and relocated to the desired
                destination.
              </p>
            </Fade>
          </div>
          <div className="fanuun__provide-image" id="provideImg3">
            <Fade right>
              <Lottie
                options={appop}
                height={230}
                speed={4}
                isClickToPauseDisabled={true}
              />
            </Fade>
          </div>
        </div>

        <div className="fanuun__providetwo " id="provide4">
          <div className="fanuun__provide-image" id="provideImg4">
            <Fade left>
              <Lottie
                options={dataop}
                // height={300}
                isClickToPauseDisabled={true}
              />
            </Fade>
          </div>
          <div
            className="fanuun__provide-content"
            id="fanuun__provide_content_id4"
          >
            <Fade right>
              <h1 className="gradient__text">Data-driven solutions</h1>
              <p>
                Comprehensive case studies and technical expertise inform an
                unique rating system, guides, and tactics.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
