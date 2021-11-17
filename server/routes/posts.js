import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByTitle,
  getPostsByDate,
  deletePost,
  updatePost,
  updateVote
} from "../controllers/posts.js";

const PostRouter = Router();

//Create - Add Post
PostRouter.post("/add-post", createPost);

//Read - Get All Posts
PostRouter.get("/", getAllPosts);

//Read - Get Posts By ID
PostRouter.get("/:id", getPostById);

//Read - Get Posts By Title
PostRouter.get("/:post", getPostsByTitle);

//Read - Get Posts By Date
PostRouter.get("/:date", getPostsByDate);

//Update - Modify Existing Post by Id
PostRouter.patch("/:id", updatePost);

//Delete User By Id
PostRouter.delete("/:id", deletePost);

//Vote post
PostRouter.patch("/:id/vote", updateVote);


export default PostRouter;
