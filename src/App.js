import "./App.css";
import { Wishlist } from "./pages/Wishlist/Wishlist";
// import { Product1 } from "./pages/Product1/Product1";
// import { Product2 } from "./pages/Product2/Product2";
// import { CardMang } from "./pages/CardMang/CardMang";
// import { Logout } from "./pages/auth/Logout/Logout";
// import { Signup } from "./pages/auth/Signup/Signup";
// import { Login } from "./pages/auth/Login/Login";
// import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { Nav } from "./util/Nav/Nav.jsx"
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <HomePage /> */}
      {/* <Login /> */}
      {/* <Logout /> */}
      {/* <Signup /> */}
      {/* <CardMang /> */}
      {/* <Product2 /> */}
      {/* <Product1 /> */}
      <Wishlist />
    </div>
  );
}

export default App;
