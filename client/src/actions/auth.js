import axios from "axios";
import { IP, SERVER_PORT } from "../utils/types.js";

const baseRoute = `${IP}:${SERVER_PORT}/api/`;
const validAccessRoute = baseRoute + "validAccess/";

// Default Payload
const notAuthenticatedPayload = { userId: "", userName: "", isAuth: false };

// Get Auth State from Anywhere
export const getAuthState = () => async (dispatch) => {
  try {
    // Get Access Token from Local Storage
    const token = localStorage.getItem("Authorization");

    if (!token) {
      // No Access Token Therefore Not Authenticated
      dispatch({ type: "AUTH_FAILED", payload: notAuthenticatedPayload });
    } else {
      // Check and Decode Access Token
      const { data } = await axios.post(validAccessRoute, {
        accessToken: token,
      });

      // Set Auth State Based on Data
      const { message, ...authData } = data;

      // Successfully Authenticated
      if (authData.isAuth) {
        dispatch({ type: "AUTH_SUCCESS", payload: authData });
      } else {
        // Unsuccessful Authentication
        dispatch({ type: "AUTH_FAILED", payload: notAuthenticatedPayload });
      }
    }
  } catch (err) {
    // Failed Authentication
    console.log(err.message);
    dispatch({ type: "AUTH_FAILED", payload: notAuthenticatedPayload });
  }
};

// Add Auth State to Reflect Successful Login/Sign Up
export const addAuthState = (userId, userName) => (dispatch) => {
  try {
    dispatch({
      type: "AUTH_SUCCESS",
      payload: { userId, userName, isAuth: true },
    });
  } catch (err) {
    console.log(err.message);
  }
};

// Reset Auth State to Reflect Logout
export const removeAuthState = () => (dispatch) => {
  try {
    dispatch({
      type: "AUTH_FAILED",
      payload: notAuthenticatedPayload,
    });
  } catch (err) {
    console.log(err.message);
  }
};
