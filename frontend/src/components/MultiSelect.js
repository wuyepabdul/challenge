import React from "react";
import { Link } from "react-router-dom";

const MultiSelect = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/" className="dropdown-item">
                    Action
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Another action
                  </Link>
                </li>

                <li className="nav-item dropend">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/" className="dropdown-item">
                        Action
                      </Link>
                    </li>
                    <li className="nav-item dropend">
                      <Link
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/" className="dropdown-item">
                            Action
                          </Link>
                        </li>
                        <li className="nav-item dropend">
                          <Link
                            className="nav-link dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/" className="dropdown-item">
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link to="/" className="dropdown-item">
                                Another action
                              </Link>
                            </li>

                            <li>
                              <Link to="/" className="dropdown-item">
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to="/" className="dropdown-item">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/" className="dropdown-item">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MultiSelect;
