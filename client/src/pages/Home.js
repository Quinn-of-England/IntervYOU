import React from "react";
import styled from "styled-components";

import Posts from "../components/Post/Posts";

import SearchBar from "../components/Inputs/SearchBar";
import CreateButton from "../components/PostForm/CreateButton";

const Home = () => {
  // const [filteredInput, setFilteredInput] = useState("");
  // const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   if (!isAuth) history.push("/login");
  // }, []);

  // handleSuccessfulAuth(data){
  //   this.props.handleLogin(data);
  // };


  return (
    <StyledHome>
      {/* <Registration handleSuccessfulAuth = {this.handleSuccessfulAuth}/> */}
      <div className="home-actions">
        {/* Implement isAuth as Toast */}
        {/* <h3>Status: {isAuth} </h3> */}
        <SearchBar
          placeHolder="Search for posts"
          // applyFilter={setFilteredInput}
        />
        <CreateButton btnText="Create a post" linkPath="/post" />
      </div>
      <Posts />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 50px;
  margin-top: 20px;

  .home-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Home;
