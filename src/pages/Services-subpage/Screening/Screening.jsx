import React from "react";
import "./Screen.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Banner from "./../../../components/banner/Banner";
import image from "../../../assets/screening2.svg";

import vehicle from "../../../assets/s-verify-vehicle.svg";
import address from "../../../assets/s-verify-address.svg";
import ref from "../../../assets/s-ref.svg";
import vendor from "../../../assets/s-vendor.svg";
import verfica from "../../../assets/s-verification.svg";
import police from "../../../assets/s-police.svg";
import news from "../../../assets/s-news.svg";
import sid from "../../../assets/s-id.svg";
import marriage from "../../../assets/s-marriage.svg";
import divorce from "../../../assets/s-divorce.svg";
import driver from "../../../assets/s-driver.svg";
import civil from "../../../assets/s-civl.svg";
import CTA from "./../../../components/cta/CTA";
import Fade from "react-reveal/Fade";

const Screening = () => {
  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="main__container">
        <div className="section__padding1">
          <div className="section__container ">
            <Banner text="Screening " textred="Services" img={image} />
          </div>
          <Fade left>
            <div className="screen__section-ability-content sec__padding ">
              <h1 style={{ color: "#060056" }}>
                FANUUN offers reliable and thorough background screening
                services to individuals and firms.
              </h1>
              <p>The data/documents screened under this include:</p>
            </div>
          </Fade>
          <div
            className="screen__section-help  "
            // style={{
            //   backgroundImage: `url(${})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            // }}
          >
            <Fade up>
              <div className="screen__section-logo-container">
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={vehicle} alt="prof" />
                  </div>
                  <p>Verification of Vehicle Details</p>
                </div>
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={address} alt="prof" />
                  </div>
                  <p>Verification of Address</p>
                </div>
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={ref} alt="prof" />
                  </div>
                  <p>Reference Checks</p>
                </div>
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={vendor} alt="prof" />
                  </div>
                  <p>Verification of Vendor's Business</p>
                </div>
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={verfica} alt="prof" />
                  </div>
                  <p>Verification of Educational Documents</p>
                </div>
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={police} alt="prof" />
                  </div>
                  <p>Police Verification</p>
                </div>
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={news} alt="prof" />
                  </div>
                  <p>Newspaper Notice Checks</p>
                </div>
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={sid} alt="prof" />
                  </div>
                  <p>Marriage Certificate Verification</p>
                </div>
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={marriage} alt="prof" />
                  </div>
                  <p>
                    Bring along enough money to settle yourself and your
                    dependents.
                  </p>
                </div>
                <div className="screen-container-a">
                  <div className="screen-img-cont">
                    <img src={divorce} alt="prof" />
                  </div>
                  <p>Divorce Certificate Verification</p>
                </div>

                <div className="screen-container-a ">
                  <div className="screen-img-cont">
                    <img src={driver} alt="prof" />
                  </div>
                  <p>Verification of Driver's License</p>
                </div>
                <div className="screen-container-a ">
                  <div className="screen-img-cont">
                    <img src={civil} alt="prof" />
                  </div>
                  <p>Civil Litigation Checks</p>
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

export default Screening;
