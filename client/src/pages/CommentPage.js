import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Comments from "../components/Comment/Comments";
import { useLocation } from "react-router-dom";
import { IP, SERVER_PORT } from "../utils/types.js";
import Post from "../components/Post/Post";

const baseUrl = `${IP}:${SERVER_PORT}`;

const CommentPage = () => {
  const [postId, setPostId] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const { pathname } = useLocation();

  useEffect(() => {
    setPostId(() => pathname.split(/[//]/)[1]);
  }, [pathname]);

  useEffect(() => {
    //Ensure Post Id is Defined Before Making Axios Request to Get Post
    if (postId !== "") {
      axios
        .get(`${baseUrl}/api/posts/${postId}`)
        .then((res) => {
          console.log(res);
          setSelectedPost(() => res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [postId]);

  return (
    <StyledCommentScreen>
      {selectedPost != null && (
        <Post
          postId={selectedPost._id}
          title={selectedPost.title}
          userName={selectedPost.userName}
          group={selectedPost.group}
          content={selectedPost.content}
          likes={selectedPost.likes}
          files={selectedPost.files}
        />
      )}
      <div className="comment-container">
        <Comments 
          postId={postId}
        />
      </div>
    </StyledCommentScreen>
  );
};

const StyledCommentScreen = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 50px;
  margin-top: 20px;

  .content-container {
    margin-top: 100px;
  }
`;

export default CommentPage;
