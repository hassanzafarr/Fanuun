import React from "react";
import "./Screen.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Banner from "./../../../components/banner/Banner";
import image from "../../../assets/screening.png";

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
      <div className="section__container section__padding">
        <Banner text="Screening Services" img={image} />
      </div>
      <Fade left>
        <div className="screen__section-ability-content section__padding">
          <h1 style={{ color: "#060056" }}>
            FANUUN offers reliable and thorough background screening services to
            individuals and firms.
          </h1>
          <p>The data/documents screened under this include:</p>
        </div>
      </Fade>
      <div
        className="screen__section-help section__padding "
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
              <p>
                Have a business that qualifies specified criteria by the
                Canadian government.
              </p>
            </div>
            <div className="screen-container-a">
              <div className="screen-img-cont">
                <img src={address} alt="prof" />
              </div>
              <p>
                Secure a minimum level of investment from a designated venture
                capital fund, angel investor group, or business incubator.
              </p>
            </div>
            <div className="screen-container-a">
              <div className="screen-img-cont">
                <img src={ref} alt="prof" />
              </div>
              <p>Meet the language requirements.</p>
            </div>
            <div className="screen-container-a">
              <div className="screen-img-cont">
                <img src={vendor} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
            <div className="screen-container-a">
              <div className="screen-img-cont">
                <img src={verfica} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
            <div className="screen-container-a">
              <div className="screen-img-cont">
                <img src={police} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
            <div className="screen-container-a">
              <div className="screen-img-cont">
                <img src={news} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
            <div className="screen-container-a">
              <div className="screen-img-cont">
                <img src={sid} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
            <div className="screen-container-a">
              <div className="screen-img-cont">
                <img src={marriage} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
            <div className="screen-container-a">
              <div className="screen-img-cont">
                <img src={divorce} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
            <div className="screen-container-a item11">
              <div className="screen-img-cont">
                <img src={driver} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
            <div className="screen-container-a item12">
              <div className="screen-img-cont">
                <img src={civil} alt="prof" />
              </div>
              <p>
                Bring along enough money to settle yourself and your dependents.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
  );
};

export default Screening;
