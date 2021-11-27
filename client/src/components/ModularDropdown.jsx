import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { DownArrow } from "../utils/icons";

const ModularDropdown = ({ dropdownOptions, setPostGroup }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const updateDropdownState = () => {
    setOpenDropdown((prevState) => !prevState);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const updateSelectedOption = (e) => {
    setSelectedOption(e.target.innerText);
    setPostGroup(e.target.innerText);
  };

  return (
    <StyledDropdown onClick={updateDropdownState}>
      <div className="dropdown-select">
        <div className="dropdown-title"> {selectedOption} </div>
        <DownArrow />
      </div>

      {openDropdown && (
        <div className="dropdown-content">
          {dropdownOptions.map(({id, value }) => (
            <div
              key={id}
              id={id}
              className={
                selectedOption === value
                  ? "dropdown-option selected"
                  : "dropdown-option"
              }
              onClick={updateSelectedOption}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
    position: relative;
    display: inline-block;

    font-family: Tahoma, sans-serif;
    font-size: 16px;

    width: 300px;
    height: 35px;

    border: 1px solid #dce1f0;
    border-radius: 5px;
    
    background-color: #fff;
    cursor: pointer;
    

  .dropdown-select {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 6px;

    svg {
      width: 12px;
      margin-left: 6px;
      preserveAspectRatio="xMidYMid meet";
    }
  }

  .dropdown-title {
    font-family: Tahoma, sans-serif;
    font-size: 16px;
    white-space: nowrap;  
    overflow: hidden;
    text-overflow: ellipsis;
    width: 260px;
  }

  .dropdown-content {
    position: absolute;
    margin-top: 12px;
    width: 400px;
    box-shadow: 0px 8px 16px 0px #dce1f01a;
    border: 1px solid #dce1f0;
    border-radius: 5px;
    background: #fff;
    z-index: 1;

    .dropdown-option {
        white-space: nowrap;  
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: #fff;
        padding: 10px 15px;
    }

    .selected {
        background-color: #2196f310;
    }
  }
`;

export default ModularDropdown;
