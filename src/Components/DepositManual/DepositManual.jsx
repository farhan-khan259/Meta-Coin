import { useEffect, useState } from "react";
import {
  FaBars,
  FaCopy,
  FaHistory,
  FaHome,
  FaTimes,
  FaUserCircle,
  FaUsers,
  FaWallet,
  FaWhatsapp,
} from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./DepositManual.css";

const DepositManual = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(29 * 60 + 26);
  const [selectedFile, setSelectedFile] = useState(null);
  const [trxId, setTrxId] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { method, amount } = location.state || {};

  const accountInfo = {
    EasyPaisa: { number: "03340490934", name: "Muhammad Farhan\n(EasyPaisa)" },
    JazzCash: { number: "03446721559", name: "Muhammad Farhan\n(JazzCash)" },
    "Bank Transfer": {
      number: "5040310330000017",
      name: "Muhammad Farhan\n(Bank of Punjab)",
    },
  };

  const currentAccount = accountInfo[method] || {};

  useEffect(() => {
    if (!method || !amount) navigate("/deposit");
  }, [method, amount, navigate]);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  const copyToClipboard = (text) => navigator.clipboard.writeText(text);

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", { trxId, selectedFile });
  };

  return (
    <div className="depositmanual-wrapper">
      {/* Sidebar */}
      <aside className={`depositmanual-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="depositmanual-sidebar-top">
          <button className="depositmanual-close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <div className="depositmanual-sidebar-brand">
            <div className="depositmanual-brand-icon">M</div>
            <div className="depositmanual-brand-info">
              <div className="depositmanual-brand-title">Meta Coin</div>
              <div className="depositmanual-brand-sub">Welcome</div>
            </div>
          </div>
        </div>

        <nav className="depositmanual-sidebar-nav">
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
            <li className="active">
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
              <Link to="/team">
                <FaUsers /> My Team
              </Link>
            </li>
            <li>
              <Link to="/deposithistory">
                <FaHistory /> Recharge History
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
      <div className="depositmanual-main">
        <header className="depositmanual-topbar">
          <div className="depositmanual-left">
            <button className="depositmanual-hamburger" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <div className="depositmanual-app-title">Meta Coin</div>
          </div>

          <div className="depositmanual-right">
            <button className="depositmanual-whatsapp-btn">
              <FaWhatsapp /> Whatsapp Group
            </button>
            <div className="depositmanual-profile-pic">
              <FaUserCircle />
            </div>
          </div>
        </header>

        <main className="depositmanual-content">
          <div className="depositmanual-container">
            <div className="depositmanual-payment-header">
              <h1 className="depositmanual-payment-amount">
                Pay {amount} Rs ({method})
              </h1>
              <h2 className="depositmanual-payment-instructions">
                Payment Instructions
              </h2>
            </div>

            <section className="depositmanual-deposit-details-section">
              <h3 className="depositmanual-section-title">Deposit Details</h3>

              <div className="depositmanual-details-list">
                <div className="depositmanual-detail-item">
                  <span className="depositmanual-detail-label">
                    Account Number:
                  </span>
                  <span className="depositmanual-detail-value">
                    {currentAccount.number}
                  </span>
                  <button
                    className="depositmanual-copy-btn"
                    onClick={() => copyToClipboard(currentAccount.number)}
                  >
                    <FaCopy /> Copy
                  </button>
                </div>

                <div className="depositmanual-detail-item">
                  <span className="depositmanual-detail-label">
                    Account Name:
                  </span>
                  <span className="depositmanual-detail-value">
                    {currentAccount.name?.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </span>
                </div>
              </div>

              <div className="depositmanual-approval-info">
                <p>
                  After payment, please wait 30 minutes for deposit approval.
                </p>
                <div className="depositmanual-approval-time">
                  <span className="depositmanual-time-bullet">○</span>
                  <span>Approval Time: 30 Minutes</span>
                </div>
              </div>
            </section>

            <section className="depositmanual-timer-section">
              <div className="depositmanual-timer-card">
                <div className="depositmanual-timer-label">Time Left</div>
                <div className="depositmanual-timer-value">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </section>

            <section className="depositmanual-upload-section">
              <div className="depositmanual-upload-header">
                <h4 className="depositmanual-upload-title">TRX ID</h4>
              </div>
              <form
                className="depositmanual-upload-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Enter TRX ID"
                  value={trxId}
                  onChange={(e) => setTrxId(e.target.value)}
                  className="depositmanual-trx-input"
                />

                <div className="depositmanual-file-input-container">
                  <input
                    type="file"
                    id="depositmanual-file-upload"
                    className="depositmanual-file-input"
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="depositmanual-file-upload"
                    className="depositmanual-file-label"
                  >
                    {selectedFile
                      ? selectedFile.name
                      : "Choose File (No file chosen)"}
                  </label>
                </div>

                <button type="submit" className="depositmanual-pay-now-btn">
                  PAY NOW
                </button>
              </form>
            </section>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="depositmanual-bottom-nav">
          <Link to="/dashboard" className="depositmanual-bn-btn">
            <FaHome />
          </Link>
          <Link to="/withdraw" className="depositmanual-bn-btn">
            <FaWallet />
          </Link>
          <div className="depositmanual-bn-btn depositmanual-center">
            <div className="depositmanual-center-dot">M</div>
          </div>
          <Link to="/team" className="depositmanual-bn-btn">
            <FaUsers />
          </Link>
          <Link to="/dashboard" className="depositmanual-bn-btn">
            <FaUserCircle />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default DepositManual;
