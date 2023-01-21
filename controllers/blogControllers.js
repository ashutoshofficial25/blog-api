const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();

  if (!blogs.length) {
    return res.status(404).json({
      data: "null",
      message: "No blog posts found",
    });
  }
  res.status(200).json({
    data: blogs,
    message: "All blog posts found",
    total: blogs.length,
  });
};

exports.getBlogDetails = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id.toString());

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
};

exports.createBlog = async (req, res) => {
  const { title, subtitle, content, thumbnail } = req.body;

  console.log(title, subtitle, content, thumbnail);

  if (!title || !content) {
    return res.status(400).json({
      data: { name: "" },
      message: "Please provide title and content",
    });
  }

  const newBlog = await Blog.create({
    title,
    subtitle,
    thumbnail,
    content,
  });

  res.status(200).json({
    data: newBlog,
    message: "Blog created successfully",
  });
};
