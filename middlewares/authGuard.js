const jwt = require("jsonwebtoken");
const { constants } = require("../constants");
const secret = "mys secret code";

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    console.log(token);

    if (!token) {
      return res.status(401).json({ error: true, message: "Unauthorized" });
    }
    const decoded = await jwt.verify(token, constants.JWTSECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: true, message: "Unauthorized" });
  }
};
