import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubmitCommentButton = ({btnText}) => {
  return (
    <StyledSubmitCommentButton >
        <Link to={"/comment"} className="comment-link">
            <div className="btn-text"> {btnText} </div>
        </Link>
    </StyledSubmitCommentButton>
  );
};

const StyledSubmitCommentButton = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: space-between;

  padding: 4px 4px 4px 4px;

  color: #fff;

  width: 120px;
  min-height: 100%;
  top: 50%;
  border: none;
  border-radius: 30px;
  background: #4a81fd;
  box-shadow: 0 3px 8px #4a81fd1a;

  cursor: pointer;

  &:hover {
    background: #2f69eb;
    box-shadow: 0 3px 8px #2f69eb1a;
  }

  .btn-text {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    font-family: "Trebuchet MS", sans-serif;
  }

`;

export default SubmitCommentButton;