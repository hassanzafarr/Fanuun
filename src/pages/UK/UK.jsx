import React from "react";

import "./UK.css";
import shape5 from "../../assets/Group 47.png";
import back from "../../assets/backimage.svg";
import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";
import freedom from "../../assets/freedom.svg";
import global from "../../assets/global.svg";
import home from "../../assets/mhome.svg";
import fast from "../../assets/fast.svg";
import lower from "../../assets/lower.svg";
import flexible from "../../assets/flexible.svg";
import startup from "../../assets/Startup.svg";
import innovate from "../../assets/Innovator.svg";
import right from "../../assets/rightwavy.svg";
import { CTA } from "./../../components";

const UK = () => (
  <div className="uk__main-container">
    <Navbar />
    <div className="uk__possiblity-main  ">
      <div className="uk__possibility section__padding " id="possibility">
        <div className="uk__possibility-content">
          <Fade top>
            <h1 className="gradient__text">
              <span className="future"> UK </span> Global Talent{" "}
              <span className="future"> Visas</span>
            </h1>
          </Fade>
        </div>
        <div className="uk__possibility-image">
          <Fade bottom>
            <img src={shape5} alt="possibility" />
          </Fade>
        </div>
      </div>

      <div className="uk__section-ability  ">
        <div className="uk__section-ability-content section__padding">
          <Fade top>
            <h1 style={{ color: "#060056" }}>
              Eligibility for uk Start-Up Visa
            </h1>
            <p>Applying entrepreneurs must,</p>
          </Fade>
        </div>
      </div>
      <div
        className="uk__section-help section__padding "
        style={{
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="uk__section-logo-container">
          <div className="uk-container-a">
            <div className="uk-img-cont">
              <img src={freedom} alt="prof" />
            </div>
            <p>
              Have a business that qualifies specified criteria by the Canadian
              government.
            </p>
          </div>
          <div className="uk-container-a">
            <div className="uk-img-cont">
              <img src={global} alt="prof" />
            </div>
            <p>
              Secure a minimum level of investment from a designated venture
              capital fund, angel investor group, or business incubator.
            </p>
          </div>
          <div className="uk-container-a">
            <div className="uk-img-cont">
              <img src={home} alt="prof" />
            </div>
            <p>Meet the language requirements.</p>
          </div>
          <div className="uk-container-a">
            <div className="uk-img-cont">
              <img src={fast} alt="prof" />
            </div>
            <p>
              Bring along enough money to settle yourself and your dependents.
            </p>
          </div>
          <div className="uk-container-a">
            <div className="uk-img-cont">
              <img src={lower} alt="prof" />
            </div>
            <p>
              Bring along enough money to settle yourself and your dependents.
            </p>
          </div>
          <div className="uk-container-a">
            <div className="uk-img-cont">
              <img src={flexible} alt="prof" />
            </div>
            <p>
              Bring along enough money to settle yourself and your dependents.
            </p>
          </div>
        </div>
      </div>
      <CTA htag="Need Immigration & Visa consultation " red=" For UK" />

      <div className="uk__section-ability  ">
        <div className="uk__section-ability-content section__padding">
          <Fade top>
            <h1 style={{ color: "#060056" }}>UK's two new Investor programs</h1>
          </Fade>
        </div>
        <div className="uk__section-help section__padding ">
          <div className="uk__section-logo-container-two">
            <div className="uk-container-a">
              <div className="uk-img-cont">
                <img src={startup} alt="prof" />
              </div>
              <p>
                Have a business that qualifies specified criteria by the
                Canadian government.
              </p>
            </div>
            <div className="uk-container-a">
              <div className="uk-img-cont">
                <img src={innovate} alt="prof" />
              </div>
              <p>
                Secure a minimum level of investment from a designated venture
                capital fund, angel investor group, or business incubator.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="uk__section-helpp section__margin"
        style={{
          backgroundImage: `url(${right}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
        }}
      >
        <div className="uk__section-introo-content ">
          <Fade bottom>
            <h1 className="gradient__text">How Can Fanuun Help?</h1>
            <p>
              These visas are intended for experienced business people who have
              a genuine and credible business idea and wish to establish a new
              business in the UK. This visa program requires the applicant to
              have an endorsement from an approved endorsing body, such as a
              business organization or higher education institution that
              assesses their business idea and confirms that it is innovative,
              viable and scalable.
            </p>
          </Fade>
        </div>
      </div>
    </div>
    {/* <Brand /> */}

    <Footer />
  </div>
);

export default UK;
