import React from 'react';
import styled from "styled-components";
import { COLORS } from "../../utils/customStyles";

const Comment = ({user, description}) => {
    return (
        <StyledComment>
            <div className="comment-content">
                <div className="comment-user"> {user} </div>
                <div className="comment-description"> {description} </div>
            </div>
        </StyledComment>
    )
}

const StyledComment = styled.div`
display: flex;
padding: 5px 10px;
margin: auto;
width: 95%%;
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
      &-user {
        color: ${COLORS.fadedGrey};
        font-size: 14px;
        padding-bottom: 8px;
      }
      &-description {
        font-size: 16px;
        font-weight: 200;
        font-family: "Noto Sans JP", sans-serif;
        padding-bottom: 8px;
      }
  }

`

export default Comment
