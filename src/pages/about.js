import React from "react";
import MainWrapper from "../components/layout/MainWrapper";
import testimonials from "../assets/images/testimonials.jpg";
import about from "../assets/images/about.jpg";
// import quote from "../assets/images/quote.png";
import team_1 from "../assets/images/team_1.png";
import team_2 from "../assets/images/team_2.png";
import team_3 from "../assets/images/team_3.png";
import team_4 from "../assets/images/team_4.png";

import test_1 from "../assets/images/test_1.jpg";
import test_2 from "../assets/images/test_2.jpg";

const About = () => {
  return (
    <>
      <MainWrapper title="Homepage">
        <div class="home">
          <div
            class="home_background parallax-window"
            data-parallax="scroll"
            style={{ backgroundImage: `url(${about})` }}
            data-speed="0.8"
          ></div>
          <div class="home_container">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="home_content">
                    <div class="home_title">
                      About <span>Hospitale</span>
                    </div>
                    <div class="breadcrumbs">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>Our Doctors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="team">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="section_title">
                  <h2>Meet Our Medical Team</h2>
                </div>
              </div>
            </div>
            <div class="row team_row">
              <div class="col-lg-3 team_col">
                <div class="team_member">
                  <div class="team_member_image d-flex flex-column align-items-center justify-content-end">
                    <img src={team_1} alt="" />
                  </div>
                  <div class="team_member_info">
                    <div class="team_member_name">
                      <a href="/">Dr. Melissa Smith</a>
                    </div>
                    <div class="team_member_title">Cardiologist</div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 team_col">
                <div class="team_member">
                  <div class="team_member_image d-flex flex-column align-items-center justify-content-end">
                    <img src={team_2} alt="" />
                  </div>
                  <div class="team_member_info">
                    <div class="team_member_name">
                      <a href="/">Dr. Josh Henderson</a>
                    </div>
                    <div class="team_member_title">Plastic Surgeon</div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 team_col">
                <div class="team_member">
                  <div class="team_member_image d-flex flex-column align-items-center justify-content-end">
                    <img src={team_3} alt="" />
                  </div>
                  <div class="team_member_info">
                    <div class="team_member_name">
                      <a href="/">Dr. Christinne Jones</a>
                    </div>
                    <div class="team_member_title">Pediatrist</div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 team_col">
                <div class="team_member">
                  <div class="team_member_image d-flex flex-column align-items-center justify-content-end">
                    <img src={team_4} alt="" />
                  </div>
                  <div class="team_member_info">
                    <div class="team_member_name">
                      <a href="/">Dr. William Stan</a>
                    </div>
                    <div class="team_member_title">General Practicioner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonials">
          <div
            class="testimonials_background parallax-window"
            data-parallax="scroll"
            style={{ backgroundImage: `url(${testimonials})` }}
            data-speed="0.8"
          ></div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="section_title section_title_light">
                  <h2>Patient Testimonials</h2>
                </div>
              </div>
            </div>
            <div class="row test_row">
              <div class="col-lg-6 test_col">
                <div class="testimonial">
                  <div class="test_icon d-flex flex-column align-items-center justify-content-center">
                    {/* <img src={quote} alt="" /> */}
                  </div>
                  <div class="test_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ante leo, finibus quis est ut, tempor tincidunt
                    ipsum. Nam consequat semper sollicitudin. Aliquam nec dap
                    ibus massa. Pellen tesque in luctus ex. Praesent luctus erat
                    sit amet torto.
                  </div>
                  <div class="test_author d-flex flex-row align-items-center justify-content-start">
                    <div class="test_author_image">
                      <div>
                        <img src={test_1} alt="" />
                      </div>
                    </div>
                    <div class="test_author_name">
                      <a href="/">Claire Smith</a>, <span>Patient</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 test_col">
                <div class="testimonial">
                  <div class="test_icon d-flex flex-column align-items-center justify-content-center">
                    {/* <img src={quote} alt="" /> */}
                  </div>
                  <div class="test_text">
                    Slor sit amet, consectetur adipiscing elit. Curabitur ante
                    leo, finibus quis est ut, tempor tincidunt ipsum. Nam
                    consequat semper sollicitudin. Aliquam nec dap ibus massa.
                    Pellen tesque in luctus ex. Praesent luctus erat sit amet
                    tortor aliquam bibendum.
                  </div>
                  <div class="test_author d-flex flex-row align-items-center justify-content-start">
                    <div class="test_author_image">
                      <div>
                        <img src={test_2} alt="" />
                      </div>
                    </div>
                    <div class="test_author_name">
                      <a href="/">Mick Williams</a>, <span>Patient</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default About;
