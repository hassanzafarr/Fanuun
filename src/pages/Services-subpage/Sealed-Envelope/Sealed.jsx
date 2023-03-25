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
import Fade from "react-reveal/Fade";

const Sealed = () => {
  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="main__container">
        <div className="section__padding1">
          <div className="section__container ">
            <div className="banner-container">
              <Banner text="Sealed Envelope " textred="Services" img={image} />
            </div>
            <Fade left>
              <div className="screen__section-ability-content sec__padding">
                <h1 style={{ color: "#060056" }}>
                  FANUUN offers fast and reliable attestation and sealed
                  envelope services for its clients. The services are offered
                  for numerous agencies such as World Education Services (WES)
                  and the Canadian Educational Credential Assessment (ECA)
                  agencies such as IQAS, CES, ICES, CES, MCC & PEBC.
                </h1>
                <p>FANUUN provides assistance to its clients in/for:</p>
              </div>
            </Fade>
          </div>
          <div
            className="sealed__section-help sec__padding "
            style={{
              backgroundImage: `url(${back})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Fade bottom>
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
                  <p>
                    Attestation from Secondary (Matric) and Intermediate Boards
                  </p>
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
                    Verification from University Sealed Envelope as needed for
                    the ECA
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
  );
};

export default Sealed;
