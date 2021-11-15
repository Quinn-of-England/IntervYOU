import React, { useState, useEffect } from "react";
import { IP, SERVER_PORT  } from '../../utils/types.js'; 
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Post from "./Post";
import { getPosts } from "../../actions/posts.js";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get(`${IP}:${SERVER_PORT}/api/posts/`).then((res) => {
      setAllPosts(() => res.data);
      console.log(allPosts);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      {allPosts.map(({ _id, ...post }) => (
        <Post key={_id} postId={_id} {...post} />
      ))}
    </>
  );
};

export default Posts;
