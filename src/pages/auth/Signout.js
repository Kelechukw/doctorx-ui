import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { triggerSuccess } from "../../components/alerts";
import store from "store";

const Signout = (props) => {
  useEffect(() => {
    triggerSuccess("Logout Successful");
    store.clearAll();
    props.history.push("/");
  });
  return <div></div>;
};

export default withRouter(Signout);
