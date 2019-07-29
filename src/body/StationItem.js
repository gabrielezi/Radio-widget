import React, { Component } from "react";
import circle from "./circle.png";
import minus from "./minus.png";
import plus from "./plus.png";
import "./itemStyle.css";

export class StationItem extends Component {
  constructor(props) {
    super(props);
  }

  clicked = value => {
    this.props.setCurrent(value);
  };

  isShown = title => {
    const { show1, show2, show3, show4, show5 } = this.props;
    if (title === "Putin FM") {
      return show1;
    }
    if (title === "Dribbble FM") {
      return show2;
    }
    if (title === "Doge FM") {
      return show3;
    }
    if (title === "Ballads FM") {
      return show4;
    }
    if (title === "Maximum FM") {
      return show5;
    }
  };
  render() {
    const { title, frequency } = this.props.station;
    return (
      <div id="rowContainer">
        <div
          id="title"
          onClick={() => this.clicked(title)}
          onMouseEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onMouseLeave={() => {
            document.body.style.cursor = "default";
          }}
        >
          {title}
          {this.isShown(title) && <Box />}
        </div>
        <span
          id="frequency"
          onClick={() => this.clicked(title)}
          onMouseEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onMouseLeave={() => {
            document.body.style.cursor = "default";
          }}
        >
          {frequency}
        </span>{" "}
      </div>
    );
  }
}

export default StationItem;

class Box extends Component {
  render() {
    return (
      <div id="container">
        <div id="minus">
          <img src={minus} id="minusImg" alt="minus" />
        </div>

        <div id="circle">
          <img src={circle} id="circleImg" alt="circle" />
        </div>

        <div id="plus">
          <img src={plus} id="plusImg" alt="plus" />
        </div>
      </div>
    );
  }
}
