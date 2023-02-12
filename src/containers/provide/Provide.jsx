import React from "react";

import Fade from "react-reveal/Fade";
import "./provide.css";

import shape1 from "../../assets/shape1.png";
import shape2 from "../../assets/shape2.png";
import shape3 from "../../assets/shape3.png";
import shape4 from "../../assets/shape4.png";

const Provide = () => (
  <div
    className="fanuun__possiblity-main section__padding"
    // style={{
    //   backgroundImage: `url(${image})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    // }}
  >
    <div className="fanuun__possibility-content-heading ">
      <Fade left>
        <h1 className="gradient__text">
          Why do people choose <br /> Fanuun for immigration
        </h1>
      </Fade>
    </div>
    <div className="fanuun__possibility " id="possibility">
      <div className="fanuun__possibility-content">
        <Fade left>
          <h1 className="gradient__text">Highest success rate</h1>
          <p>
            We know what to look for and how to best frame your prior work
            experience. The success of your relocation request depends on your
            abilty to present your case as a captivating narrative rather than a
            collection of documents.
          </p>
        </Fade>
      </div>
      <div className="fanuun__possibility-image">
        <Fade right>
          <img src={shape1} alt="possibility" />
        </Fade>
      </div>
    </div>

    <div className="fanuun__possibilitytwo " id="possibility">
      <div className="fanuun__possibility-image">
        <Fade left>
          <img src={shape2} alt="possibility" />
        </Fade>
      </div>
      <div className="fanuun__possibility-content">
        <Fade right>
          <h1 className="gradient__text">Customized surveys and feedbacks</h1>
          <p>
            When communicating with customers, we use a common lexicon.
            Following your input, the system will compile the guidelines and
            prompts you need to succeed.
          </p>
        </Fade>
      </div>
    </div>

    <div className="fanuun__possibility " id="possibility">
      <div className="fanuun__possibility-content">
        <Fade left>
          <h1 className="gradient__text">Data- driven solutions</h1>
          <p>
            Comprehensive case studies and technical expertise inform an unique
            rating system, guides and tactics
          </p>
        </Fade>
      </div>
      <div className="fanuun__possibility-image">
        <Fade right>
          <img src={shape3} alt="possibility" />
        </Fade>
      </div>
    </div>

    <div className="fanuun__possibilitytwo " id="possibility">
      <div className="fanuun__possibility-image">
        <Fade left>
          <img src={shape4} alt="possibility" />
        </Fade>
      </div>
      <div className="fanuun__possibility-content">
        <Fade right>
          <h1 className="gradient__text">Guided process</h1>
          <p>
            Data-driven suggestions on every single step of your case. Our
            expert guides, case and documents examples, and tips will support
            you along the way. You won't feel lost wondering what you should
            write or what document you have to submit
          </p>
        </Fade>
      </div>
    </div>
  </div>
);

export default Provide;
