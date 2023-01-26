const express = require("express");
const {
  signup,
  login,
  loginwithtoken,
} = require("../controllers/auth.Controllers");
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/loginwithtoken", loginwithtoken);

module.exports = authRouter;
