import "./HummingBirdStyles.css";

import React, { useContext } from "react";
import { PRODUCTS } from "../HummingBirdProducts";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../../context/shop-context";
import {
  LoremBig,
  LoremIpsumMedium,
  LoremIpsumSmall,
} from "../../../../LoremIpsum";

import Extra1 from "../../../../assets/products/HummingBird/Dress2/Polo-neck Bijou Butterfly Unique Chic One-piece - S _ pink(presale) (2).jfif";
import Extra2 from "../../../../assets/products/HummingBird/Dress2/Polo-neck Bijou Butterfly Unique Chic One-piece - S _ pink(presale).jfif";

export const Dress10Page = () => {
  let productName = PRODUCTS[1].productName;
  let productImage = PRODUCTS[1].productImage;
  let productPrice = PRODUCTS[1].price;
  let id = PRODUCTS[1].id;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="MainHolder">
      <div className="Holder">
        <div className="ProductImageHolder">
          <img src={productImage} className="ProductImage" />{" "}
          <div className="ExtraImagesHolder">
            <img src={Extra1} className="ExtraProductImage" />{" "}
            <img src={Extra2} className="ExtraProductImage" />{" "}
          </div>
        </div>

        <div className="RightPanel">
          <div>
            <h2 className="productName">{productName}</h2>
          </div>
          <div className="productPrice">R{productPrice}</div>
          <br></br>
          <div className="SizesText">Sizes</div>
          <div className="SizesHolder">
            <p>XXS</p>
            <p>XS</p>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>
          <div className="AddToCartButtonHolder">
            <div className="countHandler">
              <button onClick={() => removeFromCart(id)}> - </button>
              <input
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button onClick={() => addToCart(id)}> + </button>
            </div>

            <button className="AddToCartBtn" onClick={() => addToCart(id)}>
              Add To Cart
            </button>
          </div>

          <div>
            <p className="Description">Description</p>
            <div className="DescriptionText">{LoremBig}</div>
            <br></br>
            <div className="DescriptionText">{LoremIpsumMedium}</div>
          </div>
          <div>
            <p className="Delivery">Delivery & Returns</p>

            <div className="DeliveryText">{LoremIpsumSmall}</div>
          </div>
        </div>
      </div>
    </div>
  );
};