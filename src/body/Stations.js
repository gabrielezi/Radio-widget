import React, { Component } from "react";
import StationItem from "./StationItem";
import PropTypes from "prop-types";

class Stations extends Component {
  render() {
    const { stations, currentStation, smth } = this.props;

    return stations.map(station => (
      <StationItem
        key={station.id}
        station={station}
        currentStation={currentStation}
        smth={this.props.smth}
      />
    ));
  }
}

export default Stations;
