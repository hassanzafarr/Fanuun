import React from "react";

import "./UK.css";
import shape5 from "../../assets/Group 47.png";
import line from "../../assets/line.png";
import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";

const UK = () => (
  <div className="uk__main-container">
    <Navbar />
    <div className="uk__possiblity-main section__padding">
      <div className="uk__possibility " id="possibility">
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

      <div
        className="uk__section-ability"
        style={{
          backgroundImage: `url(${line})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="uk__section-ability-content">
          <Fade top>
            <h1 style={{ color: "#060056" }}>
              Fanuun offers the best consultancy for UK visa, specifically, the
              UK's two new investor programs;
            </h1>
            <p>
              • The Innovator Visa <br /> • The Start-up Visa <br />
              These visas are intended for experienced business people who have
              a genuine and credible business idea and wish to establish a new
              business in the UK. This visa program requires the applicant to
              have an endorsement from an approved endorsing body, such as a
              business organization or higher education institution that
              assesses their business idea and confirms that it is innovative,
              viable and scalable.
              <br /> Both of these visa programs allow successful applicants to
              stay in the UK for up to two years, after which they can apply to
              extend their stay for an additional three years or apply for
              settled status if they meet certain requirements. Fanuun's team
              shall guide you along the entire process - from eligibility
              assessment to application preparation and finally to post-visa
              services - and help you realize your dream of being a business
              owner in the UK! Contact us today to schedule a consultation and
              avail the best consultancy for UK visa.
            </p>
          </Fade>
        </div>
      </div>
    </div>
    <Brand />

    <Footer />
  </div>
);

export default UK;
