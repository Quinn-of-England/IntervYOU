import axios from "axios";

const baseUrl = "http://localhost:5000/";

const usersRoute = baseUrl + "users/";
const commentsRoute = baseUrl + "comments/";

export const getUsers = () => async (dispatch) => {
    try {
      const { data } = await axios.get(usersRoute);
      dispatch({ type: "GET_USERS", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
  
  export const getComments = () => async (dispatch) => {
    try {
      const { data } = await axios.get(commentsRoute);
      dispatch({ type: "GET_COMMENTS", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };
  
  export const createComment = (newComment) => async (dispatch) => {
    try {
      const { data } = await axios.get(commentsRoute, newComment);
      dispatch({ type: "CREATE_COMMENT", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };