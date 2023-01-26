const express = require("express");
const blogRouter = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogDetails,
} = require("../controllers/blogControllers");
const { authenticate } = require("../middlewares/authGuard");

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getBlogDetails);
blogRouter.post("/", createBlog);

module.exports = blogRouter;
