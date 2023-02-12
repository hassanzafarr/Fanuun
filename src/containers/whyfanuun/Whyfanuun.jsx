import React from "react";
import "./whyfanuun.css";
import Fade from "react-reveal/Fade";
import { Feature } from "../../components/feature/Feature";
export const WhyFanuun = () => {
  const data = [
    "Finding the right DO(Designated Organization)",
    "Finalizing Business Plan withDO",
    "Presentation/ Meeting with DO",
    "RA with DO",
    "Obtaining LOS (Letter of Support)",
  ];
  const data2 = [
    "RA (Retainer Agreement) for PR ",
    "Application Package and requirements ",
    "Documents and Assessments",
    "RA with DO",
    "Filing for PR application",
  ];
  const data3 = ["PR Approval"];
  return (
    <div className="immi__main_section section__margin">
      <div className="immi__possibility-content-heading ">
        <Fade right>
          <h1 className="gradient__text">
            Why do people choose <br /> Fanuun for immigration?
          </h1>
        </Fade>
      </div>
      <div className="gpt3__whatgpt3 " id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
          <Fade bottom>
            <Feature title="Duration : 1 Week" text="Profile assessment" />
            <Feature title="Duration : 1-2 Months" text={data} isList={true} />
            <Feature title="Durations: 1-2 Months" text={data2} isList={true} />
            <Feature
              title="Duration: 12-15 Months"
              text={data3}
              isList={true}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default WhyFanuun;
