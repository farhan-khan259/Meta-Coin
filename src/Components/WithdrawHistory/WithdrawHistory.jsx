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
import "./WithdrawHistroy.css";

const WithdrawHistory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  // Sample withdraw history data with methods and account numbers
  const withdrawHistory = [
    {
      id: 1,
      orderNumber: "66BHG8WMOGNV",
      amount: "100.00 PKR",
      date: "Oct 14 2025 25:21:pm",
      status: "rejected",
      timeAgo: "3 hours ago",
      method: "EasyPaisa",
      accountNumber: "03446721559",
    },
    {
      id: 2,
      orderNumber: "3HYZTM5UPVQM",
      amount: "100.00 PKR",
      date: "Oct 10 2025 25:58:pm",
      status: "rejected",
      timeAgo: "3 days ago",
      method: "JazzCash",
      accountNumber: "03001234567",
    },
    {
      id: 3,
      orderNumber: "7KJFD9SDFG34",
      amount: "500.00 PKR",
      date: "Oct 08 2025 14:30:pm",
      status: "completed",
      timeAgo: "5 days ago",
      method: "Bank Transfer",
      accountNumber: "12345678901",
    },
    {
      id: 4,
      orderNumber: "2PLMNB6TYUIO",
      amount: "250.00 PKR",
      date: "Oct 05 2025 10:15:am",
      status: "pending",
      timeAgo: "1 week ago",
      method: "EasyPaisa",
      accountNumber: "03446721559",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "withdrawhistory-status-completed";
      case "pending":
        return "withdrawhistory-status-pending";
      case "rejected":
        return "withdrawhistory-status-rejected";
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

  const getMethodIcon = (method) => {
    switch (method.toLowerCase()) {
      case "easypaisa":
        return "📱";
      case "jazzcash":
        return "💳";
      case "bank transfer":
        return "🏦";
      default:
        return "💰";
    }
  };

  return (
    <div className="withdrawhistory-wrapper">
      {/* Sidebar */}
      <aside className={`withdrawhistory-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="withdrawhistory-sidebar-top">
          <button className="withdrawhistory-close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <div className="withdrawhistory-sidebar-brand">
            <div className="withdrawhistory-brand-icon">M</div>
            <div className="withdrawhistory-brand-info">
              <div className="withdrawhistory-brand-title">Meta Coin</div>
              <div className="withdrawhistory-brand-sub">Welcome</div>
            </div>
          </div>
        </div>

        <nav className="withdrawhistory-sidebar-nav">
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
            <li className="active">
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
      <div className="withdrawhistory-main">
        <header className="withdrawhistory-topbar">
          <div className="withdrawhistory-left">
            <button
              className="withdrawhistory-hamburger"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
            <div className="withdrawhistory-app-title">Meta Coin</div>
          </div>

          <div className="withdrawhistory-right">
            <button className="withdrawhistory-whatsapp-btn">
              <FaWhatsapp /> Whatsapp Group
            </button>
            <div className="withdrawhistory-profile-pic">
              <FaUserCircle />
            </div>
          </div>
        </header>

        <main className="withdrawhistory-content">
          <div className="withdrawhistory-container">
            <h1 className="withdrawhistory-title">Withdraw History</h1>

            <div className="withdrawhistory-list">
              {withdrawHistory.map((item) => (
                <div key={item.id} className="withdrawhistory-item">
                  {/* Method and Account Number */}
                  <div className="withdrawhistory-method-section">
                    <div className="withdrawhistory-method-info">
                      <span className="withdrawhistory-method-icon">
                        {getMethodIcon(item.method)}
                      </span>
                      <div className="withdrawhistory-method-details">
                        <div className="withdrawhistory-method-name">
                          {item.method}
                        </div>
                        <div className="withdrawhistory-account-number">
                          {item.accountNumber}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`withdrawhistory-status-badge ${getStatusClass(
                        item.status
                      )}`}
                    >
                      {getStatusText(item.status)}
                    </div>
                  </div>

                  {/* Order Details */}
                  <div className="withdrawhistory-details-grid">
                    <div className="withdrawhistory-detail-item">
                      <span className="withdrawhistory-detail-label">
                        Order Number:
                      </span>
                      <span className="withdrawhistory-detail-value">
                        {item.orderNumber}
                      </span>
                    </div>
                    <div className="withdrawhistory-detail-item">
                      <span className="withdrawhistory-detail-label">
                        Amount:
                      </span>
                      <span className="withdrawhistory-detail-value withdrawhistory-amount">
                        {item.amount}
                      </span>
                    </div>
                    <div className="withdrawhistory-detail-item">
                      <span className="withdrawhistory-detail-label">
                        Date:
                      </span>
                      <span className="withdrawhistory-detail-value">
                        {item.date}
                      </span>
                    </div>
                    <div className="withdrawhistory-detail-item">
                      <span className="withdrawhistory-detail-label">
                        Time Ago:
                      </span>
                      <span className="withdrawhistory-detail-value withdrawhistory-time-ago">
                        {item.timeAgo}
                      </span>
                    </div>
                  </div>

                  {/* Divider between items */}
                  {item.id !== withdrawHistory.length && (
                    <div className="withdrawhistory-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="withdrawhistory-bottom-nav">
          <Link to="/dashboard" className="withdrawhistory-bn-btn">
            <FaHome />
          </Link>
          <Link to="/withdraw" className="withdrawhistory-bn-btn">
            <FaWallet />
          </Link>
          <div className="withdrawhistory-bn-btn withdrawhistory-center">
            <div className="withdrawhistory-center-dot">M</div>
          </div>
          <Link to="/team" className="withdrawhistory-bn-btn">
            <FaUsers />
          </Link>
          <Link to="/dashboard" className="withdrawhistory-bn-btn">
            <FaUserCircle />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default WithdrawHistory;
