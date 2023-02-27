import React from "react";
import "./Attest.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import attest from "../../../assets/attestation.png";
import Banner from "./../../../components/banner/Banner";
import { Info } from "./../../../components/info/Info";
import Fade from "react-reveal/Fade";
import Contfan from "../../../components/contact-fannuun/contfan";

const Attest = () => {
  const data = [
    "Secondary School Certificate &amp; Marks Sheet from IBCC",
    "Higher Secondary School Certificate &amp; Marks Sheet from IBCC",
    "School Result Documents/Reports (Nursery, KG to Class 8 th ) from IBCC",
    "O/A Level IBCC Equivalence Certificate",
    "School Leaving Certificates (Nursery, KG to Class 8 th ) from IBCC",
    "University Level Educational Degrees (Bachelor, Masters, PhD from HEC, Karachi, Lahore, Islamabad",
    "Technical Board Certificate &amp; Diploma of Associate Engineers (DAE) from National Vocational andTechnical Training Commission (NAVTTC)",
  ];
  const data2 = [
    "Birth Certificate (NADRA)",
    "Marriage &amp; Un-Marriage Registration Certificate (NADRA)",
    "Family Registration Certificate (FRC)",
    "Death Certificate (NADRA)",
  ];
  const sec2data = [
    " Entry Profile Creation (Express)",
    "EOI Submission in SINP (Express Entry/Occupation in Demand)",
    "Detailed Guidance on Documentation",
    "Guidance Regarding proper NOC (National Occupation Code) Selection",
    "Experience Letter Drafting as per Canadian Immigration Instructions",
  ];
  const sec2data2 = [
    "Entry Profile Creation (Express)",
    "EOI Submission in SINP (Express Entry/Occupation in Demand)",
    "Detailed Guidance on Documentation",
    "Guidance Regarding proper NOC (National Occupation Code) Selection",
    "Experience Letter Drafting as per Canadian Immigration Instructions",
  ];
  const sec3data1 = [
    "The Ministry of Foreign Affairs of Pakistan (MOFA) – Karachi, Lahore, Islamabad for various",
    "Important immigration documents",
    "Ministry of Federal Education and Professional Training",
    "Islamabad Capital Territory Administration (ICTA)",
    "Various Embassies",
  ];
  return (
    <div className="attest__main-container">
      <Navbar />
      <div className="section__container section__padding">
        <Banner text="Attestaion Services" img={attest} />
        {/* First Section */}
        <div className="info__container">
          <div className="info__container-feature">
            <Info
              title="Fanuun provides fast and reliable attestation services to its clients from numerous
agencies/institutions as per the requirements of the Canadian, US, and British Embassies."
              text="The following documents are covered in the attestation services:"
              isList={false}
            />
            <Info title="Educational" text={data} isList={true} />
            <Info title="Personal" text={data2} isList={true} />
          </div>
        </div>
        <Contfan />
        {/* Second Section */}
        <div className="immi__possibility-content-heading ">
          <Fade right>
            <h1>
              ECA Attestation Service <br /> (ICAS, IQAS, ICES, WES, MCC, and
              PEBC)
            </h1>
          </Fade>
        </div>
        <div className="info__container">
          <div className="info__container-feature">
            <Info
              title="Fanuun offers Canadian Educational Credential Assessment (ECA) services from numerous
agencies including:"
              isList={false}
            />
            <Info title="Educational" text={sec2data} isList={true} />
            <Info
              title="Online Profiling Service for Canadian Immigration"
              text={sec2data2}
              isList={true}
            />
          </div>
        </div>
        <Contfan />
        {/* Third Section */}
        <div className="immi__possibility-content-heading">
          <Fade right>
            <h1>
              Ministry Attestation for
              <br /> Important Documents
            </h1>
          </Fade>
        </div>
        <div className="info__container">
          <div className="info__container-feature">
            <Info
              title="Fanuun facilitates its customers with document attestation services from various ministries
and state institutions, such as:"
              text={sec3data1}
              isList={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Attest;
