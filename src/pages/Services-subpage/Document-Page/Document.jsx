import React from "react";
import "./Document.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Contfan from "../../../components/contact-fannuun/contfan";
import Banner from "./../../../components/banner/Banner";
import document from "../../../assets/document.png";
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
      <div className="section__container section__padding">
        <Banner text="Document Services" img={document} />
        <div className="doc__container">
          <div className="doc__container-feature">
            <Info
              title="Fanuun facilitates its clients in the swift, easy, and reliable issuance of numerous legal
and personal documents from various agencies/institutes. These include:"
            />
            <Info title="Personal" text={data} isList={true} />

            <Info title="Educational" text={data2} isList={true} />
          </div>
        </div>
        <Contfan />
      </div>
      <Footer />
    </div>
  );
};

export default Document;
