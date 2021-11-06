import React from 'react'
import { useLocation, useHistory } from "react-router";
import styled from "styled-components";
import AddButton from "./AddButton";
import InputField from "./InputField";
import CancelButton from "./CancelButton";

const CommentForm = () => {
    const location = useLocation();
    const history = useHistory();

    const onCreateComment = (e) => {
        e.preventDefault();
    
        history.push(location.pathname + "/");
    };

    return (
        <StyledCommentForm>
            <div className="create-form-title"> Create a comment </div>
            <InputField label="Title" errMessage="Required *" />
            <InputField label="Content" errMessage="Required" />
            <div className="post-actions">
                <CancelButton btnText="CANCEL" handleClick={() => history.push("/")} />
                <AddButton btnText="COMMENT" handleClick={onCreateComment} />
            </div>
        </StyledCommentForm>
    )
}

const StyledCommentForm = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-center: center;

background: #fff;
border-radius: 20px;

padding: 20px;
margin: auto;

.create-form-title {
  font-size: 24px;
  font-family: "Noto Sans JP", sans-serif;

  margin: 5px 10px;
}

.post-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
}
`

export default CommentForm
