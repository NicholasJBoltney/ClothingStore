import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import { Link } from "react-router-dom";
import "./DoveProductStyles.css";

export const DoveProduct = (props) => {
  const { id, productName, price, productImage, description, productPage } =
    props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  function clicked() {
    console.log("productPage " + productPage);
  }

  return (
    <div className="product">
      <Link to={productPage}>
        <img src={productImage} onClick={clicked} />{" "}
      </Link>

      <div className="description">
        <p className="productName">{productName}</p>
        <p className="productPrice"> ${price}</p>
      </div>
    </div>
  );
};
