import React, { useState } from "react";
import styled from "styled-components";

import "../../utils/global.css";

const CommentField = ({ label, errMessage }) => {
  const [input, setInput] = useState("");

  console.log(input);

  return (
    <StyledInput>
      <div className="title-validation">
        <label className="styled-label">{label}</label>
        <label className="styled-err">{errMessage}</label>
      </div>

      <div className="input-validation">
        <input
          type="text"
          className="styled-input"
          onChange={({ target: { value } }) => setInput(value)}
        />
      </div>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 400px;

  .styled-label,
  .styled-err {
    padding: 3px 6px;

    font-family: "Noto Sans JP", sans-serif;
    text-transform: uppercase;
  }

  .styled-label {
    font-size: 12px;
    color: #acb0b6;
  }

  .styled-err {
    white-space: nowrap;
    font-size: 10px;
    color: #ee595d;
  }

  .title-validation {
    display: flex;
    justify-content: space-between;
  }

  .input-validation {
    display: flex;
    width: 100%;

    border-radius: 5px;
    border: 1px solid #dce1f0;

    &:focus-within {
      border-color: #1a73e8;
    }
  }

  .styled-input {
    padding: 0 8px;

    width: 92%;
    height: 35px;
    outline: none;
    border: none;
    background: none;
  }
`;

export default CommentField;
