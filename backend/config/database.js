const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true
    })
    .then((data) => {
      console.log(`Connected to Mongodb: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;