import axios from "axios";

export const addUser = async (data) => {
  try {
    const newUser = await axios.post("/api/user", data);
    return newUser;
  } catch (error) {
    return error.data;
  }
};

export const getAllUsers = async () => {
  try {
    const users = await axios.get("api/user/all");
    return users;
  } catch (error) {
    return error.data;
  }
};

export const updateUser = async (id, data) => {
  try {
    const updatedUser = await axios.put(`api/user/${id}`, data);
    return updatedUser;
  } catch (error) {
    return error.data;
  }
};
