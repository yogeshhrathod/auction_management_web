const loginAPI = async state => {
  const response = await fetch("/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: state.email,
      password: state.password
    })
  });
  return response;
};
const registerAPI = async (name, email, lastName, password) => {
  const response = await fetch("/register-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fname: name,
      lname: lastName,
      email: email,
      password: password
    })
  });
  return response;
};
export { loginAPI, registerAPI };
