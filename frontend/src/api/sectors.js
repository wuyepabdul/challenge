import axios from "axios";

export const getSectors = async () => {
  try {
    const { data } = await axios.get("https://challenge-mern-api.vercel.app/api/sector/all");
    return data;
  } catch (error) {
    return error.data;
  }
};
