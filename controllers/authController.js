import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin, pic } = req.body;

  // check if user already exists

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const user = await User.create({
    name,
    email,
    password,
    isAdmin,
    pic,
  });

  if (user) {
    res
      .status(201)
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
      });
  } else {
    res.status(400);
    throw new Error("Error Occured creating a user")
  }
});
