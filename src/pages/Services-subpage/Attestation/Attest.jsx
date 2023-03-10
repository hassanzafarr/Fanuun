import React from "react";
import "./Attest.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import attest from "../../../assets/attestation.png";
import Banner from "./../../../components/banner/Banner";
import { Info } from "./../../../components/info/Info";
import back from "../../../assets/backimage.svg";
import birth from "../../../assets/birth.svg";
import marriage from "../../../assets/marriage.svg";
import familyreg from "../../../assets/familyreg.svg";
import death from "../../../assets/death.svg";
import Fade from "react-reveal/Fade";
import Contfan from "../../../components/contact-fannuun/contfan";
import inter from "../../../assets/inter.svg";
import qual from "../../../assets/qual.svg";
import cred from "../../../assets/cred.svg";
import world from "../../../assets/world.svg";
import medical from "../../../assets/medical.svg";
import pharmacy from "../../../assets/pharmacy.svg";
import wavy from "../../../assets/wavyy.svg";
import line from "../../../assets/line.png";
import CTA from "./../../../components/cta/CTA";

const Attest = () => {
  const data = [
    "Secondary School Certificate & Marks Sheet from IBCC",
    "Higher Secondary School Certificate & Marks Sheet from IBCC",
    "School Result Documents/Reports (Nursery, KG to Class 8 th ) from IBCC",
    "O/A Level IBCC Equivalence Certificate",
    "School Leaving Certificates (Nursery, KG to Class 8 th ) from IBCC",
    "University Level Educational Degrees (Bachelor, Masters, PhD from HEC, Karachi, Lahore, Islamabad",
    "Technical Board Certificate & Diploma of Associate Engineers (DAE) from National Vocational andTechnical Training Commission (NAVTTC)",
  ];
  const data2 = [
    "The Ministry of Foreign Affairs of Pakistan (MOFA) – Karachi, Lahore, Islamabad for varioattest important immigration documents",
    "Ministry of Federal Education and Professional Training",
    "Islamabad Capital Territory Administration (ICTA)",
    "Varioattest Embassies",
  ];

  return (
    <div className="attest__main-container">
      <Navbar />
      <div className="section__container  ">
        <div className="banner-container section__padding ">
          <Banner text="Attestaion Services" img={attest} />
        </div>
        {/* First Section */}
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
        {/* Section 2 */}
        <div className="info__container section__margin">
          <div className="info__container-feature ">
            <Info title="Educational" text={data} isList={true} />
          </div>
        </div>
        {/* Section 3 */}
        <div className="screen__section-ability-content section__padding  ">
          <h1 style={{ color: "#060056" }}>Personal</h1>
        </div>
        <div className="attest__section-help section__padding  ">
          <div className="attest__section-logo-container">
            <div className="attest-container-a">
              <div className="attest-img-cont">
                <img src={marriage} alt="prof" />
              </div>
              <p>
                Have a battestiness that qualifies specified criteria by the
                Canadian government.
              </p>
            </div>
            <div className="attest-container-a">
              <div className="attest-img-cont">
                <img src={birth} alt="prof" />
              </div>
              <p>
                Secure a minimum level of investment from a designated venture
                capital fund, angel investor group, or battestiness incubator.
              </p>
            </div>
            <div className="attest-container-a">
              <div className="attest-img-cont">
                <img src={familyreg} alt="prof" />
              </div>
              <p>Meet the language requirements.</p>
            </div>
            <div className="attest-container-a">
              <div className="attest-img-cont">
                <img src={death} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div className="screen__section-ability-content section__padding ">
          <h1 style={{ color: "#060056" }}>
            Ministry Attestation for Important Documents
          </h1>
        </div>
        <div className="info__container section__margin">
          <div className="info__container-feature ">
            <Info
              title="FANUUN facilitates its cattesttomers with document
attestation services from varioattest ministries and state
institutions, such as:"
              text={data2}
              isList={true}
            />
          </div>
        </div>

        {/* Section 5 */}
        <div className="screen__section-ability-content section__padding">
          <h1 style={{ color: "#060056" }}>Canada Specific Services</h1>
        </div>
        <div className="info__containerr section__margin">
          <Info
            title="ECA Attestation"
            text="FANUUN offers Canadian Educational Credential Assessment (ECA) services from numeroattest agencies including:"
          />
        </div>
        <div
          className="attest__section-advance-container section__padding"
          style={{
            backgroundImage: `url(${line}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            // backgroundPositionY: "150px",
          }}
        >
          <div className="container-b  ">
            <img src={inter} alt="wages" />
            <p>International Credentials Assessment Service (ICAS)</p>
          </div>
          <div className="container-b ">
            <img src={qual} alt="wages" />
            <p>International Qualifications Assessment Service (IQAS)</p>
          </div>
          <div className="container-b ">
            <img src={cred} alt="improve" />
            <p>International Credential Evaluation Service (ICES)</p>
          </div>
          <div className="container-b ">
            <img src={world} alt="environment" />
            <p>World Education Services (WES)</p>
          </div>
          <div className="container-b item5">
            <img src={medical} alt="request" />
            <p>The Medical Council of Canada (MCC)</p>
          </div>
          <div className="container-b item6">
            <img src={pharmacy} alt="request" />
            <p>Pharmacy Examining Board of Canada (PEBC)</p>
          </div>
        </div>

        {/* Section 6 */}
        <div
          className="us__section-help section__margin "
          style={{
            backgroundImage: `url(${wavy}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            // backgroundPositionY: "150px",
          }}
        >
          <div className="us__section-intro-content ">
            <Fade bottom>
              <h1 className="gradient__text">
                Online Profiling for Canadian Immigration
              </h1>
              <p>
                Online profiling services for Canadian immigration are also
                offered at FANUUN. The services include:
              </p>
            </Fade>
            <div className="info__container-feature ">
              <p>
                • Entry Profile Creation (Express)
                <br />
                • EOI Submission in SINP (Express Entry/Occupation in Demand)
                <br />
                • Detailed Guidance on Documentation Guidance
                <br />• Regarding proper NOC (National Occupation Code)
                <br />• Selection Experience Letter Drafting as per Canadian
                Immigration Instructions
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
  );
};

export default Attest;
