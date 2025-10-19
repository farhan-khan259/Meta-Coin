import { useState } from "react";
import { FaEnvelope, FaLock, FaPhoneAlt, FaUser, FaTag } from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    promoCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <div className="signup-header">
          <div className="signup-logo">Meta Coin</div>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up</h2>

          <div className="form-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <FaPhoneAlt className="input-icon" />
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

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

          {/* ✅ New Promo Code Field */}
          <div className="form-group">
            <FaTag className="input-icon" />
            <input
              type="text"
              name="promoCode"
              placeholder="Enter Promo Code "
              value={formData.promoCode}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <p className="bottom-text">
            Already a member?{" "}
            <a href="/" className="link">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
