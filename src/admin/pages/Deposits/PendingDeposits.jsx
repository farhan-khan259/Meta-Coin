// src/admin/pages/Deposits/PendingDeposits.jsx
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { FaSync } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/userlist.css";

export default function PendingDeposits() {
  const [q, setQ] = useState("");
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch deposits function (used for refresh too)
  const fetchDeposits = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3005/api/payments");
      setDeposits(res.data.data || []);
    } catch (error) {
      console.error("Error fetching deposits:", error);
      setDeposits([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeposits();
  }, []);

  // ✅ Search + filter
  const filtered = useMemo(() => {
    return (deposits || [])
      .filter((d) => d.depositStatus === "pending") // only pending
      .filter((d) => JSON.stringify(d).toLowerCase().includes(q.toLowerCase()));
  }, [deposits, q]);

  // ✅ Approve / Reject Deposit
  const handleStatusChange = async (userId, newStatus, _id) => {
    try {
      const res = await axios.post("http://localhost:3005/api/status", {
        userId: userId,
        status: newStatus,
        type: "deposit",
        requesId: _id,
      });

      alert(res.data.message);

      // Update frontend instantly
      setDeposits((prev) =>
        prev.map((d) =>
          d._id === _id ? { ...d, depositStatus: newStatus } : d
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar />
        <div className="admin-content">
          <div className="page-header">
            <h2>Pending Deposits</h2>
            <button onClick={fetchDeposits} className="refresh-btn">
              <FaSync /> {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          <div style={{ marginBottom: 12 }}>
            <input
              placeholder="Search UID, method, amount..."
              className="userlist-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <table className="userlist-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Proof</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d) => (
                <tr key={d._id}>
                  <td data-label="ID">{d._id}</td>
                  <td data-label="User">
                    {" "}
                    {d.user_id?.randomCode || d.user_id?._id || "N/A"}
                  </td>
                  <td data-label="Method">{d.payment_method}</td>
                  <td data-label="Amount">
                    PKR {d.depositsAmount?.toLocaleString()}
                  </td>
                  <td data-label="Date">
                    {new Date(d.createdAt).toLocaleDateString()}
                  </td>
                  <td data-label="Proof">
                    {d.screenshot ? (
                      <a
                        href={`http://localhost:3005/${d.screenshot}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "No proof"
                    )}
                  </td>
                  <td data-label="Status">{d.depositStatus}</td>
                  <td data-label="Actions">
                    <button
                      className="action-btn view"
                      onClick={() =>
                        handleStatusChange(d.user_id, "approved", d._id)
                      }
                    >
                      Approve
                    </button>
                    <button
                      className="action-btn delete"
                      onClick={() =>
                        handleStatusChange(d.user_id, "reject", d._id)
                      }
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && !loading && (
            <p style={{ textAlign: "center", marginTop: 10 }}>
              No pending deposits found.
            </p>
          )}
          {loading && (
            <p style={{ textAlign: "center", marginTop: 10 }}>
              Loading deposits...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
