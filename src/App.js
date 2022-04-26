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

      <Routes>
        <Route path="/" element={<><Nav /><HomePage /></>} />
        <Route path="login" element={<><Nav /><Login /></>} />
        <Route path="logout" element={<><Nav /><Logout /></>} />
        <Route path="signup" element={<><Nav /><Signup /></>} />
        <Route path="cardmanag" element={<><Nav /><CardMang /></>} />
        <Route path="productpage1" element={<><Nav /><Product1 /></>} />
        <Route path="productpage2" element={<><Nav /><Product2 /></>} />
        <Route path="wishlist" element={<><Nav />< Wishlist /></>} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </div>
  );
}

export default App;
