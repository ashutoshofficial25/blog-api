const mongoose = require("mongoose");
const { constants } = require("../constants");

exports.connectDb = () => {
  return mongoose.connect(`${constants.DB_LOCAL}`, {
    useNewUrlParser: true,
  });
};
