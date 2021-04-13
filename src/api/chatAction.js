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

export const getAllMessages = async (coversationId) => {
  try {
    const url = "/getmsgs/" + coversationId;
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    throw err;
  }
};
