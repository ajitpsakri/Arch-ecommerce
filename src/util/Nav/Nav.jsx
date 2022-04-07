import "./Nav.css";
const Nav = () => {
  return (
    <nav className="nav-container">
      <h3>
        <a className="link-reset" href="#">
          Arch Store
        </a>
      </h3>
      <div className="nav-search">
        <label for="search">
          <i className="fas fa-search"></i>
        </label>
        <input type="text" id="search" />
      </div>
      <div className="nav-actionables">
        <div className="btn-container">
          <a className="link-reset" href="./pages/auth/login/login.html">
            <button className="btn btn-sm btn-default">Login</button>
          </a>
        </div>
        <div className="nav-badge-cont badge-container">
          <div className="icon-container">
            <a className="link-reset" href="./pages/wishlist/wishlist.html">
              <i className="nav-icon far fa-heart">
                <span className="nav-count badge-count">7</span>
              </i>
            </a>
          </div>
          <div className="icon-container">
            <a className="link-reset" href="./pages/card-manag/card-manag.html">
              <i className="nav-icon fas fa-shopping-cart">
                <span className="nav-count badge-count">7</span>
              </i>
            </a>
          </div>
          <div className="icon-container">
            <a className="link-reset" href="./pages/auth/logout/logout.html">
              <i className="nav-icon fas fa-sign-out-alt"> </i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
