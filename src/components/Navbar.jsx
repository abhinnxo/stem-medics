import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid d-flex">
        <div className="flex-grow-1">
          <a className="navbar-brand d-flex" href="/">
            <h1 className="align-self-center">STEM</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="cla/ssName"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="cla/ssName">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="cla/ssName">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="cla/ssName"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="cla/ssName">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="cla/ssName">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="cla/ssName">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
