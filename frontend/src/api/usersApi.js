import axios from "axios";

axios.defaults.withCredentials = true;
export const addUser = async (data) => {
  try {
    const newUser = await axios.post(
      "https://challenge-mern-api.vercel.app/api/user",
      data
    );
    return newUser;
  } catch (error) {
    return error.data;
  }
};

export const getAllUsers = async () => {
  try {
    const users = await axios.get(
      "https://challenge-mern-api.vercel.app/api/user/all"
    );
    return users;
  } catch (error) {
    return error.data;
  }
};

export const updateUser = async (id, data) => {
  try {
    const updatedUser = await axios.put(
      `https://challenge-mern-api.vercel.app/api/user/${id}`,
      data
    );
    return updatedUser;
  } catch (error) {
    return error.data;
  }
};
