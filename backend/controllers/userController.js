import User from "../models/UserSchema.js";

export const addUserController = async (req, res) => {
  const { name, sectors, termsAndConditions } = req.body;

  try {
    const user = new User({
      name,
      sectors,
      termsAndConditions,
    });
    await user.save();

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "User Successfully Created",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal server error, try again later",
    });
  }
};

export const updateUserController = async (req, res) => {
  const id = req.params.id;
  let userDetails = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: userDetails },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Update Successful",
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

export const getSingleUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User found",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Server Error",
    });
  }
};

export const getAllUsersController = async (req, res) => {
  try {
    const users = await User.find({});
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
