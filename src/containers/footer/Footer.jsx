import React from "react";
import footerback from "../../assets/fanunFooterr.jpg";
import fanlogo from "../../assets/Group14.png";
import "./footer.css";
import { Link } from "react-router-dom";
import { facebook, instagram, linkedin, twitter } from "./import";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { ReactComponent as CompanyIcon } from "../../assets/logowhite.svg";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>;
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
></link>;
const Footer = () => (
  <div className="immi__footer">
    <div className="immi__footer-links">
      <div className="immi__footer-links_logo">
        <img src={fanlogo} />
        <p>
          {" "}
          The <span style={{ color: "#FF1B03" }}> Art </span> Of Immigration
        </p>
      </div>
      <div className="immi__footer-links_div">
        <b>
          <p className="headingMainFooter">Quick Links</p>
        </b>
        <Link to="/" className="paraFooter">
          Home
        </Link>
        <Link to="/about" className="paraFooter">
          About us
        </Link>
        <Link to="/solutions" className="paraFooter">
          Services
        </Link>
        <Link to="/career" className="paraFooter">
          Career
        </Link>
      </div>
      <div className="immi__footer-links_div">
        <b>
          <p className="headingMainFooter">Other Links </p>
        </b>
        <Link to="/uk" className="paraFooter">
          UK
        </Link>
        <Link to="/us" className="paraFooter">
          US
        </Link>
        <Link to="/canada" className="paraFooter">
          Canada
        </Link>
        <Link to="/contact" className="paraFooter">
          Contact Us
        </Link>
      </div>
      <div className="immi__footer-links_div">
        <b>
          <Link to="/contact" className="headingMainFooter">
            Contact Us
          </Link>
        </b>
        <div className="immi__footer-copyright1">
          <p className="headingMainFooter">Follow Us</p>
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
          </div>
        </div>
        {/* <p>Karachi</p>
        <p>Dubai</p>
        <p>Vancouver</p>
        <b>
          <p>Email</p>
        </b>
        <p>info@fanuun.com</p> */}
        {/* <p>Whatsapp us</p> */}
        {/* <p>+1(647)873-4235</p> */}
      </div>
    </div>

    <div className="immi__footer-copyright">
      <p style={{ textAlign: "center" }}>
        © 2023 FANUUN Consultants FZ LLC. All rights reserved.
      </p>
    </div>
    <div>
      <WhatsAppWidget
        phoneNumber="16478734235"
        message="Hello! how can we help you"
        CompanyIcon={CompanyIcon}
        companyName="FANUUN"
      />
    </div>
  </div>
);

export default Footer;
