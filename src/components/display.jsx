import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "yellow",
          height: "100px",
          textAlign: "right"
        }}
        className="col-md-4"
      >
        <h3 style={{ paddingTop: 50 }}> {this.props.displayInfo} </h3>
      </div>
    );
  }
}

export default Display;
