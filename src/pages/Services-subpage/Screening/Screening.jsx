import React from "react";
import "./Screen.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Banner from "./../../../components/banner/Banner";
import image from "../../../assets/screening.png";

const Screening = () => {
  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="section__container section__padding">
        <Banner text="Screening Services" img={image} />
      </div>
      <Footer />
    </div>
  );
};

export default Screening;
