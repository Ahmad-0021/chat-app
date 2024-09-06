const asyncHandler = require("express-async-handler");
const userModel = require("../models/user-model");
const generateToken = require("../utils/jwt");

module.exports.signupController = asyncHandler(async function (req, res) {
  const { name, email, password, profilePic } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Please fill all the fields");
  }

  const existedUser = await userModel.findOne({ email });

  if (existedUser) {
    return res.status(400).send("User already existed");
  }

  const newUser = await userModel.create({
    name,
    email,
    password,
    profilePic,
  });

  if (newUser) {
    const token = generateToken(newUser._id, newUser.email);
    res.status(201).json({
      id: newUser._id,
      email: newUser.email,
      pic: newUser.profilePic,
      token: token,
    });
  }
});
module.exports.loginController = asyncHandler(async function (req, res) {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).send("Please provide both email and password");
  }

  // Find the user in the database
  const user = await userModel.findOne({ email });

  // Check if the user exists and if the password matches
  if (user && (await user.matchPassword(password))) {
    // Generate token
    const token = generateToken(user._id, user.email);

    // Send user details and token as response
    res.status(200).json({
      id: user._id,
      email: user.email,
      pic: user.profilePic,
      token: token,
    });
  } else {
    return res.status(400).send("Invalid email or password");
  }
});
