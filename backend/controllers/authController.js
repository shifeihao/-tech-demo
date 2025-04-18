import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// 用户注册
export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed", details: err });
  }
};

// 用户登录
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("收到登录请求：", req.body);

  try {
    const user = await User.findOne({ username });
    console.log("User:", user); // 检查用户是否存在
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log("Token generated:", token); // 检查 JWT 是否正确生成
    res.status(200).json({ token });
  } catch (err) {
    console.error("Error during login:", err); // 打印详细错误信息
    res.status(500).json({ error: "Login failed", details: err });
  }
};
