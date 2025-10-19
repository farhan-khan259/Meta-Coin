import { useState } from "react";
import { FaEnvelope, FaLock, FaKey } from "react-icons/fa";
import "./Forgetpassword.css";

const Forgetpassword = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    console.log("OTP sent to:", formData.email);
    // Simulate sending OTP to email
    setStep(2);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password reset successfully:", formData);
    // Add API call or Firebase reset logic here
  };

  return (
    <div className="forget-page">
      <div className="forget-box">
        <div className="forget-header">
          <div className="forget-logo">Meta Coin</div>
        </div>

        <form
          onSubmit={step === 1 ? handleSendOTP : handleResetPassword}
          className="forget-form"
        >
          <h2>Forgot Password</h2>

          {step === 1 && (
            <>
              <p className="instruction">
                Enter your registered email to receive a 5-digit OTP.
              </p>
              <div className="form-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="forget-btn">
                Send OTP
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <p className="instruction">Enter OTP and reset your password.</p>

              <div className="form-group">
                <FaKey className="input-icon" />
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter 5-digit OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Enter New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="forget-btn">
                Reset Password
              </button>
            </>
          )}

          <p className="bottom-text">
            Remembered your password?{" "}
            <a href="/" className="link">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Forgetpassword;
