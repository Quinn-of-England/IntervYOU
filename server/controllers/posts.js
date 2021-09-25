import Post from "../models/Post.js";

export const getAllPosts = async (_, res) => {
  try {
    const Posts = await Post.find();
    res.status(200).json(Posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPostsByName = async (req, res) => {
  try {
    const Posts = await Post.find({ Post: req.params.Post });
    res.status(200).json(Posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const newPost = new Post({
    Post: req.body.Post,
    value: req.body.value,
    unit: req.body.unit,
    date: req.body.date,
  });

  try {
    //Successful Creation - 201
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    //Successful Deletion by Id - 202
    await Post.findByIdAndDelete(req.params.id);
    res.status(202).send({ message: "Successfully Deleted Post" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
