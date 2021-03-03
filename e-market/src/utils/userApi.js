// const dotenv = require("dotenv");

// dotenv.config();

let serverUrl;

if (process.env.NODE_ENV === "production") {
  serverUrl = process.env.REACT_APP_SERVER_URL_PRODUCTION;
} else {
  serverUrl = process.env.REACT_APP_SERVER_URL_DEV;
  // serverUrl = process.env.REACT_APP_SERVER_URL_PRODUCTION;
}

console.log(serverUrl);

function request(url, options) {
  return fetch(url, options).then((res) => {
    if (!res.ok) {
      const error = new Error("HTTP error");
      error.status = res.status;
      throw error;
    } else {
      return res.json();
    }
  });
}

export function getUser(token) {
  return request(`${serverUrl}/users`, {
    headers: { authorization: `Bearer ${token}` },
  });
}

export function login(loginData) {
  console.log(serverUrl, "inside login");
  return request(`${serverUrl}/login`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "content-type": "application/json" },
  });
}

export function signUp(signUpData) {
  return request(`${serverUrl}/signup`, {
    method: "POST",
    body: JSON.stringify(signUpData),
    headers: { "content-type": "application/json" },
  });
}

export function isAdminOrNot(token) {
  return request(`${serverUrl}/checkAmin`, {
    headers: { authorization: `${token}` },
  });
}

export function delProduct(name) {
  return request(`${serverUrl}/del`, {
    method: "DELETE",
    body: JSON.stringify({ name: `${name}` }),
    headers: { "content-type": "application/json" },
  });
}

export function addProducts(productData) {
  return request(`${serverUrl}/addItem`, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: { "content-type": "application/json" },
  });
}
