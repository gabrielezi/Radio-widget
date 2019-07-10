import React, { Component } from "react";
import Header from "./header/Header";
import Stations from "./body/Stations";
import "./App.css";

class App extends Component {
  state = {
    stations: [
      {
        id: 1,
        title: "Putin FM",
        frequency: "66,6"
      },
      {
        id: 2,
        title: "Dribbble FM",
        frequency: "101,2"
      },
      {
        id: 3,
        title: "Doge FM",
        frequency: "99,4"
      },
      {
        id: 4,
        title: "Ballads FM",
        frequency: "87,1"
      },
      {
        id: 5,
        title: "Maximum FM",
        frequency: "142,2"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div class="body_sec">
            <React.Fragment>
              <Stations stations={this.state.stations} />
            </React.Fragment>
            <p id="footer">Now playing: </p>
            <div />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
