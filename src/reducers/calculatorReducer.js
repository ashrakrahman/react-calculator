import {
  SET_DISPLAY_ON_RESULT_BUTTON,
  SET_DISPLAY_ON_CLEAR_BUTTON,
  SET_DISPLAY_ON_CLICK_BUTTON
} from "../actions";

const calculator = (state, action) => {
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
        displayId: result
      });

    case SET_DISPLAY_ON_CLEAR_BUTTON:
      return Object.assign({}, state, {
        displayId: ""
      });
    case SET_DISPLAY_ON_CLICK_BUTTON:
      return Object.assign({}, state, {
        displayId: state.displayId + action.data
      });
    default:
      return state;
  }
};

export default calculator;
