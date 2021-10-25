import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostsByName,
  deletePost,
} from "../controllers/posts.js";
import Post from "../models/Post.js";

const PostRouter = Router();

//Create - Add Post
PostRouter.post("/add-post", createPost);

//Read - Get All Posts
PostRouter.get("/", getAllPosts);

//Read - Get Posts By Name
PostRouter.get("/:post", getPostsByName);

//Read - Get Posts By Date
PostRouter.get("/:date", (req, res) => res.status(200).send());

//Update - Modify Existing Post by Id
PostRouter.patch("/:id", (req, res) => res.status(200).send());

//Delete User By Id
PostRouter.delete("/:id", deletePost);

//Upvote post
PostRouter.patch("/:id/upVote", upVote);

//Downvote post
PostRouter.patch("/:id/downVote", downVote);

export default PostRouter;
