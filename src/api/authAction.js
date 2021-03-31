import axios from "./axios";

export const signInAction = async (payload) => {
  try {
    const url = "/auth/login/";
    const response = await axios.post(url, payload);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const signUpAction = async (payload) => {
  try {
    const url = "/auth/signup/";
    const response = await axios.post(url, payload);
    return response.data;
  } catch (err) {
    throw err;
  }
};
