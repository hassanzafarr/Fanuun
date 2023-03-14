import React from "react";

import "./services.css";

import shape1 from "../../assets/man.png";
import meet from "../../assets/Group 44.png";
import meet2 from "../../assets/Group 45.png";
import inter from "../../assets/inadivisor.svg";
import inreg from "../../assets/inreg.svg";
// import Expect from "./Expect.jsx";
// import Stream from "./Stream";
import Fade from "react-reveal/Fade";
import { Brand, CTA, Navbar } from "../../components";
import { Footer } from "../../containers";
import Reloc from "./Reloc";
import Stream from "../About/Stream";

const Services = () => (
  <div className="services__expect-main">
    <Navbar />
    <div className="services__possiblity-main section__padding">
      <div className="services__possibility " id="possibility">
        <div className="services__possibility-content">
          <Fade left>
            <h1 className="gradient__text">
              The<span className="future"> Best </span> At Your Service
            </h1>

            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
          </Fade>
        </div>
        <div className="services__possibility-image">
          <Fade right>
            <img src={shape1} alt="possibility" />
          </Fade>
        </div>
      </div>

      <div className="ser__section-help   ">
        <Fade bottom>
          <div className="ser__section-logo-container">
            <div className="ser-container-a">
              <div className="ser-sub-cont">
                <h1>Advisory Services</h1>

                <div className="ser-img-cont">
                  <img src={inter} alt="prof" />
                </div>
                <p>
                  We provide in-depth guidance on matters such as local
                  regulations, incorporation procedures, regulatory approvals,
                  etc. Our team shall provide you with holistic guidance, and
                  offer solutions that are based according to the regulations
                  and requirements of the country.
                </p>
              </div>
            </div>
            <div className="ser-container-a">
              <div className="ser-sub-cont">
                <h1>Advisory Services</h1>

                <div className="ser-img-cont">
                  <img src={inreg} alt="prof" />
                </div>
                <p>
                  FANNUN will help you in registering with all relevant
                  government bodies (Tax Authority, Capital Market Authority,
                  etc.) during your incorporation process. Our swift services
                  will ensure your registration and license procurement
                  procedure is carried out timely.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <Reloc />
      <div className="services__possibility " id="possibility">
        <div className="services__possibility-content">
          <Fade left>
            <h1 className="gradient__text">
              UK Serving Immigrants with Pride and Efficiency
            </h1>
            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
            <button type="button">View More</button>
          </Fade>
        </div>
      </div>

      <div className="services__possibility " id="possibility">
        <div className="services__possibility-content">
          <Fade left>
            <h1 className="gradient__text">
              UK Serving Immigrants with Pride and Efficiency
            </h1>
            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
          </Fade>
        </div>
      </div>

      <div className="services__possibility " id="possibility">
        <div className="services__possibility-content">
          <Fade left>
            <h1 className="gradient__text">
              UK Serving Immigrants with Pride and Efficiency
            </h1>

            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
            <p>
              With highly educated immigration advisors and staff, we offer
              specialized services and expert advising that make us stand out.
            </p>
          </Fade>
        </div>
      </div>
    </div>
    {/* <Itinerary /> */}
    <Stream />
    <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />

    {/* <Brand /> */}
    <Footer />
  </div>
);

export default Services;
