import React from "react";
import "./Sealed.css";
import { Navbar } from "../../../components";
import { Footer } from "../../../containers";
import Banner from "./../../../components/banner/Banner";
import image from "../../../assets/sealed.png";
import Contfan from "../../../components/contact-fannuun/contfan";
import { Info } from "./../../../components/info/Info";

const Sealed = () => {
  const data = [
    "HEC Attestation",
    "Attestation from Secondary (Matric) and Intermediate Boards",
    "Attestation from Technical Boards",
    "Verification from University Sealed Envelope as needed for the ECA",
  ];

  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="section__container section__padding">
        <Banner text="Sealed Envelope Services" img={image} />
        <div className="info__container">
          <div className="info__container-feature">
            <Info
              title="Fanuun offers fast and reliable attestation and sealed envelope services for its clients.
The services are offered for numerous agencies such as World Education Services (WES)
and the Canadian Educational Credential Assessment (ECA) agencies such as IQAS, CES,
ICES, CES, MCC &amp; PEBC."
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

export default Sealed;
