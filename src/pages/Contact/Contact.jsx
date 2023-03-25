import React, { useState, useRef } from "react";
import axios from "axios";
import "./contact.css";
import shape5 from "../../assets/Group 46.png";
import line from "../../assets/line.png";
import { Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    return axios
      .get("http://172.18.3.198:3005/api/fetch/cities-list")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
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
    <div className="contact__main-container">
      <Navbar />
      <div
        className="main__container"
        style={{
          backgroundImage: `url(${line})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="section__padding1">
          <div className="contact__possiblity-main ">
            <div className="contact__possibility  " id="possibility">
              <div className="contact__possibility-content">
                <Fade bottom>
                  <h1 className="gradient__text">
                    <span class="future"> Reach </span> Out to{" "}
                    <span class="future"> Us</span>
                  </h1>
                </Fade>
              </div>
              <div className="contact__possibility-image">
                <Fade bottom>
                  <img src={shape5} alt="possibility" />
                </Fade>
              </div>
            </div>

            <div className="contact__possibilitytop" id="possibility">
              <div className="contact__left-text">
                <Fade left>
                  <h1>
                    Want to schedule an appointment? Have any question or
                    queries? We're always here to help!
                  </h1>
                  <p>
                    Please reach us by email
                    <span class="future"> info@fanuun.com</span>
                  </p>
                </Fade>
              </div>
              <div className="contact__right-text">
                <Fade right>
                  <div class="contact__section-form">
                    <input
                      type="text"
                      class="form__input-contact"
                      placeholder="Name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    <input
                      type="text"
                      class="form__input-contact"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                      type="text"
                      class="form__input-contact"
                      placeholder="Mobile No"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    <textarea
                      type="text"
                      class="form__input-contact"
                      placeholder="Message"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
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
        </div>
      </div>
      {/* <Brand /> */}

      <Footer />
    </div>
  );
};

export default Contact;
