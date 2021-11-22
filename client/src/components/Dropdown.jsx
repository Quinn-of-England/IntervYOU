import React, { useState } from "react";
import styled from "styled-components";

import { DownArrow } from "../utils/icons";

const Dropdown = ({ dropdownOptions, setPostSortType }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const updateDropdownState = () => {
    setOpenDropdown((prevState) => !prevState);
  };

  const [selectedOption, setSelectedOption] = useState("Newest");
  const updateSelectedOption = (e) => {
    setPostSortType(e.target.id);
    setSelectedOption(e.target.innerText);
  };

  return (
    <StyledDropdown onClick={updateDropdownState}>
      <div className="dropdown-select">
        <div className="dropdown-title"> {selectedOption} </div>
        <DownArrow />
      </div>

      {openDropdown && (
        <div className="dropdown-content">
          {dropdownOptions.map(({ id, value }) => (
            <div
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

    width: 150px;
    height: 40px;

    border: 1px solid #dce1f0;
    border-radius: 5px;
    
    background-color: #fff;
    cursor: pointer;


  .dropdown-select {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 5px;

    svg {
      width: 12px;
      preserveAspectRatio="xMidYMid meet";
    }
  }

  .dropdown-title {
    font-family: Tahoma, sans-serif;
    font-size: 16px;
  }

  .dropdown-content {
    position: absolute;
    
    margin-top: 12px;
    width: 150px;
    box-shadow: 0px 8px 16px 0px #dce1f01a;
    border: 1px solid #dce1f0;
    border-radius: 5px;
    background: #fff;
    z-index: 1;

    .dropdown-option {
        background-color: #fff;
        padding: 10px 15px;
    }

    .selected {
        background-color: #2196f310;
    }
  }
`;

export default Dropdown;
