import axios from "./axios";

export const getAllConversation = async () => {
  try {
    const url = "/getallconversation/";
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};
