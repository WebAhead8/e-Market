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
  return request("http://localhost:4000/users", {
    headers: { authorization: `Bearer ${token}` },
  });
}

export function login(loginData) {
  return request("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "content-type": "application/json" },
  });
}

export function signUp(signUpData) {
  return request("http://localhost:4000/signup", {
    method: "POST",
    body: JSON.stringify(signUpData),
    headers: { "content-type": "application/json" },
  });
}

export function isAdminOrNot(token) {
  return request("http://localhost:4000/checkAmin", {
    headers: { authorization: `${token}` },
  });
}

export function delProduct(name) {
  return request("http://localhost:4000/del", {
    method: "DELETE",
    body: JSON.stringify({ name: `${name}` }),
    headers: { "content-type": "application/json" },
  });
}

export function addProducts(productData) {
  return request("http://localhost:4000/addItem", {
    method: "POST",
    body: JSON.stringify(productData),
    headers: { "content-type": "application/json" },
  });
}
