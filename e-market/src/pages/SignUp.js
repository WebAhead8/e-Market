import React, { useState } from "react";

import { signUp } from "../utils/userApi";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [user, setUser] = useState({});

  const onChange = (statekey) => ({ target }) =>
    setSignUpData({ ...signUpData, [statekey]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();

    signUp(signUpData)
      .then((data) => {
        setUser(data);
        setIsSignedUp(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isSignedUp) {
    return (
      <div>
        <h1>
          You have regisitered successfully as {user.name} Go to home page to
          get in the store
        </h1>
        <a href="/">GO TO HOME PAGE</a>
      </div>
    );
  }

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>SIGN UP</legend>
          <label htmlFor="name">
            firstName:
            <input
              type="text"
              name="first_name"
              id="first_name"
              onChange={onChange("first_name")}
              value={signUpData.first_name}
            />
          </label>
          <label htmlFor="last_name">
            lastName:
            <input
              type="text"
              name="last_name"
              id="last_name"
              onChange={onChange("last_name")}
              value={signUpData.last_name}
            />
          </label>
          <label htmlFor="email">
            email:
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChange("email")}
              value={signUpData.email}
            />
          </label>
          <label htmlFor="password">
            password:
            <input
              type="password"
              name="password"
              id="password"
              onChange={onChange("password")}
              value={signUpData.password}
            />
          </label>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </fieldset>
      </form>
      <a href="/">HOME</a>
    </div>
  );
}

export default SignUp;
