import React, { Component } from "react";
import PropTypes from "prop-types";
import circle from "./circle.png";
import minus from "./minus.png";
import plus from "./plus.png";
import "./itemStyle.css";

export class StationItem extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  helou = value => {
    this.props.smth(value);
    this.toggleDiv();
  };

  render() {
    const { title, frequency } = this.props.station;
    const { currentStation, smth } = this.props;
    return (
      <div id="rowContainer">
        <div
          id="title"
          onClick={() => this.helou(title)}
          onMouseEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onMouseLeave={() => {
            document.body.style.cursor = "default";
          }}
        >
          {title}
          {this.state.show && <Box />}
        </div>
        <span
          id="frequency"
          onClick={() => this.helou(title)}
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

// PropTypes
// StationItem.propTypes = {
//   station: PropTypes.object.isRequired
// };

export default StationItem;

class Box extends Component {
  render() {
    return (
      <div id="container">
        <div id="minus">
          <img src={minus} id="minusImg" />
        </div>

        <div id="circle">
          <img src={circle} id="circleImg" />
        </div>

        <div id="plus">
          <img src={plus} id="plusImg" />
        </div>
      </div>
    );
  }
}
