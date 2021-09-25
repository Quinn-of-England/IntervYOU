import React, { useState } from "react";

import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [filteredInput, setFilteredInput] = useState("");

  return (
    <>
      <NavBar />
      <SearchBar
        placeHolder="Search for Interviews"
        applyFilter={setFilteredInput}
      />
      {filteredInput}
    </>
  );
};

export default Home;
