import React from "react";
import image from "../../assets/Group28.png";

import "./footer.css";
import { facebook, instagram, linkedin, twitter, whatsapp } from "./import";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>;
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
></link>;
const Footer = () => (
  <div
    className="immi__footer section__padding"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    }}
  >
    <div className="immi__footer-links">
      <div className="immi__footer-links_logo">
        <p>Subscribe for our newsletter</p>

        <input
          type="text"
          class="form__input"
          id="name"
          placeholder="Email"
          required=""
        />
        <button type="button">Subscribe</button>
        <br />
        <p>By filling out the form you agree with our Terms and Conditions</p>
      </div>

      <div className="immi__footer-links_div">
        <h4>Home</h4>
        <p>About us</p>
        <p>Services</p>
      </div>
      <div className="immi__footer-links_div">
        <h4>Email</h4>
        <p>info@fanuun.com </p>
        <p>Info</p>
        <p>Privacy Policies</p>
      </div>
      <div className="immi__footer-links_div">
        <h4>Get in touch</h4>
        <p>Karachi</p>
        <p>Dubai</p>
        <p>Vancouver</p>
        {/* <p>Whatsapp us</p> */}
        {/* <p>+1(647)873-4235</p> */}
      </div>
    </div>

    <div className="immi__footer-copyright">
      <p>Follow Us</p>
      <div className="immi__social">
        <div>
          <a href="https://www.facebook.com/Fanuunco">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/fanuun/">
            {" "}
            <img src={linkedin} alt="linkedin" />{" "}
          </a>
        </div>
        <div>
          <a href="https://twitter.com/FANUUNcon">
            {" "}
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <div>
          <a
            href="https://wa.me/16478734235"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
