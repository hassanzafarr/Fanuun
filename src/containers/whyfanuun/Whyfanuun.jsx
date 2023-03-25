import React from "react";
import "./whyfanuun.css";
import Fade from "react-reveal/Fade";
import { HInfo } from "../../components/homeinfo/homeinfo";
import wavy from "../../assets/wavyy.svg";

export const WhyFanuun = () => {
  const data = ["Profile Assessment"];
  const data2 = [
    "Finding the right DO (Designated Organization)",
    "Finalizing Business Plan withDO",
    "Presenation/ Meeting with DO",
    "RA with DO",
    "Obtaining LOS (Letter of Support)",
  ];

  const data3 = [
    "RA (Retainer Agreement) for PR",
    "Application Package and requirements",
    "Documents and Assessment",
    "RA with DO",
    "Filing for PR application",
  ];

  const data4 = ["RA (Retainer Agreement) for PR"];
  return (
    <div className="fanuun__possiblity-main ">
      <div className="fanuun__possibility " id="possibility">
        <div className="fanuun__possibility-content">
          <Fade left>
            <h1 className="gradient__text">
              Itinerary of a <span className="future"> Customer </span>
            </h1>
          </Fade>
        </div>
        <div className="mainContainer-right">
          <div
            className="fanuun__right-cont"
            style={{
              backgroundImage: `url(${wavy})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <Fade right>
              <HInfo title="Duration: 1 Week " text={data} isList={true} />
            </Fade>
          </div>
          <div
            className="fanuun__right-cont"
            style={{
              backgroundImage: `url(${wavy})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <Fade right>
              <HInfo title="Duration: 1-2 Months " text={data2} isList={true} />
            </Fade>
          </div>
          <div
            className="fanuun__right-cont"
            style={{
              backgroundImage: `url(${wavy}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <Fade right>
              <HInfo title="Duration: 1 Week " text={data3} isList={true} />
            </Fade>
          </div>
          <div
            className="fanuun__right-cont"
            style={{
              backgroundImage: `url(${wavy})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <Fade right>
              <HInfo
                title="Duration: 12-16 Months "
                text={data4}
                isList={true}
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyFanuun;
