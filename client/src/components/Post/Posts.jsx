import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "./Post";
import { getPosts } from "../../actions/posts.js";

const Posts = () => {
  // Dummy Data to Be Replaced By Axios Call to Get Data
  const allPosts = [
    {
      id: 0,
      title: "Something Fake",
      userId: "u/fake_userId",
      group: "Testing",
      content:
        "We have a big presentation coming up on Tuesday discussing the progress we have made on the project thus far. Who else doesn't have any work to demonstrate to the professor and the whole class? Good thing we have a speedy programmer hehe ...",
      likes: 140,
      currentuserIdVote: 1,
    },
    {
      id: 1,
      title: "Hello there!",
      userId: "u/John",
      group: "Testing",
      content: "Hi! My name is What...",
      likes: 35,
      currentuserIdVote: 0,
    },
    {
      id: 2,
      title: "Hi! My name is Who...",
      userId: "u/nich",
      group: "Testing",
      content: "Slim Shady Bitch",
      likes: 99,
      currentuserIdVote: -1,
    },
    {
      id: 3,
      title: "Maria Carrey!",
      userId: "u/quinn",
      group: "Testing",
      content: "How do you spell her name?",
      likes: 4,
      currentuserIdVote: 0,
    },
    {
      id: 4,
      title: "Nick bro",
      userId: "u/kawwaskai",
      group: "Testing",
      content: "Yo yo....",
      likes: -5,
      currentuserIdVote: 0,
    },
  ];

  const posts = useSelector((state) => state.posts);
  console.log("TODO IMPLEMENT: ", posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {allPosts.map(({ id, ...post }) => (
        <Post key={id} {...post} />
      ))}
    </>
  );
};

export default Posts;
