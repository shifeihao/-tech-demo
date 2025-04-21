import User from "../models/user.js";
import Note from "../models/note.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

//register user
export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if username and password are provided
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: "Username already exists" });
    }

    // if username and password are not provided, return error
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration failed:", err);
    res
      .status(500)
      .json({ error: "Registration failed", details: err.message });
  }
};

//get user information
export const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user)
      return res.status(404).json({ error: "Can not find this account" });

    res.json(user);
  } catch (err) {
    console.error("❌ Failed to get information:", err);
    res
      .status(500)
      .json({ error: "failed to get information", details: err.message });
  }
};

// login user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("get login request", req.body);

  try {
    const user = await User.findOne({ username });
    console.log("User:", user);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log("Token generated:", token);
    res.status(200).json({ token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Login failed", details: err });
  }
};

// delete user

export const deleteUser = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);
    console.log("Delelte ID:", userId);

    const noteResult = await Note.deleteMany({ userId });
    console.log("Delete notes result:", noteResult);

    const userResult = await User.deleteOne({ _id: userId });
    console.log("Delete user result:", userResult);

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("❌", err); // Log the error for debugging
    res.status(500).json({ error: "failed to delete", details: err.message });
  }
};

// update user username

export const updateUser = async (req, res) => {
  const { username } = req.body;

  // Basic input validation
  if (!username || username.trim() === "") {
    return res.status(400).json({ error: "Username cannot be empty." });
  }

  try {
    // Check if the new username already exists and is not owned by this user
    const existing = await User.findOne({ username });
    if (existing && existing._id.toString() !== req.user.id) {
      return res.status(409).json({ error: "This username is already taken." });
    }

    // Update username for current user
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { username },
      { new: true } // return updated document
    ).select("-password"); // exclude password from response

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    console.log("Username updated successfully:", updatedUser.username);
    res.json({
      message: "Username updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Failed to update username:", err);
    res.status(500).json({
      error: "Server error while updating username",
      details: err.message,
    });
  }
};
