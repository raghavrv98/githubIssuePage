import React from "react";
// import { useState } from "react";
import "../App.css"
import Header from "./Header";
import IssueBox from "./IssueBox";

const Home = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <IssueBox />
    </>
  );
};

export default Home;
