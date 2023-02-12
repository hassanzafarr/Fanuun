import React from "react";
import "./itenari.css";
import { Feature } from "../../components/feature/Feature";
import Fade from "react-reveal/Fade";
export const Itinerary = () => {
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
    <div className="fanuun__main_section section__margin">
      <div className="fanuun__itinerary-content-heading ">
        <h1 className="gradient__text">Itinerary of a Customer</h1>
      </div>
      <div className="gpt3__whatgpt3 " id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
          <Feature title="Duration : 1 Week" text="Profile assessment" />
          <Feature title="Duration : 1-2 Months" text={data} isList={true} />
          <Feature title="Durations: 1-2 Months" text={data2} isList={true} />
          <Feature title="Duration: 12-15 Months" text={data3} isList={true} />
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
