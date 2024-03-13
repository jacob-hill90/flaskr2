import logo from "../assets/ff.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary felix">
      <div className="container-fluid justify-content-between">
        {/* Left elements */}
        <div className="d-flex">
          {/* Brand */}
          <a
            className="navbar-brand me-2 mb-1 d-flex align-items-center"
            href="/"
          >
            <img src={logo} height="70" alt="Fishtories Logo" loading="lazy" />
            <small className="logo-name">Fishtories</small>
          </a>
        </div>
        {/* Left elements */}

        {/* Center elements */}
        <ul className="navbar-nav flex-row d-none d-md-flex">
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link" href="#">
              <span>
                <small>FishDataBase</small>
              </span>
            </a>
          </li>
        </ul>
        {/* Center elements */}

        {/* <!-- Right elements --> */}
        <div className="d-flex align-items-center">
          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-link btn-modified px-3 me-2"
          >
            Login
          </button>
          <Link to="/signup">
            <button
              data-mdb-ripple-init
              type="button"
              className="btn btn-primary btn-modified me-3"
            >
              Register
            </button>
          </Link>
        </div>
        {/* <!-- Right elements --> */}
      </div>
    </nav>
  );
}

export default NavBar;
