import React from "react";

import image from "../../assets/line.png";
import Fade from "react-reveal/Fade";

import "./reloc.css";
const Reloc = () => (
  <div
    className="services__blog section__padding"
    id="blog"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="services__blog-heading ">
      <Fade left>
        <h1 className="gradient__text">Post-Relocation Services</h1>
        <p>
          Although securing a visa is a major milestone in the immigration
          journey, our job does not end there. To accomplish this, we have
          teamed up with some of the best names in the fields of education, real
          estate, and employment 
        </p>
      </Fade>
      <div className="service__reloc-content">
        <Fade left>
          <h1>Accomodation</h1>
          <p>
            We help immigrants in all phases of the home buying process,
            including the initial search, tours, offers, and paperwork. <br />
            Our team of professionals will compile listings from multiple sites
            and then sort them according to your criteria. It handles the entire
            renting process on your behalf so you can focus on your other
            responsibilities without interruptions.
          </p>

          <h2>Career</h2>
          <p>
            We have built up a database of qualified IT professionals seeking
            new employment prospects, as well as reputable businesses actively
            recruiting in this area.
            <br />
            We're currently utilizing our network to bring these two communities
            together for mutual benefit.
          </p>

          <h2>Banking and Finance</h2>
          <p>
            We have worked with a business banking provider to assist startups,
            small businesses, and sole proprietors in opening a ceremony current
            account and optimizing their financial operation.
          </p>
        </Fade>
      </div>
    </div>
  </div>
);

export default Reloc;
