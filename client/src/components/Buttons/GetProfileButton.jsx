import React from "react";
import styled from "styled-components";

import { ShareLinkedinIcon } from "../../utils/icons";

const GetProfileButton = ({ btnText, handleClick, width }) => {
  return (
    <StyledGetProfileButton width={width} onClick={handleClick}>
      <div className="btn-text"> {btnText} </div>
        <ShareLinkedinIcon color="#fff" />
    </StyledGetProfileButton>
  );
};

const StyledGetProfileButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3px 6px;

  color: #fff;

  width: 120px;

  border: none;
  border-radius: 15px;
  background: #4a81fd;
  box-shadow: 0 3px 8px #4a81fd1a;

  cursor: pointer;

  &:hover {
    background: #2f69eb;
    box-shadow: 0 3px 8px #2f69eb1a;
  }

  .btn-text {
    font-size: 14px;
    font-weight: bold;
    font-family: "Trebuchet MS", sans-serif;
  }
`;

export default GetProfileButton;
