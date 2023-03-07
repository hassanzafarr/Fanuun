import React from "react";
import "./us.css";
import shape5 from "../../assets/Group 48.png";
import wavy from "../../assets/wavyy.svg";
import line from "../../assets/line.png";
import { Navbar } from "../../components";
import { Footer } from "../../containers";
import prof from "../../assets/prof.svg";
import person from "../../assets/person.svg";
import home from "../../assets/home.svg";
import visa from "../../assets/visa.svg";
import Fade from "react-reveal/Fade";
import economy from "../../assets/economy.svg";
import environment from "../../assets/environment.svg";
import wages from "../../assets/wages.svg";
import improve from "../../assets/improve.svg";
import request from "../../assets/request.svg";
import right from "../../assets/rightwavy.svg";
import bulb from "../../assets/Image 13.png";

const US = () => (
  <div
    className="us__main-container "
    style={{
      backgroundImage: `url(${line})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    }}
  >
    <Navbar />
    <div className="us__possiblity-main section__padding">
      <div className="us__possibility " id="possibility">
        <div className="us__possibility-content">
          <Fade top>
            <h1 className="gradient__text">
              <span class="future"> US </span> Visas
            </h1>
          </Fade>
        </div>

        <div className="us__possibility-image">
          <Fade bottom>
            <img src={shape5} alt="possibility" />
          </Fade>
        </div>
      </div>

      <div className="us__section-intro" id="possibility">
        <div className="us__section-intro-content">
          <Fade bottom>
            <h1 className="gradient__text">Introduction</h1>
            <p>
              The National Interest Waiver (NIW) is available to foreign
              nationals of exceptional ability in the sciences, arts, or
              business, and advanced degreed professionals. The National
              Interest Waiver is a procedure to bypass the cumbersome labor
              certification process which ordinarily is a prerequisite in
              obtaining permanent residence through the EB2 employment based
              green card category. Fanuun experienced immigration attorneys will
              prepare and file all the required documents for foreign
              professionals with advanced degrees, persons of exceptional
              ability, and a U.S. sponsor applying for Permanent Residence
              (Green Card). You must be a person with exceptional ability in the
              sciences, arts, or business, or an advanced degree holder
            </p>
          </Fade>
        </div>
      </div>

      <div
        className="us__section-help"
        style={{
          backgroundImage: `url(${wavy}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          // backgroundPositionY: "150px",
        }}
      >
        <div className="us__section-intro-content">
          <Fade bottom>
            <h1 className="gradient__text">How can we help</h1>
            <p>
              FANUUN's experienced immigration attorneys will prepare and file
              all the required documents for foreign
            </p>
          </Fade>
        </div>
        <div className="us__section-logo-container">
          <div className="container-a">
            <img src={prof} />
            <p>Professional</p>
          </div>
          <div className="container-a">
            <img src={person} />
            <p>Persons of exceptional ability</p>
          </div>
          <div className="container-a">
            <img src={home} />
            <p>Permanent Residence</p>
          </div>
          <div className="container-a">
            <img src={visa} />
            <p>On-demand Visa Option</p>
          </div>
        </div>
      </div>
      <div
        className="us__section-ability"
        style={{
          backgroundImage: `url(${right})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundPositionX: "280px",
        }}
      >
        <div className="us__section-ability-content">
          <Fade bottom>
            <h1 style={{ color: "#060056" }}>
              Person with Exceptional Ability
            </h1>
            <p>
              To be classified as a person with exceptional ability, you must
              provide documented proof of at least three of the following:{" "}
              <br />
              <br />
              <br />
              A. An official academic record showing the alien has a degree,
              diploma, certificate or similar award from a college, university,
              school or other institution of learning relating to the area of
              exceptional ability <br />
              B. Letters documenting at least ten years of full-time experience{" "}
              <br />
              C. A license to practice the profession or certification for a
              particular profession or occupation <br />
              D. Evidence that you command a salary or other remuneration for
              services which demonstrates exceptional ability
              <br /> E. Membership in professional associations
              <br /> F. Documents which prove recognition for achievements and
              significant contributions to the industry or field by peers,
              government entities, professional or business organizations
            </p>
          </Fade>
        </div>

        <div className="us__section-ability-content">
          <Fade bottom>
            <p>
              If the above standards do not apply, the USCIS may also accept
              other comparable evidence of eligibility.
            </p>
          </Fade>
        </div>
      </div>
      <div className="us__section-intro">
        <div className="us__section-intro-content">
          <Fade bottom>
            <h1 className="gradient__text">Persons Holding Advanced Degrees</h1>
            <p>
              To be classified as a person holding an advanced degree, you must
              possess a master's degree or a bachelor's degree with at least
              five years progressive post-bachelor degree experience. B. Your
              Occupation Serves the National Interest The term "national
              interest" is not defined in law. However, the USCIS Office of
              Administrative Appeals has developed a list of factors to consider
              when applying the National Interest Test. Factors that may be
              considered in determining national interest include, but are not
              limited to:
            </p>
          </Fade>
        </div>
        {/* card  */}
        <div className="us__section-advance-container">
          <div
            className="container-b"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            <img src={economy} alt="wages" />
            <p>US economy improvement</p>
          </div>
          <div
            className="container-b"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            <img src={wages} alt="wages" />
            <p>Improving Wages and Working Conditions for U.S. Workers</p>
          </div>
          <div
            className="container-b"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            <img src={improve} alt="improve" />
            <p>Improving Education and Training Programs for U.S.</p>
          </div>
          <div
            className="container-b"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            <img src={environment} alt="environment" />
            <p>Environmental improvement</p>
          </div>
          <div
            className="container-b"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            <img src={request} alt="request" />
            <p>Requests from Interested U.S. Government Agencies</p>
          </div>
        </div>
        {/* card  */}
      </div>

      <div
        className="us__possibilitytop"
        id="possibility"
        // style={{
        //   backgroundImage: `url(${s1}) `,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "contain",
        // }}
      >
        <div className="us__left-text">
          <Fade left>
            <h1>Unique Knowledge and skills</h1>
            <p>
              They need unique knowledge and skills that set them apart from
              other professionals, and apply those qualities to activities that
              bring benefit to the nation and Influence the country.
            </p>
          </Fade>
        </div>
        <div className="us__right-image">
          <Fade right>
            <img src={bulb} alt="bulb" />
          </Fade>
        </div>
      </div>
    </div>

    {/* <Brand /> */}
    <Footer />
  </div>
);

export default US;
