import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const route = all_routes;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}admin/addAdmin`,
        data
      );
      toast.success(response.data.message);
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error("Error posting data:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };
  //for coach
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [password1, setPassword1] = useState("");

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1((prev) => !prev);
  };
  const [confirmPasswordVisible1, setConfirmPasswordVisible1] = useState(false);
  const [confirmPassword1, setConfirmPassword1] = useState("");

  const toggleConfirmPasswordVisibility1 = () => {
    setConfirmPasswordVisible1((prev) => !prev);
  };
  return (
    <div>
      <ToastContainer />
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper authendication-pages">
          {/* Page Content */}
          <div className="content">
            <div className="container wrapper no-padding">
              <div className="row no-margin vph-100">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 no-padding">
                  <div className="banner-bg register">
                    <div className="row no-margin h-100">
                      <div className="col-sm-10 col-md-10 col-lg-10 mx-auto">
                        <div className="h-100 d-flex justify-content-center align-items-center">
                          <div className="text-bg register text-center">
                            <button
                              type="button"
                              className="btn btn-limegreen text-capitalize"
                            >
                              <i className="fa-solid fa-thumbs-up me-3" />
                              register Now
                            </button>
                            <p>
                              Register now for our innovative sports software
                              solutions, designed to tackle challenges in
                              everyday sports activities and events.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 no-padding">
                  <div className="dull-pg">
                    <div className="row no-margin vph-100 d-flex align-items-center justify-content-center">
                      <div className="col-sm-10 col-md-10 col-lg-10 mx-auto">
                        <header className="text-center">
                          <Link to={route.home}>
                            <ImageWithBasePath
                              src="assets/img/logo-black.svg"
                              className="img-fluid"
                              alt="Logo"
                            />
                          </Link>
                        </header>
                        <div className="shadow-card">
                          <h2>Get Started With Dreamsports</h2>
                          <p>
                            Ignite your sports journey with DreamSports and get
                            started now.
                          </p>
                          <ul
                            className="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                          >
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
                                I am a Owner
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
                              {/* Register Form */}
                              <form>
                                <div className="form-group">
                                  <div className="group-img">
                                    <i className="feather-user" />
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Username"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="group-img">
                                    <i className="feather-mail" />
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Email"
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
                                      type={
                                        passwordVisible ? "text" : "password"
                                      }
                                      className="form-control pass-input"
                                      placeholder="Password"
                                      value={password}
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="pass-group group-img">
                                    <i
                                      className={`toggle-password ${confirmPasswordVisible ? "feather-eye" : "feather-eye-off"}`}
                                      onClick={toggleConfirmPasswordVisibility}
                                    />
                                    <input
                                      type={
                                        confirmPasswordVisible
                                          ? "text"
                                          : "password"
                                      }
                                      className="form-control pass-input"
                                      placeholder="Password"
                                      value={confirmPassword}
                                      onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="form-check d-flex justify-content-start align-items-center policy">
                                  <div className="d-inline-block">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="policy"
                                    />
                                  </div>
                                  <label
                                    className="form-check-label"
                                    htmlFor="policy"
                                  >
                                    By continuing you indicate that you read and
                                    agreed to the{" "}
                                    <Link to={route.termsCondition}>
                                      Terms of Use
                                    </Link>
                                  </label>
                                </div>
                                <Link
                                  to={route.login}
                                  className="btn btn-secondary register-btn d-inline-flex justify-content-center align-items-center w-100 btn-block"
                                  type="submit"
                                >
                                  Create Account
                                  <i className="feather-arrow-right-circle ms-2" />
                                </Link>
                                <div className="form-group">
                                  <div className="login-options text-center">
                                    <span className="text">
                                      Or continue with
                                    </span>
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
                              {/* /Register Form */}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="coach"
                              role="tabpanel"
                              aria-labelledby="coach-tab"
                            >
                              {/* Register Form */}
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                  <div className="group-img">
                                    <i className="feather-user" />
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Username"
                                      {...register("username", {
                                        required: "Username is required",
                                      })}
                                    />
                                  </div>
                                  {errors.username && (
                                    <p>{errors.username.message as string}</p>
                                  )}
                                </div>

                                <div className="form-group">
                                  <div className="group-img">
                                    <i className="feather-mail" />
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Email"
                                      {...register("email", {
                                        required: "Email is required",
                                      })}
                                    />
                                  </div>
                                  {errors.email && (
                                    <p>{errors.email.message as string}</p>
                                  )}
                                </div>

                                <div className="form-group">
                                  <div className="pass-group group-img">
                                    <i
                                      className={`toggle-password ${passwordVisible1 ? "feather-eye" : "feather-eye-off"}`}
                                      onClick={togglePasswordVisibility1}
                                    />
                                    <input
                                      type={
                                        passwordVisible1 ? "text" : "password"
                                      }
                                      className="form-control pass-input"
                                      placeholder="Password"
                                      {...register("password", {
                                        required: "Password is required",
                                      })}
                                    />
                                  </div>
                                  {errors.password && (
                                    <p>{errors.password.message as string}</p>
                                  )}
                                </div>

                                <div className="form-group">
                                  <div className="pass-group group-img">
                                    <i
                                      className={`toggle-password ${confirmPasswordVisible1 ? "feather-eye" : "feather-eye-off"}`}
                                      onClick={toggleConfirmPasswordVisibility1}
                                    />
                                    <input
                                      type={
                                        confirmPasswordVisible1
                                          ? "text"
                                          : "password"
                                      }
                                      className="form-control pass-input"
                                      placeholder="Confirm Password"
                                      {...register("confirmPassword", {
                                        required:
                                          "Please confirm your password",
                                      })}
                                    />
                                    {errors.confirmPassword && (
                                      <p>
                                        {
                                          errors.confirmPassword
                                            .message as string
                                        }
                                      </p>
                                    )}
                                  </div>
                                </div>

                                <div className="form-check d-flex justify-content-start align-items-center policy">
                                  <div className="d-inline-block">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      {...register("terms", {
                                        required: "You must agree to the terms",
                                      })}
                                    />
                                  </div>
                                  <label className="form-check-label">
                                    By continuing you indicate that you read and
                                    agreed to the{" "}
                                    <Link to={route.termsCondition}>
                                      Terms of Use
                                    </Link>
                                  </label>
                                </div>
                                {errors.terms && (
                                  <p>{errors.terms.message as string}</p>
                                )}

                                <button
                                  className="btn btn-secondary register-btn d-inline-flex justify-content-center align-items-center w-100 btn-block"
                                  type="submit"
                                >
                                  Create Account
                                  <i className="feather-arrow-right-circle ms-2" />
                                </button>

                                <div className="form-group">
                                  <div className="login-options text-center">
                                    <span className="text">
                                      Or continue with
                                    </span>
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
                              {/* /Register Form */}
                            </div>
                          </div>
                        </div>
                        <div className="bottom-text text-center">
                          <p>
                            Have an account?{" "}
                            <Link to={route.login}>Sign In!</Link>
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
    </div>
  );
};

export default Signin;
