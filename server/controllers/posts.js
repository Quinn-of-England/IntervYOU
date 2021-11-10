import mongoose from 'mongoose'
import Post from "../models/Post.js";
import { upload } from "../file-upload.js"

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

/* *
 * * This function will create a post
 * * The request must be sent using multipart/form-data since files can be uploaded
 * * The files must be passed with key "files"
 */
export const createPost = async (req, res) => {
  try {
    //Successful Creation - 201
    upload(req, res, async (err) => {
      if(err){
        res.status(422).json({
            message: "Unable to create post",
            error: err.message
        })
      }else{
        let files = []
        req.files.forEach(file => {
          const object = {
            name: file.originalname,
            key: file.key,
            size: file.size,
          }
          files.push(object)
        });
        req.body.files = files
        await Post.create(req.body);
        res.status(201).json({
            message: "Post created",
        })
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message });
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
