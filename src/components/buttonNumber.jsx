import React, { Component } from "react";

class ButtonNumber extends Component {
  state = {
    btnName: this.props.name,
    btnDisplayName: this.props.display
  };

  onItemClick = () => {
    //console.log("jhgj");
  };

  getStyle = () => {
    const buttonName = this.state.btnName;
    if (buttonName == "btn4" || buttonName == "btn8" || buttonName == "btn12")
      return "col-md-12 styleOperand";
    else return "col-md-12 styleNumber";
  };
  render() {
    return (
      <div
        className={this.getStyle()}
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
