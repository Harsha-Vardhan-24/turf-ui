import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { all_routes } from "../../../router/all_routes";

interface UserDetailsFormData {
  name: string;
  email: string;
  phonenumber: string;
  address: string;
}

const UserDetailsComponent = ({
  updateProgress,
  setUserDetails,
}: {
  updateProgress: (movement: string) => void;
  setUserDetails: (data: UserDetailsFormData) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetailsFormData>();
  const routes = all_routes;

  const onSubmit = (data: UserDetailsFormData) => {
    console.log(data);
    setUserDetails(data);
    updateProgress("next");
  };

  return (
    <div>
      <div className="content">
        <div className="container">
          <section className="mb-40">
            <div className="text-center mb-40">
              <h3 className="mb-1">Personal Information</h3>
              <p className="sub-title">
                Ensure accurate and complete information for a smooth booking
                process.
              </p>
            </div>
            <div className="card">
              <h3 className="border-bottom">Enter Details</h3>

              {/* Form with react-hook-form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email Address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="phonenumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phonenumber"
                    placeholder="Enter Phone Number"
                    {...register("phonenumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phonenumber && (
                    <p className="text-danger">{errors.phonenumber.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Your Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <p className="text-danger">{errors.address.message}</p>
                  )}
                </div>
                {/* Form buttons */}
                <div className="text-center btn-row">
                  <button
                    type="button"
                    className="btn btn-primary me-3 btn-icon"
                    onClick={() => updateProgress("prev")}
                  >
                    <i className="feather-arrow-left-circle me-1" /> Back
                  </button>
                  <button
                    type="submit" // Set as submit to trigger validation
                    className="btn btn-secondary btn-icon"
                  >
                    Next <i className="feather-arrow-right-circle ms-1" />
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
