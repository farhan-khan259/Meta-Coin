import { useState } from "react";
import {
  FaBars,
  FaCopy,
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
import "./Team.css";

const Team = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inviteLink] = useState("https://metacoin.com/signup?ref=839027548");
  const [copied, setCopied] = useState(false);
  const [activeLevel, setActiveLevel] = useState(1);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  const copyInvite = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <div className="team-wrapper">
      {/* Sidebar */}
      <aside className={`team-sidebar ${sidebarOpen ? "open" : ""}`}>
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
      <div className="team-main">
        {/* Topbar */}
        <header className="team-topbar">
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
        <main className="team-content">
          {/* Invitation Link Section */}
          <section className="invitation-section">
            <h2 className="section-title">Invitation Link</h2>

            <div className="invite-card">
              <div className="invite-header">
                <h3>Invite Friends</h3>
              </div>
              <div className="invite-link-box">
                <div className="invite-link">{inviteLink}</div>
                <button className="copy-invite-btn" onClick={copyInvite}>
                  <FaCopy /> {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="invite-subtitle">
                Earn extra with share this link
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="stat-card">
              <div className="stat-label">Lev 1 Invest</div>
              <div className="stat-value">PKR 0.00</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Lev 1 Team</div>
              <div className="stat-value">0</div>
            </div>
          </section>

          {/* Referral Logs */}
          <section className="logs-section">
            <h3 className="logs-title">Referral Logs</h3>
            <div className="logs-placeholder">
              <div className="empty-logs">No referral logs available</div>
            </div>
          </section>

          {/* My Referrals */}
          <section className="referrals-section">
            <h3 className="referrals-title">My Referrals</h3>

            {/* Level Tabs */}
            <div className="level-tabs">
              <button
                className={`level-tab ${activeLevel === 1 ? "active" : ""}`}
                onClick={() => setActiveLevel(1)}
              >
                Level 1
              </button>
              <button
                className={`level-tab ${activeLevel === 2 ? "active" : ""}`}
                onClick={() => setActiveLevel(2)}
              >
                Level 2
              </button>
            </div>

            {/* Referrals List */}
            <div className="referrals-list">
              <div className="empty-referrals">
                <div className="empty-icon">
                  <FaUsers />
                </div>
                <div className="empty-text">
                  No referrals found for Level {activeLevel}
                </div>
              </div>
            </div>
          </section>
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

export default Team;
