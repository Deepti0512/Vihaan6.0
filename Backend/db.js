const mongoose = require("mongoose");

module.exports = async function connectDb() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/vihaan6")
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
};
