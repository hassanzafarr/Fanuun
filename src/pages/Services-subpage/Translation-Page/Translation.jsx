import React from "react";
import "./Translation.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Contfan from "../../../components/contact-fannuun/contfan";
import Banner from "./../../../components/banner/Banner";
import trans from "../../../assets/translation.png";
import { Info } from "./../../../components/info/Info";

const Translation = () => {
  const data2 = [
    "ID Card",
    "Birth &amp; Death Certificate",
    "Marriage Registration Certificate/Nikkahnama",
    "Divorce Certificate",
    "Passport",
    "Character Certificate",
    "Adoption Papers",
  ];

  const data3 = ["Degree", "Transcripts", "Diploma/Certifications"];

  const data4 = [
    "Resume/C.V.",
    "Professional Reference Letters",
    "Business Documents",
    "Contract Documents",
  ];

  const data5 = [
    "FIRs &amp; Police Verification",
    "Form &amp; Articles",
    "Medical Documents",
    "Legal Documents",
    "Immigration Documents",
    "Invitation Letters",
    "Judgments",
  ];

  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="section__container section__padding">
        <Banner text="Sealed Envelope Services" img={trans} />
        <div className="info__container">
          <div className="info__container-feature">
            {/* Section One */}
            <Info
              title="Our translation services are carried out by internationally certified/accredited translators.
All translated documents are scrutinized and undergo quality checks, and any document that
hasn’t been translated by an accredited translator is not accepted."
              text="The documents we translate for immigration to Canada, the US, or the UK include:"
              isList={false}
            />
            {/* Section Two */}
            <Info title="Personal" text={data2} isList={true} />
            {/* Section Three */}
            <Info title="Educational" text={data3} isList={true} />
            {/* Section Four */}
            <Info title="Professional" text={data4} isList={true} />
            {/* Section Five */}
            <Info title="Misc" text={data5} isList={true} />
          </div>
        </div>
        <Contfan />
      </div>
      <Footer />
    </div>
  );
};
export default Translation;
