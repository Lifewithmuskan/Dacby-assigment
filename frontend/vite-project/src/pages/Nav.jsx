import React from "react";
import "./Nav.css";
import { Link,useNavigate } from "react-router-dom";





function Nav({ fetchStories,loading}) {
 const user = JSON.parse(
    localStorage.getItem("user")
  );

  const navigate = useNavigate();

 const handleLogout = () => {

  localStorage.removeItem("user");

  navigate("/");

  window.location.reload();

};

return (
    
    <nav className="navbar">

      <div className="logo">
        NewsHub
      </div>

      <div className="nav-links">
        <a href="/">Home</a>

        <Link
        to={user ? "/bookmarks" : "/signup"}
        >
        Bookmarks
        </Link>

        {/* <div
        
        onClick={() => {

            const user = JSON.parse(
            localStorage.getItem("user")
            );

            if(user){

            navigate("/bookmarks");

            } else {

            navigate("/signup");

            }

        }}
        >
        Bookmarks
        </div> */}
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

            <button
        className="login-btn"
        onClick={handleLogout}
        >
        Log out
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
         </>
       
            
          ) : (

            <>
              <button  >
              <Link
                to="/login"
               
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
             <button
        className="fetch"
        onClick={fetchStories}
        disabled={loading}
        >

        {loading
            ? "Loading..."
            : "Fetch New"}

        </button>
            </>

          )
        }
        
    
      
         
        
      
      </div>

    </nav>
  );
}

export default Nav;