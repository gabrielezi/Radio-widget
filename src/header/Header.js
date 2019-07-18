import React from "react";
import Switch from "./switch.png";
import BackArrow from "./back-arrow.png";
import "./header.css";

function Header() {
  return (
    <h1 id="header">
      {" "}
      STATIONS
      <img className="image" src={Switch} id="switch" alt="switch" />
      <img className="image" src={BackArrow} id="backArrow" alt="back arrow" />
    </h1>
  );
}

export default Header;
