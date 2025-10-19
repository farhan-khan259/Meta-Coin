import { useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaHistory,
  FaHome,
  FaTimes,
  FaUserCircle,
  FaUsers,
  FaWallet,
  FaWhatsapp,
} from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import "./Deposit.css";

const Deposit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen((s) => !s);
  const toggleDropdown = () => setIsDropdownOpen((s) => !s);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedMethod || !amount) {
      alert("Please select a method and enter amount");
      return;
    }

    navigate("/depositmanual", {
      state: { method: selectedMethod, amount },
    });
  };

  return (
    <div className="deposit-wrapper">
      {/* Sidebar */}
      <aside className={`deposit-sidebar ${sidebarOpen ? "open" : ""}`}>
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
            <li className="active">
              <Link to="/deposithistory">
                <FaHistory /> Recharge History
              </Link>
            </li>
            <li>
              <Link to="/passwords">
                <FaUserCircle /> Passwords
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
      <div className="deposit-main">
        <header className="deposit-topbar">
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

        <main className="deposit-content">
          <div className="deposit-container">
            <h1 className="deposit-title">Recharge</h1>

            <form className="deposit-form" onSubmit={handleSubmit}>
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
                      {["Bank Transfer", "JazzCash", "EasyPaisa"].map(
                        (method) => (
                          <div
                            key={method}
                            className="dropdown-item"
                            onClick={() => {
                              setSelectedMethod(method);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {method}
                          </div>
                        )
                      )}
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
                  placeholder="Enter Deposit Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              {/* Pay Now Button */}
              <button type="submit" className="pay-now-btn">
                PAY NOW
              </button>
            </form>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="bottom-nav">
          <Link to="/dashboard" className="bn-btn">
            <FaHome />
          </Link>
          <Link to="/withdraw" className="bn-btn">
            <FaWallet />
          </Link>
          <div className="bn-btn center">
            <div className="center-dot">M</div>
          </div>
          <Link to="/team" className="bn-btn">
            <FaUsers />
          </Link>
          <Link to="/dashboard" className="bn-btn">
            <FaUserCircle />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Deposit;
