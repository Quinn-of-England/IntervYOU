import React from 'react'
import { useLocation, useHistory } from "react-router";
import styled from "styled-components";
import SubmitCommentButton from "../Buttons/SubmitCommentButton";
import CommentField from "../Inputs/CommentField";
// import Comments from '../../actions/comments';

const CommentForm = () => {
    const location = useLocation();
    const history = useHistory();

    const onCreateComment = (e) => {
        e.preventDefault();
        //TODO add axios post when server comments are done
        history.push(location.pathname + "/comment");
    };

    return (
        <StyledCommentForm>
            <CommentField/>
            <div className="post-actions">
                <SubmitCommentButton btnText="Add Comment" handleClick={onCreateComment} />
            </div>
        </StyledCommentForm>
    )
}

const StyledCommentForm = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;

height: 50px;
width: 100%;

padding-right: 30px;
padding-left: 30px


.post-actions {
    padding-left: 10px;
    justify-content: flex-end;
    align-items: flex-end;
}
`

export default CommentForm
