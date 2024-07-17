import React from "react";
import { Navbar } from "../../../components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PRODUCTS } from "./doveProducts";
import { DoveProduct } from "./doveProduct";
import "../../shop/shop.css";

export const ProductPage = () => {
  return (
    <div className="shop">
      {/* <Navbar /> */}

      <div className="shopTitle">
        <h1>Dove Collection</h1>
      </div>
    </div>
  );
};
