import React, { Component } from "react";
import StationItem from "./StationItem";
import PropTypes from "prop-types";

class Stations extends Component {
  render() {
    const { stations, currentStation, setCurrent } = this.props;

    return stations.map(station => (
      <StationItem
        key={station.id}
        station={station}
        currentStation={currentStation}
        setCurrent={setCurrent}
      />
    ));
  }
}

export default Stations;
