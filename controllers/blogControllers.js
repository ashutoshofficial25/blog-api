const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();

  try {
    if (!blogs.length) {
      return res.status(200).json({
        data: [],
        message: "No blog posts found",
      });
    }
    res.status(200).json({
      data: blogs,
      message: "All blog posts found",
      total: blogs.length,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: "No blog posts found",
    });
  }
};

exports.getBlogDetails = async (req, res) => {
  const { id } = req.params;
  try {
    if (!blog) {
      return res.status(404).json({
        data: "null",
        message: "No blog post found",
      });
    }

    res.status(200).json({
      data: blog,
      message: "Blog post found",
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: "No blog posts found",
    });
  }
  const blog = await Blog.findById(id.toString());
};

exports.createBlog = async (req, res) => {
  const { title, description, content, thumbnail } = req.body;

  console.log(title, description, content, thumbnail);

  if (!title || !content) {
    return res.status(400).json({
      data: { name: "" },
      message: "Please provide title and content",
    });
  }

  const newBlog = await Blog.create({
    title,
    description,
    thumbnail,
    content,
  });

  res.status(200).json({
    data: newBlog,
    message: "Blog created successfully",
  });
};
