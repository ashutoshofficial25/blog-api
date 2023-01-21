const express = require("express");
const blogRouter = require("./blogs.routes");
const utileRouter = require("./utils.routes");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Blog API",
  });
});

router.use("/blog", blogRouter);

router.use("/utils", utileRouter);

module.exports = router;
