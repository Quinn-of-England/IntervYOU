import React from "react";
import styled from "styled-components";

import { RightArrowIcon } from "../../utils/icons";

const AddButton = ({ btnText, handleClick }) => {
  return (
    <StyledAddButton handleClick={handleClick}>
      <div className="btn-text"> {btnText} </div>
      <div className="svg-holder">
        <RightArrowIcon />
      </div>
    </StyledAddButton>
  );
};

const StyledAddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 6px 6px 22px;

  color: #fff;

  width: 120px;

  border: none;
  border-radius: 30px;
  background: #4a81fd;
  box-shadow: 0 3px 8px #4a81fd1a;

  cursor: pointer;

  &:hover {
    background: #2f69eb;
    box-shadow: 0 3px 8px #2f69eb1a;
  }

  .btn-text {
    font-size: 18px;
    font-weight: bold;
    font-family: "Trebuchet MS", sans-serif;
  }

  .svg-holder {
    display: flex;
    align-items: center;
    justify-content: space-between;

    fill: #fff;

    padding: 10px;
    margin-right: 10px;

    border-radius: 50%;
    background: #2f69eb;
  }

  &:hover .svg-holder {
    background: #0b5ac4;
  }
`;

export default AddButton;
