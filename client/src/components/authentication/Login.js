import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { COLORS } from "../../utils/customStyles";
import { IP, SERVER_PORT } from "../../utils/types.js";

import Toast from "../Toast/Toast";

import { useDispatch } from "react-redux";
import { addAuthState } from "../../actions/auth";

const Login = () => {
  //Update Current Link & User Profile
  const history = useHistory();

  //Use State Hook to Update Form Details
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  // Success & Error Messages from Form Validation
  const [toastMsg, setToastMsg] = useState({ type: "", msg: "", count: 0 });

  const updateDetails = ({ target: { id, value } }) =>
    setDetails({ ...details, [id]: value });

  //Sends Form Details to Backend + Prevent Refresh on Submittion
  const onPost = (event) => {
    event.preventDefault();

    axios
      .post(`${IP}:${SERVER_PORT}/api/users/login`, details)
      .then((res) => {
        localStorage.setItem("Authorization", res.headers.authorization);

        setToastMsg({
          type: "SUCCESS",
          msg: res.data.message,
          count: toastMsg.count + 1,
        });

        // Dispatch Action to Update Auth State
        const { userId, userName } = res.data;
        dispatch(addAuthState(userId, userName));

        // Display Success Message Before Changing Pages
        setTimeout(() => history.push("/"), 1000);
      })
      .catch((err) => {
        setToastMsg({
          type: "ERROR",
          msg: err.response.data.message,
          count: toastMsg.count + 1,
        });
      });
  };

  return (
    <StyledLogin>
      <div className="login-container">
        <p className="title"> Login </p>

        {/* Toast Messages */}
        {toastMsg && toastMsg.msg !== "" && (
          <Toast
            toastType={toastMsg.type}
            toastMsg={toastMsg.msg}
            toastCount={toastMsg.count}
          />
        )}

        <div className="login-details">
          <input
            id="username"
            type="username"
            className="login-input"
            placeholder="Username"
            onChange={updateDetails}
            required
          />
          <input
            id="password"
            type="password"
            className="login-input"
            placeholder="Password"
            onChange={updateDetails}
            required
          />
        </div>

        <button type="submit" className="btn-login" onClick={onPost}>
          Login
        </button>

        <div className="signup-link">
          <span className="login-account"> Don't have an Account? </span>
          <Link to="/signup">
            <span className="signup-page"> Sign Up </span>
          </Link>
        </div>
      </div>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 6rem;

  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px 10px 40px;

    border-radius: 20px;
    border: 1px solid ${COLORS.cloudWhite};
    box-shadow: 0px 13px 27px -5px rgba(50, 50, 93, 0.25),
      0px 8px 16px -8px rgba(0, 0, 0, 0.3);
  }

  .login {
    display: flex;
    padding: 0 2.5rem;
  }

  .title {
    font-size: 2rem;
    font-weight: 500;
    font-style: italic;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${COLORS.blueMinded};

    padding: 1.5rem 0 0.75rem;
  }

  .login,
  .login-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 400px;
  }

  .login {
    border-radius: 20px;
    box-shadow: 4px 4px 10px ${COLORS.superLightGrey};
    background: ${COLORS.cloudWhite};
  }

  .login-account {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    color: black;
  }

  .login-input {
    display: inline-block;

    width: 70%;

    border: 1px solid #ccc;
    border-radius: 10px;

    margin: 5px;
    padding: 12px 20px;
  }

  .btn-login {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: none;
    border-radius: 10px;

    padding: 0.5rem 5rem;
    margin: 1.5rem 0 1rem;

    font-size: 1.3rem;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;

    color: white;
    background: ${COLORS.lighterBlue};
    transition: 0.3s ease-in-out;

    &:hover {
      letter-spacing: 0;
      background: ${COLORS.blueMinded};
      transition: 0.3s ease-in-out;
    }
  }

  .signup-page {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    text-decoration: underline;
    color: ${COLORS.blueMinded};
  }

  .form-inputs {
    border: none;
    outline: none;

    border-radius: 10px;

    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Open Sans", sans-serif;

    padding: 0.75rem 0.5rem;
  }

  .login-labels {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 1rem;
    border-radius: 10px;

    background: white;
    margin: 0.5rem 0;
  }

  .missingInForm {
    display: flex;
    align-items: center;
    gap: 10px;

    color: #8d021f;
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid rgba(255, 0, 0, 0.6);
    border-radius: 10px;

    font-size: 0.9rem;
    font-weight: 450;
    font-family: "Antonio", sans-serif;

    padding: 0.5rem 2rem;
    margin-bottom: 0.3rem;

    svg {
      width: 18px;
    }
  }

  .successInForm {
    display: flex;
    align-items: center;
    gap: 10px;

    color: #0b6623;
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid #0b6623;
    border-radius: 10px;

    font-size: 0.9rem;
    font-weight: 450;
    font-family: "Antonio", sans-serif;

    padding: 0.5rem 2rem;
    margin-bottom: 0.3rem;

    svg {
      width: 18px;
    }
  }
`;

export default Login;
