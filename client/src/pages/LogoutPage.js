import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { removeAuthState } from "../actions/auth";

const LogoutPage = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    // Redirect to Login After 1s
    // Dispatch Action to Update Auth State for Log Out
    setTimeout(() => {
      history.push("/login");
      dispatch(removeAuthState());
    }, 1000);

    // Clear Access and Refresh Tokens
    localStorage.removeItem("Authorization");
    sessionStorage.removeItem("refreshToken");
    // eslint-disable-next-line
  }, []);

  return (
    <StyledLogoutPage>
      <div className="logging-out-title">Logging Out...</div>
    </StyledLogoutPage>
  );
};

const StyledLogoutPage = styled.div`
  width: 100vw;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 80px 0 60px 0;

  .logging-out-title {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-family: "Antonio", sans-serif;
  }
`;

export default LogoutPage;
