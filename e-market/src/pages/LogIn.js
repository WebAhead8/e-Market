import "./login.css";
import React, { useState, useEffect } from "react";

import { getUser, login } from "../utils/userApi";

function LogIn() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const onChange = (statekey) => ({ target }) =>
    setLoginData({ ...loginData, [statekey]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();

    login(loginData)
      .then((data) => {
        window.localStorage.setItem("access_token", data.access_token);
        setUser(data);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      getUser(token)
        .then((data) => {
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcom {user.name}</h1>
        <a href="/">GO TO HOME PAGE</a>
      </div>
    );
  }

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>LOG IN</legend>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChange("email")}
              value={loginData.email}
            />
          </label>
          <label htmlFor="password">
            password:
            <input
              type="password"
              name="password"
              id="password"
              onChange={onChange("password")}
              value={loginData.password}
            />
          </label>
          <div>
            <button type="submit">Log In</button>
          </div>
        </fieldset>
      </form>
      <a href="/">HOME</a>
    </div>
  );
}
export default LogIn;
