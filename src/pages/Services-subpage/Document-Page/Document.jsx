import React from "react";
import "./Document.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";

import Banner from "./../../../components/banner/Banner";
import document from "../../../assets/document.png";
import docimg from "../../../assets/docimg.svg";
import edugirl from "../../../assets/girlsit.svg";
import { Info } from "./../../../components/info/Info";
import CTA from "./../../../components/cta/CTA";
import Fade from "react-reveal/Fade";
const Document = () => {
  const data = [
    "Birth Certificate (NADRA)",
    "Non Availability of Birth Certificate (KMC)",
    "Death Certificate (NADRA)",
    "NADRA Family Registration Certificate (FRC)",
    "Marriage Registration, Un-Marriage/Bachelorhood, Divorce/Separation Certificate From NADRA",
    "Police Character/Clearance Certificate",
    "Domicile/Permanent Residence Certificate",
  ];

  const data2 = [
    "Bona Fide Letters from Secondary Boards &amp; Universities",
    "Competency-Based Diploma",
    "Duplicate Degrees/Transcripts/Certificates/Mark Sheets &amp; Migration Certificate from Universities &amp; Boards",
    "Equivalence Certificate from HEC/IBCC",
    "Good Standing Certificate from Medical Bodies (PMDC, Pharmacy Councils, Dataflow Exams)",
  ];

  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="main__container">
        <div className="section__padding1">
          <div className="section__container">
            <div className="banner-container ">
              <Banner
                text="Document Issuance  "
                textred="Services"
                img={document}
              />
            </div>
            <Fade bottom>
              <div className="screen__section-ability-content sec__padding">
                <h1 style={{ color: "#060056" }}>
                  FANUUN facilitates its clients in the swift, easy, and
                  reliable issuance of numerous legal and personal documents
                  from various agencies/institutes. These include:
                </h1>
                <p>
                  The following documents are covered in the attestation
                  services:
                </p>
              </div>
            </Fade>
            <div className="doc__container-feature sec__padding ">
              <Fade left>
                <div className="info__cont">
                  <Info title="Personal" text={data} isList={true} />
                </div>
              </Fade>
              <Fade right>
                <div className="img-cont2">
                  <img src={docimg} alt="document" />
                </div>
              </Fade>
            </div>

            <div className="doc__container-feature sec__padding">
              <Fade left>
                <div className="info__cont">
                  <Info title="Educational" text={data2} isList={true} />
                </div>
              </Fade>
              <Fade right>
                <div className="img-cont2">
                  <img src={edugirl} alt="document" />
                </div>
              </Fade>
            </div>
          </div>

          <div className="last-line">
            <h1>
              FANUUN’s swift services enable our clients to receive their
              documents in the shortest amount of time, and in a reliable,
              trustworthy manner.
            </h1>
          </div>
        </div>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
  );
};

export default Document;
