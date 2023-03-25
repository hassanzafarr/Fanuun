import React from "react";

import "./portugal.css";
import shape5 from "../../assets/portugal.png";
import back from "../../assets/backimage.svg";
import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";
import freedom from "../../assets/generalIcons/1.svg";
import global from "../../assets/generalIcons/2.svg";
import home from "../../assets/generalIcons/3.svg";
import fast from "../../assets/generalIcons/4.svg";
import lower from "../../assets/generalIcons/5.svg";
import seeker from "../../assets/seeker.svg";
import Registration from "../../assets/generalIcons/6.svg";
import Documents from "../../assets/generalIcons/7.svg";
import Consulate from "../../assets/generalIcons/8.svg";
import Submission from "../../assets/generalIcons/9.svg";
import VisaIssuance from "../../assets/generalIcons/10.svg";
import right from "../../assets/rightwavy.svg";
import { CTA } from "./../../components";

const PORTUGAL = () => (
  <div className="portugal__main-container">
    <Navbar />
    <div className="main__container">
      <div className="uk__possiblity-main  section__padding1 ">
        <div className="portugal__possiblity-main  ">
          <div className="portugal__possibility" id="possibility">
            <div className="portugal__possibility-content">
              <Fade top>
                <h1 className="gradient__text">
                  <span className="future"> Portugal  </span> Job Seeker{" "}
                  <span className="future"> Visa</span>
                </h1>
              </Fade>
            </div>
            <div className="portugal__possibility-image">
              <Fade bottom>
                <img src={shape5} alt="possibility" />
              </Fade>
            </div>
          </div>

          <div className="portugal__section-ability  ">
            <div className="portugal__section-ability-content">
              <Fade left>
                <p>The Job Seeker Visa is a great immigration option for those seeking employment and residence opportunities in Portugal. The visa lets you stay in Portugal for four months, during which you may search for employment opportunities, eventually leading to permanent residence.</p>
                <h1>
                  General Details
                </h1>
              </Fade>
            </div>
          </div>

          <div className="portugal__section-help"
            style={{
              backgroundImage: `url(${back})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {" "}
            <Fade bottom>
              <div className="portugal__section-logo-container">
                <div className="portugal-container-a">
                  <div className="portugal-img-cont-portugal">
                    <img src={home} alt="prof" />
                  </div>
                  <p>The duration of the visa is 120 days.</p>
                </div>
                <div className="portugal-container-a">
                  <div className="portugal-img-cont1Portugal">
                    <img src={freedom} alt="prof" className="" />
                  </div>
                  <p>The visa can be extended to further 60 days if enrolled with IEFP.</p>
                </div>
                <div className="portugal-container-a">
                  <div className="portugal-img-cont1Portugal">
                    <img src={fast} alt="prof" />
                  </div>
                  <p>If employment is obtained in 120 days, the applicant may apply for permanent residence.</p>
                </div>
                <div className="portugal-container-a">
                  <div className="portugal-img-cont1Portugal">
                    <img src={lower} alt="prof" />
                  </div>
                  <p>The visa only permits entry into the country ONCE.</p>
                </div>
                <div className="portugal-container-a">
                  <div className="portugal-img-cont2Portugal">
                    <img src={global} alt="prof" />
                  </div>
                  <p>Family may be invited if employment is obtained as well as a residence permit.</p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="jobSeekerDivPortugal">
            <div className="jobSeekerSubDiv">
              <div className="jobSeekerLeftSectionPortugal">
                <h1 className="jobHeadingPortugal">
                  Eligibility for Job Seeker Visa
                </h1>
                <ul className="paraSeekerDiv">
                  <li className="paraSeeker"> Both males & females eligible.</li>
                  <li className="paraSeeker"> All age groups eligible.</li>
                  <li className="paraSeeker"> Both skilled and non-skilled workers eligible.</li>
                  <li className="paraSeeker"> Doesn’t require previous travel history.</li>
                  <li className="paraSeeker"> Mustn’t have entry restriction to the EU.</li>
                  <li className="paraSeeker"> Must have adequate financial means to support themselves.</li>
                  <li className="paraSeeker"> Must have ticket back to home country.</li>
                </ul>
              </div>
              <div className="jobSeekerRightSectionPortugal">
                <img src={seeker} className='seekerImgPortugal' />
              </div>
            </div>
          </div>

          <div className="generalProcessDivPortugal">
            <div className="headindDivGenerl">
              <h1 className="jobHeadingPortugal">
                General Process
              </h1>
            </div>
            <div className="generalProcessSubDivPortugal">
              <div className="leftSectionGeneralPortugal">
                <h3 className="subHeadingGeneral">Online Registration with IEFP:</h3>
                <p className="subParaGeneralPortugal">The applicant must fill out an online application form with the IEFP on their official website, indicating an expression of interest declaration. The applicant shall provide details such as experience and qualifications etc.</p>
              </div>
              <div className="rightSectionGeneralPortugal">
                <img src={Registration} className='rightSectionImgPortugal' />
              </div>
            </div>
            <div className="generalProcessSubDivPortugal">
              <div className="leftSectionGeneralPortugal">
                <h3 className="subHeadingGeneral">Preparation of Documents:</h3>
                <p className="subParaGeneralPortugal">The next step is the preparation of all essential documents. These are all listed on the website of the Portuguese Ministry of Foreign Affairs.</p>
              </div>
              <div className="rightSectionGeneralPortugal">
                <img src={Documents} className='rightSectionImgPortugal' />
              </div>
            </div>
            <div className="generalProcessSubDivPortugal">
              <div className="leftSectionGeneralPortugal">
                <h3 className="subHeadingGeneral">Appointment with the Consulate of Portugal:</h3>
                <p className="subParaGeneralPortugal">The next step is an appointment with the Consulate of Portugal at your country of origin. Applicants are advised to check the online appointment calendar for availability.</p>
              </div>
              <div className="rightSectionGeneralPortugal">
                <img src={Consulate} className='rightSectionImgPortugal' />
              </div>
            </div>
            <div className="generalProcessSubDivPortugal">
              <div className="leftSectionGeneralPortugal">
                <h3 className="subHeadingGeneral">Submission of Visa Application:</h3>
                <p className="subParaGeneralPortugal">The next step involves submitting the visa application with all relevant documents.</p>
              </div>
              <div className="rightSectionGeneralPortugal">
                <img src={Submission} className='rightSectionImgPortugal' />
              </div>
            </div>
            <div className="generalProcessSubDivPortugal">
              <div className="leftSectionGeneralPortugal">
                <h3 className="subHeadingGeneral">Visa Issuance:</h3>
                <p className="subParaGeneralPortugal">If successful, the applicant shall be issued the visa between 30 to 90 days, subject to eligibility conditions highlighted above.</p>
              </div>
              <div className="rightSectionGeneralPortugal">
                <img src={VisaIssuance} className='rightSectionImgPortugal' />
              </div>
            </div>
          </div>


          <div className="uae_section_helpp_main_div">
            <div className="uae__section-helpp">
              <div className="uae__section-introo-content ">
                <Fade bottom>
                  <h1 className="gradient__text">How Can FANUUN Help?</h1>
                  <p>
                    These visas are intended for experienced business people who have
                    a genuine and credible business idea and wish to establish a new
                    business in the UK. This visa program requires the applicant to
                    have an endorsement from an approved endorsing body, such as a
                    business organization or higher education institution that
                    assesses their business idea and confirms that it is innovative,
                    viable and scalable.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
    {/* <Brand /> */}
    <CTA htag="Are You Interested in " red=" Visa Applications?" />
    <Footer />
  </div>
);

export default PORTUGAL;
