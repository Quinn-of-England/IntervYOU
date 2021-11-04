import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CreatePostIcon } from "../utils/icons";

const CreatePostButton = () => {
  return (
    <StyledPostButton>
      <Link to={"/post"} className="post-link">
        <div className="btn-title"> Create a post </div>
        <CreatePostIcon />
      </Link>
    </StyledPostButton>
  );
};

const StyledPostButton = styled.div`
  // Create Button Container
  width: 150px;

  margin: 10px;
  padding-right: 15px;

  border-radius: 30px;
  border: 1px solid #0b5ac4;
  box-shadow: 0 3px 8px #0b5ac41a;
  cursor: pointer;

  //Link to Post
  .post-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // Create Post Btn Text
  .btn-title {
    color: #0b5ac4;
    font-size: 14px;
    font-weight: 400;
    font-family: "Open Sans";

    padding: 8px 0;
    padding-left: 20px;

    //width: 90%;
  }

  // Create Icon
  svg {
    height: 18px;
    width: 18px;

    fill: #0b5ac4;
  }

  &:hover {
    background: #fff;
  }
`;

export default CreatePostButton;
