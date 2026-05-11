import React from "react";
import "./Nav.css";

function Nav({ fetchStories }) {
  return (
    <nav className="navbar">

      <div className="logo">
        NewsHub
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/bookmarks">Bookmarks</a>
      </div>

      <div className="nav-buttons">

        <button
          className="fetch-btn"
          onClick={fetchStories}
        >
          Fetch New
        </button>

        <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Sign Up
        </button>

      </div>

    </nav>
  );
}

export default Nav;