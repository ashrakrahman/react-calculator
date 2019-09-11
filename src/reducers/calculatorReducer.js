import {
  SET_DISPLAY_ON_RESULT_BUTTON,
  SET_DISPLAY_ON_CLEAR_BUTTON,
  SET_DISPLAY_ON_CLICK_BUTTON,
  SET_DISPLAY_ON_HISTORY_BUTTON
} from "../actions";

const initialDisplayState = { displayId: "", history: [], historyClick: 0 };

const calculator = (state = initialDisplayState, action) => {
  switch (action.type) {
    case SET_DISPLAY_ON_RESULT_BUTTON:
      const display_text = state.displayId;
      const modified_display_text = display_text.toString().toString();
      let res, result;
      try {
        res = eval(modified_display_text);
      } catch (e) {
        if (e instanceof SyntaxError) {
          alert(e.message);
        }
      }
      if (res == null) result = "";
      else result = res;
      return Object.assign({}, state, {
        displayId: result,
        history: state.history.concat(result)
      });

    case SET_DISPLAY_ON_CLEAR_BUTTON:
      return Object.assign({}, state, {
        displayId: "",
        historyClick: 0
      });
    case SET_DISPLAY_ON_CLICK_BUTTON:
      return Object.assign({}, state, {
        displayId: state.displayId + action.data
      });

    case SET_DISPLAY_ON_HISTORY_BUTTON:
      let historyLength = state.history.length;
      if (state.historyClick < historyLength) {
        return Object.assign({}, state, {
          displayId: state.history[historyLength - (state.historyClick + 1)],
          historyClick: state.historyClick + 1
        });
      } else {
        return Object.assign({}, state, {
          displayId: "",
          historyClick: 0
        });
      }
    default:
      return state;
  }
};

export default calculator;
