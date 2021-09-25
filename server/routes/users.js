import { Router } from "express";
import { verifyAuth, verifyRefresh } from "../auth.js";
import {
  getAllUsers,
  loginUser,
  signupUser,
  updateUserRole,
} from "../controllers/users.js";

const userRouter = Router();

//Login - Find & Authenticate User
userRouter.post("/", loginUser);

//Signup - Create User & Hash Password
userRouter.post("/signup", signupUser);

//Read - Get All Users
userRouter.get("/", verifyAuth, getAllUsers);

//Update, Promote, or Demote User
//Patch - Updates Only Changed User Details
userRouter.patch("/:username", updateUserRole);

//Delete User By Id
//userRouter.delete('/:id', (req, res) => res.status(200).send());

export default userRouter;
