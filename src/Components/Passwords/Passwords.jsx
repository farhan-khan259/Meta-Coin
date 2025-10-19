import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaTimes,
  FaUserCircle,
  FaUsers,
  FaWallet,
  FaWhatsapp,
  FaHistory,
  FaKey,
} from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Passwords.css";

const Passwords = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.oldPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    // Handle password update logic here
    console.log("Password update submitted:", formData);
    alert("Password updated successfully!");

    // Reset form
    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="passwords-wrapper">
      {/* Sidebar */}
      <aside className={`passwords-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="passwords-sidebar-top">
          <button className="passwords-close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <div className="passwords-sidebar-brand">
            <div className="passwords-brand-icon">M</div>
            <div className="passwords-brand-info">
              <div className="passwords-brand-title">Meta Coin</div>
              <div className="passwords-brand-sub">Welcome</div>
            </div>
          </div>
        </div>

        <nav className="passwords-sidebar-nav">
          <ul>
            <li>
              <Link to="/dashboard">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <FaUserCircle /> User Dashboard
              </Link>
            </li>
            <li>
              <Link to="/deposit">
                <RiMoneyDollarCircleLine /> Deposit
              </Link>
            </li>
            <li>
              <Link to="/withdraw">
                <FaWallet /> Withdraw
              </Link>
            </li>
            <li>
              <Link to="/withdraw-history">
                <FaHistory /> Withdraw History
              </Link>
            </li>
            <li>
              <Link to="/deposithistory">
                <FaHistory /> Recharge History
              </Link>
            </li>
            <li className="active">
              <Link to="/passwords">
                <FaKey /> Passwords
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaUserCircle /> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="passwords-main">
        <header className="passwords-topbar">
          <div className="passwords-left">
            <button className="passwords-hamburger" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <div className="passwords-app-title">Meta Coin</div>
          </div>

          <div className="passwords-right">
            <button className="passwords-whatsapp-btn">
              <FaWhatsapp /> Whatsapp Group
            </button>
            <div className="passwords-profile-pic">
              <FaUserCircle />
            </div>
          </div>
        </header>

        <main className="passwords-content">
          <div className="passwords-container">
            <h1 className="passwords-title">Update Password</h1>

            <form className="passwords-form" onSubmit={handleSubmit}>
              {/* Old Password */}
              <div className="passwords-form-group">
                <label className="passwords-form-label">Old Password</label>
                <input
                  type="password"
                  className="passwords-input"
                  placeholder="Enter Your Old Password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* New Password */}
              <div className="passwords-form-group">
                <label className="passwords-form-label">New Password</label>
                <input
                  type="password"
                  className="passwords-input"
                  placeholder="Enter Your New Password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="passwords-form-group">
                <label className="passwords-form-label">Confirm Password</label>
                <input
                  type="password"
                  className="passwords-input"
                  placeholder="Enter Your New Password Again"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Divider */}
              <div className="passwords-divider" />

              {/* Update Password Button */}
              <button type="submit" className="passwords-submit-btn">
                UPDATE PASSWORD
              </button>
            </form>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="passwords-bottom-nav">
          <Link to="/dashboard" className="passwords-bn-btn">
            <FaHome />
          </Link>
          <Link to="/withdraw" className="passwords-bn-btn">
            <FaWallet />
          </Link>
          <div className="passwords-bn-btn passwords-center">
            <div className="passwords-center-dot">M</div>
          </div>
          <Link to="/team" className="passwords-bn-btn">
            <FaUsers />
          </Link>
          <Link to="/dashboard" className="passwords-bn-btn">
            <FaUserCircle />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Passwords;
