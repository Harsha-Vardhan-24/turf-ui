import React from "react";
import { adminRoutes, authenticationRoutes, publicRoutes } from "./router.link";
import { Outlet, Route, Routes } from "react-router-dom";
import PrivateAdminRoute from "./PrivateAdminRoute";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import AuthRoute from "./AuthRoute";

const AllRoutes = () => {
  const HeaderLayout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Loader/> */}
    </>
  );

  return (
    <>
      <Routes>
        <Route path={"/"} element={<HeaderLayout />}>
          {adminRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<PrivateAdminRoute element={route.element} />}
              key={idx}
            />
          ))}
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/"}>
          {authenticationRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<AuthRoute element={route.element} />}
              key={idx}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};
export default AllRoutes;
