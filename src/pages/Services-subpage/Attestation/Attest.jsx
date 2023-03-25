import React from "react";
import "./Attest.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import attest from "../../../assets/attestation.png";
import edugirl from "../../../assets/edugirl.svg";
import write from "../../../assets/write.svg";
import Banner from "./../../../components/banner/Banner";
import { Info } from "./../../../components/info/Info";

import birth from "../../../assets/birth.svg";
import marriage from "../../../assets/marriage.svg";
import familyreg from "../../../assets/familyreg.svg";
import death from "../../../assets/death.svg";
import Fade from "react-reveal/Fade";

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
    "Various Embassies",
  ];

  return (
    <div className="attest__main-container">
      <Navbar />
      <div className="main__container">
        <div className="section__padding1">
          <div className="section__container">
            <div className="banner-container">
              <Banner text="Attestaion " textred="Services" img={attest} />
            </div>
            {/* First Section */}
            <Fade bottom>
              <div className="screen__section-ability-content sec__padding">
                <h1 style={{ color: "#060056" }}>
                  FANUUN provides fast and reliable attestation services to its
                  clients from numeroattest agencies/institutions as per the
                  requirements of the Canadian, attest, and British Embassies.
                </h1>
                <p>
                  The following documents are covered in the attestation
                  services:
                </p>
              </div>
            </Fade>
            {/* Section 2 */}
            <div className="info__container sec__padding ">
              <Fade right>
                <div className="info__container-feature ">
                  <Info title="Educational" text={data} isList={true} />
                </div>
              </Fade>
              <Fade right>
                <div className="img-cont2">
                  <img src={edugirl} alt="document" />
                </div>
              </Fade>
            </div>
            {/* Section 3 */}
            <Fade left>
              <div className="screen__section-ability-content   ">
                <h1 style={{ color: "#060056" }}>Personal</h1>
              </div>
            </Fade>
            <div className="attest__section-help  sec__padding ">
              <Fade bottom>
                <div className="attest__section-logo-container">
                  <div className="attest-container-a">
                    <div className="attest-img-cont">
                      <img src={marriage} alt="prof" />
                    </div>
                    <p>
                      Marriage & Un-Marriage Registration Certificate (NADRA)
                    </p>
                  </div>
                  <div className="attest-container-a">
                    <div className="attest-img-cont">
                      <img src={birth} alt="prof" />
                    </div>
                    <p>Birth Certificate (NADRA)</p>
                  </div>
                  <div className="attest-container-a">
                    <div className="attest-img-cont">
                      <img src={familyreg} alt="prof" />
                    </div>
                    <p>Family Registration Certificate (FRC).</p>
                  </div>
                  <div className="attest-container-a">
                    <div className="attest-img-cont">
                      <img src={death} alt="prof" />
                    </div>
                    <p>Death Certificate (NADRA)</p>
                  </div>
                </div>
              </Fade>
            </div>
            {/* Section 4 */}
            <div className="screen__section-ability-content sec__padding ">
              <Fade left>
                <h1 style={{ color: "#060056" }}>
                  Ministry Attestation for Important Documents
                </h1>
              </Fade>
            </div>
            <div className="info__container sec__padding ">
              <Fade bottom>
                <div className="info__container-feature ">
                  <Info
                    title="FANUUN facilitates its cattesttomers with document
attestation services from varioattest ministries and state
institutions, such as:"
                    text={data2}
                    isList={true}
                  />
                </div>
              </Fade>
              <Fade right>
                <div className="img-cont2">
                  <img src={write} alt="document" />
                </div>
              </Fade>
            </div>

            {/* Section 5 */}
            <Fade left>
              <div className="screen__section-ability-content ">
                <h1 style={{ color: "#060056" }}>Canada Specific Services</h1>
              </div>
            </Fade>
            <Fade left>
              <div className="info__containerr ">
                <Info
                  title="ECA Attestation"
                  text="FANUUN offers Canadian Educational Credential Assessment (ECA) services from numeroattest agencies including:"
                />
              </div>
            </Fade>
            <div
              className="attest__section-advance-container sec__padding"
              style={{
                backgroundImage: `url(${line}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                // backgroundPositionY: "150px",
              }}
            >
              <Fade bottom>
                <div className="container-b  ">
                  <img src={inter} alt="wages" />
                  <p>International Credentials Assessment Service (ICAS)</p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="container-b ">
                  <img src={qual} alt="wages" />
                  <p>International Qualifications Assessment Service (IQAS)</p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="container-b ">
                  <img src={cred} alt="improve" />
                  <p>International Credential Evaluation Service (ICES)</p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="container-b ">
                  <img src={world} alt="environment" />
                  <p>World Education Services (WES)</p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="container-b item5">
                  <img src={medical} alt="request" />
                  <p>The Medical Council of Canada (MCC)</p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="container-b item6">
                  <img src={pharmacy} alt="request" />
                  <p>Pharmacy Examining Board of Canada (PEBC)</p>
                </div>
              </Fade>
            </div>

            {/* Section 6 */}
            <div
              className="attest2__section-help  sec__padding "
              style={{
                backgroundImage: `url(${wavy}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                // backgroundPositionY: "150px",
              }}
            >
              <div className="us__section-intro-content  ">
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
                    • EOI Submission in SINP (Express Entry/Occupation in
                    Demand)
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
        </div>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
  );
};

export default Attest;
