import React from "react";
//Insted of this we use
//import Article from "../../components/article/Article";
import Article from "../../components/howitworks/howcom";
import image from "../../assets/line.png";
import Fade from "react-reveal/Fade";
import ime1 from "../../assets/s1.png";
import ime2 from "../../assets/s2.png";
import ime3 from "../../assets/s3.png";
import ime4 from "../../assets/s4.png";
import "./how.css";

const Blog = () => (
  <div
    className="immi__blog"
    id="blog"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="immi__blog-heading">
      <Fade left>
        <h1 className="gradient__text">How FANUUN Works</h1>
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
        <div className="mainContainerArticle">
          <Fade bottom>
            <Article
              bimage={ime1}
              text="Assess your prospects"
              number="1"
              para="Our data-driven scoring methodology predicts your eligibility with 98% accuracy. Start your immigration adventure by consulting with us."
            />
          </Fade>
        </div>
        <div className="mainContainerArticle">
          <Fade bottom>
            <Article
              bimage={ime2}
              text="Develop a compelling request"
              number="2"
              para="We will provide guided assistance to help you shape your unique request. All of your data is collected and intelligently reviewed, with automated feedback and intelligent suggestions."
            />
          </Fade>
        </div>
        <div className="mainContainerArticle">
          <Fade bottom>
            <Article
              bimage={ime3}
              text="Prepare your visa application"
              number="3"
              para="The use of secure, encrypted cloud storage, pre-filled forms, and a final security check with our go-to attorneys provide a smooth and risk-free submission process."
            />
          </Fade>
        </div>
        <div className="mainContainerArticle">
          <Fade bottom>
            <Article
              bimage={ime4}
              text="Migrate to your desired destination"
              number="4"
              para="Even after the move is complete, we'll be here to help. Utilize the many post-visa adaptation services provided by our affiliates. Apartment hunting? Making your first bank deposit? We'll be there to help."
            />
          </Fade>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
