import express from 'express'
import mongoose from 'mongoose'
import Post from "../models/Post.js";
import PostRouter from "../routes/posts.js";

export const getAllPosts = async (_, res) => {
  try {
    const Posts = await Post.find();
    res.status(200).json(Posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPostsByTitle = async (req, res) => {
  try {
    const Posts = await Post.find({ Post: req.body.title });
    res.status(200).json(Posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPostsByDate = async (req, res) => {
  try {
    const Posts = await Post.find({ Post: req.body.date });
    res.status(200).json(Posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const {userId, postId, group, content, title, files, date, likes} = req.body;
  const newPost = new Post({userId, postId, group, content, title, files, date, likes});

  try {
    //Successful Creation - 201
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params.id;
  const {userId, postId, group, content, title, files, date, likes} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No valid post with id: ${id}`);

  const updatedPost = {userId, postId, group, content, title, files, date, likes};
  try {
    await Post.findByIdAndUpdate(id, updatedPost, { new: true});
    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No valid post with id: ${id}`);

  try {
    //Successful Deletion by Id - 202
    await Post.findByIdAndDelete(id);
    res.status(202).json({ message: "Successfully Deleted Post" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const upVote = async(req, res) => {
  const { id } = req.params;
  
  try {
    const post = await Post.findById(id);
    const updatedPost = await Post.findByIdAndUpdate(id, { likes: post.likes + 1}, { new: true } );
    res.status(201).json(updatedPost);
    console.log("upvote")
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

export const downVote = async(req, res) => {
  const { id } = req.params;
  
  try {
    const post = await Post.findById(id);
    const updatedPost = await Post.findByIdAndUpdate(id, { likes: post.likes - 1}, { new: true } );
    console.log("downvote")
    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}
