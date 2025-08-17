//connecting database(Mongodb) we need to import mongoose
const mongoose = require("mongoose");

//connecting to the database
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vijayakanthtech:Vijay%400205@cluster0.zerqcbs.mongodb.net/devTinder"
  );
};
module.exports = connectDB;
