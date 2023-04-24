const mongoose = require("mongoose");

module.exports = async function connectDb() {
  await mongoose
    .connect("mongodb+srv://physics1508:6PR8RYE1luWhxQ0d@cluster0.fvur2bk.mongodb.net/test")
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
};
