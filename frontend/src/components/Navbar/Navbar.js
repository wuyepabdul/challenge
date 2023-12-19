import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">
          Add User
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/edit">
          Edit User
        </Link>
      </li>
    </ul>
  );
}
