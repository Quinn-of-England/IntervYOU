import { Router } from "express";
import * as userController from "../controllers/users.js"

const userRouter = Router();

//Login - Find & Authenticate User
userRouter.post("/login", userController.login_post);

//Signup - Create User & Hash Password
userRouter.post("/signup", userController.signup_post);

//Logout - Delete cookie with refresh token
userRouter.post("/logout", userController.logout_post)

//Read - Get All Users
userRouter.get("/", userController.get_all_users);

//Read - Get all users with role
userRouter.get("/role", userController.get_all_users_by_role)

//Read - Get user by email
userRouter.get("/:email", userController.get_user_by_email)

//Read - Get user by username
userRouter.get("/:username", userController.get_user_by_username)

//Update, Promote, or Demote User
//Patch - Updates Only Changed User Details
//userRouter.patch("/:username", updateUserRole);

//Delete User By Id
//userRouter.delete('/:id', (req, res) => res.status(200).send());

//Delete user by email
userRouter.delete('/:email', userController.delete_user_by_email)

//Delete user by username
userRouter.delete('/:username', userController.delete_user_by_username)

export default userRouter;
