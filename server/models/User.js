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
  posts: [
    {
      post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    },
  ],
  likes: {
    type: Map,
    of: Number,
    default: {},
  },
  groups: [
    {
      group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
    },
  ],
});

const User = mongoose.model("user", userSchema);
export default User;
