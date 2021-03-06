import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

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
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  files: [
    {
      name: String,
      key: String,
      size: String,
      file_type: String,
    },
  ],
  comments: [
    {
      comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
    },
  ],
});

//Plug in for Pagination
PostSchema.plugin(mongoosePaginate);

const Post = mongoose.model("Post", PostSchema);
export default Post;
