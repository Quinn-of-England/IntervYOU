import React from "react";
import styled from "styled-components";

const DeleteButton = ({ btnText, handleClick }) => {
  return (
    <StyledDeleteButton onClick={handleClick}>
      <div className="btn-text"> {btnText} </div>
    </StyledDeleteButton>
  );
};

const StyledDeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;

  color: #d6292a;

  width: 120px;

  border-radius: 20px;
  border: 1px solid #d6292a;
  box-shadow: 0 3px 8px #d6292a1a;

  cursor: pointer;

  &:hover {
    color: #8d021f;
    border-color: #8d021f;
    box-shadow: 0 3px 8px #8d021f1a;
  }

  .btn-text {
    font-size: 18px;
    font-weight: bold;
    font-family: "Trebuchet MS", sans-serif;
  }
`;

export default DeleteButton;
