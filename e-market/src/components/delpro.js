import React from "react";
import { delProduct } from "../utils/userApi";

function DeleteProduct(props) {
  const delet = (event) => {
    event.preventDefault();
    delProduct(props.name);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <fieldset>
      <legend>DeleteProduct</legend>
      <button onClick={delet}> Delete Product </button>
    </fieldset>
  );
}
export default DeleteProduct;
