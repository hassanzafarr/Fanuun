import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
import ser from "../../assets/ser-banner.svg";
import inter from "../../assets/inadivisor.svg";
import inreg from "../../assets/inreg.svg";
import ukflag from "../../assets/ukflag.png";
import canada from "../../assets/canadaaa.png";
import pro from "../../assets/proass.svg";
import visa from "../../assets/visaacuu.svg";
import us from "../../assets/usss.png";
import Fade from "react-reveal/Fade";
import { CTA, Navbar } from "../../components";
import { Footer } from "../../containers";
import Reloc from "./Reloc";
import Stream from "../About/Stream";

const Services = () => (
  <div className="services__expect-main">
    <Navbar />
    <div className="main__container">
      <div className="uk__possiblity-main  section__padding1 ">
        <div className="services__possiblity-main">
          <div className="services__possibility  " id="possibility">
            <div className="services__possibility-content">
              <Fade left>
                <h1 className="gradient__text">
                  Immigrations <span className="future"> Services</span>
                </h1>

                <p>
                  With fully educated Immigration advisors on staff, we offer
                  specialized services and expert advising that sets us apart
                  from the competition.
                </p>
              </Fade>
            </div>
            <div className="services__possibility-image">
              <Fade right>
                <img src={ser} alt="possibility" />
              </Fade>
            </div>
          </div>

          <div className="ser__section-help    ">
            <Fade bottom>
              <div className="ser__section-logo-container">
                <div className="ser-container-a">
                  <div className="ser-sub-cont">
                    <div className="ser-img-cont">
                      <img src={pro} alt="prof" />
                    </div>
                    <h1>Providing assistance along the process</h1>

                    <p>
                      To improve your chances of obtaining an immigrant visa and
                      alleviate any anxiety you may have about the migration
                      process, Fanuun is here to lend a helping hand.
                    </p>
                  </div>
                </div>
                <div className="ser-container-a">
                  <div className="ser-sub-cont">
                    <div className="ser-img-cont">
                      <img src={visa} alt="prof" />
                    </div>
                    <h1>Visa Acquisition Process</h1>

                    <p>
                      The Fanuun team offers investment-based immigration
                      options that may lead to one of the best countries to live
                      permanently, along with thorough assistance and expert
                      advice for all facets of the move, from developing a
                      customized Case Map and gathering all supporting evidence
                      to submitting an application.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <Reloc />
          <div className="service-main ">
            <img src={ukflag} alt="ukflag" />
            <div className="services__possibility   " id="possibility">
              <div className="services__possibility-content">
                <Fade left>
                  <h1 className="gradient__text">
                    UK Serving Immigrants with Pride and Efficiency
                  </h1>
                  <p>
                    We are the industry's premier immigration and business
                    consulting firm, and are known as "The Enabler" in the
                    industry. We take great pride in it.
                  </p>
                  <p>
                    Specifically, we concentrate on Citizenship and Immigration
                    schemes that are tied to monetary investments.
                  </p>
                  <p>
                    We, as immigrants, have assembled a team of highly skilled
                    business managers, designers, market researchers, analysts,
                    lawyers, and others to help us overcome the obstacles we
                    encountered throughout our immigration.
                  </p>
                  <Link to="/us">
                    <button type="button">View More</button>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>

          <div className="service-main-right sec_padding">
            <div className="imgcon">
              <img className="lefty" src={us} alt="ukflag" />
            </div>
            <div className="services__possibility " id="possibility">
              <div className="services__possibility-content">
                <Fade left>
                  <h1 className="gradient__text">
                    US Serving Immigrants with Pride and Efficiency
                  </h1>
                  <p>
                    We are the industry's premier immigration and business
                    consulting firm, and are known as "The Enabler" in the
                    industry. We take great pride in it.
                  </p>
                  <p>
                    Specifically, we concentrate on Citizenship and Immigration
                    schemes that are tied to monetary investments.
                  </p>
                  <p>
                    We, as immigrants, have assembled a team of highly skilled
                    business managers, designers, market researchers, analysts,
                    lawyers, and others to help us overcome the obstacles we
                    encountered throughout our immigration.
                  </p>
                  <Link to="/uk">
                    <button type="button">View More</button>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>

          <div className="service-main  sec_padding">
            <img src={canada} alt="ukflag" />
            <div className="services__possibility  " id="possibility">
              <div className="services__possibility-content">
                <Fade left>
                  <h1 className="gradient__text">
                    CANADA Serving Immigrants with Pride and Efficiency
                  </h1>

                  <p>
                    We are the industry's premier immigration and business
                    consulting firm, and are known as "The Enabler" in the
                    industry. We take great pride in it.
                  </p>
                  <p>
                    Specifically, we concentrate on Citizenship and Immigration
                    schemes that are tied to monetary investments.
                  </p>
                  <p>
                    We, as immigrants, have assembled a team of highly skilled
                    business managers, designers, market researchers, analysts,
                    lawyers, and others to help us overcome the obstacles we
                    encountered throughout our immigration.
                  </p>
                  <Link to="/canada">
                    <button type="button">View More</button>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        {/* <Itinerary /> */}
        <Stream />
      </div>
    </div>
    <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />

    {/* <Brand /> */}
    <Footer />
  </div>
);

export default Services;
