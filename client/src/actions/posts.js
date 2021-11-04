import axios from "axios";

const baseUrl = "http://localhost:5000/";

const usersRoute = baseUrl + "users/";
const postsRoute = baseUrl + "posts/";

//axios.get(url);

//Redux Thunk Uses to Specify Asynchronous Action for Asynchronous Calls
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(usersRoute);
    dispatch({ type: "GET_USERS", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

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
    const { data } = await axios.get(postsRoute, newPost);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
