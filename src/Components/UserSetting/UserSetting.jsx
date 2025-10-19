import { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaBars,
  FaBell,
  FaChartLine,
  FaClipboardList,
  FaCoins,
  FaCopy,
  FaGift,
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
import "./UserSetting.css";

const UserSetting = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inviteLink] = useState("https://metacoin.com/signup?ref=839027548");
  const [copied, setCopied] = useState(false);

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
    <div className="usr-wrapper">
      {/* Sidebar */}
      <aside className={`usr-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <div className="sidebar-brand">
            <div className="brand-icon">
              <FaCoins className="meta-coin-icon" />
            </div>
            <div className="brand-info">
              <div className="brand-title">Meta Coin</div>
              <div className="brand-sub">Welcome</div>
              <div className="phone-number">03340490934</div>
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
      <div className="usr-main">
        {/* Topbar */}
        <header className="usr-topbar">
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
        <main className="usr-content">
          {/* Balance Card */}
          <section className="balance-card">
            <div className="balance-left">
              <div className="small">Current Balance</div>
              <div className="big">0.00 PKR</div>
            </div>

            <div className="balance-actions">
              <button className="pill">
                <Link to="/withdraw">
                  <FaWallet /> Withdraw Money
                </Link>
              </button>
              <button className="pill outline">
                <Link to="/deposit">
                  <RiMoneyDollarCircleLine /> Deposit Money
                </Link>
              </button>
            </div>
          </section>

          {/* Action Tabs */}
          <div className="action-tabs">
            <button className="tab">
              <Link to="/activeplans">
                <FaChartLine /> My Active Plans
              </Link>
            </button>
            <button className="tab">
              <Link to="/team">
                <FaUsers /> My Team
              </Link>
            </button>
          </div>

          {/* Overview Cards */}
          <section className="overview-grid">
            <div className="overview-card">
              <FaWallet className="ov-icon" />
              <div>
                <div className="label">Total Withdraw</div>
                <div className="value">0.00 PKR</div>
              </div>
            </div>

            <div className="overview-card">
              <FaBell className="ov-icon" />
              <div>
                <div className="label">Pending Withdraw</div>
                <div className="value">0.00 PKR</div>
              </div>
            </div>

            <div className="overview-card">
              <FaClipboardList className="ov-icon" />
              <div>
                <div className="label">Total Recharge</div>
                <div className="value">50.00 PKR</div>
              </div>
            </div>

            <div className="overview-card">
              <FaUsers className="ov-icon" />
              <div>
                <div className="label">Total Team</div>
                <div className="value">0</div>
              </div>
            </div>

            <div className="overview-card">
              <FaGift className="ov-icon" />
              <div>
                <div className="label">Total Refer Bonus</div>
                <div className="value">0.00 PKR</div>
              </div>
            </div>

            <div className="overview-card">
              <FaClipboardList className="ov-icon" />
              <div>
                <div className="label">Pending Deposit</div>
                <div className="value">100.00 PKR</div>
              </div>
            </div>
          </section>

          {/* Invite Box */}
          <section className="invite-box">
            <div className="invite-left">
              <div className="invite-title">Invite Friends</div>
              <div className="invite-sub">Earn extra by sharing this link</div>
            </div>

            <div className="invite-right">
              <input readOnly value={inviteLink} className="invite-input" />
              <button className="copy-btn" onClick={copyInvite}>
                <FaCopy /> {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </section>

          {/* Account History */}
          <section className="history-section">
            <h3>
              <FaHistory /> Account History
            </h3>

            <div className="history-list">
              {[
                { icon: <FaClipboardList />, title: "Total Plans", value: "0" },
                {
                  icon: <FaWallet />,
                  title: "Team Total Withdrawals",
                  value: "0.00 PKR",
                },
                {
                  icon: <FaGift />,
                  title: "Total Refer Bonus",
                  value: "PKR 0.00",
                },
                {
                  icon: <FaUsers />,
                  title: "Total Team Invest",
                  value: "0.00 PKR",
                },
                {
                  icon: <FaUserCircle />,
                  title: "Total Refer Count",
                  value: "0",
                },
              ].map((item, idx) => (
                <div className="history-item" key={idx}>
                  <div className="hi-left">
                    <div className="hi-icon">{item.icon}</div>
                    <div>
                      <div className="hi-title">{item.title}</div>
                      <div className="hi-sub">{item.value}</div>
                    </div>
                  </div>
                  <div className="hi-arrow">
                    <FaArrowAltCircleRight />
                  </div>
                </div>
              ))}
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

export default UserSetting;
