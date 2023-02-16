import React from "react";
import { send } from "emailjs-com";
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

      <div className="contact__possibilitytop" id="possibility">
        <div className="contact__left-text">
          <Fade left>
            <h1>
              Want to schedule an appointment? Have any question or queries?
              We're always here to help!
            </h1>
            <p>
              Please reach out to us by email
              <span class="future"> info@fanuun.com</span>
            </p>
          </Fade>
        </div>
        <div className="contact__right-text">
          <Fade right>
            <div class="contact__section-form">
              <input
                type="text"
                class="form__input-contact"
                placeholder="Name"
                id="name"
              ></input>
              <input
                type="text"
                class="form__input-contact"
                placeholder="Email"
                id="email"
              ></input>
              <textarea
                type="text"
                class="form__input-contact"
                placeholder="Message"
                id="message"
              ></textarea>
              <button type="button">Subscribe</button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
    <Brand />

    <Footer />
  </div>
);

export default Contact;
