import React from "react";
import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";

import Signin from "../pages/auth/register";
import Login from "../pages/auth/login";

import AdminDashboard from "../pages/admin/admin-dashboard";
import AddCourt from "../pages/admin/add-court";
import EditCourt from "../pages/admin/edit-court";
import AllCourt from "../pages/admin/all-court";

const routes = all_routes;

const adminRoutes = [
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },
  {
    path: routes.addCourt,
    element: <AddCourt />,
    route: Route,
  },
  {
    path: routes.editCourt,
    element: <EditCourt />,
    route: Route,
  },
  {
    path: routes.allCourt,
    element: <AllCourt />,
    route: Route,
  },
];

const withoutHeaderRoutes = [
  {
    path: routes.register,
    element: <Signin />,
    route: Route,
  },
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
];

export { withoutHeaderRoutes, adminRoutes };
