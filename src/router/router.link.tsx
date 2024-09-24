import React from "react";
import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";

import Signin from "../pages/auth/register";
import Login from "../pages/auth/login";

import AdminDashboard from "../pages/admin/admin-dashboard";
import AddCourt from "../pages/admin/add-court";
import EditCourt from "../pages/admin/edit-court";
import AllCourt from "../pages/admin/all-court";
import CourtDetails from "../pages/common/court-details";
import ListingList from "../pages/common/listing-list";
import CourtBooking from "../pages/common/court-booking";
import BookingSuccess from "../components/common/court/booking-success";
import BookingFailure from "../components/common/court/booking-failure";

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

const authenticationRoutes = [
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

const publicRoutes = [
  {
    path: routes.courtDetails,
    element: <CourtDetails />,
    route: Route,
  },
  {
    path: routes.ListingList,
    element: <ListingList />,
    route: Route,
  },
  {
    path: routes.courtBooking,
    element: <CourtBooking />,
    route: Route,
  },
  {
    path: routes.bookingSuccess,
    element: <BookingSuccess />,
    route: Route,
  },
  {
    path: routes.bookingFailure,
    element: <BookingFailure />,
    route: Route,
  },
];

export { authenticationRoutes, adminRoutes, publicRoutes };
