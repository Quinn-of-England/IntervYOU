import React, { useState } from "react";
import styled from "styled-components";

import "../../utils/global.css";

const InputField = ({ label, errMessage, setPostAttribute }) => {
  const [input, setInput] = useState("");
  // const [isValidInput, setIsValidInput] = useState(true);

  // TODO; Set up Logic, Added this line to avoid warnings
  //setIsValidInput(false);
  console.log(input);

  return (
    <StyledInput>
      <div className="title-validation">
        <label className="styled-label">{label}</label>
        {/* {input && !isValidInput && ( */}
        <label className="styled-err">{errMessage}</label>
        {/* )} */}
      </div>

      <div className="input-validation">
        <input
          type="text"
          className="styled-input"
          onChange={setPostAttribute}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="input-status-icon"
        >
          {/* {input &&
            (isValidInput ? (
              <path
                fill="#5dca8e"
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"
              />
            ) : (
              <path
                fill="#ee595d"
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"
              />
            ))} */}
        </svg>
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
