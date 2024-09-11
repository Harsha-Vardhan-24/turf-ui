import React, { useState } from "react";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";

const Login = () => {
  const route = all_routes;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };


  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper authendication-pages">
        {/* Page Content */}
        <div className="content">
          <div className="container wrapper no-padding">
            <div className="row no-margin vph-100">
              <div className="col-12 col-sm-12 col-lg-6 no-padding">
                <div className="banner-bg login">
                  <div className="row no-margin h-100">
                    <div className="col-sm-10 col-md-10 col-lg-10 mx-auto">
                      <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="text-bg register text-center">
                          <button
                            type="button"
                            className="btn btn-limegreen text-capitalize"
                          >
                            <i className="fa-solid fa-thumbs-up me-3" />
                            Login User &amp; Coach
                          </button>
                          <p>
                            Log in right away for our advanced sports software
                            solutions, created to address issues in regular
                            sporting events and activities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12  col-lg-6 no-padding">
                <div className="dull-pg">
                  <div className="row no-margin vph-100 d-flex align-items-center justify-content-center">
                    <div className="col-sm-10 col-md-10 col-lg-10 mx-auto">
                      <header className="text-center">
                        <Link to={route.userDashboardProfiles}>
                          <ImageWithBasePath
                            src="assets/img/logo-black.svg"
                            className="img-fluid"
                            alt="Logo"
                          />
                        </Link>
                      </header>
                      <div className="shadow-card">
                        <h2>Welcome Back</h2>
                        <p>Login into your account</p>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active d-flex align-items-center"
                              id="user-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#user"
                              type="button"
                              role="tab"
                              aria-controls="user"
                              aria-selected="true"
                            >
                              <span className="d-flex justify-content-center align-items-center" />
                              I am a User
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link d-flex align-items-center"
                              id="coach-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#coach"
                              type="button"
                              role="tab"
                              aria-controls="coach"
                              aria-selected="false"
                            >
                              <span className="d-flex justify-content-center align-items-center" />
                              I am a Coach
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="user"
                            role="tabpanel"
                            aria-labelledby="user-tab"
                          >
                            {/* Login Form */}
                            <form>
                              <div className="form-group">
                                <div className="group-img">
                                  <i className="feather-user" />
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email / Username"
                                  />
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="pass-group group-img">
                                  <i
                                    className={`toggle-password ${passwordVisible ? "feather-eye" : "feather-eye-off"}`}
                                    onClick={togglePasswordVisibility}
                                  />
                                  <input
                                    type={passwordVisible ? "text" : "password"}
                                    className="form-control pass-input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="form-group d-sm-flex align-items-center justify-content-between">
                                <div className="form-check form-switch d-flex align-items-center justify-content-start">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="user-pass"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="user-pass"
                                  >
                                    Remember Password
                                  </label>
                                </div>
                                <span>
                                  <Link
                                    to={route.forgotPasssword}
                                    className="forgot-pass"
                                  >
                                    Forgot Password
                                  </Link>
                                </span>
                              </div>
                              <Link
                                to={route.userDashboard}
                                className="btn btn-secondary register-btn d-inline-flex justify-content-center align-items-center w-100 btn-block"
                              >
                                Sign In
                                <i className="feather-arrow-right-circle ms-2" />
                              </Link>
                              <div className="form-group">
                                <div className="login-options text-center">
                                  <span className="text">Or continue with</span>
                                </div>
                              </div>
                              <div className="form-group mb-0">
                                <ul className="social-login d-flex justify-content-center align-items-center">
                                  <li className="text-center">
                                    <button
                                      type="button"
                                      className="btn btn-social d-flex align-items-center justify-content-center"
                                    >
                                      <ImageWithBasePath
                                        src="assets/img/icons/google.svg"
                                        className="img-fluid"
                                        alt="Google"
                                      />
                                      <span>Google</span>
                                    </button>
                                  </li>
                                  <li className="text-center">
                                    <button
                                      type="button"
                                      className="btn btn-social d-flex align-items-center justify-content-center"
                                    >
                                      <ImageWithBasePath
                                        src="assets/img/icons/facebook.svg"
                                        className="img-fluid"
                                        alt="Facebook"
                                      />
                                      <span>Facebook</span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* /Login Form */}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="coach"
                            role="tabpanel"
                            aria-labelledby="coach-tab"
                          >
                            {/* Login Form */}
                            <form>
                              <div className="form-group">
                                <div className="group-img">
                                  <i className="feather-user" />
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email / Username"
                                  />
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="pass-group group-img">
                                  <i
                                    className={`toggle-password ${passwordVisible ? "feather-eye" : "feather-eye-off"}`}
                                    onClick={togglePasswordVisibility}
                                  />
                                  <input
                                    type={passwordVisible ? "text" : "password"}
                                    className="form-control pass-input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="form-group d-sm-flex align-items-center justify-content-between">
                                <div className="form-check form-switch d-flex align-items-center justify-content-start">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="user-login"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="user-login"
                                  >
                                    Remember Password
                                  </label>
                                </div>
                                <span>
                                  <Link
                                    to={route.forgotpassword}
                                    className="forgot-pass"
                                  >
                                    Forgot Password
                                  </Link>
                                </span>
                              </div>
                              <Link
                                to={route.userDashboard}
                                className="btn btn-secondary register-btn d-inline-flex justify-content-center align-items-center w-100 btn-block"
                                type="submit"
                              >
                                Sign In
                                <i className="feather-arrow-right-circle ms-2" />
                              </Link>
                              <div className="form-group">
                                <div className="login-options text-center">
                                  <span className="text">Or continue with</span>
                                </div>
                              </div>
                              <div className="form-group mb-0">
                                <ul className="social-login d-flex justify-content-center align-items-center">
                                  <li className="text-center">
                                    <button
                                      type="button"
                                      className="btn btn-social d-flex align-items-center justify-content-center"
                                    >
                                      <ImageWithBasePath
                                        src="assets/img/icons/google.svg"
                                        className="img-fluid"
                                        alt="Google"
                                      />
                                      <span>Google</span>
                                    </button>
                                  </li>
                                  <li className="text-center">
                                    <button
                                      type="button"
                                      className="btn btn-social d-flex align-items-center justify-content-center"
                                    >
                                      <ImageWithBasePath
                                        src="assets/img/icons/facebook.svg"
                                        className="img-fluid"
                                        alt="Facebook"
                                      />
                                      <span>Facebook</span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </form>
                            {/* /Login Form */}
                          </div>
                        </div>
                      </div>
                      <div className="bottom-text text-center">
                        <p>
                          Don’t have an account?{" "}
                          <Link to={route.signin}>Sign up!</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Login;
