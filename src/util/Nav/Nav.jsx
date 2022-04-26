import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="nav-container">
      <h3>
        <Link className="link-reset" to="/">Arch Store</Link>
      </h3>
      <div className="nav-search">
        <label for="search">
          <i className="fas fa-search"></i>
        </label>
        <input type="text" id="search" />
      </div>
      <div className="nav-actionables">
        <div className="btn-container">
          <Link className="link-reset" to="/login">
            <button className="btn btn-sm btn-default">Login</button>
          </Link>
        </div>
        <div className="nav-badge-cont badge-container">
          <div className="icon-container">
            <Link className="link-reset" to="/wishlist">
              <i className="nav-icon far fa-heart">
                <span className="nav-count badge-count">7</span>
              </i>
            </Link>
          </div>
          <div className="icon-container">
            <Link className="link-reset" to="/cardmanag">
              <i className="nav-icon fas fa-shopping-cart">
                <span className="nav-count badge-count">7</span>
              </i>
            </Link>
          </div>
          <div className="icon-container">
            <Link className="link-reset" to="/logout">
              <i className="nav-icon fas fa-sign-out-alt"> </i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
