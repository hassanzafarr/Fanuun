import React from "react";
import "./brand.css";
import { uk, homeland, imi } from "./import.js";

export const Brand = () => {
  return (
    <div className="immi__brand-main ">
      {/* <div className="immi__brand-text">
        <p>Trusted by hundreds talents from</p>
      </div> */}
      <div className="immi__brand ">
        <div>
          <img src={uk} />
        </div>
        <div>
          <img src={homeland} />
        </div>
        <div>
          <img src={imi} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
