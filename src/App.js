import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { Dove } from "./pages/Collections/Dove/Dove";
import { Dress1Page } from "./pages/Collections/Dove/DovePages/Dress1Page";
import { Dress2Page } from "./pages/Collections/Dove/DovePages/Dress2Page";
import { Dress3Page } from "./pages/Collections/Dove/DovePages/Dress3Page";
import { Dress4Page } from "./pages/Collections/Dove/DovePages/Dress4Page";
import { Dress5Page } from "./pages/Collections/Dove/DovePages/Dress5Page";
import { Dress6Page } from "./pages/Collections/Dove/DovePages/Dress6Page";
import { Dress7Page } from "./pages/Collections/Dove/DovePages/Dress7Page";
import { Dress8Page } from "./pages/Collections/Dove/DovePages/Dress8Page";
import { Dress9Page } from "./pages/Collections/HummingBird/HummingBirdPages/Dress9Page";
import { Dress10Page } from "./pages/Collections/HummingBird/HummingBirdPages/Dress10Page";
import { Dress11Page } from "./pages/Collections/HummingBird/HummingBirdPages/Dress11Page";
import { Dress12Page } from "./pages/Collections/HummingBird/HummingBirdPages/Dress12Page";
import { Dress13Page } from "./pages/Collections/HummingBird/HummingBirdPages/Dress13Page";
import { Dress14Page } from "./pages/Collections/HummingBird/HummingBirdPages/Dress14Page";
import { Dress15Page } from "./pages/Collections/Puffin/PuffinPages/Dress15Page";
import { Dress16Page } from "./pages/Collections/Puffin/PuffinPages/Dress16Page";
import { Dress17Page } from "./pages/Collections/Puffin/PuffinPages/Dress17Page";
import { Dress18Page } from "./pages/Collections/Puffin/PuffinPages/Dress18Page";
import { Dress19Page } from "./pages/Collections/Puffin/PuffinPages/Dress19Page";
import { Dress20Page } from "./pages/Collections/Puffin/PuffinPages/Dress20Page";
import { Dress21Page } from "./pages/Collections/Puffin/PuffinPages/Dress21Page";
import { Dress22Page } from "./pages/Collections/Puffin/PuffinPages/Dress22Page";
import { Puffin } from "./pages/Collections/Puffin/Puffin";
import { HummingBird } from "./pages/Collections/HummingBird/HummingBird";
import { ShopContextProvider } from "./context/shop-context";
import "./App.css";

function App() {
  return (
    <div className="MainBody">
      <ShopContextProvider>
        <Router>
          <Navbar />
          {/* <Home /> */}
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/dove" element={<Dove />} />
            <Route path="/dove/doveProduct1" element={<Dress1Page />} />
            <Route path="/dove/doveProduct2" element={<Dress2Page />} />
            <Route path="/dove/doveProduct3" element={<Dress3Page />} />
            <Route path="/dove/doveProduct4" element={<Dress4Page />} />
            <Route path="/dove/doveProduct5" element={<Dress5Page />} />
            <Route path="/dove/doveProduct6" element={<Dress6Page />} />
            <Route path="/dove/doveProduct7" element={<Dress7Page />} />
            <Route path="/dove/doveProduct8" element={<Dress8Page />} />

            <Route path="/hummingBird" element={<HummingBird />} />
            <Route
              path="/hummingBird/hummingBirdProduct1"
              element={<Dress9Page />}
            />
            <Route
              path="/hummingBird/hummingBirdProduct2"
              element={<Dress10Page />}
            />
            <Route
              path="/hummingBird/hummingBirdProduct3"
              element={<Dress11Page />}
            />
            <Route
              path="/hummingBird/hummingBirdProduct4"
              element={<Dress12Page />}
            />
            <Route
              path="/hummingBird/hummingBirdProduct5"
              element={<Dress13Page />}
            />
            <Route
              path="/hummingBird/hummingBirdProduct6"
              element={<Dress14Page />}
            />
            <Route path="/puffin" element={<Puffin />} />
            <Route path="/puffin/puffinProduct1" element={<Dress15Page />} />
            <Route path="/puffin/puffinProduct2" element={<Dress16Page />} />
            <Route path="/puffin/puffinProduct3" element={<Dress17Page />} />
            <Route path="/puffin/puffinProduct4" element={<Dress18Page />} />
            <Route path="/puffin/puffinProduct5" element={<Dress19Page />} />
            <Route path="/puffin/puffinProduct6" element={<Dress20Page />} />
            <Route path="/puffin/puffinProduct7" element={<Dress21Page />} />
            <Route path="/puffin/puffinProduct8" element={<Dress22Page />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
