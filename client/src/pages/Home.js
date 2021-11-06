import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Posts from "../components/Posts";

import SearchBar from "../components/SearchBar";
import CreatePostButton from "../components/CreatePostButton";

const Home = () => {
  // const [filteredInput, setFilteredInput] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (!isAuth) history.push("/login");
  }, []);

  // handleSuccessfulAuth(data){
  //   this.props.handleLogin(data);
  // };


  return (
    <StyledHome>
      <NavBar />
      {/* <Registration handleSuccessfulAuth = {this.handleSuccessfulAuth}/> */}
      <div className="home-content">
        <div className="home-actions">
          {/* Implement isAuth as Toast */}
          {/* <h3>Status: {isAuth} </h3> */}
          <SearchBar
            placeHolder="Search for Interviews"
            // applyFilter={setFilteredInput}
          />
          <CreatePostButton />
        </div>
        <Posts />
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100vw;
  height: 100%;
  background: #eaf3f3;

  .home-content {
    padding: 20px 0;
    margin: 50px;
  }

  .home-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Home;
