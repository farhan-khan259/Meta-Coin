import { useState } from "react";
import {
  FaBars,
  FaHistory,
  FaHome,
  FaPowerOff,
  FaTimes,
  FaUserCircle,
  FaUsers,
  FaWallet,
  FaWhatsapp,
} from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./WithdrawManual.css";

const WithdrawManual = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  return (
    <div className="withdraw-wrapper">
      {/* Sidebar */}
      <aside className={`withdraw-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <div className="sidebar-brand">
            <div className="brand-icon">M</div>
            <div className="brand-info">
              <div className="brand-title">Meta Coin</div>
              <div className="brand-sub">Welcome</div>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
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
              <Link to="/withdrawhistory">
                <FaHistory /> Withdraw History
              </Link>
            </li>
            <li>
              <Link to="/deposithistory">
                <FaHistory /> Recharge History
              </Link>
            </li>
            <li>
              <Link to="/team">
                <FaUsers /> My Team
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaPowerOff /> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="withdraw-main">
        {/* Topbar */}
        <header className="withdraw-topbar">
          <div className="left">
            <button className="hamburger" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <div className="app-title">Meta Coin</div>
          </div>

          <div className="right">
            <button className="whatsapp-btn">
              <FaWhatsapp /> Whatsapp Group
            </button>
            <div className="profile-pic">
              <FaUserCircle />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="withdraw-content">
          <div className="withdraw-container">
            <div className="withdraw-header">
              <h1>Meta Coin</h1>
            </div>

            <div className="withdraw-body">
              {/* Pay Section */}
              <div className="section">
                <h3 className="section-title">Pay</h3>
                <div className="input-group">
                  <label>Account number</label>
                  <input
                    type="text"
                    placeholder="Enter account number"
                    className="form-input"
                  />
                </div>
                <div className="input-group">
                  <label>Account name</label>
                  <input
                    type="text"
                    placeholder="Enter account name"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="divider"></div>

              {/* Submit Button */}
              <button className="submit-now-btn">Submit Now</button>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="bottom-nav">
          <button className="bn-btn">
            <Link to="/dashboard">
              <FaHome />
            </Link>
          </button>
          <button className="bn-btn">
            <Link to="/withdraw">
              <FaWallet />
            </Link>
          </button>
          <button className="bn-btn center">
            <div className="center-dot">
              <Link to="/plan">M</Link>
            </div>
          </button>
          <button className="bn-btn">
            <Link to="/team">
              <FaUsers />
            </Link>
          </button>
          <button className="bn-btn">
            <Link to="/dashboard">
              <FaUserCircle />
            </Link>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default WithdrawManual;
