import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Admin credentials check
    if (username === "adminmetacoin@gmail.com" && password === "admin@786") {
      localStorage.setItem("adminToken", "true");
      localStorage.setItem("adminEmail", username);
      navigate("/admin");
      return;
    }

    // Normal user login
    if (username && password) {
      localStorage.setItem("userToken", "true");
      navigate("/dashboard");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <div className="signin-header">
          <div className="signin-logo">Meta Coin</div>
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          <h2>Sign In</h2>

          {/* Email Field */}
          <div className="form-group">
            <FaEnvelope className="input-icon" />
            <input
              type="text"
              name="username"
              placeholder="Enter Email"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="forgot-password">
            <a href="/forgetpassword" className="link">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <p className="bottom-text">
            Not a member?{" "}
            <a href="/signup" className="link">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
