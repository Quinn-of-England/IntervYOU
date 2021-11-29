import { Router } from "express";
import * as userController from "../controllers/users.js";

const userRouter = Router();

//Login - Find & Authenticate User
userRouter.post("/login", userController.login_post);

//registration - Create User & Hash Password
userRouter.post("/signup", userController.registration_post);

//Logout - Delete cookie with refresh token
userRouter.post("/logout", userController.logout_post);

//Read - Get All Users
userRouter.get("/", userController.get_all_users);

//Read - Get all users with role
userRouter.get("/role", userController.get_all_users_by_role);

//Read - Get user by id
userRouter.get("/id/:id", userController.get_user_by_id);

//Read - Get user by email
userRouter.get("/email/:email", userController.get_user_by_email);

//Read - Get user by username
userRouter.get("/username/:username", userController.get_user_by_username);

//Read - Get list of groups
userRouter.get("/groups/id/:id", userController.get_groups_by_id);

//Update - Update user likes
userRouter.patch("/id/:id/likes", userController.update_user_likes);

//Update - Update user
userRouter.put("/id/:id", userController.update_user_by_id);

//Update - Add group
userRouter.patch("/groups/id/:id", userController.update_group_list);

//Delete User By Id
userRouter.delete("/id/:id", userController.delete_user_by_id);

//Delete user by email
userRouter.delete("/email/:email", userController.delete_user_by_email);

//Delete user by username
userRouter.delete(
  "/username/:username",
  userController.delete_user_by_username
);

export default userRouter;
