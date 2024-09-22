import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const route = all_routes;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}admin/auth`,
        data
      );
      toast.success(response.data.message);
      localStorage.setItem("adminToken", response.data.token);
      localStorage.setItem("adminId", response.data.adminId);
      navigate(route.adminDashboard);
      // console.log(response.data);
      // console.log(response);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <ToastContainer />
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
                        <Link to={"route.userDashboardProfiles"}>
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
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-panel fade show active"
                            id="coach"
                            role="tabpanel"
                            aria-labelledby="coach-tab"
                          >
                            {/* Login Form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="form-group">
                                <div className="group-img">
                                  <i className="feather-user" />
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    {...register("email", {
                                      required: "Email is required",
                                    })}
                                  />
                                  {errors.emailOrUsername && (
                                    <p className="error">
                                      {errors.emailOrUsername.message as string}
                                    </p>
                                  )}
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
                                    {...register("password", {
                                      required: "Password is required",
                                    })}
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                  {errors.password && (
                                    <p className="error">
                                      {errors.password.message as string}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="form-group d-sm-flex align-items-center justify-content-between">
                                <div className="form-check form-switch d-flex align-items-center justify-content-start">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="rememberMe"
                                    {...register("rememberMe")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="rememberMe"
                                  >
                                    Remember Password
                                  </label>
                                </div>
                                <span>
                                  <Link
                                    to="/forgot-password"
                                    className="forgot-pass"
                                  >
                                    Forgot Password
                                  </Link>
                                </span>
                              </div>

                              <button
                                className="btn btn-secondary register-btn d-inline-flex justify-content-center align-items-center w-100 btn-block"
                                type="submit"
                              >
                                Sign In
                                <i className="feather-arrow-right-circle ms-2" />
                              </button>

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
                                      <img
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
                                      <img
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
                          <Link to={route.register}>Sign up!</Link>
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
