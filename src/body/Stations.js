import React, { Component } from "react";
import StationItem from "./StationItem";
import PropTypes from "prop-types";

class Stations extends Component {
  render() {
    return this.props.stations.map(station => (
      <StationItem key={station.id} station={station} />
    ));
  }
}

// PropTypes
Stations.propTypes = {
  stations: PropTypes.array.isRequired
};

export default Stations;
