import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";
import Pagination from "../Pagination/Pagination";
import { IP, SERVER_PORT } from "../../utils/types.js";

import DeleteModal from "../DeleteModal";

const postUrl = `${IP}:${SERVER_PORT}/api/posts/`;
const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [numPages, setNumPages] = useState(1);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    axios
      .get(postUrl, {
        params: { sortBy: "date", page: currPage, size: 2 },
      })
      .then((res) => {
        setAllPosts(res.data.posts);
        setNumPages(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currPage]);

  //Modal Logic
  const [showModal, setShowModal] = useState(false);
  const [deletedPostId, setDeletedPostId] = useState({ postId: "" });

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
      })
      .catch((err) => console.log(err.response));
      //.catch((err) => console.log(err.message));
  };

  return (
    <>
      <DeleteModal
        deleteType="Post"
        showModal={showModal}
        updateModalState={updateModalState}
        deleteById={deletePostById}
      />
      {allPosts.length > 0 &&
        allPosts.map(({ _id, ...post }) => (
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
    </>
  );
};

export default Posts;
