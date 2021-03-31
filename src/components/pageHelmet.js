import React from "react";
import { Helmet } from "react-helmet";
// import store from "store";
// import logo from "../assets/images/logo.png";

const PageHelmet = ({ title }) => {
  // const defaultData = store.get("default");
  return (
    <Helmet>
      <title>{title} - Doctor X</title>
      {/* <link rel="icon" href={logo} type="image/png" /> */}
    </Helmet>
  );
};

export default PageHelmet;
