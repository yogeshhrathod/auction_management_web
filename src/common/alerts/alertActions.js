export const hideAlert = cssClass => {
  return {
    type: "HIDE_ALERT"
  };
};
export const showAlert = (msg, cssClass) => {
  return {
    type: "SHOW_ALERT",
    msg: msg,
    cssClass: cssClass
  };
};
export function showAlertWithTimeout(dispatch, msg, cssClass) {
  dispatch(showAlert(msg, cssClass));
  setTimeout(cssClass => {
    dispatch(hideAlert(cssClass));
  }, 3000);
}
export function hideAlertOnclick(dispatch, msg, cssClass) {
  dispatch(hideAlert(cssClass));
}
