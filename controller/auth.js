const User = require("../models/user_model");
const ErrorResponse = require("../util/error");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.forgotpass = (req, res, next) => {
  res.send("Forgot password Route");
};

exports.resetpass = (req, res, next) => {
  res.send("Reset passwort Route");
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 401));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("Invalid Credentialns", 401));
    }

    const isMatch = user.matchPasswords(password);
    if (!isMatch)
      res.status(404).json({
        success: false,
        error: "Invalid Credentials",
      });
    else sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignToken();
  res.status(statusCode).json({ success: true, token: token });
};
