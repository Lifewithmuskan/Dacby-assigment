import React from "react";
import News from "./News.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";


function Nav({ fetchStories,loading}) {
  return (
    <nav className="navbar">

      <div className="logo">
        NewsHub
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/bookmarks">Bookmarks</a>
        <Link to="/news">
            News
            </Link>
      </div>

      <div className="nav-buttons">

            <button
        className="fetch"
        onClick={fetchStories}
        disabled={loading}
        >

        {loading
            ? "Loading..."
            : "Fetch New"}

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