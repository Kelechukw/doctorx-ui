import axios from "./axios";

export const uploadFile = async (payload) => {
  try {
    const formData = new FormData();

    formData.append("file", payload.file);

    const url = "/upload/";
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  } catch (err) {
    throw err;
  }
};
