import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Login from "../pages/Login";
import AnimateLayout from "../layout/AnimateLayout";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import PasswordChange from "../pages/PasswordChange";
import SuccessfulReset from "../pages/SuccessfulReset";
import DashboardOverview from "../pages/DashboardOverview";
import DashboardTransaction from "../pages/DashboardTransaction";
import DashboardStatistics from "../pages/DashboardStatistics";
import NotFound from "../pages/NotFound";

export const routes = createHashRouter([
  {
    path: "/",
    element: <AnimateLayout />,
    children: [
      { path: "*", element: <NotFound/> },
      { path: "/dashboard/overview", element: <DashboardOverview/> },
      { path: "/dashboard/transaction", element: <DashboardTransaction/> },
      { path: "/dashboard/statistics", element: <DashboardStatistics/> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/new-password", element: <PasswordChange /> },
      { path: "/success-reset-password", element: <SuccessfulReset/> }
    ],
  },
]);
