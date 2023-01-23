const express = require("express");
const { uploadImage, uploader } = require("../controllers/utils");
const utileRouter = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "uploads/blogImages");
   },
   filename: (req, file, cb) => {
      cb(null, file.originalname);
   },
});

const upload = multer({ storage });

utileRouter.post("/uploadImage", upload.single("file"), uploadImage);

module.exports = utileRouter;
