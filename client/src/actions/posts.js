import { CREATE_POST, GET_USERS, GET_POSTS } from '../utils/types.js'; 
import * as api from '../api/index.js';
import axios from 'axios';

const baseUrl = "http://localhost:5000/api/";
const usersRoute = baseUrl + "users/";
const postsRoute = baseUrl + "posts/";

//axios.get(url);

//Redux Thunk Uses to Specify Asynchronous Action for Asynchronous Calls
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(usersRoute);
    dispatch({ type: GET_USERS, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(postsRoute);
    dispatch({ type: GET_POSTS, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/posts/add-post");
    dispatch({ type: CREATE_POST, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
