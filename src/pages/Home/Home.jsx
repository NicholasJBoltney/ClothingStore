import { Link } from "react-router-dom";
import DoveCollectionImage from "../../assets/products/Dove/Dress1.png";
import "./Home.css";
import { Footer } from "../../components/Footer";
import { Line } from "../../components/Line/Line";

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
            <img src={DoveCollectionImage} className="CollectionImage" />
            <div className="CollectionName">HummingBird</div>
          </div>
        </Link>
        <Link to="/puffin">
          <div>
            <img src={DoveCollectionImage} className="CollectionImage" />
            <div className="CollectionName">Puffin</div>
          </div>
        </Link>
      </div>
      <Line />
      <Footer />
    </div>
  );
};

//collections:
//swan
//dove
//sparrow
