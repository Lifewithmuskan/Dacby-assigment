import { useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import "./Signup.css";
import {Link,useNavigate} from "react-router-dom";
function Signup() {

  const [formData, setFormData] = useState({
    name: "",
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
        "http://localhost:5000/api/signup",
        formData
      );

      console.log(response.data);

      localStorage.setItem(
  "user",
  JSON.stringify(response.data.user)
);

navigate("/");

    } catch (error) {

      console.log(error.response.data);

      alert("Signup Failed");

    } finally {

      setLoading(false);

    }

  };

  return (
    <>

      <Nav />

      <div className="signup-container">

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          <h1>Create Account</h1>

          <p>
            Join NewsHub today
          </p>

          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
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
            required
          />

          <button
            type="submit"
            disabled={loading}
          >

            {
              loading
                ? "Creating Account..."
                : "Sign Up"
            }

          </button>
                    <p className="login-text">

            Already have an account?

            <Link
                to="/login"
                className="login-link"
            >
                Login
            </Link>

            </p>

        </form>

      </div>

    </>
  );
}

export default Signup;