import { useState } from "react";
import {
  FaBars,
  FaChevronDown,
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
import "./Withdraw.css";

const Withdraw = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);
  const toggleDropdown = () => setIsDropdownOpen((s) => !s);

  const quickAmounts = [50, 100, 200, 300, 400, 500, 1000, 2000, 5000, 10000];

  const handleAmountClick = (value) => {
    setAmount(value.toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle withdraw submission
    console.log("Withdraw:", { method: selectedMethod, amount });
  };

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
              <Link>
                <Link to="/withdrawhistory">
                  <FaHistory /> Withdraw History
                </Link>
              </Link>
            </li>
            <li>
              <Link>
                <Link to="/deposithistory">
                  <FaHistory /> Recharge History
                </Link>
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
            <h1 className="withdraw-title">Withdraw</h1>

            <form className="withdraw-form" onSubmit={handleSubmit}>
              {/* Choose Method */}
              <div className="form-group">
                <label className="form-label">Choose Method</label>
                <div className="dropdown-container">
                  <button
                    type="button"
                    className="dropdown-toggle"
                    onClick={toggleDropdown}
                  >
                    {selectedMethod || "Select One"}
                    <FaChevronDown
                      className={`dropdown-arrow ${
                        isDropdownOpen ? "open" : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      <div
                        className="dropdown-item"
                        onClick={() => {
                          setSelectedMethod("Bank Transfer");
                          setIsDropdownOpen(false);
                        }}
                      >
                        Bank Transfer
                      </div>
                      <div
                        className="dropdown-item"
                        onClick={() => {
                          setSelectedMethod("JazzCash");
                          setIsDropdownOpen(false);
                        }}
                      >
                        JazzCash
                      </div>
                      <div
                        className="dropdown-item"
                        onClick={() => {
                          setSelectedMethod("EasyPaisa");
                          setIsDropdownOpen(false);
                        }}
                      >
                        EasyPaisa
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Enter Amount */}
              <div className="form-group">
                <label className="form-label">Enter Amount</label>
                <input
                  type="number"
                  className="amount-input"
                  placeholder="Enter Withdraw Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              {/* Quick Amount Buttons */}
              <div className="quick-amounts">
                <div className="amounts-grid">
                  {quickAmounts.map((amountValue) => (
                    <button
                      key={amountValue}
                      type="button"
                      className="amount-btn"
                      onClick={() => handleAmountClick(amountValue)}
                    >
                      {amountValue.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                <Link to="/withdrawmanual"> Submit</Link>
              </button>
            </form>
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

export default Withdraw;
