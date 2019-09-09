import React, { Component } from "react";
import ButtonNumber from "../components/buttonNumber";
import Display from "../components/display";
import { connect } from "react-redux";
import "./calculator.css";

import {
  setDisplayByResult,
  setDisplayByClear,
  setDisplayByClick
} from "../actions";

class Calculator extends Component {
  handleClickButton = displayInfo => {
    this.props.setDisplayByClick(displayInfo);
  };

  handleClearButton = () => {
    this.props.setDisplayByClear();
  };

  handleResultButton = () => {
    this.props.setDisplayByResult();
  };

  render() {
    return (
      <div className="col-md-12">
        <Display key="1" displayInfo={this.props.displayId}></Display>
        <div className="col-md-4">
          <div className="row">
            <div
              className="col-md-9 clearButton"
              onClick={this.handleClearButton}
            >
              <h3 style={{ marginTop: 5 }}> Clear </h3>
            </div>
            <div
              className="col-md-3 resultButton"
              onClick={this.handleResultButton}
            >
              <h3 style={{ marginTop: 5 }}> = </h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            {this.props.btnList.map(btn => (
              <div className="col-md-3" style={{ margin: 0, padding: 0 }}>
                <ButtonNumber
                  key={btn}
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  setDisplayByResult,
  setDisplayByClear,
  setDisplayByClick
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
