import React from "react";

import Fade from "react-reveal/Fade";
import banking from "../../assets/banking.png";
import career from "../../assets/career.png";
import acomm from "../../assets/acom.png";

import "./reloc.css";
const Reloc = () => (
  <div
    className="services__blog "
    id="blog"
    // style={{
    //   backgroundImage: `url(${image})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    // }}
  >
    <div className="services__blog-heading ">
      <Fade left>
        <h1 className="gradient__text">Post-Relocation Services</h1>
        <p>
          Although securing a visa is a significant milestone in the immigration
          journey, our job does not end there. To accomplish this, we have
          teamed up with some of the best names in the fields of education, real
          estate, and employment to assist you with post-relocation issues.
        </p>
      </Fade>
      <div className="service__reloc-content">
        <Fade left>
          <div className="services__possibility-content">
            <h1>Accomodation</h1>
            <p>
              We help immigrants in all phases of the home-buying process,
              including the initial search, tours, offers, and paperwork. <br />
              Our team of professionals will compile listings from multiple
              sites and then sort them according to your criteria. It handles
              your entire renting process so you can focus on your other
              responsibilities without interruptions.
            </p>
          </div>
          <div className="reloc__possibility-image">
            <img src={acomm} alt="dummy" />
          </div>
        </Fade>
      </div>

      <div className="service__reloc-content">
        <Fade left>
          <div className="services__possibility-content">
            <h1>Career</h1>
            <p>
              We have a database of qualified IT professionals seeking new
              employment prospects and reputable businesses recruiting actively
              in this area.
              <br />
              We're utilizing our network to bring these two communities
              together for mutual benefit.
            </p>
          </div>
          <div className="reloc__possibility-image">
            <img src={career} alt="dummy" />
          </div>
        </Fade>
      </div>

      <div className="service__reloc-content">
        <Fade left>
          <div className="services__possibility-content">
            <h1>Banking and Finance</h1>
            <p>
              We work with a business banking provider to assist startups, small
              businesses, and sole proprietors in opening a ceremony current
              account and optimizing their financial operations.
            </p>
          </div>
          <div className="reloc__possibility-image">
            <img src={banking} alt="dummy" />
          </div>
        </Fade>
      </div>
    </div>
  </div>
);

export default Reloc;
