const express = require("express");
const blogRouter = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogDetails,
} = require("../controllers/blogControllers");

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getBlogDetails);
blogRouter.post("/", createBlog);

module.exports = blogRouter;
