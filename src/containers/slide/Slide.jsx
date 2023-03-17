import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

import "./slide.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const Slide = () => (
  <div className="immi__possiblity-main section__padding">
    <div className="immi__possibility " id="possibility">
      <Carousel
        show={3.5}
        slide={2}
        transition={0.5}
        rightArrow={<GrNext />}
        leftArrow={<GrPrevious />}
      >
        <div className="box">hello1</div>

        <div className="box">hello2</div>
        <div className="box">hello3</div>
        <div className="box">hello4</div>
        <div className="box">hello5</div>
      </Carousel>
    </div>
  </div>
);
export default Slide;
