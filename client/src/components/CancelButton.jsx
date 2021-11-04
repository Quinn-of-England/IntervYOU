import React from "react";
import styled from "styled-components";

const CancelButton = ({ btnText, handleClick }) => {
  return (
    <StyledCancelButton onClick={handleClick}>
      <div className="btn-text"> {btnText} </div>
    </StyledCancelButton>
  );
};

const StyledCancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 6px;

  color: #b2b2b2;

  width: 120px;

  border-radius: 20px;
  border: 1px solid #b2b2b2;
  box-shadow: 0 3px 8px #b2b2b21a;

  cursor: pointer;

  &:hover {
    color: #878a8c;
    border-color: #878a8c;
    box-shadow: 0 3px 8px #878a8c1a;
  }

  .btn-text {
    font-size: 18px;
    font-weight: bold;
    font-family: "Trebuchet MS", sans-serif;
  }
`;

export default CancelButton;
