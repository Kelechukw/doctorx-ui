import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer_container">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 footer_col">
              <div class="footer_about">
                <div class="footer_logo_container">
                  <a
                    href="/"
                    class="d-flex flex-column align-items-center justify-content-center"
                  >
                    <div class="logo_content">
                      <div class="logo d-flex flex-row align-items-center justify-content-center">
                        <div class="logo_text">Hospitale</div>
                        <div class="logo_box">+</div>
                      </div>
                      <div class="logo_sub">Online Health Care Center</div>
                    </div>
                  </a>
                </div>
                <ul class="footer_about_list">
                  <li>
                    <div class="footer_about_icon">
                      <img src="images/phone-call.svg" alt="" />
                    </div>
                    <span>+353 8994 75833</span>
                  </li>
                  <li>
                    <div class="footer_about_icon">
                      <img src="images/envelope.svg" alt="" />
                    </div>
                    <span>contact@hospitale.com</span>
                  </li>
                  <li>
                    <div class="footer_about_icon">
                      <img src="images/placeholder.svg" alt="" />
                    </div>
                    <span>Dublin, Ireland</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 footer_col">
              <div class="footer_links footer_column">
                <div class="footer_title">Useful Links</div>
                <ul>
                  <li>
                    <a href="about.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
