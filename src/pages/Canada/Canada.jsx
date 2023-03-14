import React from "react";
import Fade from "react-reveal/Fade";
import "./canada.css";
import shape5 from "../../assets/Group 49.png";
import line from "../../assets/line.png";
import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";
import biz from "../../assets/Group 218.svg";
import min from "../../assets/minimum.svg";
import lang from "../../assets/language.svg";
import money from "../../assets/money.svg";
import back from "../../assets/backimage.svg";
import right from "../../assets/rightwavy.svg";
import { WhyFanuun } from "./../../containers";
import { CTA } from "./../../components";

const Canada = () => (
  <div className="canada__main-container">
    <Navbar />
    <div className="canada__possiblity-main section__padding">
      <div className="canada__possibility " id="possibility">
        <div className="canada__possibility-content">
          <Fade left>
            <h1 className="gradient__text">
              <span className="future"> Canada </span> Start-Up{" "}
              <span className="future"> Visas</span>
            </h1>
          </Fade>
        </div>
        <div className="canada__possibility-image">
          <Fade bottom>
            <img src={shape5} alt="possibility" />
          </Fade>
        </div>
      </div>

      <div className="canada__section-ability ">
        <div className="canada__section-ability-content section__padding">
          <Fade top>
            <h1 style={{ color: "#060056" }}>
              Eligibility for Canada Start-Up Visa
            </h1>
            <p>Applying entrepreneurs must,</p>
          </Fade>
        </div>

        <div
          className="canada__section-help section__padding "
          style={{
            backgroundImage: `url(${back})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Fade bottom>
            <div className="canada__section-logo-container">
              <div className="canada-container-a">
                <div className="img-cont">
                  <img src={biz} alt="prof" />
                </div>
                <p>
                  Have a business that qualifies specified criteria by the
                  Canadian government.
                </p>
              </div>
              <div className="canada-container-a">
                <div className="img-cont">
                  <img src={min} alt="prof" />
                </div>
                <p>
                  Secure a minimum level of investment from a designated venture
                  capital fund, angel investor group, or business incubator.
                </p>
              </div>
              <div className="canada-container-a">
                <div className="img-cont">
                  <img src={lang} alt="prof" />
                </div>
                <p>Meet the language requirements.</p>
              </div>
              <div className="canada-container-a">
                <div className="img-cont">
                  <img src={money} alt="prof" />
                </div>
                <p>
                  Bring along enough money to settle yourself and your
                  dependents.
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="canada-container section__padding ">
          <div
            className="canada__section-helpp "
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "right bottom",
            }}
          >
            <div className="canada__section-introo-content">
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
      </div>
    </div>
    {/* <Brand /> */}
    <CTA
      htag="Schedule an "
      red="Appointment"
      ptext="Schedule an appointment with Fanuun today for the best guidance and consultancy services for Canada immigration.
"
    />
    <Footer />
  </div>
);

export default Canada;
