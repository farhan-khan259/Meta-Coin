import { useState } from "react";
import {
  FaBars,
  FaHistory,
  FaHome,
  FaTimes,
  FaUserCircle,
  FaUsers,
  FaWallet,
  FaWhatsapp,
} from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./DepositHistory.css";

const DepositHistory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  // Sample deposit history data
  const depositHistory = [
    {
      id: 1,
      orderNumber: "66BHG8WMOGNV",
      amount: "100.00 PKR",
      date: "Oct 14 2025 25:21:pm",
      status: "rejected",
      timeAgo: "3 hours ago",
    },
    {
      id: 2,
      orderNumber: "3HYZTM5UPVQM",
      amount: "100.00 PKR",
      date: "Oct 10 2025 25:58:pm",
      status: "rejected",
      timeAgo: "3 days ago",
    },
    {
      id: 3,
      orderNumber: "7KJFD9SDFG34",
      amount: "500.00 PKR",
      date: "Oct 08 2025 14:30:pm",
      status: "completed",
      timeAgo: "5 days ago",
    },
    {
      id: 4,
      orderNumber: "2PLMNB6TYUIO",
      amount: "250.00 PKR",
      date: "Oct 05 2025 10:15:am",
      status: "pending",
      timeAgo: "1 week ago",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "deposithistory-status-completed";
      case "pending":
        return "deposithistory-status-pending";
      case "rejected":
        return "deposithistory-status-rejected";
      default:
        return "";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "pending":
        return "Pending";
      case "rejected":
        return "Rejected";
      default:
        return status;
    }
  };

  return (
    <div className="deposithistory-wrapper">
      {/* Sidebar */}
      <aside className={`deposithistory-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="deposithistory-sidebar-top">
          <button className="deposithistory-close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <div className="deposithistory-sidebar-brand">
            <div className="deposithistory-brand-icon">M</div>
            <div className="deposithistory-brand-info">
              <div className="deposithistory-brand-title">Meta Coin</div>
              <div className="deposithistory-brand-sub">Welcome</div>
            </div>
          </div>
        </div>

        <nav className="deposithistory-sidebar-nav">
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
      <div className="deposithistory-main">
        <header className="deposithistory-topbar">
          <div className="deposithistory-left">
            <button
              className="deposithistory-hamburger"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
            <div className="deposithistory-app-title">Meta Coin</div>
          </div>

          <div className="deposithistory-right">
            <button className="deposithistory-whatsapp-btn">
              <FaWhatsapp /> Whatsapp Group
            </button>
            <div className="deposithistory-profile-pic">
              <FaUserCircle />
            </div>
          </div>
        </header>

        <main className="deposithistory-content">
          <div className="deposithistory-container">
            <h1 className="deposithistory-title">All Recharge</h1>

            <div className="deposithistory-list">
              {depositHistory.map((item) => (
                <div key={item.id} className="deposithistory-item">
                  {/* Order Number */}
                  <div className="deposithistory-field">
                    <div className="deposithistory-label">Order Number:</div>
                    <div className="deposithistory-value">
                      {item.orderNumber}
                    </div>
                  </div>
                  <div className="deposithistory-field-divider" />

                  {/* Amount */}
                  <div className="deposithistory-field">
                    <div className="deposithistory-label">Amount:</div>
                    <div className="deposithistory-value deposithistory-amount">
                      {item.amount}
                    </div>
                  </div>
                  <div className="deposithistory-field-divider" />

                  {/* Date */}
                  <div className="deposithistory-field">
                    <div className="deposithistory-label">Date:</div>
                    <div className="deposithistory-value">{item.date}</div>
                  </div>
                  <div className="deposithistory-field-divider" />

                  {/* Status */}
                  <div className="deposithistory-field">
                    <div className="deposithistory-label">Status:</div>
                    <div className="deposithistory-status-info">
                      <span
                        className={`deposithistory-status-badge ${getStatusClass(
                          item.status
                        )}`}
                      >
                        {getStatusText(item.status)}
                      </span>
                      <span className="deposithistory-time-ago">
                        {item.timeAgo}
                      </span>
                    </div>
                  </div>

                  {/* Divider between items */}
                  {item.id !== depositHistory.length && (
                    <div className="deposithistory-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="deposithistory-bottom-nav">
          <Link to="/dashboard" className="deposithistory-bn-btn">
            <FaHome />
          </Link>
          <Link to="/withdraw" className="deposithistory-bn-btn">
            <FaWallet />
          </Link>
          <div className="deposithistory-bn-btn deposithistory-center">
            <div className="deposithistory-center-dot">M</div>
          </div>
          <Link to="/team" className="deposithistory-bn-btn">
            <FaUsers />
          </Link>
          <Link to="/dashboard" className="deposithistory-bn-btn">
            <FaUserCircle />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default DepositHistory;
