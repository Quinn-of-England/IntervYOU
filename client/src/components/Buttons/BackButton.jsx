import React from "react";
import styled from "styled-components";

import { LeftArrowIcon } from "../utils/icons";

const BackButton = ({ btnText, handleClick }) => {
  return (
    <StyledBackButton onClick={handleClick}>
      <div className="svg-holder">
        <LeftArrowIcon />
      </div>
      <div className="btn-text"> {btnText} </div>
    </StyledBackButton>
  );
};

const StyledBackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 6px 6px 8px;

  width: 150px;

  color: #2f69eb;

  border: 1px solid #4a81fd;
  border-radius: 10px;
  box-shadow: 0 3px 8px #4a81fd1a;

  cursor: pointer;

  .btn-text {
    font-size: 16px;
    font-family: "Trebuchet MS", sans-serif;
    padding-right: 10px;
  }

  .svg-holder {
    display: flex;
    align-items: center;
    justify-content: space-between;

    fill: #fff;
    color: #0b5ac4;

    padding: 8px;
  }
`;

export default BackButton;
