const mongoose = require("mongoose");

async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connect to db.");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to DB.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
