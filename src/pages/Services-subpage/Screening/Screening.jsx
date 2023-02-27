import React from "react";
import "./Screen.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Banner from "./../../../components/banner/Banner";
import image from "../../../assets/screening.png";
import Fade from "react-reveal/Fade";
import Contfan from "../../../components/contact-fannuun/contfan";
import { Info } from "./../../../components/info/Info";

const Screening = () => {
  const data = [
    "ID Card Verification",
    "Verification of Employment Data",
    "Verification of Educational Documents",
    "Verification of Address",
    "Verification of Vehicle Details",
    "Verification of Driver's License",
    "Marriage Certificate Verification",
    "Divorce Certificate Verification",
    "Police Verification",
    "Newspaper Notice Checks",
    "Civil Litigation Checks",
    "Reference Checks",
    "Verification of Vendor's Business",
  ];

  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="section__container section__padding">
        <Banner text="Screening Services" img={image} />
        <div className="info__container">
          <div className="info__container-feature">
            <Info
              title="Fanuun offers reliable and thorough background screening services to individuals and firms.
The data/documents screened under this include:"
              text={data}
              isList={true}
            />
          </div>
        </div>
        <Contfan />
      </div>
      <Footer />
    </div>
  );
};

export default Screening;
