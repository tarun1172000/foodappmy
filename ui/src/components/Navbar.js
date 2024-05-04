import React from "react";
import logo from "../WALIALOGO.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbarmy-class"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 myclaaul">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  item
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <div className="input-box d-flex ">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </form>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle nav-login"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-user"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
