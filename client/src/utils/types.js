import dotenv from 'dotenv'
dotenv.config()

export const CREATE_POST = "CREATE_POST";
export const GET_USERS = "GET_USERS";
export const GET_POSTS = "GET_POSTS";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const DELETE_GROUP = "DELETE_GROUP";

export const IP = process.env.REACT_APP_IP;
export const CLIENT_PORT = 3000;
export const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

