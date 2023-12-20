import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Add User
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/edit">
          Edit User
        </Link>
      </li>
    </ul>
  );
}
