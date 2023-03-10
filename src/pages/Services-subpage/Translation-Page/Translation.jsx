import React from "react";
import "./Translation.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Contfan from "../../../components/contact-fannuun/contfan";
import Banner from "./../../../components/banner/Banner";
import trans from "../../../assets/translation.png";
import tmis from "../../../assets/t-misc.svg";
import tprof from "../../../assets/t-professional.svg";
import ted from "../../../assets/t-educational.svg";
import tper from "../../../assets/t-personal.svg";
import { Info } from "./../../../components/info/Info";
import right from "../../../assets/rightwavy.svg";
import CTA from "./../../../components/cta/CTA";

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
    "FIRs & Police Verification",
    "Form & Articles",
    "Medical Documents",
    "Legal Documents",
    "Immigration Documents",
    "Invitation Letters",
    "Judgments",
  ];

  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="section__container ">
        <div className="banner-cont section__margin">
          <Banner text="Sealed Envelope Services" img={trans} />
        </div>
        <div className="screen__section-ability-content section__padding">
          <h1 style={{ color: "#060056" }}>
            FANUUN offers translation services to its clients for numerous
            documents required for immigration.
          </h1>
          <p>
            Our translation services are carried out by internationally
            certified/accredited translators. All translated documents are
            scrutinized and undergo quality checks, and any document that hasn???t
            been translated by an accredited translator is not accepted.
          </p>
        </div>
      </div>
      <div className="tran__section-help">
        <div className="tran__section-advance-container ">
          <div
            className="tran__container-b"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            {/* <img src={tmis} alt="wages" /> */}
            <div className="info__containerr ">
              <Info title="Personal" text={data2} isList={true} />
            </div>
          </div>
          <div
            className="tran__container-b"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            {/* <img src={tprof} alt="wages" /> */}
            <div className="info__containerr ">
              <Info title="Educational " text={data3} isList={true} />
            </div>
          </div>
          <div
            className="tran__container-b"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            {/* <img src={ted} alt="improve" /> */}
            <div className="info__containerr ">
              <Info title="Personal" text={data4} isList={true} />
            </div>
          </div>
          <div
            className="tran__container-b"
            style={{
              backgroundImage: `url(${right}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            {/* <img src={tper} alt="environment" /> */}
            <div className="info__containerr ">
              <Info title="Miscellaneous" text={data5} isList={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="screen__section-ability-content section__padding">
        <h1 style={{ color: "#060056", textAlign: "center", fontSize: "25px" }}>
          Our translators are expert linguists with international accreditation
          and provide high-quality translation work for your documents.
        </h1>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
  );
};
export default Translation;

//         <div className="info__container">
//           <div className="info__container-feature">
//             {/* Section One */}
//             <Info
//               title="Our translation services are carried out by internationally certified/accredited translators.
// All translated documents are scrutinized and undergo quality checks, and any document that
// hasn???t been translated by an accredited translator is not accepted."
//               text="The documents we translate for immigration to Canada, the US, or the UK include:"
//               isList={false}
//             />
//             {/* Section Two */}
//             <Info title="Personal" text={data2} isList={true} />
//             {/* Section Three */}
//             <Info title="Educational" text={data3} isList={true} />
//             {/* Section Four */}
//             <Info title="Professional" text={data4} isList={true} />
//             {/* Section Five */}
//             <Info title="Misc" text={data5} isList={true} />
//           </div>
//         </div>
