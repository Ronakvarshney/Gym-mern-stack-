const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/FitnessData") // mongoose.connect is used to connect with db an di t returns a promise
    .then(() => {
      console.log("db connected successful");
    })
    .catch((error) => {
      console.log(error.message);
      process.exit();
    });
};

module.exports = dbConnect;
