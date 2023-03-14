import React, { useState, useRef } from "react";
import axios from "axios";
import { Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";
import hanshake from "../../assets/hanshake.jpg";
import image from "../../assets/line.png";
import "./formation.css";
import inter from "../../assets/inadivisor.svg";
import incom from "../../assets/incom.svg";
import inreg from "../../assets/inreg.svg";
import incond from "../../assets/incond.svg";
import Swal from "sweetalert2";
import CTA from "../../components/cta/CTA";
import withReactContent from "sweetalert2-react-content";
import ReCAPTCHA from "react-google-recaptcha";
function Formation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const MySwal = withReactContent(Swal);
  const captchaRef = useRef(null);

  function clearConsole() {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  }
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const onSubmit = async (e) => {
    const token = captchaRef.current.getValue();
    console.log(token);

    if (token) {
      var data = JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
      });
      var config = {
        method: "post",
        url: "http://localhost:5000/api/user/addquery",

        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));

          return MySwal.fire({
            // title: <p style={{ fontFamily: "monospace" }}>Email Sent</p>,
            title: <h2 className="swal-css">Email Sent</h2>,
            icon: "success",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      clearConsole();
      captchaRef.current.reset();
    } else {
      return MySwal.fire({
        title: <h2 className="swal-css">Verify that you're not a robot</h2>,
        icon: "success",
      });
    }
  };

  return (
    <div className="formation-main">
      <Navbar />
      <div className="form__possibilitytop section__margin" id="possibility">
        <div className="form__left-text">
          <Fade left>
            <h1>
              <span class="future">Designing</span> Strategies <br />
              For Addressing <br /> <span class="future">Immigration </span>
              Problems
            </h1>
          </Fade>
        </div>
        <div
          className="form__right-text"
          style={{
            backgroundImage: `url(${hanshake})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div
        className="text-container"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="form-content section__padding">
          <Fade left>
            <p>
              FANNUN’s team of experienced consultants provides comprehensive
              guidance and support in company incorporation in Saudi Arabia.
              Saudi Arabia has emerged in recent years as one of the leading
              destinations for investors and for setting up businesses. However,
              company incorporation is a technical and detailed endeavor, with
              numerous intricacies. This is where FANNUN can facilitate you, as
              our team of experts is well-versed in the essentials of the entire
              process, such as regulatory requirements, licensing applications,
              registration formalities, etc. Our extensive experience, in-depth
              knowledge, and professional team will ensure the successful
              incorporation of your business in Saudi Arabia!
            </p>
          </Fade>
        </div>
      </div>

      <div className="form-content section__padding">
        <Fade left>
          <h1>How FANNUN Can Help You</h1>
          <p>Our comprehensive Company Formation Services include:</p>
        </Fade>
      </div>

      {/* Section 4  */}
      <div className="form__section-help section__padding  ">
        <Fade bottom>
          <div className="form__section-logo-container">
            <div className="form-container-a">
              <div className="sub-cont">
                <h1>Advisory Services</h1>

                <div className="form-img-cont">
                  <img src={inter} alt="prof" />
                </div>
              </div>
              <p>
                We provide in-depth guidance on matters such as local
                regulations, incorporation procedures, regulatory approvals,
                etc. Our team shall provide you with holistic guidance, and
                offer solutions that are based according to the regulations and
                requirements of the country.
              </p>
            </div>
            <div className="form-container-a">
              <div className="sub-cont">
                <h1>Advisory Services</h1>

                <div className="form-img-cont">
                  <img src={inreg} alt="prof" />
                </div>
              </div>
              <p>
                FANNUN will help you in registering with all relevant government
                bodies (Tax Authority, Capital Market Authority, etc.) during
                your incorporation process. Our swift services will ensure your
                registration and license procurement procedure is carried out
                timely.
              </p>
            </div>

            <div className="form-container-a">
              <div className="sub-cont">
                <h1>Advisory Services</h1>

                <div className="form-img-cont">
                  <img src={incom} alt="prof" />
                </div>
              </div>
              <p>
                FANNUN provides the best and most comprehensive due diligence
                and legal assistance in helping you obtain an investment/company
                license. Our experienced team shall help you draft an air-tight
                application that fulfills all required criteria and optimizes
                your chances of success.
              </p>
            </div>
            <div className="form-container-a">
              <div className="sub-cont">
                <h1>Advisory Services</h1>

                <div className="form-img-cont">
                  <img src={incond} alt="prof" />
                </div>
              </div>
              <p>
                We conduct entity health checks to make sure your business’s
                legal and fiscal standing is adequate. Our periodic reviews and
                up-to-date guidance ensure that your business fulfills all
                regulatory and legal requirements.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      {/* Section fcontact */}
      <div className="fcontact-container">
        <div
          className="fcontact__possibilitytop section__padding"
          id="possibility"
        >
          <div className="fcontact__left-text">
            <Fade left>
              <h1>
                Schedule a consultation with FANNUN today to learn more about
                our services and how we can help you start your business in
                Saudi Arabia!
              </h1>
            </Fade>
          </div>
          <div className="fcontact__right-text">
            <Fade right>
              <div class="fcontact__section-form">
                <input
                  type="text"
                  class="form__input-fcontact"
                  placeholder="First Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  type="text"
                  class="form__input-fcontact"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>

                <textarea
                  type="text"
                  class="form__input-fcontact"
                  placeholder="Message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div class="fcontact__section-form">
                <input
                  type="text"
                  class="form__input-fcontact"
                  placeholder="Last Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  type="text"
                  class="form__input-fcontact"
                  placeholder="Mobile No"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
                <input
                  type="text"
                  class="form__input-fcontact"
                  placeholder="Services interested in"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br />
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  onChange={onChange}
                  ref={captchaRef}
                />
                <button type="button" onClick={onSubmit}>
                  Submit
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
  );
}

export default Formation;
