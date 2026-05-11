import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Nav from "./Nav";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

     setLoading(true);
      const response = await axios.post(
        "https://dacby-assigment.onrender.com/api/login",
        formData

      );

   localStorage.setItem(
  "user",
  JSON.stringify(response.data.user)

);
      alert("Login Successful");
      navigate("/");

    } catch(error){
       error.response?.data?.message ||
  "Login Failed";

    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      <Nav />
      <div className="login-container">
        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <h1>Welcome Back</h1>
          <p>
            Login to continue
          </p>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {
              loading
                ? "Logging in..."
                : "Login"
            }

          </button>
          <p className="signup-text">
         Don't have an account?
        <Link
            to="/signup"
            className="signup-link"
        >Sign Up
        </Link>

        </p>
        </form>
      </div>

    </>
  );
}

export default Login;