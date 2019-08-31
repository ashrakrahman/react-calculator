import React, { Component } from "react";

class ButtonNumber extends Component {
  state = {
    btnName: this.props.name,
    btnDisplayName: this.props.display
  };

  onItemClick = () => {
    console.log("jhgj");
  };

  getStyle = () => {
    const styleNumber = {
      height: "50px",
      backgroundColor: "#007bff8c",
      border: "1px solid white",
      textAlign: "center",
      cursor: "pointer"
    };
    const styleOperand = {
      height: "50px",
      backgroundColor: "orange",
      border: "1px solid white",
      textAlign: "center",
      cursor: "pointer"
    };
    const buttonName = this.state.btnName;

    if (buttonName == "btn4" || buttonName == "btn8" || buttonName == "btn12")
      return styleOperand;
    else return styleNumber;
  };
  render() {
    return (
      <div
        className="col-md-12"
        style={this.getStyle()}
        onClick={() => {
          this.props.onClickButton(this.props.display);
        }}
      >
        <h3 style={{ marginTop: 5 }}>{this.state.btnDisplayName}</h3>
      </div>
    );
  }
}

export default ButtonNumber;
