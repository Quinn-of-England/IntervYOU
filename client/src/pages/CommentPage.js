import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Comments from "../components/Comment/Comments";
import { useLocation, useHistory } from "react-router-dom";
import { IP, SERVER_PORT } from "../utils/types.js";
import Post from "../components/Post/Post";

import DeleteModal from "../components/DeleteModal";

const baseUrl = `${IP}:${SERVER_PORT}`;
const postUrl = `${IP}:${SERVER_PORT}/api/posts/`;

const CommentPage = () => {
  const [postId, setPostId] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [hasNewComments, setHasNewComments] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setPostId(() => pathname.split(/[//]/)[1]);
  }, [pathname]);

  //Modal Logic
  const [showModal, setShowModal] = useState(false);
  const [deletedPostId, setDeletedPostId] = useState({ postId: "" });

  const history = useHistory();

  const updateModalState = () => {
    setShowModal((prevModalState) => !prevModalState);
  };

  const handleDeletePostClick = (deletePostId) => {
    // Show Modal
    updateModalState();

    // Save Post Id to Delete
    setDeletedPostId({ postId: deletePostId });
  };

  const deletePostById = () => {
    setShowModal((prevModalState) => !prevModalState);

    console.log(`${postUrl}${deletedPostId.postId}`);
    axios
      .delete(`${postUrl}${deletedPostId.postId}`)
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => console.log(err.response));
      //.catch((err) => console.log(err.message));
  };


  useEffect(() => {
    //Ensure Post Id is Defined Before Making Axios Request to Get Post
    if (postId) {
      axios
        .get(`${baseUrl}/api/posts/${postId}`)
        .then((res) => {
          setSelectedPost(() => res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [postId]);

  return (
    <StyledCommentScreen>
        <DeleteModal
        deleteType="Post"
        showModal={showModal}
        updateModalState={updateModalState}
        deleteById={deletePostById}
        />
      {selectedPost != null && (
        <Post
          postId={selectedPost._id}
          title={selectedPost.title}
          userName={selectedPost.userName}
          group={selectedPost.group}
          content={selectedPost.content}
          likes={selectedPost.likes}
          files={selectedPost.files}
          handleDelete={handleDeletePostClick}
          setHasNewComments={setHasNewComments}
        />
      )}
      <div className="comment-container">
        <Comments postId={postId} hasNewComments={hasNewComments} commentSearchType={"post"} />
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
