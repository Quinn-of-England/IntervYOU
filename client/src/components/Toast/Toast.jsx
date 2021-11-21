import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { SuccessIcon, WarningIcon } from "../../utils/icons";

const Toast = ({ toastType, toastMsg, toastCount }) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }, [toastCount]);

  return (
    <StyledToast showToast={showToast}>
      {toastType === "SUCCESS" ? (
        <p className="success toast">
          <SuccessIcon color={"#0b6623"} />
          <span> {toastMsg} </span>
        </p>
      ) : (
        <p className="err toast">
          <WarningIcon color={"#8D021F"} />
          <span> {toastMsg} </span>
        </p>
      )}
    </StyledToast>
  );
};

const StyledToast = styled.div`
  position: absolute;
  top: 50px;
  left: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;

  z-index: 2;

  .err {
    color: #8d021f;
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid rgba(255, 0, 0, 0.6);
  }

  .success {
    color: #0b6623;
    background: rgba(4, 57, 39, 0.05);
    border: 1px solid #0b6623;
  }

  .toast {
    display: flex;
    align-items: center;
    gap: 10px;

    border-radius: 10px;

    font-size: 0.9rem;
    font-weight: 450;
    font-family: "Antonio", sans-serif;

    padding: 0.5rem 2rem;
    margin: 0.5rem 0.3rem;

    svg {
      width: 18px;
    }

    ${({ showToast }) =>
      showToast
        ? css`
            animation: slideIn 1s;
            transition: 1s ease-in-out;

            // Keep Toast Visible
            transform: translateX(0px);
          `
        : css`
            animation: slideOut 1s;
            transition: 1s ease-in-out;

            // Keep Toast Hidden
            transform: translateX(340px);
          `}
  }

  @keyframes slideIn {
    from {
      visibiliy: hidden;
      opacity: 0;
      transform: translateX(340px);
    }
    to {
      visibiliy: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      visibiliy: visible;
      opacity: 1;
      transform: translateX(0);
    }
    to {
      visibiliy: hidden;
      opacity: 0;
      transform: translateX(340px);
    }
  }
`;

export default Toast;
