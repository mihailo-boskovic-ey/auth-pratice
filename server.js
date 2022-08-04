require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectToDB = require("./config/db");
const authRouter = require("./routes/auth");
const privateRoute = require("./routes/private");
const errorHandler = require("./middleware/error.handler");
const app = express();
const PORT = process.env.PORT;
connectToDB();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/private", privateRoute);
// Error handler should be last piece of middleware
app.use(errorHandler);

const server = app.listen(PORT, () => console.log(`Server Running on ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log("Logged Error");
  console.log(err);
  server.close(() => process.exit(1));
});
