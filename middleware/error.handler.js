const ErrorResponse = require("../util/error.js");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (err.code === 11000) {
    const message = `Duplicate Field Value`;
    error = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.error).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }
  res.status(error.stausCode || 500).json({
    succes: false,
    error: error.message || "server Error",
  });
};

module.exports = errorHandler;
