import React from "react";
import { withRouter } from "react-router-dom";
import PageHelmet from "../pageHelmet";
import Footer from "./Footer";
import Header from "./Header";

const MainWrapper = (props) => {
  return (
    <>
      <PageHelmet title={props.title} />
      <div class="super_container">
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default withRouter(MainWrapper);
