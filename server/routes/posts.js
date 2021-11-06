import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByTitle,
  getPostsByDate,
  deletePost,
  updatePost,
  upVote,
  downVote,
} from "../controllers/posts.js";
import Post from "../models/Post.js";

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
PostRouter.put("/:id", updatePost);

//Delete User By Id
PostRouter.delete("/:id", deletePost);

//Upvote post
PostRouter.patch("/:id/upVote", upVote);

//Downvote post
PostRouter.patch("/:id/downVote", downVote);

export default PostRouter;
