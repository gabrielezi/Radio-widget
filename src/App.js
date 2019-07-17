import React, { Component } from "react";
import Header from "./header/Header";
import Stations from "./body/Stations";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
      currentStation: "",
      show: false
    };
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent = value => {
    this.setState({
      currentStation: value,
      show: true
    });
  };

  render() {
    const { currentStation } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div class="body_sec">
            <React.Fragment>
              <Stations
                stations={this.state.stations}
                currentStation={currentStation}
                setCurrent={this.setCurrent}
              />
            </React.Fragment>
            <div id="footer" className="footerContainer">
              {this.state.show && "CURRENTLY PLAYING"}
            </div>
            <div id="currentStation" className="footerContainer">
              {this.state.show && currentStation}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
