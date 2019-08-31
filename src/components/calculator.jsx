import React, { Component } from "react";
import ButtonNumber from "./buttonNumber";
import Display from "./display";

class Calculator extends Component {
  state = {
    btnList: [
      { id: 1, name: "btn1", display: "1" },
      { id: 2, name: "btn2", display: "2" },
      { id: 3, name: "btn3", display: "3" },
      { id: 4, name: "btn4", display: "+" },
      { id: 5, name: "btn5", display: "4" },
      { id: 6, name: "btn6", display: "5" },
      { id: 7, name: "btn7", display: "6" },
      { id: 8, name: "btn8", display: "-" },
      { id: 9, name: "btn9", display: "7" },
      { id: 10, name: "btn10", display: "8" },
      { id: 11, name: "btn11", display: "9" },
      { id: 12, name: "btn12", display: "*" }
    ],
    displayId: ""
  };

  handleClickButton = displayInfo => {
    this.setState({ displayId: this.state.displayId + displayInfo });
  };

  handleClearButton = () => {
    this.setState({ displayId: "" });
  };

  handleResultButton = () => {
    const display_text = this.state.displayId;
    let result = eval(display_text.toString()).toString();
    this.setState({ displayId: result });
  };

  render() {
    return (
      <div className="col-md-12">
        <Display key="1" displayInfo={this.state.displayId}></Display>
        <div className="col-md-4">
          <div className="row">
            <div
              className="col-md-9"
              style={{
                height: "50px",
                backgroundColor: "pink",
                textAlign: "center",
                cursor: "pointer"
              }}
              onClick={this.handleClearButton}
            >
              <h3 style={{ marginTop: 5 }}> Clear </h3>
            </div>
            <div
              className="col-md-3"
              style={{
                height: "50px",
                backgroundColor: "red",
                textAlign: "center",
                cursor: "pointer"
              }}
              onClick={this.handleResultButton}
            >
              <h3 style={{ marginTop: 5 }}> = </h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            {this.state.btnList.map(btn => (
              <div className="col-md-3" style={{ margin: 0, padding: 0 }}>
                <ButtonNumber
                  key={btn.id}
                  name={btn.name}
                  display={btn.display}
                  onClickButton={this.handleClickButton}
                ></ButtonNumber>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
