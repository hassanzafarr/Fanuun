import React from "react";
import "./brand.css";
import { uk, us, canada } from "./import.js";
import fanfooter from "../../assets/sidefooter.svg";
export const Brand = () => {
  return (
    <div className="immi__brand-main ">
      {/* <div className="immi__brand-text">
        <p>Trusted by hundreds talents from</p>
      </div> */}
      <div className="immi__brand">
        <div>
          <img src={uk} />
        </div>
        <div>
          <img src={us} />
        </div>
        <div>
          <img src={canada} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
