import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/fanun.svg";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const routeToTest = () => {
    navigate("/test");
  };

  return (
    <div className="immi__navbar">
      <div className="immi__navbar-links">
        <div className="immi__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="immi__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About us</Link>
          </p>
          <p>
            <Link to="/solutions">Immigration</Link>
          </p>
          <p>
            <div class="dropdown">
              Services <BiChevronDown />
              <div class="dropdown-content">
                <Link className="ser2">
                  Immigration Services
                  <BiChevronDown />
                  <div className="dropdown-submenu">
                    {/* <Link to="/solutions">Immigration Services</Link> */}
                    <Link to="/us">US</Link>
                    <Link to="/uk">UK</Link>
                    <Link to="/canada">Canada</Link>
                    <Link to="/uae">UAE</Link>
                    <Link to="/portugal">Portugal</Link>
                  </div>
                </Link>
                <Link className="ser2">
                  Value added Services <BiChevronDown />
                  <div className="dropdown-submenu">
                    <Link to="/screening">Screening Services</Link>
                    <Link to="/attest">Attestation Services</Link>
                    <Link to="/document">Document Services</Link>
                    <Link to="/sealed">Sealed Envelope Services</Link>
                    <Link to="/translation">Translation Services </Link>
                  </div>
                </Link>
                <Link to="/formation">Company Formation Services</Link>
              </div>
            </div>
          </p>

          <p>
            <Link to="/career">Career</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
      <div className="immi__navbar-sign">
        {/* <button type="button" onClick={routeToTest}>
          Take a test
        </button> */}
      </div>
      <div className="immi__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="immi__navbar-menu_container scale-up-center">
            <div className="immi__navbar-menu_container-links">
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/about">About us</Link>
              </p>
              <p>
                <Link to="/solutions">Immigration</Link>
              </p>
              <p>
                <div class="dropdown">
                  Services <BiChevronDown />
                  <div class="dropdown-content">
                    <Link className="ser2">
                      Immigration Services <BiChevronDown />
                      <div className="dropdown-submenu">
                        <Link to="/us">US</Link>
                        <Link to="/uk">UK</Link>
                        <Link to="/canada">Canada</Link>
                        <Link to="/uae">UAE</Link>
                        <Link to="/portugal">Portugal</Link>
                      </div>
                    </Link>
                    <Link className="ser2">
                      Value added Services <BiChevronDown />
                      <div className="dropdown-submenu">
                        <Link to="/screening">Screening Services</Link>
                        <Link to="/attest">Attestation Services</Link>
                        <Link to="/document">Document Services</Link>
                        <Link to="/sealed">Sealed Envelope Services</Link>
                        <Link to="/translation">Translation Services </Link>
                      </div>
                    </Link>
                    <Link to="/formation">Company Formation Services</Link>
                  </div>
                </div>
              </p>

              <p>
                <Link to="/career">Career</Link>
              </p>

              <p>
                <Link to="/contact">Contact</Link>
              </p>
            </div>
            <div className="immi__navbar-menu_container-links-sign">
              {/* <button type="button" onClick={routeToTest}>
                Take a test
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
