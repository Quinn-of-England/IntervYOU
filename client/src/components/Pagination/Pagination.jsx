import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PreviousIcon, NextIcon } from "../../utils/icons";

const Pagination = ({ totalPages, currPage, setCurrPage }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pageArr = [];
    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      pageArr.push(pageNum);
    }

    setPages(pageArr);
  }, [totalPages]);

  return (
    <StyledPagination>
      <div className="pagination-container">
        {currPage > 1 && (
          <div
            className="action-pages"
            onClick={() => setCurrPage((prevPage) => prevPage - 1)}
          >
            <PreviousIcon />
            Prev
          </div>
        )}
        {pages.map((pageNum) => (
          <div
            key={pageNum}
            className={pageNum === currPage ? "selected-page" : "regular-page"}
            onClick={() => setCurrPage(pageNum)}
          >
            {pageNum}
          </div>
        ))}
        {currPage < totalPages && (
          <div
            className="action-pages"
            onClick={() => setCurrPage((prevPage) => prevPage + 1)}
          >
            Next
            <NextIcon />
          </div>
        )}
      </div>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  font-family: Tahoma, sans-serif;

  .pagination-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    background: #fff;

    padding: 0 10px;

    position: relative;
    width: fit-content;
    height: fit-content;
    left: 50%;
    transform: translateX(-50%);

    border: 1px solid #dce1f0;
    border-radius: 20px;
  }

  .action-pages {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    padding: 10px;
    margin: 10px;

    width: 80px; 

    text-transform: uppercase;

    border: 1px solid #006cbd;
    border-radius: 5px;

    svg {
        width: 12px;
        preserveAspectRatio="xMidYMid meet";
    }
  }

  .selected-page,
  .regular-page {
    padding: 10px;
    margin: 0 5px;
  }

  .selected-page {
    border-radius: 10px;
    background-color: #006cbd;

    color: #edeff1;
  }
`;

export default Pagination;
