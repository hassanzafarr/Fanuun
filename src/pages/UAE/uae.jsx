import React from "react";

import "./uae.css";
import shape5 from "../../assets/uae.png";
import back from "../../assets/backimage.svg";
import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";
import freedom from "../../assets/generalIcons/11.svg";
import global from "../../assets/generalIcons/12.svg";
import home from "../../assets/generalIcons/13.svg";
import fast from "../../assets/generalIcons/14.svg";
import lower from "../../assets/generalIcons/15.svg";
import six from "../../assets/generalIcons/16.svg";
import passport from "../../assets/passport.png";

import { CTA } from "../../components";

const UAE = () => (
  <div className="uae__main-container">
    <Navbar />
    {/* <div className="main__container">
      <div className="uk__possiblity-main  section__padding1 "> */}
    <div className="uae__possiblity-main  ">
      <div className="uae__possibility" id="possibility">
        <div className="uae__possibility-content">
          <Fade top>
            <h1 className="gradient__text">
              <span className="future"> UAE </span> Multiple Entry
              <span className="future"> 5-Year </span>
              Tourist Visa{" "}
            </h1>
          </Fade>
        </div>
        <div className="uae__possibility-image">
          <Fade bottom>
            <img src={shape5} alt="possibility" />
          </Fade>
        </div>
      </div>

      <div className="uae__section-ability">
        <div className="uae__section-ability-content">
          <Fade left>
            <p>
              The Multiple Entry 5-Year Visa is a tourist visa for entry into
              the UAE. It is a terrific and convenient option for frequent
              travelers to the UAE, who wish to avoid the hassle of applying for
              a visa every time. The visa is open to all nationalities, and it
              allows tourists to visit the UAE for three months (which can be
              extended to a further three months) during the five-year period.
            </p>
            <h1>General Details</h1>
          </Fade>
        </div>
      </div>

      <div
        className="uae__section-help"
        style={{
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <Fade bottom>
          <div className="uae__section-logo-container">
            <div className="uae__section-logo-container-sub">
              <div className="uae-container-a">
                <div className="uae-img-cont1">
                  <img src={freedom} alt="prof" className="" />
                  <p>
                    For those who are not eligible for a visa on arrival or
                    visa-free entry into the UAE.
                  </p>
                </div>
              </div>
              <div className="uae-container-a">
                <div className="uae-img-cont2">
                  <img src={global} alt="prof" />
                  <p>Tourists may remain in the UAE for 90 days.</p>
                </div>
              </div>
              <div className="uae-container-a" id="uae-container-a-3">
                <div className="uae-img-cont">
                  <img src={home} alt="prof" />
                  <p>An extension of further 90 days could be availed.</p>
                </div>
              </div>
            </div>
            <div
              className="uae__section-logo-container-sub"
              style={{ marginTop: "40px" }}
            >
              <div className="uae-container-a">
                <div className="uae-img-cont1">
                  <img src={fast} alt="prof" />
                  <p>For all nationalities.</p>
                </div>
              </div>
              <div className="uae-container-a">
                <div className="uae-img-cont1">
                  <img src={lower} alt="prof" />
                  <p>
                    Airlines, travel agencies, and hotels may apply on your
                    behalf.
                  </p>
                </div>
              </div>
              <div className="uae-container-a" id="uae-container-a-6">
                <div className="uae-img-cont1">
                  <img src={six} alt="prof" />
                  <p>
                    Children are eligible for a free visa from 15th July to 15th
                    September each year.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="uae__section-logo-container-sub"
              id="uae__section-logo-container-sub-1"
            >
              <div className="uae-container-a">
                <div className="uae-img-cont">
                  <img src={home} alt="prof" />
                  <p>An extension of further 90 days could be availed.</p>
                </div>
              </div>
              <div className="uae-container-a">
                <div className="uae-img-cont1">
                  <img src={six} alt="prof" />
                  <p>
                    Children are eligible for a free visa from 15th July to 15th
                    September each year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="jobSeekerDivUae">
        <div className="jobSeekerSubDivUae">
          <div className="jobSeekerLeftSectionUae">
            <h1 className="jobHeading">General Information</h1>
            <ul className="paraSeekerDiv">
              <li className="paraSeekerUae">
                {" "}
                Previous six-month bank balance: 4,000 USD.
              </li>
              <li className="paraSeekerUae"> Health insurance policy.</li>
              <li className="paraSeekerUae"> Proof of stay in the UAE.</li>
              <li className="paraSeekerUae"> To and from ticket to UAE.</li>
              <li className="paraSeekerUae">
                {" "}
                Females under 18 years must have parents with them.
              </li>
            </ul>
          </div>
          <div className="jobSeekerRightSection">
            <img src={passport} className="seekerImg" alt="passport" />
          </div>
        </div>
      </div>

      <div className="uae_section_helpp_main_div">
        <div className="uae__section-helpp section__margin">
          <div className="uae__section-introo-content ">
            <Fade bottom>
              <h1 className="gradient__text">How Can FANUUN Help?</h1>
              <p>
                Fanuun can apply for the 5-Year Multiple Entry Tourist Visa to
                the UAE on your behalf and make your frequent traveling to the
                UAE hassle-free! Schedule a consultation with Fanuun today for
                more information regarding the process.
              </p>
            </Fade>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </div>
    {/* <Brand /> */}
    <CTA htag="Are You Interested in " red=" Visa Applications?" />
    <Footer />
  </div>
);

export default UAE;
