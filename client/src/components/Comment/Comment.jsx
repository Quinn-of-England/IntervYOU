import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import styled from "styled-components";
import { COLORS } from "../../utils/customStyles";
import { IP, SERVER_PORT } from "../../utils/types.js";


const userPath = `${IP}:${SERVER_PORT}/api/users/`;
const postPath = `${IP}:${SERVER_PORT}/api/posts/`;
const commentPath = `${IP}:${SERVER_PORT}/api/comments/`;

const Comment = ({ user, content, date }) => {
  let userId = "";
  if (localStorage.getItem("Authorization")) {
    userId = jwt(localStorage.getItem("Authorization"))._id;
  }
  
  const formatDate = () => {
    return new Date(date).toLocaleDateString();
  }

  return (
    <StyledComment>
      <div className="comment-content">

        <div className="comment-user-date">
          <div className="comment-user">{user}</div>
          <div className="user-date-seperator">•</div>
          <div className="comment-date">{formatDate()}</div>
        </div>

        <div className="comment-description"> {content} </div>
      </div>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  display: flex;
  padding: 5px 10px;
  margin: auto;
  border-radius: 10px;
  border: solid 1px ${COLORS.inputBorder};
  box-shadow: 0 3px 8px ${COLORS.inputShadow};

  background: #fff;

  &:hover {
    border: solid 1px #969696;
  }

  .comment {
    &-content {
      margin: 0 20px;
      width: 100%;
    }
    &-user-date {
      display: flex;
      
      .comment-date,
      .comment-user {
        font-size: 14px;
        color: ${COLORS.fadedGrey};
        padding-bottom: 8px;
      }
      
      .user-date-seperator {
        font-size: 14px;
        color: ${COLORS.fadedGrey};
        padding: 0 8px;
      }
    }

    &-description {
      font-size: 16px;
      font-weight: 200;
      font-family: "Noto Sans JP", sans-serif;
      padding-bottom: 8px;
    }
  }
`;

export default Comment;
