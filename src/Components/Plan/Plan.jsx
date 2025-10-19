import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaTimes,
  FaUserCircle,
  FaUsers,
  FaWallet,
  FaWhatsapp,
} from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Plan.css";

const Plan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((s) => !s);

  const investmentPlans = [
    {
      id: 1,
      name: "VIP 1",
      dailyProfit: "PKR30.00 Rs",
      investmentAmount: "380.00 PKR",
      planValid: "25 Days",
      totalProfit: "750 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
    {
      id: 2,
      name: "VIP 2",
      dailyProfit: "PKR65.00 Rs",
      investmentAmount: "820.00 PKR",
      planValid: "25 Days",
      totalProfit: "1625 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
    {
      id: 3,
      name: "VIP 3",
      dailyProfit: "PKR166.00 Rs",
      investmentAmount: "2,080.00 PKR",
      planValid: "25 Days",
      totalProfit: "4150 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
    {
      id: 4,
      name: "VIP 4",
      dailyProfit: "PKR376.00 Rs",
      investmentAmount: "5,020.00 PKR",
      planValid: "25 Days",
      totalProfit: "9400 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
    {
      id: 5,
      name: "VIP 5",
      dailyProfit: "PKR580.00 Rs",
      investmentAmount: "10,500.00 PKR",
      planValid: "45 Days",
      totalProfit: "26100 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
    {
      id: 6,
      name: "VIP 6",
      dailyProfit: "PKR1,400.00 Rs",
      investmentAmount: "22,500.00 PKR",
      planValid: "45 Days",
      totalProfit: "63000 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
    {
      id: 7,
      name: "VIP 7",
      dailyProfit: "PKR2,700.00 Rs",
      investmentAmount: "50,500.00 PKR",
      planValid: "45 Days",
      totalProfit: "121500 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
    {
      id: 8,
      name: "VIP 8",
      dailyProfit: "PKR5,800.00 Rs",
      investmentAmount: "105,500.00 PKR",
      planValid: "45 Days",
      totalProfit: "261000 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
    {
      id: 9,
      name: "VIP 9",
      dailyProfit: "PKR8,000.00 Rs",
      investmentAmount: "150,000.00 PKR",
      planValid: "60 Days",
      totalProfit: "480000 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
    {
      id: 10,
      name: "VIP 10",
      dailyProfit: "PKR12,000.00 Rs",
      investmentAmount: "200,000.00 PKR",
      planValid: "60 Days",
      totalProfit: "720000 PKR",
      referBonus1: "10%",
      referBonus2: "5%",
    },
  ];

  return (
    <div className="plan-wrapper">
      {/* Sidebar */}
      <aside className={`plan-sidebar ${sidebarOpen ? "open" : ""}`}>
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
              <Link to="/dashboard" onClick={() => setSidebarOpen(false)}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={() => setSidebarOpen(false)}>
                <FaUserCircle /> User Dashboard
              </Link>
            </li>
            <li>
              <Link to="/deposit" onClick={() => setSidebarOpen(false)}>
                <RiMoneyDollarCircleLine /> Deposit
              </Link>
            </li>
            <li>
              <Link to="/withdraw" onClick={() => setSidebarOpen(false)}>
                <FaWallet /> Withdraw
              </Link>
            </li>
            <li>
              <Link to="/withdrawhistory" onClick={() => setSidebarOpen(false)}>
                <FaWallet /> Withdraw History
              </Link>
            </li>
            <li>
              <Link to="/deposithistory" onClick={() => setSidebarOpen(false)}>
                <RiMoneyDollarCircleLine /> Recharge History
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setSidebarOpen(false)}>
                <FaUsers /> My Team
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setSidebarOpen(false)}>
                <FaUserCircle /> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="plan-main">
        <header className="plan-topbar">
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

        <main className="plan-content">
          <div className="plan-container">
            <div className="plan-header">
              <h1 className="main-title">Investment Plans</h1>
              <h2 className="section-title">
                The plans we offer are specifically made for you.
              </h2>
            </div>

            <div className="plans-grid">
              {investmentPlans.map((plan) => (
                <div key={plan.id} className="plan-card">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-details">
                    <div className="plan-row">
                      <span className="plan-label">Daily Profit:</span>
                      <span className="plan-value profit">
                        {plan.dailyProfit}
                      </span>
                    </div>
                    <div className="plan-row">
                      <span className="plan-label">Investment Amount:</span>
                      <span className="plan-value">
                        {plan.investmentAmount}
                      </span>
                    </div>
                    <div className="plan-row">
                      <span className="plan-label">Plan Valid:</span>
                      <span className="plan-value">{plan.planValid}</span>
                    </div>
                    <div className="plan-row">
                      <span className="plan-label">Total Profit:</span>
                      <span className="plan-value">{plan.totalProfit}</span>
                    </div>

                    <button className="invest-now-btn">Invest Now</button>

                    <div className="plan-row">
                      <span className="plan-label">Refer Bonus Level 1:</span>
                      <span className="plan-value">{plan.referBonus1}</span>
                    </div>
                    <div className="plan-row">
                      <span className="plan-label">Refer Bonus Level 2:</span>
                      <span className="plan-value">{plan.referBonus2}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <nav className="bottom-nav">
          <Link to="/dashboard" className="bn-btn">
            <FaHome />
          </Link>
          <Link to="/withdraw" className="bn-btn">
            <FaWallet />
          </Link>
          <div className="bn-btn center">
            <div className="center-dot">
              <Link to="/plan">M</Link>
            </div>
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

export default Plan;
