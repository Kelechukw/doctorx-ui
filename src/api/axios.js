import axios from "axios";
import { history } from "../helpers/history";
import store from "store";
import { triggerError } from "../components/alerts";

const instance = axios.create({
  // baseURL: "http://localhost:4000/" + "api",
  baseURL: process.env.REACT_APP_API_URL + "api",
});

instance.interceptors.request.use(
  (config) => {
    const token = store.get("token");

    if (typeof token !== "undefined" && token !== "undefined") {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const successHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  const status = error.response["status"];
  if (status === 401) {
    store.clearAll();
    history.push("/");
    triggerError("Your session has expired! Kindly Login again");
  }
  return Promise.reject(error);
};

instance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => {
    return errorHandler(error);
  }
);

export default instance;
