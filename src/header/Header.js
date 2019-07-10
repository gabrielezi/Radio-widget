import React from "react";
import Switch from "./switch.png";
import BackArrow from "./back-arrow.png";
import "./header.css";

function Header() {
  return (
    <h1 id="header">
      {" "}
      STATIONS
      <img
        src={Switch}
        style={imageStyle}
        align="right"
        width="25"
        height="30"
      />
      <img
        src={BackArrow}
        style={imageStyle}
        align="left"
        width="20"
        height="30"
      />
    </h1>
  );
}

const imageStyle = {
  background: "#eeae61",
  marginTop: "5px"
};

export default Header;
