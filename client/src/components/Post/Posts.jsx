import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";
import Pagination from "../Pagination/Pagination";
import { IP, SERVER_PORT } from "../../utils/types.js";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [numPages, setNumPages] = useState(1);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${IP}:${SERVER_PORT}/api/posts/`, {
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

  return (
    <>
      {allPosts.length > 0 &&
        allPosts.map(({ _id, ...post }) => (
          <Post key={_id} postId={_id} {...post} />
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
