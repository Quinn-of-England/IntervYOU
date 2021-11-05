import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { COLORS } from "../../utils/customStyles";

const Login = () => {
  //Update Current Link & User Profile
  const history = useHistory();

  //Use State Hook to Update Form Details
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  //Error Messages from Form Validation
  const [errMsgs, setErrorMsgs] = useState([]);

  const updateDetails = ({ target: { id, value } }) =>
    setDetails({ ...details, [id]: value });

  //Sends Form Details to Backend + Prevent Refresh on Submittion
  const onPost = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:5000/api/users/login`, details)
      .then((res) => {
        history.push("/");
        localStorage.setItem("Authorization", res.data.token);
        console.log("User Successfully Logged In!");
        setErrorMsgs([]);
      })
      .catch((err) => setErrorMsgs([err.response.data]));
  };

  return (
    <StyledLogin>
      <p className="title"> Login </p>

      {
        /* ERROR MESSAGES */
        errMsgs.length !== 0 &&
          errMsgs.map((i) => (
            <p className="missingInForm" key={i}>
              {i}
            </p>
          ))
      }

      <div class="login-details">
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

      <Link to="/">
        <button type="submit" className="btn-login" onClick={onPost}>
          Login
        </button>
      </Link>

      <div className="signup-link">
        <span className="login-account"> Don't have an Account? </span>
        <Link to="/signup">
          <span className="signup-page"> Sign Up </span>
        </Link>
      </div>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid ${COLORS.superLightGrey};
  border-radius: 20px;

  padding: 15px 0 30px;
  margin: 4rem;

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

    width: 90%;

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
    margin: 0.75rem 0 1rem;

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
    color: black;
    background: rgba(255, 0, 0, 0.6);
    border-radius: 10px;

    font-size: 0.9rem;
    font-weight: 650;
    font-family: "Antonio", sans-serif;

    padding: 0.75rem 2.5rem;
    margin-bottom: 0.3rem;
  }
`;

export default Login;
