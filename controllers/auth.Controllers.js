const User = require("../models/User");
const bcryptjs = require("bcryptjs");

exports.signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const isUser = await User.findOne({ email: email });

    if (isUser) {
      return res.status(400).json({
        error: true,
        message: "User already exists",
      });
    }
    const salt = await bcryptjs.genSalt(12);
    const hash = await bcryptjs.hash(password, salt);

    console.log(hash);

    const user = await User.create({
      fullname: fullname,
      email: email,
      password: hash,
    });

    return res.status(201).json({
      data: user,
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(404).json({
        error: true,
        message: "Please enter details",
      });
    }

    const isUser = await User.findOne({ email: email });

    if (!isUser) {
      return res.status(404).json({
        error: true,
        message: "User doesn't exist",
      });
    }

    const isMatch = await bcryptjs.compare(password, isUser.password);

    if (!isMatch) {
      return res.status(404).json({
        error: true,
        message: "Username or password not correct",
      });
    }

    return res.status(200).json({
      data: {
        fullname: isUser.fullname,
        email: isUser.email,
      },
      success: true,
      message: "Loggdin successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};
