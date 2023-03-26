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
import { Link } from "react-router-dom";

const UK = () => (
  <div className="uk__main-container">
    <Navbar />
    <div className="main__container">
      <div className="uk__possiblity-main  section__padding1 ">
        <div className="uk__possibility  " id="possibility">
          <div className="uk__possibility-content">
            <Fade top>
              <h1 className="gradient__text">
                <span className="future"> UK </span> Investor
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
          <div className="uk__section-ability-content ">
            <Fade left>
              <h1 style={{ color: "#060056" }}>UK Global Talent Visas</h1>
              <p>
                The Global Talent visa allows you to work in the UK on a
                flexible basis with fewer restrictions and costs <br /> than
                other immigration categories.
              </p>
            </Fade>
          </div>
        </div>

        <div
          className="uk__section-help  "
          style={{
            backgroundImage: `url(${back})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <Fade bottom>
            <div className="uk__section-logo-container">
              <div className="uk-container-a">
                <div className="uk-img-cont">
                  <img src={freedom} alt="prof" />
                </div>
                <p>
                  Freedom to switch jobs and <br /> grow your career
                </p>
              </div>
              <div className="uk-container-a">
                <div className="uk-img-cont">
                  <img src={global} alt="prof" />
                </div>
                <p>
                  Global travel for research <br /> purpose allowed
                </p>
              </div>
              <div className="uk-container-a">
                <div className="uk-img-cont">
                  <img src={home} alt="prof" />
                </div>
                <p>Make a home in the UK</p>
              </div>
              <div className="uk-container-a">
                <div className="uk-img-cont">
                  <img src={fast} alt="prof" />
                </div>
                <p>Fast endorsement process</p>
              </div>
              <div className="uk-container-a">
                <div className="uk-img-cont">
                  <img src={lower} alt="prof" />
                </div>
                <p>Lower visa fees</p>
              </div>
              <div className="uk-container-a">
                <div className="uk-img-cont">
                  <img src={flexible} alt="prof" />
                </div>
                <p>
                  Flexibility to choose visa <br /> length
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>

    <div className="need_immigration_for_uk_main_div">
      <div className="need_immigration_for_uk_inner_div1">
        <p>
          {" "}
          Need <span className="future"> immigration </span> & <br />{" "}
          <span className="future"> visa consultation </span> for UK?{" "}
        </p>
      </div>

      <div className="need_immigration_for_uk_inner_div2">
        <Link to="/contact">
          {" "}
          <button> Contact Us Now </button>{" "}
        </Link>
      </div>
    </div>

    {/* <CTA htag="Need Immigration & Visa consultation " red=" For UK" /> */}
    <div className="main__container">
      <div className="uk__possiblity-main  section__padding1 ">
        <div className="uk__section-ability  ">
          <div className="uk__section-ability-content ">
            <Fade top>
              <h1 style={{ color: "#060056" }}>
                UK’s two new Investor programs
              </h1>
            </Fade>
          </div>
          <div className="uk__section-help  ">
            <div className="uk__section-logo-container-two">
              <Fade bottom>
                <div className="uk-container-a">
                  <div className="uk-img-cont">
                    <img src={innovate} alt="prof" />
                  </div>
                  <p>The Innovator Visa</p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="uk-container-a">
                  <div className="uk-img-cont">
                    <img src={startup} alt="prof" />
                  </div>
                  <p>The Start-up Visa</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="uk_section_helpp_main_div">
          <div className="uk__section-helpp ">
            <div className="uk__section-introo-content ">
              <Fade bottom>
                <h1 className="gradient__text">How Can FANUUN Help?</h1>
                <p>
                  These visas are intended for experienced business people who
                  have a genuine and credible business idea and wish to
                  establish a new business in the UK. This visa program requires
                  the applicant to have an endorsement from an approved
                  endorsing body, such as a business organization or higher
                  education institution that assesses their business idea and
                  confirms that it is innovative, viable and scalable.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <Brand /> */}

    <Footer />
  </div>
);

export default UK;
