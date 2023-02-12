import React from "react";

import "./contact.css";
import shape5 from "../../assets/Group 46.png";
import line from "../../assets/line.png";
import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";

const Contact = () => (
  <div className="contact__main-container">
    <Navbar />
    <div
      className="contact__possiblity-main section__padding"
      style={{
        backgroundImage: `url(${line})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="contact__possibility " id="possibility">
        <div className="contact__possibility-content">
          <Fade bottom>
            <h1 className="gradient__text">
              <span class="future"> Reach </span> Out to{" "}
              <span class="future"> Us</span>
            </h1>
          </Fade>
        </div>
        <div className="contact__possibility-image">
          <Fade bottom>
            <img src={shape5} alt="possibility" />
          </Fade>
        </div>
      </div>

      <div className="contact__section-ability">
        <div className="contact__section-ability-content">
          <Fade bottom>
            <h1 style={{ color: "#060056" }}>
              Want to schedule an appointment? Have any question or queries?
              We're always here to help!
            </h1>
          </Fade>
          <Fade bottom>
            <p>
              Please reach out to us by email
              <span class="future"> info@fanuun.com</span>
            </p>
          </Fade>
        </div>
      </div>
    </div>
    <Brand />

    <Footer />
  </div>
);

export default Contact;
