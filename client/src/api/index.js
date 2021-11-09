import axios from 'axios';
// import dotenv from "dotenv";
import { IP, SERVER_PORT    } from '../utils/types.js'; 

const url = `${IP}:${SERVER_PORT  }/post`;

export const createPost = (newPost) => axios.post(url, newPost);
