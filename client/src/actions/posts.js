import axios from "axios";

const baseUrl = "http://localhost:5000/api/";
const postsRoute = baseUrl + "posts/";

//Redux Thunk Uses to Specify Asynchronous Action for Asynchronous Calls
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(postsRoute);
    dispatch({ type: "GET_POSTS", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await axios.post(postsRoute, newPost);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePost = (postId, updatedPost) => async (dispatch) => {
  try {
    const { data } = await axios.patch(postsRoute + "/" + postId, updatedPost);
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(postsRoute + postId);
    dispatch({ type: "DELETE_POST", payload: postId });
  } catch (err) {
    console.log(err.message);
  }
};

//Add Vote Direction to Post
export const upDownVotePost = (postId, voteDirection) => async (dispatch) => {
  try {
    const { data } = await axios.patch(postsRoute + postId);
    dispatch({ type: "VOTE_POST", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
