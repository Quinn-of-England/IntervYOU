import mongoose from "mongoose";

//User Schema
const UserSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
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
  },
  role: {
    type: String,
    default: "PATIENT",
  },
  tokenVersion: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
