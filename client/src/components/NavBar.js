import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import "../utils/global.css";

import { useSelector } from "react-redux";
//import { getAuthState } from "../actions/auth";

const NavBar = () => {
  // Get Path in Url
  const location = useLocation();
  const { pathname } = location;
  const history = useHistory();

  // Check if User is Authenticated
  const [isAuth, setIsAuth] = useState(false);
  const authState = useSelector((state) => state.auth);

  const isWaiting = useRef(true);

  // Update Auth State When Location Changes to Ensure Authorized Access
  // useEffect(() => {
  //   const updateState = async () => {
  //     await dispatch(getAuthState());
  //     setIsWaiting(false);
  //   };

  //   updateState();
  // }, [location.pathname]);

  useEffect(() => {
    // Wait for Dispatch Action to Finish
    if (isWaiting.current) {
      isWaiting.current = false;
      return;
    }

    // If Unauthorized, Redirect to Login
    if (!authState.isAuth) {
      history.push("/login");
    }

    // Update Auth State
    setIsAuth(authState.isAuth);
  }, [authState]);

  // useEffect(async () => {
  //   console.log("update auth");
  //   await dispatch(getAuthState());

  //   console.log(authState);

  //   setIsAuth(authState.isAuth);
  //   console.log(authState.isAuth);
  //   // setIsAuth(authState.isAuth);
  // }, [location.pathname]);

  // Default Nav Items When Not Authenticated
  const defaultNavItems = [
    {
      id: "nav-0",
      item: "Sign Up",
      path: "/signup",
    },
    {
      id: "nav-1",
      item: "Login",
      path: "/login",
    },
  ];

  // Nav Items When Authenticated
  const navItems = [
    {
      id: "nav-0",
      item: "Home",
      path: "/",
    },
    {
      id: "nav-1",
      item: "Feed",
      path: "/feed",
    },
    {
      id: "nav-2",
      item: "Groups",
      path: "/groups",
    },
    {
      id: "nav-3",
      item: "Profile",
      path: "/profile",
    },
    {
      id: "nav-4",
      item: "Logout",
      path: "/logout",
    },
  ];

  return (
    <StyledNavBar>
      <Link className="nav-logo" to="/">
        Interv-You
      </Link>

      <ul className="nav-links">
        {(isAuth ? navItems : defaultNavItems).map(({ id, item, path }) => (
          <Link
            key={id}
            className={path === pathname ? "active-link" : ""}
            to={path}
          >
            <li key={id}>{item}</li>
          </Link>
        ))}
      </ul>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;

  height: 50px;
  width: 100%;

  padding: 0 40px;

  border-bottom: 1px solid #edeff1;
  box-shadow: 0 1px 2px #0000000d, 0 1px 3px #0000000d, 0 2px 3px #0000000d;
  background: #fff;

  .nav-logo {
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
    font-family: "Barlow Condensed";
    letter-spacing: 2px;
    color: #004e7c;
    text-transform: uppercase;
  }

  .nav-links {
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 18px;
    font-weight: 500;
    font-family: "Barlow Condensed";
    color: #fff;

    height: 50px;

    a {
      padding: 5px 25px;
      margin: 0 10px;

      li {
        width: 100%;
        height: 100%;
        color: #000;
      }
    }

    .active-link {
      border-radius: 10px;
      background-color: #006cbd;

      li {
        color: #edeff1;
      }
    }
  }
`;

export default NavBar;
