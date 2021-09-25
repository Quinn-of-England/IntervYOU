import React, { useState } from "react";
import styled from "styled-components";

import { SearchIcon } from "../utils/icons";

import "../utils/global.css";
import { COLORS } from "../utils/customStyles";

const SearchBar = ({ placeHolder, applyFilter }) => {
  const [filter, setFilter] = useState("");

  return (
    <StyledSearchBar>
      <input
        type="text"
        placeholder={placeHolder ?? "Search"}
        onChange={({ target: { value } }) => setFilter(value)}
        onKeyDown={({ code }) => code === "Enter" && applyFilter(filter)}
        className="search-input"
      />
      <div className="search-icon" onClick={() => applyFilter(filter)}>
        <SearchIcon />
      </div>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  // Search Bar Div Container
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 350px;

  margin: 10px;
  padding-right: 6px;

  border-radius: 30px;
  border: 1px solid ${COLORS.inputBorder};
  box-shadow: 0 3px 8px ${COLORS.inputShadow};

  // Search Bar Text Input
  .search-input {
    outline: none;
    border: none;

    font-size: 14px;
    font-weight: 400;
    font-family: "Open Sans";

    padding: 8px 0;
    padding-left: 20px;

    width: 90%;
    border-radius: 30px 0 0 30px;

    color: #253048;

    &::placeholder {
      color: #999999;
    }
  }

  // Search Icon
  .search-icon {
    display: flex;
    align-items: center;

    padding: 6px;

    svg {
      height: 18px;
      width: 18px;

      fill: #0b5ac4;
    }
  }

  &:active,
  &:focus-within {
    border: 1px solid #0b5ac4;
    box-shadow: 0 3px 8px #0b5ac41a;

    .search-icon {
      border-radius: 50%;
      background: #0b5ac4;

      &:hover {
        cursor: pointer;
        background: #084492;
      }

      svg {
        fill: #fff;
      }
    }
  }
`;

export default SearchBar;
