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
      user: "u/fake_user",
      description:
        "We have a big presentation coming up on Tuesday discussing the progress we have made on the project thus far. Who else doesn't have any work to demonstrate to the professor and the whole class? Good thing we have a speedy programmer hehe ...",
      voteCount: 140,
      currentUserVote: 1,
    },
    {
      id: 1,
      title: "Hello there!",
      user: "u/John",
      description: "Hi! My name is What...",
      voteCount: 35,
      currentUserVote: 0,
    },
    {
      id: 2,
      title: "Hi! My name is Who...",
      user: "u/nich",
      description: "Slim Shady Bitch",
      voteCount: 99,
      currentUserVote: -1,
    },
    {
      id: 3,
      title: "Maria Carrey!",
      user: "u/quinn",
      description: "How do you spell her name?",
      voteCount: 4,
      currentUserVote: 0,
    },
    {
      id: 4,
      title: "Nick bro",
      user: "u/kawwaskai",
      description: "Yo yo....",
      voteCount: -5,
      currentUserVote: 0,
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
