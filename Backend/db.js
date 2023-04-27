const mongoose = require("mongoose");
 
const connectionUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fvur2bk.mongodb.net/test`

module.exports = async function connectDb() {
  await mongoose
    .connect(connectionUrl)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
};
