import React from "react";
import styled from "styled-components";

import "../../utils/global.css";

const InputField = ({
  inputId,
  label,
  errMessage,
  defaultText,
  setPostAttribute,
}) => {
  return (
    <StyledInput>
      <div className="title-validation">
        <label className="styled-label">{label}</label>
        <label className="styled-err">{errMessage}</label>
      </div>

      <div className="input-validation">
        <input
          id={inputId ?? ""}
          type="text"
          className="styled-input"
          defaultValue={defaultText ?? ""}
          onChange={setPostAttribute}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="input-status-icon"
        ></svg>
      </div>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

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

  .input-status-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px 5px;
  }
`;

export default InputField;
