import axios from "axios";
import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";

const UserRegisterForm = () => {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [confirmPasswordVisible1, setConfirmPasswordVisible1] = useState(false);
  const [confirmPassword1, setConfirmPassword1] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitUser = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}user/addUser`,
        data
      );
      response.status === 201
        ? toast.success(response.data.message)
        : toast.error(response.data.message);
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error("Error posting data:", error);
    }
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1((prev: any) => !prev);
  };

  const toggleConfirmPasswordVisibility1 = () => {
    setConfirmPasswordVisible1((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitUser)}>
      <ToastContainer />
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
        {errors.username && <p>{errors.username.message as string}</p>}
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
        {errors.email && <p>{errors.email.message as string}</p>}
      </div>

      <div className="form-group">
        <div className="pass-group group-img">
          <i
            className={`toggle-password ${passwordVisible1 ? "feather-eye" : "feather-eye-off"}`}
            onClick={togglePasswordVisibility1}
          />
          <input
            type={passwordVisible1 ? "text" : "password"}
            className="form-control pass-input"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
          />
        </div>
        {errors.password && <p>{errors.password.message as string}</p>}
      </div>

      <div className="form-group">
        <div className="pass-group group-img">
          <i
            className={`toggle-password ${confirmPasswordVisible1 ? "feather-eye" : "feather-eye-off"}`}
            onClick={toggleConfirmPasswordVisibility1}
          />
          <input
            type={confirmPasswordVisible1 ? "text" : "password"}
            className="form-control pass-input"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
            })}
          />
          {errors.confirmPassword && (
            <p>{errors.confirmPassword.message as string}</p>
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
          By continuing you indicate that you read and agreed to the{" "}
          <Link to={"route.termsCondition"}>Terms of Use</Link>
        </label>
      </div>
      {errors.terms && <p>{errors.terms.message as string}</p>}

      <button
        className="btn btn-secondary register-btn d-inline-flex justify-content-center align-items-center w-100 btn-block"
        type="submit"
      >
        Create Account
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
  );
};

export default UserRegisterForm;
