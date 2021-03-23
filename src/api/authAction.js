import axios from "./axios";

export const signInAction = async (payload) => {
  try {
    const url = "/login/";
    const response = await axios.post(url, payload);
    return response.data;
  } catch (err) {
    throw err;
  }
};
