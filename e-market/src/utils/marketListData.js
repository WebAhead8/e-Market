const checkResponse = (response) => {
  if (!response.ok) throw new Error(`Network error: ${response.status}`);
  return response.json();
};

export const marketListData = () => {
  return fetch(`http://localhost:4000/products`).then(checkResponse);
};

export default marketListData;
