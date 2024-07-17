import "./PuffinStyles.css";
import { Navbar } from "../../../../components/navbar";
import React, { useContext } from "react";
import { PRODUCTS } from "../PuffinProducts";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../../context/shop-context";
import {
  LoremBig,
  LoremIpsumMedium,
  LoremIpsumSmall,
} from "../../../../LoremIpsum";
import Extra1 from "../../../../assets/products/Puffin/Dress8/Ribbon Chic China Tassel Flare-Sleeve One-Piece - L _ beige.jfif";

export const Dress22Page = () => {
  let productName = PRODUCTS[7].productName;
  let productImage = PRODUCTS[7].productImage;
  let productPrice = PRODUCTS[7].price;
  let id = PRODUCTS[7].id;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="MainHolder">
      <Navbar />
      <div className="Holder">
        <div className="ProductImageHolder">
          <img src={productImage} className="ProductImage" />{" "}
          <div className="ExtraImagesHolder">
            <img src={Extra1} className="ExtraProductImage" />{" "}
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
