const express = require("express");
const blogRouter = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogDetails,
  deleteBlog,
  getBlogByUserId,
} = require("../controllers/blogControllers");
const { authenticate } = require("../middlewares/authGuard");

blogRouter.get("/", getAllBlogs);
blogRouter.get("/userBlog/:userId", getBlogByUserId);
blogRouter.get("/:id", getBlogDetails);
blogRouter.post("/", createBlog);
blogRouter.delete("/:id", deleteBlog);

module.exports = blogRouter;
