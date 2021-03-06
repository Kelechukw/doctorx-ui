import React from "react";
import MainWrapper from "../../components/layout/MainWrapper";
import image from "../../assets/images/black.jpg";
import doctor from "../../assets/images/doctor.jpg";

const Homepage = () => {
  return (
    <>
      <MainWrapper title="Homepage">
        <div class="home">
          <div class="home_slider_container">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={image} alt="First slide" />
                </div>
                <div class="carousel-item ">
                  <img class="d-block w-100" src={image} alt="First slide" />
                </div>{" "}
                <div class="carousel-item ">
                  <img class="d-block w-100" src={image} alt="First slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="boxes">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 box_col">
                <div class="box working_hours">
                  <div class="box_icon d-flex flex-column align-items-start justify-content-center">
                    <div style={{ width: "29px", height: "29px" }}>
                      <img src="images/alarm-clock.svg" alt="" />
                    </div>
                  </div>
                  <div class="box_title">Working Hours</div>
                  <div class="working_hours_list">
                    <ul>
                      <li class="d-flex flex-row align-items-center justify-content-start">
                        <div>Monday – Friday</div>
                        <div class="ml-auto">24/7</div>
                      </li>
                      <li class="d-flex flex-row align-items-center justify-content-start">
                        <div>Saturday</div>
                        <div class="ml-auto">24/7</div>
                      </li>
                      <li class="d-flex flex-row align-items-center justify-content-start">
                        <div>Sunday</div>
                        <div class="ml-auto">24/7</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 box_col">
                <div class="box box_appointments">
                  <div class="box_icon d-flex flex-column align-items-start justify-content-center">
                    <div style={{ width: "29px", height: "29px" }}>
                      <img src="images/livechat.svg" alt="" />
                    </div>
                  </div>
                  <div class="box_title">Live Chat</div>
                  <div class="box_text">
                    To book appointments,let the doctor know in the chat.
                  </div>
                </div>
              </div>
              <div class="col-lg-4 box_col">
                <div class="box box_emergency">
                  <div class="box_icon d-flex flex-column align-items-start justify-content-center">
                    <div
                      style={{
                        width: "37px",
                        height: "37px",
                        marginLeft: "-4px",
                      }}
                    >
                      <img src="images/bell.svg" alt="" />
                    </div>
                  </div>
                  <div class="box_title">Emergency Cases</div>
                  <div class="box_phone">+353 8994 75833</div>
                  <div class="box_emergency_text">
                    In case of any emergencies call this number. Available 24/7.
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div class="about">
          <div class="container">
            <div class="row row-lg-eq-height">
              <div class="col-lg-7">
                <div class="about_content">
                  <div class="section_title">
                    <h2>A great medical team to help your needs</h2>
                  </div>
                  <div class="about_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur ante leo, finibus quis est ut, tempor tincidunt
                      ipsum. Nam consequat semper sollicitudin. Aliquam nec
                      dapibus massa. Pellen tesque in luctus ex. Praesent luctus
                      erat sit amet tortor aliquam bibendum. Nulla ut molestie
                      augue, scelerisque consectetur quam. Dolor sit amet,
                      consectetur adipiscing elit. Cura bitur ante leo, finibus
                      quis est ut, tempor tincidunt ipsum. Nam consequat semper
                      sollicitudin. Aliquam nec dapibus massa. Pellentesque in
                      luctus ex.
                    </p>
                  </div>
                  <div class="button about_button">
                    <a href="/">read more</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-5">
                <div class="about_image">
                  <img src={doctor} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="services">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section_title">
                  <h2>Videos Section </h2>
                </div>
              </div>
              <div className="col-md-4" style={{ padding: "20px" }}>
                <iframe
                  width="350"
                  height="345"
                  title="Common Cold"
                  src="https://www.youtube.com/embed/GsZFQwGFryc"
                ></iframe>
              </div>
              <div className="col-md-4" style={{ padding: "20px" }}>
                <iframe
                  width="350"
                  height="345"
                  title="Cough"
                  src="https://www.youtube.com/embed/uhxy6O1VeeM"
                ></iframe>
              </div>{" "}
              <div className="col-md-4" style={{ padding: "20px" }}>
                <iframe
                  width="350"
                  height="345"
                  title="Indigestion"
                  src="https://www.youtube.com/embed/b3JlESNl4QQ"
                ></iframe>
              </div>
              <div className="col-md-4" style={{ padding: "20px" }}>
                <iframe
                  width="350"
                  height="345"
                  title="Stomach Upset"
                  src="https://www.youtube.com/embed/jlqSw5VzF_k"
                ></iframe>
              </div>
              <div className="col-md-4" style={{ padding: "20px" }}>
                <iframe
                  width="350"
                  height="345"
                  title="Cold Sores"
                  src="https://www.youtube.com/embed/UD0betNq74c"
                ></iframe>
              </div>
              <div className="col-md-4" style={{ padding: "20px" }}>
                <iframe
                  width="350"
                  height="345"
                  title="Sore throat"
                  src="https://www.youtube.com/embed/LgZ3q7JykXc"
                ></iframe>
              </div>
            </div>
            <div class="row services_row">
              <div class="col-lg-4 col-md-6 service_col">
                <a href="services.html">
                  <div class="service text-center trans_200">
                    <div class="service_icon">
                      <img class="svg" src="images/service_1.svg" alt="" />
                    </div>
                    <div class="service_title trans_200">Free Checkups</div>
                    <div class="service_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ante leo, finibus quis est ut, tempor
                        tincidunt ipsum. Nam consequat semper sollicitudin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-4 col-md-6 service_col">
                <a href="services.html">
                  <div class="service text-center trans_200">
                    <div class="service_icon">
                      <img class="svg" src="images/service_2.svg" alt="" />
                    </div>
                    <div class="service_title trans_200">Screening Exams</div>
                    <div class="service_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ante leo, finibus quis est ut, tempor
                        tincidunt ipsum. Nam consequat semper sollicitudin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-4 col-md-6 service_col">
                <a href="services.html">
                  <div class="service text-center trans_200">
                    <div class="service_icon">
                      <img class="svg" src="images/service_3.svg" alt="" />
                    </div>
                    <div class="service_title trans_200">RMI Services</div>
                    <div class="service_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ante leo, finibus quis est ut, tempor
                        tincidunt ipsum. Nam consequat semper sollicitudin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-4 col-md-6 service_col">
                <a href="services.html">
                  <div class="service text-center trans_200">
                    <div class="service_icon">
                      <img class="svg" src="images/service_4.svg" alt="" />
                    </div>
                    <div class="service_title trans_200">Dentistry</div>
                    <div class="service_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ante leo, finibus quis est ut, tempor
                        tincidunt ipsum. Nam consequat semper sollicitudin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-4 col-md-6 service_col">
                <a href="services.html">
                  <div class="service text-center trans_200">
                    <div class="service_icon">
                      <img class="svg" src="images/service_5.svg" alt="" />
                    </div>
                    <div class="service_title trans_200">Neonatology</div>
                    <div class="service_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ante leo, finibus quis est ut, tempor
                        tincidunt ipsum. Nam consequat semper sollicitudin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-lg-4 col-md-6 service_col">
                <a href="services.html">
                  <div class="service text-center trans_200">
                    <div class="service_icon">
                      <img class="svg" src="images/service_6.svg" alt="" />
                    </div>
                    <div class="service_title trans_200">Biochemistry</div>
                    <div class="service_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ante leo, finibus quis est ut, tempor
                        tincidunt ipsum. Nam consequat semper sollicitudin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default Homepage;
