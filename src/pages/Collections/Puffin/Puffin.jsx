import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PRODUCTS } from "./PuffinProducts";
import { PuffinProduct } from "./puffinProduct";
import "./PuffinHomePageStyles.css";
import { Footer } from "../../../components/Footer";

export const Puffin = () => {
  return (
    <div>
      <div className="MainHolder">
        <div className="shop">
          {/* <div className="shopTitle"><h1>Dove Collection</h1></div> */}
          {/* <div className="WallpaperHolder">
          <img src={DoveWallpaper} className="DoveWallpaper" />
        </div> */}

          <div className="products">
            {PRODUCTS.map((product) => (
              <PuffinProduct data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
