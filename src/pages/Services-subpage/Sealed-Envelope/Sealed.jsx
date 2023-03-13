import React from "react";
import "./Sealed.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Banner from "./../../../components/banner/Banner";
import image from "../../../assets/sealed.png";
import veriuni from "../../../assets/veriuni.svg";
import attestsec from "../../../assets/attestsec.svg";
import techboard from "../../../assets/techboard.svg";
import hec from "../../../assets/hec.svg";
import back from "../../../assets/backimage.svg";
import CTA from "./../../../components/cta/CTA";

const Sealed = () => {
  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="section__container ">
        <div className="banner-container section__padding">
          <Banner text="Sealed Envelope Services" img={image} />
        </div>
        <div className="screen__section-ability-content section__padding">
          <h1 style={{ color: "#060056" }}>
            FANUUN provides fast and reliable attestation services to its
            clients from numeroattest agencies/institutions as per the
            requirements of the Canadian, attest, and British Embassies.
          </h1>
          <p>
            The following documents are covered in the attestation services:
          </p>
        </div>
      </div>
      <div
        className="sealed__section-help section__padding "
        style={{
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="sealed__section-logo-container">
          <div className="sealed-container-a">
            <div className="sel-img-cont">
              <img src={hec} alt="prof" />
            </div>
            <p>HEC Attestation</p>
          </div>
          <div className="sealed-container-a">
            <div className="sel-img-cont">
              <img src={attestsec} alt="prof" />
            </div>
            <p>Attestation from Secondary (Matric) and Intermediate Boards</p>
          </div>
          <div className="sealed-container-a">
            <div className="sel-img-cont">
              <img src={techboard} alt="prof" />
            </div>
            <p>Attestation from Technical Boards</p>
          </div>
          <div className="sealed-container-a">
            <div className="sel-img-cont">
              <img src={veriuni} alt="prof" />
            </div>
            <p>
              Verification from University Sealed Envelope as needed for the ECA
            </p>
          </div>
        </div>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
  );
};

export default Sealed;
