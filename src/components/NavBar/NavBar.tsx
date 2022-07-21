import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <span className="navbar-title">Numenera Character Generator</span>

      <span className="navbar-links">
        <Link to="/" key="copyright">
          Copyright
        </Link>

        <Link to="/about" key="about">
          About
        </Link>
      </span>
    </nav>
  );
}

export { NavBar };
