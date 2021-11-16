import { CREATE_POST, GET_USERS, GET_POSTS, EDIT_POST, IP, SERVER_PORT   } from '../utils/types.js'; 
import * as api from '../api/index.js';
import axios from 'axios';


const baseUrl = `${IP}:${SERVER_PORT }/api/posts`;

//Redux Thunk Uses to Specify Asynchronous Action for Asynchronous Calls
// export const getPosts = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get(usersRoute);
//     dispatch({ type: GET_USERS, payload: data });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

export const getPosts = (newPost) => async (dispatch) => {
  try {
    const { data } = await axios.get(baseUrl);
    dispatch({ type: GET_POSTS, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await axios.post(baseUrl + "/add-post");
    dispatch({ type: CREATE_POST, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePost = (postId, updatedPost) => async (dispatch) => {
  try {
    const { data } = await axios.patch(baseUrl + "/" + postId, updatedPost);
    dispatch({ type: EDIT_POST, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

// export const deletePost = (postId) => async (dispatch) => {
//   try {
//     await axios.delete(postsRoute + postId);
//     dispatch({ type: "DELETE_POST", payload: postId });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// //Add Vote Direction to Post
// export const upDownVotePost = (postId, voteDirection) => async (dispatch) => {
//   try {
//     const { data } = await axios.patch(postsRoute + postId);
//     dispatch({ type: "VOTE_POST", payload: data });
//   } catch (err) {
//     console.log(err.message);
//   }
// };
