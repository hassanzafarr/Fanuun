import React from "react";
import "./opp.css";

import us from "../../assets/united-states.png";
import uk from "../../assets/united-kingdom.png";
import canada from "../../assets/canadaa.png";
import Fade from "react-reveal/Fade";

function Opp() {
  return (
    <div className="fanuun__main-container section__padding">
      <div className="fanuun__blog-heading ">
        <Fade bottom>
          <h1>Immigration Opportunities</h1>
        </Fade>
      </div>
      <Fade bottom>
        <div className="opp__container section__padding">
          <div className="card__container">
            <div className="card__img-container">
              <img src={canada} alt="canada" />
            </div>
            <div className="card__content-container">
              <h1>Canada</h1>
              <p>
                Canada has an outstanding reputation in terms of diversity and
                economin growth. Rank in the top 10 safest countries in the
                world and is doing well in surveys on quality of life
              </p>
            </div>
            <button>Read More</button>
          </div>

          <div className="card__container">
            <div className="card__img-container">
              <img src={us} alt="us" />
            </div>
            <div className="card__content-container">
              <h1>US</h1>
              <p>
                Education, employment opportunities, environmental factors &
                high standard of living are few of many reasons for which you
                may choose to immigrate to US.
              </p>
            </div>
            <button>Read More</button>
          </div>

          <div className="card__container">
            <div className="card__img-container">
              <img src={uk} alt="uk" />
            </div>
            <div className="card__content-container">
              <h1>UK</h1>
              <p>
                UK has established networks of all major factors that serve as
                major driver for people to migrate to the country. Though
                Economic market & Work opportunities are two main reasons.
              </p>
            </div>
            <button>Read More</button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Opp;
