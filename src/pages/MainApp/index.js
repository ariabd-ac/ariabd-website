import React from "react";
import { Header, LeftSide, RightSide } from "../../components";
import "./MainApp.css";

const index = () => {
  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <LeftSide />

        <RightSide />
      </div>
    </div>

    // <Header/>
  );
};

export default index;
