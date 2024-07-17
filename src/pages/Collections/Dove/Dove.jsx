import React from "react";
import { Navbar } from "../../../components/navbar";

import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PRODUCTS } from "./doveProducts";
import { DoveProduct } from "./doveProduct";
import { ProductPage } from "./ProductPage";
import { useState } from "react";
import "./DoveHomePageStyles.css";
import DoveWallpaper from "../../../assets/products/Dove/Dove.jpg";
import { Footer } from "../../../components/Footer";

export const Dove = () => {
  return (
    <div>
      <div className="MainHolder">
        {/* <Navbar /> */}
        <div className="shop">
          {/* <div className="shopTitle"><h1>Dove Collection</h1></div> */}
          {/* <div className="WallpaperHolder">
          <img src={DoveWallpaper} className="DoveWallpaper" />
        </div> */}

          <div className="products">
            {PRODUCTS.map((product) => (
              <DoveProduct data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
