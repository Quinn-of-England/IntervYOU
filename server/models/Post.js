import mongoose from "mongoose";

//Post Schema
const PostSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  likes: {
    type: Number,
    default: 0,
  },
  files: [
    {
      name: String,
      key: String,
      size: Number,
    }
  ],
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
