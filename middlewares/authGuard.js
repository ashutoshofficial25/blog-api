const jwt = require("jsonwebtoken");
const secret = "mys secret code";
exports.auth = async (req, res, next) => {
  try {
    const token = req.headers.authorizatiom;

    if (!token) {
      return res.status(401).json({ error: true, message: "Unauthorized" });
    }
    const decoded = await jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: true, message: "Unauthorized" });
  }
};
