const dotenv = require("dotenv");

dotenv.config();

if (process.env.NODE_ENV === "production") {
  serverUrl = process.env.SERVER_URL_PRODUCTION;
} else {
  serverUrl = process.env.SERVER_URL_DEV;
}

const checkResponse = (response) => {
  if (!response.ok) throw new Error(`Network error: ${response.status}`);
  return response.json();
};

export const marketListData = () => {
  return fetch(`${serverUrl}/products`).then(checkResponse);
};

export default marketListData;
