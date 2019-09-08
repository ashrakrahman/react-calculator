import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { Provider } from "react-redux";
import calculator from "./reducers/calculatorReducer";
import { createStore } from "redux";

const initialState = {
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

const store = createStore(
  calculator,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
