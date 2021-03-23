import React from "react";
// import store from "store";
import { Link } from "react-router-dom";

const Header = ({ handleToggleSideBar, handleToggleMobileSideBar }) => {
  // const user = store.get("lola_user");
  return (
    <>
      <header className="header trans_200">
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                  <div className="emergencies  d-flex flex-row align-items-center justify-content-start ml-auto">
                    For Emergencies: +353 8994 75833
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                  <nav className="main_nav ml-auto">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">Our Doctors</Link>
                      </li>

                      <li>
                        <Link to="/login">Log in</Link>
                      </li>
                      <li>
                        <Link to="/chat">Chat with Doctor</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="hamburger ml-auto">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="logo_container_outer">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="logo_container">
                  <a href="/">
                    <div className="logo_content d-flex flex-column align-items-start justify-content-center">
                      <div className="logo_line"></div>
                      <div className="logo d-flex flex-row align-items-center justify-content-center">
                        <div className="logo_text">Hospitale</div>
                        <div className="logo_box">+</div>
                      </div>
                      <div className="logo_sub">Online Health Care Place</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="menu_container menu_mm">
        <div className="menu_close_container">
          <div className="menu_close"></div>
        </div>

        <div className="menu_inner menu_mm">
          <div className="menu menu_mm">
            <ul className="menu_list menu_mm">
              <li className="menu_item menu_mm">
                <a href="index.html">Home</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="about.html">Our Doctors</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="dlogin.html">Doctor Log in</a>
              </li>
              <li className="menu_item menu_mm">
                <a href="plogin.html">Patient Log in</a>
              </li>
              <li>
                <a href="chat.html">Chat with Doctor</a>
              </li>
            </ul>
          </div>
          <div className="menu_extra">
            <div className="menu_emergencies">
              For Emergencies: +353 8994 75833
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
