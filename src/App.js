import { useEffect } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// ---- USER COMPONENTS ----
import Deposit from "./Components/Deposit/Deposit";
import DepositHistory from "./Components/DepositHistory/DepositHistory";
import DepositManual from "./Components/DepositManual/DepositManual";
import ForgetPassword from "./Components/Forgetpassword/Forgetpassword";
import Passwords from "./Components/Passwords/Passwords";
import Plan from "./Components/Plan/Plan";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Team from "./Components/Team/Team";
import UserSetting from "./Components/UserSetting/UserSetting";
import Withdraw from "./Components/Withdraw/Withdraw";
import WithdrawHistory from "./Components/WithdrawHistory/WithdrawHistory";
import WithdrawManual from "./Components/WithdrawManual/WithdrawManual";

// ---- ADMIN COMPONENTS (new system) ----
import adminRoutes from "./admin/adminRoutes";

// ---- PROTECTED ROUTES ----
const UserProtectedRoute = ({ children }) => {
  const userToken = localStorage.getItem("userToken");
  return userToken ? children : <Navigate to="/" />;
};

const AdminProtectedRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");
  const adminEmail = localStorage.getItem("adminEmail");
  if (adminToken && adminEmail === "adminmetacoin@gmail.com") {
    return children;
  }
  return <Navigate to="/" />;
};

const PublicRoute = ({ children }) => {
  const userToken = localStorage.getItem("userToken");
  const adminToken = localStorage.getItem("adminToken");

  if (userToken) return <Navigate to="/dashboard" />;
  if (adminToken) return <Navigate to="/admin" />;

  return children;
};

const AdminPublicRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");
  return !adminToken ? children : <Navigate to="/admin" />;
};

// ---- MAIN APP ----
function App() {
  // Optional: clear tokens for development to always start at Signin
  useEffect(() => {
    // Comment this out later if you want persistent login
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userToken");
    localStorage.removeItem("adminEmail");
  }, []);

  return (
    <Router>
      <Routes>
        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/forgetpassword"
          element={
            <PublicRoute>
              <ForgetPassword />
            </PublicRoute>
          }
        />

        {/* ---------- USER PROTECTED ROUTES ---------- */}
        <Route
          path="/dashboard"
          element={
            <UserProtectedRoute>
              <UserSetting />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/team"
          element={
            <UserProtectedRoute>
              <Team />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/withdraw"
          element={
            <UserProtectedRoute>
              <Withdraw />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/deposit"
          element={
            <UserProtectedRoute>
              <Deposit />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/depositmanual"
          element={
            <UserProtectedRoute>
              <DepositManual />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/plan"
          element={
            <UserProtectedRoute>
              <Plan />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/deposithistory"
          element={
            <UserProtectedRoute>
              <DepositHistory />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/withdrawhistory"
          element={
            <UserProtectedRoute>
              <WithdrawHistory />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/passwords"
          element={
            <UserProtectedRoute>
              <Passwords />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/withdrawmanual"
          element={
            <UserProtectedRoute>
              <WithdrawManual />
            </UserProtectedRoute>
          }
        />

        {/* ---------- ADMIN PUBLIC ROUTE ---------- */}
        <Route
          path="/admin/login"
          element={
            <AdminPublicRoute>
              <adminRoutes.AdminLogin />
            </AdminPublicRoute>
          }
        />

        {/* ---------- ADMIN PROTECTED ROUTES ---------- */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <adminRoutes.Dashboard />
            </AdminProtectedRoute>
          }
        />

        {/* Add your other admin routes below */}
        <Route
          path="*"
          element={
            localStorage.getItem("adminToken") ? (
              <Navigate to="/admin" />
            ) : localStorage.getItem("userToken") ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
