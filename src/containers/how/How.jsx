import React from "react";
//Insted of this we use
//import Article from "../../components/article/Article";
import Article from "../../components/howitworks/howcom";
import image from "../../assets/line.png";
import Fade from "react-reveal/Fade";

import "./how.css";
const Blog = () => (
  <div
    className="immi__blog section__padding"
    id="blog"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="immi__blog-heading">
      <Fade left>
        <h1 className="gradient__text">How Fanuun Works</h1>
        <p>
          Our comprehensive visa consultation service can meet all of your
          immigration needs. We'll guide you through the entire moving process
          and help you decide which of the many excellent options is right for
          you.
        </p>
      </Fade>
    </div>
    <div className="immi__blog-container">
      <div className="immi__blog-container_groupB">
        <Fade bottom>
          <Article
            text="Assess your prospects"
            number="1"
            para="Our data-driven scoring methodology predicts your eligibility with 98% accuracy. Start your immigration adventure by consulting with us."
          />
        </Fade>
        <Fade bottom>
          <Article
            text="Develop a compelling request"
            number="2"
            para="We will provide guided assistance to help you shape your unique request. All of your data is collected and intelligently reviewed, with automated feedback and intelligent suggestions."
          />
        </Fade>
        <Fade bottom>
          <Article
            text="Prepare your visa application"
            number="3"
            para="The use of secure, encrypted cloud storage, pre-filled forms, and a final security check with our go-to attorneys provide a smooth and risk-free submission process."
          />
        </Fade>
        <Fade bottom>
          <Article
            text="Migrate to your desired destination"
            number="4"
            para="Even after the move is complete, we'll be here to help. Utilize the many post-visa adaptation services provided by our affiliates. Apartment hunting? Making your first bank deposit? We'll be there to help."
          />
        </Fade>
      </div>
    </div>
  </div>
);

export default Blog;
