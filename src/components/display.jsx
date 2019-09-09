import React, { Component } from "react";
import "./style.css";

class Display extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4 display">
        <h3 style={{ paddingTop: 50 }}> {this.props.displayInfo} </h3>
      </div>
    );
  }
}

export default Display;
