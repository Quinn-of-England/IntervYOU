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
  tokenVersion: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
