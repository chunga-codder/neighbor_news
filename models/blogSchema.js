const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },

  displayName: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    trim: true,
    required: "Title is required",
  },

  text: {
    type: String,
    trim: true,
    required: "Text is required",
  },

  category: {
    type: String,
    default: "General",
  },

  zipCode: {
    type: Number,
    required: true,
  },

  imgUrl: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
