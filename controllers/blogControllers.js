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

exports.getBlogByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    if (!userId) {
      return res.status(400).json({
        error: true,
        message: "User id not provided",
      });
    }
    const blogs = await Blog.find({ userId: userId });

    res.status(200).json({
      data: blogs,
      message: "Your All blog posts",
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

exports.getBlogDetails = async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id.toString());

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
};

exports.createBlog = async (req, res) => {
  const { title, description, content, thumbnail, userId } = req.body;
  // const  user  = req.user \\ implementation after auth
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
    userId,
  });

  res.status(200).json({
    data: newBlog,
    message: "Blog created successfully",
  });
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        error: error,
        message: "Provide id of the blog",
      });
    }
    const blog = await Blog.findOneAndDelete({ _id: id });

    if (!blog) {
      return res.status(400).json({
        error: error,
        message: "No blog found with given id",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "Unable to delete blog",
    });
  }
};
