const { default: mongoose } = require("mongoose");

const BlogSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   subtitle: {
      type: String,
   },
   description: {
      type: String,
   },
   thumbnail: {
      type: String,
   },
   content: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
