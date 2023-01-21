const express = require("express");
const { uploadImage } = require("../controllers/utils");
const utileRouter = express.Router();

utileRouter.post("/uploadImage", uploadImage);

module.exports = utileRouter;
