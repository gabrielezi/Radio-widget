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
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent = value => {
    const { show1, show2, show3, show4, show5 } = this.state;
    this.dontShow();
    this.setState({
      currentStation: value
    });
    if (value === "Putin FM") {
      this.setState({
        show1: !show1
      });
    }
    if (value === "Dribbble FM") {
      this.setState({
        show2: !show2
      });
    }
    if (value === "Doge FM") {
      this.setState({
        show3: !show3
      });
    }
    if (value === "Ballads FM") {
      this.setState({
        show4: !show4
      });
    }
    if (value === "Maximum FM") {
      this.setState({
        show5: !show5
      });
    }
  };

  dontShow = () => {
    this.setState({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    });
  };

  render() {
    const { currentStation, show1, show2, show3, show4, show5 } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="body_sec">
            <React.Fragment>
              <Stations
                stations={this.state.stations}
                currentStation={currentStation}
                setCurrent={this.setCurrent}
                show1={show1}
                show2={show2}
                show3={show3}
                show4={show4}
                show5={show5}
              />
            </React.Fragment>
            <div id="footer" className="footerContainer">
              {(show1 || show2 || show3 || show4 || show5) &&
                "CURRENTLY PLAYING"}
            </div>
            <div id="currentStation" className="footerContainer">
              {(show1 || show2 || show3 || show4 || show5) && currentStation}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
