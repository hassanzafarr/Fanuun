import React from "react";
import "./Document.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Contfan from "../../../components/contact-fannuun/contfan";
import Banner from "./../../../components/banner/Banner";
import document from "../../../assets/document.png";
import docimg from "../../../assets/docimg.svg";
import { Info } from "./../../../components/info/Info";
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
      <div className="section__container">
        <div className="banner-container section__padding">
          <Banner text="Document Services" img={document} />
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
        <div className="doc__container-feature section__padding">
          <div className="info__cont">
            <Info
              title="FANUUN facilitates its cattesttomers with document
attestation services from varioattest ministries and state
institutions, such as:"
              text={data}
              isList={true}
            />
          </div>
          <div className="img-cont2">
            <img src={docimg} alt="document" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Document;
