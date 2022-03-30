import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { Nav } from "./util/Nav/Nav.jsx"
function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
    </div>
  );
}

export default App;
