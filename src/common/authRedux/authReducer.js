const reducer = (
  state = {
    auth: localStorage.getItem("user") ? true : false
  },
  action
) => {
  switch (action.type) {
    case "AUTH_INIT":
      return {
        auth: action.auth
      };
    default:
      return state;
  }
};
export default reducer;
