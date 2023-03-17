import React from "react";
import "./brand.css";
import { uk, us, canada } from "./import.js";

export const Brand = () => {
  return (
    <div className="immi__brand-main ">
      {/* <div className="immi__brand-text">
        <p>Trusted by hundreds talents from</p>
      </div> */}
      <div className="immi__brand">
        <div>
          <img src={uk} alt="uk" />
        </div>
        <div>
          <img src={us} alt="us" />
        </div>
        <div>
          <img src={canada} alt="canada" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
