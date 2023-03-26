import React from "react";
import "./us.css";
import shape5 from "../../assets/Group 48.png";

import { Navbar } from "../../components";
import { Footer } from "../../containers";
import prof from "../../assets/prof.svg";
import person from "../../assets/person.svg";
import home from "../../assets/home.svg";
import visa from "../../assets/visafinal.png";

import Fade from "react-reveal/Fade";
import economy from "../../assets/economy.svg";
import environment from "../../assets/environment.svg";
import wages from "../../assets/wages.svg";
import improve from "../../assets/improve.svg";
import request from "../../assets/request.svg";
import right from "../../assets/rightwavy.svg";
import bannerimg from "../../assets/Group_489.png";
import bulb from "../../assets/Group 480.svg";

const US = () => (
  <div className="us__main-container ">
    <Navbar />
    <div className="main__container">
      <div className="us__possiblity-main section__padding1">
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
          <div className="us__section-intro-content banner_content_div">
            <Fade bottom>
              <h1 className="gradient__text">
                The National Interest Waiver (NIW)
              </h1>
              <p>
                Program is available to foreign nationals of exceptional ability
                in the sciences, arts, or business, and advanced degreed
                professionals. The National Interest Waiver is a procedure to
                bypass the cumbersome labor certification process which
                ordinarily is a prerequisite in obtaining permanent residence
                through the EB2 employment-based green card category.
              </p>
            </Fade>
          </div>
        </div>

        <div
          className="us__section-help"
          style={
            {
              // backgroundImage: `url(${bannerimg})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "contain",
              // backgroundPositionY: "150px",
            }
          }
        >
          <div className="us__section-intro-content">
            <Fade bottom>
              <h1 className="gradient__text">How We Can Help?</h1>
              <p>
                FANUUN’s experienced immigration attorneys will prepare and file
                all the required documents for foreign
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="us__section-logo-container">
              <div className="container-a">
                <img src={prof} alt="prof" />
                <p>
                  Professionals with <br /> Advanced degrees
                </p>
              </div>
              <div className="container-a">
                <img src={person} alt="person" />
                <p>
                  Persons of exceptional <br /> ability
                </p>
              </div>
              <div className="container-a">
                <img src={home} alt="home" />
                <p>
                  U.S. sponsor applying for <br /> Permanent Residence
                </p>
              </div>
              <div className="container-a">
                <img src={visa} alt="visa" />
                <p>
                  On-demand visa options <br /> such as investors etc
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div
          className="us__section-ability"
          style={{
            backgroundImage: `url(${bannerimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="us__section-ability-content">
            <Fade bottom>
              <h1 style={{ color: "#060056" }}>
                Persons with Exceptional Ability
              </h1>
              <p style={{ marginLeft: "2rem" }}>
                To be classified as a person with exceptional ability, you must
                provide documented proof of at least three of the following:
              </p>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  marginBottom: "2rem",
                }}
              >
                <div style={{ display: "flex", gap: 10 }}>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#262453",
                    }}
                  >
                    A.{" "}
                  </p>
                  <p style={{ margin: 0, textAlign: "justify" }}>
                    An official academic record showing the alien has a degree,
                    diploma, certificate or similar award from a college,
                    university, school or other institution of learning relating
                    to the area of exceptional ability
                  </p>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#262453",
                      margin: 0,
                    }}
                  >
                    B.{" "}
                  </p>
                  <p style={{ margin: 0 }}>
                    Letters documenting at least ten years of full-time
                    experience
                  </p>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#262453",
                      margin: 0,
                    }}
                  >
                    C.{" "}
                  </p>
                  <p style={{ margin: 0 }}>
                    A license to practice the profession or certification for a
                    particular profession or occupation
                  </p>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#262453",
                      margin: 0,
                    }}
                  >
                    D.{" "}
                  </p>
                  <p style={{ margin: 0 }}>
                    Evidence that you command a salary or other remuneration for
                    services which demonstrates exceptional ability
                  </p>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#262453",
                      margin: 0,
                    }}
                  >
                    E.{" "}
                  </p>
                  <p style={{ margin: 0 }}>
                    Membership in professional associations
                  </p>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#262453",
                      margin: 0,
                    }}
                  >
                    F.{" "}
                  </p>
                  <p style={{ margin: 0 }}>
                    Documents which prove recognition for achievements and
                    significant contributions to the industry or field by peers,
                    government entities, professional or business organizations
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="us__section-ability-content div2">
            <Fade bottom>
              <p className="card_footer_div" style={{ marginLeft: "2rem" }}>
                If the above standards do not apply, the USCIS may also accept
                other comparable evidence of eligibility.
              </p>
            </Fade>
          </div>
        </div>
        <div className="us__section-intro">
          <div className="us__section-intro-content persons_main_div">
            <Fade bottom>
              <h1 className="gradient__text">
                Persons Holding Advanced Degrees
              </h1>
              <p style={{ width: "100%" }}>
                To be classified as a person holding an advanced degree, you
                must possess a master's degree or a bachelor's degree with at
                least five years progressive post-bachelor degree experience.{" "}
                <br /> Your Occupation Serves the National Interest The term
                "national interest" is not defined in law. However, the USCIS
                Office of Administrative Appeals has developed a list of factors
                to consider when applying the National Interest Test. Factors
                that may be considered in determining national interest include,
                but are not limited to:
              </p>
            </Fade>
          </div>
          {/* card  */}
          <Fade bottom>
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
                <img src={economy} alt="wages" width={100} />
                <p>
                  US economy <br /> improvement
                </p>
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
                <img src={wages} alt="wages" width={100} />
                <p>
                  Improving Wages and <br /> Working Conditions for <br /> U.S.
                  Workers
                </p>
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
                <img src={improve} alt="improve" width={100} />
                <p>
                  Improving Education and <br /> Training Programs for U.S.
                </p>
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
                <img src={environment} alt="environment" width={100} />
                <p>
                  Environmental <br /> improvement
                </p>
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
                <img src={request} alt="request" width={100} />
                <p>
                  Requests from Interested <br /> U.S. Government <br />{" "}
                  Agencies
                </p>
              </div>
            </div>
          </Fade>
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
                other professionals, and apply those qualities to activities
                that bring benefit to the nation and Influence the country.
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
    </div>

    {/* <Brand /> */}
    <Footer />
  </div>
);

export default US;
