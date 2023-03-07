import React from "react";

import "./UK.css";
import shape5 from "../../assets/Group 47.png";

import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";

const UK = () => (
  <div className="uk__main-container">
    <Navbar />
    <div className="uk__possiblity-main ">
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

      {/* <div className="uk__section-ability ">
        <div className="uk__section-ability-content section__padding">
          <Fade top>
            <h1 style={{ color: "#060056" }}>
              Eligibility for Canada Start-Up Visa
            </h1>
            <p>Applying entrepreneurs must,</p>
          </Fade>
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
              <div className="img-cont">
                <img src={biz} alt="prof" />
              </div>
              <p>
                Have a business that qualifies specified criteria by the
                Canadian government.
              </p>
            </div>
            <div className="uk-container-a">
              <div className="img-cont">
                <img src={min} alt="prof" />
              </div>
              <p>
                Secure a minimum level of investment from a designated venture
                capital fund, angel investor group, or business incubator.
              </p>
            </div>
            <div className="uk-container-a">
              <div className="img-cont">
                <img src={lang} alt="prof" />
              </div>
              <p>Meet the language requirements.</p>
            </div>
            <div className="uk-container-a">
              <div className="img-cont">
                <img src={money} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
          </div>
        </div>

        <div className="uk-container section__padding ">
          <div
            className="uk__section-helpp section__padding"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "right bottom",
            }}
          >
            <div className="uk__section-introo-content">
              <Fade bottom>
                <h1 className="gradient__text">How Can Fanuun Help?</h1>
                <p>
                  Wondering whether you're eligible for the Canada Start-Up
                  Visa? <br /> We offer the best consultancy services to our
                  clients for Canada immigration.
                </p>
                <button>Reach out to Fannun Today</button>
              </Fade>
            </div>
          </div>
        </div>

        <WhyFanuun />
      </div> */}
    </div>
    {/* <Brand /> */}

    <Footer />
  </div>
);

export default UK;
