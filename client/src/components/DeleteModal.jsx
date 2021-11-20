import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import CancelButton from "./PostForm/CancelButton";
import DeleteButton from "./Buttons/DeleteButton";

import { COLORS } from "../utils/customStyles";

const DeleteModal = ({
  deleteType,
  showModal,
  updateModalState,
  deletePostById,
  deleteCommentById,
}) => {
  const modalRef = useRef();
  const waitRef = useRef(false);

  useEffect(() => {
    // Prevent Modal from Closing on Click of Delete Icon
    if (!waitRef.current) {
      return (waitRef.current = true);
    }

    const handleClick = (e) => {
      console.log(modalRef.current);
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        updateModalState();
      }
    };

    document.addEventListener("click", handleClick);

    // Event Listener Cleanup Function
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {showModal && (
        <StyledModal>
          <div
            className="modal-container"
            ref={(el) => (modalRef.current = el)}
          >
            <span className="delete-title">Delete {deleteType}</span>
            <span className="delete-question">
              Are you sure you want to delete this {deleteType}? If you don't,
              press the cancel button.
            </span>
            <span className="delete-warning">
              <b className="warning-title">WARNING:</b> Once the delete is
              complete, the delete cannot be undone.
            </span>
            <div className="delete-actions">
              <CancelButton btnText="CANCEL" handleClick={updateModalState} />
              <DeleteButton btnText="DELETE" handleClick={deleteCommentById} />
            </div>
          </div>
        </StyledModal>
      )}
    </>
  );
};

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Tahoma, sans-serif;

  width: 100vw;
  height: 100%;
  min-height: 100vh;

  // Semi Transparent Modal Background
  background: #c8c8c8cd;

  z-index: 2;

  .modal-container {
    display: flex;
    flex-direction: column;

    width: 350px;
    height: 400px;

    padding: 40px 30px;

    border-radius: 12px;
    background-color: white;
    box-shadow: #0000001d 0 4px 16px;
  }

  .delete-title {
    font-size: 25px;
    margin-bottom: 30px;

    text-decoration: underline wavy ${COLORS.lighterBlue};
    -webkit-text-decoration: underline wavy ${COLORS.lighterBlue};
    text-underline-offset: 0.5rem;
  }

  .delete-question {
    font-size: 18px;
    margin-bottom: auto;
  }

  .delete-warning {
    font-size: 14px;
    margin-bottom: 40px;
  }

  .warning-title {
    color: red;
  }

  .delete-actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export default DeleteModal;
