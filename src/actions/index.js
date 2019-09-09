export const SET_DISPLAY_ON_RESULT_BUTTON = "SET_DISPLAY_ON_RESULT_BUTTON";
export const SET_DISPLAY_ON_CLEAR_BUTTON = "SET_DISPLAY_ON_CLEAR_BUTTON";
export const SET_DISPLAY_ON_CLICK_BUTTON = "SET_DISPLAY_ON_CLICK_BUTTON";

export const setDisplayByResult = data => ({
  type: SET_DISPLAY_ON_RESULT_BUTTON,
  data
});

export const setDisplayByClear = data => ({
  type: SET_DISPLAY_ON_CLEAR_BUTTON,
  data
});

export const setDisplayByClick = data => ({
  type: SET_DISPLAY_ON_CLICK_BUTTON,
  data
});
