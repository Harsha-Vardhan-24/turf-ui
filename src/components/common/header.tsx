import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";

const Header = () => {
  const routes = all_routes;
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location, "location");
  const userLoggedIn =
    localStorage.getItem("adminToken") || localStorage.getItem("userToken");

  const logout = () => {
    localStorage.clear();
    navigate(routes.login);
  };
  const header = [
    {
      tittle: "Home",
      showAsTab: false,
      separateRoute: true,
      routes: routes.home,
      hasSubRoute: false,
      showSubRoute: false,
    },
    {
      tittle: "Coaches",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Coaches Map",
          hasSubRoute: true,
          showSubRoute: true,
          subMenus: [
            {
              menuValue: "Coaches Map",
              routes: routes.coachesMap,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
            {
              menuValue: "Coaches Map Sidebar",
              routes: routes.coachesMapSidebar,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: "Coaches Grid",
          routes: routes.coachesGrid,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Coaches List",
          routes: routes.coachesList,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Coaches Grid Sidebar",
          routes: routes.coachesGridSidebar,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Coaches List Sidebar",
          routes: routes.coachesListSidebar,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Booking",
          hasSubRoute: true,
          showSubRoute: true,
          subMenus: [
            {
              menuValue: "Book a Court",
              routes: routes.cagedetails,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
            {
              menuValue: "Book a Coach",
              routes: routes.coachDetails,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: "Coaches Details",
          routes: routes.coachDetails,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Venue",
          hasSubRoute: true,
          showSubRoute: true,
          subMenus: [
            {
              menuValue: "Venue List",
              routes: routes.listingList,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
            {
              menuValue: "Venue Details",
              routes: routes.venueDetails,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: "Coaches Dashboard",
          routes: routes.adminDashboard,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Coach Courts",
          routes: routes.allCourt,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "List Your Cart",
          routes: routes.addCourt,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Chat",
          routes: routes.coachChat,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: "User",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "User Dashboard",
          routes: routes.userDashboard,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Bookings",
          routes: routes.userBookings,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Chat",
          routes: routes.userChat,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Invoice",
          routes: routes.userInvoice,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Wallet",
          routes: routes.userWallet,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        // {
        //   menuValue: "Profile Edit",
        //   routes: routes.wallet,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   subMenus: [],
        // },
        {
          menuValue: "Change Password",
          routes: routes.userSettingPassword,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        // {
        //   menuValue: "Other Settings",
        //   routes: routes.settings,
        //   hasSubRoute: false,
        //   showSubRoute: false,
        //   subMenus: [],
        // },
      ],
    },
    {
      tittle: "Pages",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "About Us",
          routes: routes.aboutUs,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Our Team",
          routes: routes.ourTeams,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "services",
          routes: routes.services,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Events",
          routes: routes.events,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Authentication",
          hasSubRoute: true,
          showSubRoute: true,
          subMenus: [
            {
              menuValue: "Signup",
              routes: routes.register,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
            {
              menuValue: "Signin",
              routes: routes.login,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
            {
              menuValue: "Forgot Password",
              routes: routes.forgotPasssword,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
            {
              menuValue: "Reset Password",
              routes: routes.changePassword,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
          ],
        },

        {
          menuValue: "Error Page",
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: "404 Error",
              routes: routes.error404,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: [],
            },
          ],
        },

        {
          menuValue: "Pricing",
          routes: routes.pricing,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "FAQ",
          routes: routes.faq,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Gallery",
          routes: routes.gallery,
          hasSubRoute: false,
          showSubRoute: false,
        },

        {
          menuValue: "Testimonials",
          routes: routes.testimonials,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Terms & Conditions",
          routes: routes.termsCondition,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Privacy Policy",
          routes: routes.privacyPolicy,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Maintenance",
          routes: routes.maintenance,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Coming Soon",
          routes: routes.comingSoon,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },
    {
      tittle: "Blog",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Blog List",
          routes: routes.blogList,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },

        {
          menuValue: "Blog List Sidebar",
          hasSubRoute: true,
          showSubRoute: true,
          subMenus: [
            {
              menuValue: "Blog List Sidebar Left",
              routes: routes.blogListSidebarLeft,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
            {
              menuValue: "Blog List Sidebar Right",
              routes: routes.blogListSidebarRight,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: "Blog Grid",
          routes: routes.blogGrid,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Blog Grid Sidebar",
          hasSubRoute: true,
          showSubRoute: true,
          subMenus: [
            {
              menuValue: "Blog Grid Sidebar Left",
              routes: routes.blogGridSidebarLeft,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
            {
              menuValue: "Blog Grid Sidebar Right",
              routes: routes.blogGridSidebarRight,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: "Blog Detail",
          routes: routes.blogDetails,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: "Blog Detail Sidebar",
          hasSubRoute: true,
          showSubRoute: true,
          subMenus: [
            {
              menuValue: "Blog Detail Sidebar Left",
              routes: routes.blogDetailsSidebarLeft,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
            {
              menuValue: "Blog Detail Sidebar Right",
              routes: routes.blogDetailsSidebarRight,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: [],
            },
          ],
        },
        {
          menuValue: "Blog Carousel",
          routes: routes.blogCarousel,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
      ],
    },
    {
      tittle: "Contact Us",
      showAsTab: false,
      separateRoute: true,
      routes: routes.contactUs,
      hasSubRoute: false,
      showSubRoute: false,
    },
  ];

  const customStyle = {
    background: location.pathname.includes(routes.home)
      ? "rgb(23, 124, 130)"
      : "#ffffff",
  };

  return (
    <header
      className={
        location.pathname.includes(routes.home)
          ? "header header-trans"
          : "header header-sticky"
      }
      style={customStyle}
    >
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link id="mobile_btn" to="#">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link>
            <Link to="index" className="navbar-brand logo">
              {/* <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" /> */}

              {location.pathname.includes(routes.home) ? (
                <ImageWithBasePath
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              ) : (
                <ImageWithBasePath
                  src="assets/img/logo-black.svg"
                  className="img-fluid"
                  alt="Another Image"
                />
              )}
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="index" className="menu-logo">
                <ImageWithBasePath
                  src="assets/img/logo-black.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link id="menu_close" className="menu-close" to="#">
                {" "}
                <i className="fas fa-times" />
              </Link>
            </div>
            <ul className="main-nav">
              {header.map((mainMenus, mainIndex) => (
                <React.Fragment key={mainIndex}>
                  {mainMenus.separateRoute ? (
                    <li
                      key={mainIndex}
                      className={
                        location.pathname.includes(mainMenus.routes)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={mainMenus.routes}>{mainMenus.tittle}</Link>
                    </li>
                  ) : (
                    <li
                      className={`has-submenu ${mainMenus?.menu?.map((item) => item?.routes).includes(location.pathname) ? "active" : ""}`}
                    >
                      <Link to="#">
                        {mainMenus.tittle}{" "}
                        <i className="fas fa-chevron-down"></i>
                      </Link>
                      <ul
                        className={`submenu ${mainMenus.showAsTab ? "d-block" : ""}`}
                      >
                        {mainMenus.menu?.map((menu, menuIndex) => (
                          <li
                            key={menuIndex}
                            className={`${menu.hasSubRoute ? "has-submenu" : ""} ${menu?.subMenus?.map((item) => item?.routes).includes(location.pathname) ? "active" : ""}`}
                          >
                            {menu.hasSubRoute ? (
                              <React.Fragment>
                                <Link to="#">{menu.menuValue}</Link>
                                <ul
                                  className={`submenu ${menu.showSubRoute ? "d-block" : ""}`}
                                >
                                  {menu.subMenus?.map(
                                    (subMenu, subMenuIndex) => (
                                      <li key={subMenuIndex}>
                                        <Link to={subMenu.routes}>
                                          {subMenu.menuValue}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </React.Fragment>
                            ) : (
                              <li
                                className={
                                  location.pathname.includes(menu.routes)
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link to={menu.routes}>{menu.menuValue}</Link>
                              </li>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            {userLoggedIn ? (
              <>
                <li className="nav-item">
                  <div className="nav-link btn btn-primary log-register">
                    <Link to={routes.addCourt}>
                      <span>
                        <i className="feather-plus" />
                      </span>
                      Add Court
                    </Link>
                  </div>
                </li>
                <li onClick={() => logout()} className="nav-item">
                  <div className="nav-link btn btn-secondary log-register">
                    <span>
                      <i className="feather-log-out" />
                    </span>
                    Logout
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <div className="nav-link btn btn-white log-register">
                    <Link to="login">
                      <span>
                        <i className="feather-users" />
                      </span>
                      Login
                    </Link>{" "}
                    / <Link to="register">Register</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-secondary"
                    to="/coaches/add-court"
                  >
                    <span>
                      <i className="feather-check-circle" />
                    </span>
                    List Your Court
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
