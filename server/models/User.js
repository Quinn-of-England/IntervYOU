import mongoose from "mongoose";

//User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "MENTEE",
  },
  posts: [
    {
      post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
    }
  ],
  likes: {
    type: Map
  },
  tokenVersion: {
    type: Number,
    default: 0,
  },
  groups: [
    {
      group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group'}
    }
  ],
});

const User = mongoose.model("user", userSchema);
export default User;
