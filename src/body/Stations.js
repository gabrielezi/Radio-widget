import React, { Component } from "react";
import StationItem from "./StationItem";

class Stations extends Component {
  render() {
    const {
      stations,
      currentStation,
      setCurrent,
      show1,
      show2,
      show3,
      show4,
      show5
    } = this.props;

    return stations.map(station => (
      <StationItem
        key={station.id}
        station={station}
        currentStation={currentStation}
        setCurrent={setCurrent}
        show1={show1}
        show2={show2}
        show3={show3}
        show4={show4}
        show5={show5}
      />
    ));
  }
}

export default Stations;
