import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Product1 } from "./pages/Product1/Product1";
import { Product2 } from "./pages/Product2/Product2";
import { CardMang } from "./pages/CardMang/CardMang";
import { Logout } from "./pages/auth/Logout/Logout";
import { Signup } from "./pages/auth/Signup/Signup";
import { UnknownPage } from "./pages/UnknownPage";
import { Login } from "./pages/auth/Login/Login";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { Nav } from "./util/Nav/Nav.jsx"
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cardmanag" element={<CardMang />} />
        <Route path="productpage1" element={<Product1 />} />
        <Route path="productpage2" element={<Product2 />} />
        <Route path="wishlist" element={< Wishlist />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </div>
  );
}

export default App;
