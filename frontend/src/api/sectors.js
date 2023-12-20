import axios from "axios";
axios.defaults.withCredentials = true;

export const getSectors = async () => {
  try {
    const { data } = await axios.get("https://challenge-mern-api.vercel.app/api/sector/all");
    return data;
  } catch (error) {
    return error.data;
  }
};
