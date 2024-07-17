import { Link } from "react-router-dom";
import DoveCollectionImage from "../../assets/products/Dove/Dress1/Sweet Flower Retro Blouse&Skirt.jpg";
import HummingBirdCollectionImage from "../../assets/products/HummingBird/Dress1/Flower Retro Puff-Sleeve Fluffily Dress.jpg";
import PuffinCollectionImage from "../../assets/products/Puffin/Dress1/Balloon Pearl Ribbon Mini-Skirt - S _ black.jpg";
import "./Home.css";
import { Footer } from "../../components/Footer";
import { Line } from "../../components/Line/Line";
import { Navbar } from "../../components/navbar";
import { useRef } from "react";

export const Home = () => {
  return (
    <div className="Main">
      {/* <div className="Heading">Collections</div> */}

      <div className="MainCollectionsHolder">
        <Link to="/dove">
          <div>
            <img src={DoveCollectionImage} className="CollectionImage" />
            <div className="CollectionName">Dove</div>
          </div>
        </Link>
        <Link to="/hummingBird">
          <div>
            <img src={HummingBirdCollectionImage} className="CollectionImage" />
            <div className="CollectionName">HummingBird</div>
          </div>
        </Link>
        <Link to="/puffin">
          <div>
            <img src={PuffinCollectionImage} className="CollectionImage" />
            <div className="CollectionName">Puffin</div>
          </div>
        </Link>
      </div>
      {/* <Line /> */}
    </div>
  );
};

//collections:
//swan
//dove
//sparrow
