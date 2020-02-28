const alertReducer = (
  state = {
    message: "",
    cssClass: "none"
  },
  action
) => {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        message: action.msg,
        cssClass: action.cssClass
      };
    case "HIDE_ALERT":
      return {
        message: "",
        cssClass: "none"
      };
    default:
      return state;
  }
};
export default alertReducer;
