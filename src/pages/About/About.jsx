import React from "react";

import "./about.css";
import Fade from "react-reveal/Fade";
import shape1 from "../../assets/about1.png";
import shape2 from "../../assets/about2.png";
import Expect from "./Expect.jsx";
import Stream from "./Stream";
import { CTA, Navbar } from "../../components";
import { Footer } from "../../containers";

const About = () => (
  <div className="about__expect-main">
    <Navbar />
    <div className="main__container">
      <div className="section__padding1">
        <div
          className="about__possiblity-main "
          //   style={{
          //     backgroundImage: `url(${image})`,
          //     backgroundRepeat: "no-repeat",
          //     backgroundSize: "contain",s
          //   }}
        >
          <div className="about__possibilitytop " id="possibility">
            <div className="about__left-text">
              <Fade left>
                <h1>
                  <span class="future">Designing</span> Strategies <br />
                  For Addressing <br /> <span class="future">Immigration </span>
                  Problems
                </h1>
              </Fade>
            </div>
            <div className="about__right-text">
              <Fade right>
                <p>
                  For many years, our immigration consulting organisations have
                  been helping people just like you, Everything from registering
                  your business and locating recruiters or the proper personnel
                  to advising the best immigration program and assisting with
                  community integration is within reach, Here at Fanuun, we are
                  committed to helping you overcome the difficulties you may
                  face as you prepare for, undertake, and recover from an
                  international relocation.
                </p>
              </Fade>
            </div>
          </div>

          <div className="about__possibility " id="possibility">
            <div className="about__possibility-image">
              <Fade bottom>
                <img src={shape1} alt="possibility" />
              </Fade>
            </div>
            <div className="about__possibility-content">
              <Fade bottom>
                <h1 className="gradient__text">
                  Serving Immigrants with Pride and Efficiency
                </h1>
                <p>
                  We are the industry's premier immigration and business
                  consulting firm, and are known as "The Enabler" in the
                  industry. We take great pride in it.
                </p>

                <p>
                  Specifically, we concentrate on citizenship and immigration
                  schemes that are tied to monetary investments.
                </p>
                <p>
                  We, as immigrants, have assembled a team of highly skilled
                  business managers, designers, market researchers, analysts,
                  lawyers, and others to help us overcome the obstacles we
                  encountered throughout our immigration.
                </p>
              </Fade>
            </div>
          </div>

          <div className="about__possibilitytwo " id="possibility">
            <div className="about__possibility-content">
              <Fade bottom>
                <h1>Why FANUUN</h1>
                <p>
                  We are here for you every step of the journey, and our decades
                  of experience will guarantee that you receive the best advice
                  possible.
                </p>

                <h1>Accurate Guidance</h1>
                <p>
                  Our business consultants, attorneys, and other SME's come from
                  a variety of industries in order to assist and support you.
                </p>

                <h1>Asserting Out Presence</h1>
                <p>
                  With our existing presence in Canada, the United States, the
                  United Kingdom, the Middle East, and South Asia, as well as
                  out imminent expansion plans to new regions, we are able to
                  reach the right individuals for the right programs around the
                  world.
                </p>
              </Fade>
            </div>
            <div className="about__possibility-image">
              <Fade bottom>
                <img src={shape2} alt="possibility" />
              </Fade>
            </div>
          </div>
        </div>
        <Expect />
        <Stream />
      </div>
    </div>
    <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
    {/* <Brand /> */}
    <Footer />
  </div>
);

export default About;
