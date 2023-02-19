import React from "react";
import Fade from "react-reveal/Fade";
import "./canada.css";
import shape5 from "../../assets/Group 49.png";
import line from "../../assets/line.png";
import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";

const Canada = () => (
  <div className="canada__main-container">
    <Navbar />
    <div className="canada__possiblity-main section__padding">
      <div className="canada__possibility " id="possibility">
        <div className="canada__possibility-content">
          <Fade left>
            <h1 className="gradient__text">
              <span className="future"> Canada </span> Start-Up{" "}
              <span className="future"> Visas</span>
            </h1>
          </Fade>
        </div>
        <div className="canada__possibility-image">
          <Fade bottom>
            <img src={shape5} alt="possibility" />
          </Fade>
        </div>
      </div>

      <div
        className="canada__section-ability"
        style={{
          backgroundImage: `url(${line})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="canada__section-ability-content">
          <Fade bottom>
            <h1 style={{ color: "#060056" }}>Canada Start-Up Visa</h1>
            <p>
              The Canadian Start-Up Visa is designed to attract foreign
              entrepreneurs with innovative business ideas. The program is
              focused on providing support to entrepreneurs and innovative
              startups with the potential for job creation and competitiveness
              on a global scale.
            </p>
          </Fade>
        </div>

        <div className="canada__section-ability-content">
          <Fade bottom>
            <h1 style={{ color: "#060056" }}>
              Eligibility for Canada Start-Up Visa
            </h1>
            <p>
              Applying entrepreneurs must <br />• Have a business that qualifies
              specified criteria by the Canadian government.
              <br />
              • Secure a minimum level of investment from a designated venture
              capital fund, angel investor group, or business incubator
              <br />
              • Meet the language requirements.
              <br />• Bring along enough money to settle yourself and your
              dependents.
            </p>
          </Fade>
        </div>

        <div className="canada__section-ability-content">
          <Fade bottom>
            <h1 style={{ color: "#060056" }}>How Can Fanuun Help?</h1>
            <p>
              Wondering whether you’re eligible for the Canada Start-Up Visa?
              Reach out to Fanuun today.
            </p>
            <p>
              We offer the best consultancy services to our clients for Canada
              immigration.
            </p>
          </Fade>
        </div>

        <div className="canada__section-ability-content">
          <Fade bottom>
            <h1 style={{ color: "#060056" }}>Schedule an Appointment</h1>
            <p>
              Schedule an appointment with Fanuun today for the best guidance
              and consultancy services for Canada immigration.
            </p>
          </Fade>
        </div>
      </div>
    </div>
    {/* <Brand /> */}

    <Footer />
  </div>
);

export default Canada;
