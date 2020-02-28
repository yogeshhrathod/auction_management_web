export const login = isAuth => {
  return {
    type: "AUTH_INIT",
    auth: isAuth
  };
};
export function authInit(dispatch, auth) {
  dispatch(login(auth));
}
