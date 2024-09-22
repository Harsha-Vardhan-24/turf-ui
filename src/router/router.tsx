import React from "react";
import { adminRoutes, withoutHeaderRoutes } from "./router.link";
import { Outlet, Route, Routes } from "react-router-dom";
import PrivateAdminRoute from "./PrivateAdminRoute";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

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
        </Route>
        <Route path={"/"}>
          {withoutHeaderRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};
export default AllRoutes;
