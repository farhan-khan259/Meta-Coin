// src/admin/adminRoutes.js

import Dashboard from "./pages/Dashboard";
import CompletedDeposits from "./pages/Deposits/CompletedDeposits";
import PendingDeposits from "./pages/Deposits/PendingDeposits";

import DailyReport from "./pages/Reports/DailyReport";
import MonthlyReport from "./pages/Reports/MonthlyReport";

import AllTransactions from "./pages/Transactions/AllTransactions";
import UserDetails from "./pages/Users/UserDetails";
import UserList from "./pages/Users/UserList";
import CompletedWithdrawals from "./pages/Withdrawals/CompletedWithdrawals";
import PendingWithdrawals from "./pages/Withdrawals/PendingWithdrawals";


const adminRoutes = {
    Dashboard,
    UserDetails,
    UserList,
    PendingDeposits,
    CompletedDeposits,
    PendingWithdrawals,
    CompletedWithdrawals,
    AllTransactions,
    DailyReport,
    MonthlyReport,

};

export default adminRoutes;
