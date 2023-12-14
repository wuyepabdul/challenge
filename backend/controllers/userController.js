import User from "../models/UserSchema.js";

export const updateUserController = async (req, res) => {
  const id = req.params.id;
  let userDetails = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(userDetails.password, salt);
    userDetails.password = hashPassword;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: userDetails },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Update Successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to update. Server Error",
    });
  }
};

export const deleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to delete. Server Error",
    });
  }
};

export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User found",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server Error",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    if (users.length < 1) {
      return res.status(200).json({
        success: true,
        statusCode: 200,
        message: "No User has been created",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Users found",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server Error",
    });
  }
};
