const mongoose = require("mongoose");
const dotenv=require('dotenv');
dotenv.config({path:'backend/config/.env'});
const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      /*[MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version.*/
      /*useNewUrlParser: true*/
    })
    .then((data) => {
      console.log(`Connected to Mongodb: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;