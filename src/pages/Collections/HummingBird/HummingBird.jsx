import { Navbar } from "../../../components/navbar";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PRODUCTS } from "./HummingBirdProducts";
import { HummingBirdProduct } from "./HummingBirdProduct";
import "./HummingBirdHomePageStyles.css";
import { Footer } from "../../../components/Footer";

export const HummingBird = () => {
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
              <HummingBirdProduct data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
