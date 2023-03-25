import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { Box } from "../../components";
import "./slide.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import slide1 from "../../assets/slide1.svg";
import slide2 from "../../assets/slide2.svg";
import slide3 from "../../assets/slide3.svg";
import lead from "../../assets/lead.svg";

const Slide = () => (
  <div className="immi__possiblity-mainn section__padding">
    <div className="immi__possibilityy  " id="possibility">
      <div className="one-click ">
        <h1>Explore our Service with just one click</h1>
      </div>
      <div className="fan_img">
        <img src={lead} alt="lead" />
      </div>

      <Carousel
        show={3}
        slide={1}
        transition={0.5}
        rightArrow={<GrNext size={30} />}
        leftArrow={<GrPrevious size={30} />}
        swiping={true}
      >
        <Box
          imghere={slide1}
          texthead="Advisory Services"
          textcont="Advisory services offering solutions based on all relevant procedures and local regulations.
"
        />
        <Box
          imghere={slide2}
          texthead="Registration Assistance"
          textcont="Assisting with the swift and timely completion of registrations with all relevant, local authorities. "
        />
        <Box
          imghere={slide3}
          texthead="Company License Procurement"
          textcont="Fanuun will provide you with comprehensive due diligence and legal support for the procurement of your company license"
        />
        <Box
          imghere={slide1}
          texthead="Conducting Health Checks"
          textcont="We’ll conduct periodic reviews to ensure that your business fulfills all regulatory and legal requirements in Saudi Arabia"
        />
      </Carousel>
    </div>
  </div>
);
export default Slide;
