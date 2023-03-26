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
import { Link } from "react-router-dom";

import { WhyFanuun } from "./../../containers";
import { CTA } from "./../../components";

const Canada = () => (
  <div className="canada-wrapper">
    <div className="canada__main-container">
      <Navbar />

      <div className="canada__possiblity-main section__padding1">
        <div className="canada__possibility " id="possibility">
          <div className="canada__possibility-content">
            <Fade left>
              <h1 className="gradient__text">
                <span className="future"> Canada </span> Start-Up
                <span className="future"> Visa</span>
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
          <div className="canada__section-ability-content">
            <Fade top>
              <p className="banner_content_div">
                The Canadian Start-Up Visa is designed to attract foreign
                entrepreneurs with innovative business ideas. The program is
                focused on providing support to entrepreneurs and innovative
                startups with the potential for job creation and competitiveness
                on a global scale.
              </p>
              <h1 style={{ color: "#060056" }}>
                Eligibility for Canada Start-Up Visa
              </h1>
              <p
                style={{
                  fontWeight: "bolder",
                  color: "rgb(6, 0, 86)",
                  fontSize: "18px",
                  fontFamily: "var(--font-family)",
                }}
              >
                Applying entrepreneurs must,
              </p>
            </Fade>
          </div>

          <div
            className="canada__section-help "
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
                    Have a business that qualifies <br /> specified criteria by
                    the <br />
                    Canadian government.
                  </p>
                </div>
                <div className="canada-container-a">
                  <div className="img-cont">
                    <img src={min} alt="prof" />
                  </div>
                  <p>
                    Secure a minimum level of <br /> investment from a <br />
                    designated venture capital <br /> fund, angel investor
                    group,
                    <br /> or business incubator.
                  </p>
                </div>
                <div className="canada-container-a">
                  <div className="img-cont">
                    <img src={lang} alt="prof" />
                  </div>
                  <p>
                    Meet the language <br /> requirements.
                  </p>
                </div>
                <div className="canada-container-a">
                  <div className="img-cont">
                    <img src={money} alt="prof" />
                  </div>
                  <p>
                    Bring along enough <br /> money to settle <br /> yourself
                    and your <br />
                    dependents.
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="canada-container ">
            <div
              className="canada__section-helpp "
              style={
                {
                  // backgroundImage: `url(${right}) `,
                  // backgroundRepeat: "no-repeat",
                  // backgroundSize: "cover",
                  // backgroundPosition: "right bottom",
                }
              }
            >
              <div className="canada__section-introo-content">
                <Fade bottom>
                  <h1 className="gradient__text">How Can Fanuun Help?</h1>
                  <p>
                    Wondering whether you're eligible for the Canada Start-Up
                    Visa? <br /> We offer the best consultancy services to our
                    clients for Canada immigration.
                  </p>
                  <Link to="/contact">
                    <button>Reach out to Fannun Today</button>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>

          <WhyFanuun />
        </div>
      </div>

      <div className="need_immigration_for_uk_main_div">
        <div className="need_immigration_for_uk_inner_div1">
          <p>
            Schedule an <span className="future"> Appointment </span>
          </p>

          <p
            style={{
              fontSize: "18px",
              fontWeight: 200,
              fontFamily: "Archivo",
              textAlign: "justify",
              color: "#000",
            }}
          >
            Schedule an appointment with Fanuun today for the best guidance and
            consultancy services for Canada immigration.
          </p>
        </div>

        <div className="need_immigration_for_uk_inner_div2">
          <Link to="/contact">
            <button
              style={{ height: "55px", borderRadius: "20px", border: "none" }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Canada;
