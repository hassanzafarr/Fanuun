import React from "react";
import image from "../../assets/Group28.png";
import fanlogo from "../../assets/Group13.png";
import "./footer.css";
import { Link } from "react-router-dom";
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
        <img src={fanlogo} />
        <p>
          Facilitating the adaptation, integration, and pursuit of possibilities
          of immigrants.
        </p>
      </div>

      <div className="immi__footer-links_div">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About us</p>
        </Link>
        <Link to="/solutions">
          <p>Services</p>
        </Link>
        <Link to="/career">
          <p>Career</p>
        </Link>
      </div>
      <div className="immi__footer-links_div">
        <Link to="/uk">
          <p>UK</p>
        </Link>
        <Link to="/us">
          <p>US</p>
        </Link>
        <Link to="/canada">
          <p>Canada</p>
        </Link>
        <Link to="/contact">
          <p>Contact Us</p>
        </Link>
      </div>
      <div className="immi__footer-links_div">
        <b>
          <p>Get in touch</p>
        </b>
        <p>Karachi</p>
        <p>Dubai</p>
        <p>Vancouver</p>
        <b>
          <p>Email</p>
        </b>
        <p>info@fanuun.com</p>
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
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/FANUUNcon">
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
