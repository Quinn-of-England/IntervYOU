import mongoose from "mongoose";

//Post Schema
const PostSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  postId: {
    type: Number,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
