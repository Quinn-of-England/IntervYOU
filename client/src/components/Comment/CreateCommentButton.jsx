import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CommentsIcon } from "../../utils/icons";

const CreateCommentButton = () => {
    return (
        <StyledCommentButton>
            <Link to={"/comment"} className="comment-link">
                <div className="btn-comment"> 
                    <CommentsIcon />
                    <span> Comments </span>
                </div>
            </Link>
        </StyledCommentButton>
    );
};

const StyledCommentButton = styled.div`
.btn-comment {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 5px 10px;
    border-radius: 18px;
    font-weight: 150;
    color: #a9a9a9;

    span {
      padding-left: 8px;
    }

    &:hover {
      cursor: pointer;
      background: #e8e8e8;
    }
  }

`

export default CreateCommentButton
