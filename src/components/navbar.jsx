import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Line } from "./Line/Line";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="LeftSide">
          <p className="MenuText">Menu</p>
        </div>

        <div className="RightSide">
          <div className="links">
            <Link to="Home"> Home </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </div>

      <div className="Line">
        <Line />
      </div>
    </div>
  );
};
