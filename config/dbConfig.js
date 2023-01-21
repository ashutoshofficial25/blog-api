const mongoose = require("mongoose");

exports.connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/blog-db", {
    useNewUrlParser: true,
  });
};
