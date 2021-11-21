import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";
import Pagination from "../Pagination/Pagination";
import { IP, SERVER_PORT } from "../../utils/types.js";
import DeleteModal from "../DeleteModal";

const postUrl = `${IP}:${SERVER_PORT}/api/posts/`;
const commentPath = `${IP}:${SERVER_PORT}/api/comments/`;

const Profile = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [allComments, setAllComments] = useState([]);
  const [numPages, setNumPages] = useState(1);
  const [currPage, setCurrPage] = useState(1);
  const [hasDeleted, setHasDeleted] = useState(false);

  //Modal Logic
  const [showModal, setShowModal] = useState(false);
  const [deletedPostId, setDeletedPostId] = useState({ postId: "" });
  const [deletedCommentId, setDeletedCommentId] = useState({ commentId: "" });

  let userId = "";
  let tokenUserName = "";
  if (localStorage.getItem("Authorization")) {
    const token = jwt(localStorage.getItem("Authorization"));
    userId = token._id;
    tokenUserName = token.name;
  }

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
        setTimeout(function(){
          window.location.reload();
        },100);
        console.log(res.data);
        setHasDeleted(true);
      })
      .catch((err) => console.log(err.response));
  };

  const handleDeleteCommentClick = (deleteCommentId) => {
    // Show Modal
    updateModalState();

    // Save Comment Id to Delete
    setDeletedCommentId({ commentId: deleteCommentId });
  };

  const deleteCommentById = () => {
    setShowModal((prevModalState) => !prevModalState);

    axios
      .delete(commentPath + deletedCommentId.commentId).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    window.location.reload();
  }

  useEffect(() => {
    axios
      .get(commentPath + "user", { params: { page: 1, size:10, userId: userId } }).then((res) => {
        console.log(res);
        setAllComments(() => res.data);
      }).catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    axios
      .get(postUrl + "user", { params: { sortBy: 'date', page: currPage, size: 10, userName: tokenUserName } }).then((res) => {
        setAllPosts(res.data.posts);
        setNumPages(res.data.totalPages);
        console.log(tokenUserName);
        console.log(res.data.posts);
      }).catch((err) => {
        console.log(err);
      });
  }, [tokenUserName, currPage, hasDeleted]);

  return (
    <div>
      <div>Posts</div>
      <DeleteModal
        deleteType="Post"
        showModal={showModal}
        updateModalState={updateModalState}
        deleteById={deletePostById}
      />
      {allPosts.length > 0 && allPosts.map(({_id, ...post}) => (
        <Post
          key={_id}
          postId={_id}
          {...post}
          handleDelete={handleDeletePostClick}
        />
      ))}
      {numPages > 1 && (
        <Pagination
          totalPages={numPages}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      )}

      <div>Comments</div>
      <DeleteModal
        deleteType="Comment"
        showModal={showModal}
        updateModalState={updateModalState}
        deleteById={deleteCommentById}
      />
      {allComments?.length > 0 && allComments.map(({ _id, ...comment }) => (
        <Comment key={_id}
          commentId={_id}
          postId={comment.post._id}
          {...comment}
          handleDelete={handleDeleteCommentClick}
        />
      ))}

      <div>Profile</div>

      <div>Username:</div>
      <div>Email:</div>

      <div>Posts:</div>

      <div>Comments:</div>
    </div>
  );
};

export default Profile;
