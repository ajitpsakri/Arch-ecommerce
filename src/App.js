import "./App.css";
import { Logout } from "./pages/auth/Logout/Logout";
import { Signup } from "./pages/auth/Signup/Signup";
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
      <Signup />
    </div>
  );
}

export default App;
