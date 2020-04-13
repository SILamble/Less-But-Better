import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Header() {
  

  return (
    <div><ul className="navbar-right nav nav-tabs  navB">
      <li className="nav-item">
        <Link className="nav-link"
          to="/Current">
          Current
        </Link>
      </li>
      <li className="nav-item nav2">
        <Link className="nav-link"
          to="/Completed">
          Completed
        </Link>
      </li>
    </ul></div>
  );
}

export default Header;