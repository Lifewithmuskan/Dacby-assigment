import React from "react";
import News from "./News.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";


const user = JSON.parse(
  localStorage.getItem("user")
);

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

    
          

        {
          user ? (
     <>       
         <div className="welcome-user">

              Welcome, {user.name}
             
            </div>
     
         </>
       
            
          ) : (

            <>
              <button className="login-btn">
              <Link
                to="/login"
                className="login-btn"
              >
                Login
              </Link>
             </button>

            <button className="signup-btn">
              <Link
                to="/signup"
                className="signup-btn"
              >
                Sign Up
              </Link>
       </button>
            </>

          )
        }
        
       <button >
              <Link
                to="/login"
              >
                Login
              </Link>
             </button>
      
               <button
        className="fetch"
        onClick={fetchStories}
        disabled={loading}
        >

        {loading
            ? "Loading..."
            : "Fetch New"}

        </button>
        
      
      </div>

    </nav>
  );
}

export default Nav;