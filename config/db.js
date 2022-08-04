const mongoose = require("mongoose");

const connectToDB = async () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Server connected to mongoDB");
};

module.exports = connectToDB;
