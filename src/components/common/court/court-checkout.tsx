import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../router/all_routes";
import CourtDetailsComponent from "./court-details-component";
import { useForm, Controller } from "react-hook-form";
import { nanoid } from "nanoid";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

interface UserDetailsFormData {
  name: string;
  email: string;
  phonenumber: string;
  address: string;
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CourtCheckout = ({
  courtData,
  courtImage,
  userDetails,
  selectedDate,
  selectedSlots,
  courtId,
}: {
  courtData: CourtDataType;
  courtImage: any;
  userDetails: any;
  selectedDate: any;
  selectedSlots: any;
  courtId: any;
}) => {
  const { control, handleSubmit, watch } = useForm();

  const policy = watch("policy");

  const routes = all_routes;
  const month = monthNames[selectedDate.getMonth()];
  const date = selectedDate.getDate();
  const year = selectedDate.getFullYear();
  const serviceCharge = 100;

  // Helper to format time to 12-hour format
  const formatTime = (time: string) => {
    if (time) {
      const [hours, minutes] = time.split(":");
      const hour = parseInt(hours, 10);
      const suffix = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 || 12; // Convert to 12-hour format
      return `${formattedHour}:${minutes} ${suffix}`;
    }
    return "0:00 AM";
  };

  // Filter out only the slots that are checked (isChecked: true)
  const checkedSlots = selectedSlots.filter((slot: any) => slot.slot.isChecked);

  // Extract the times of the checked slots and sort them
  const sortedTimes = checkedSlots
    .map((slot: any) => slot.slot.time)
    .sort((a: string, b: string) => (a > b ? 1 : -1));

  // Get the start time and end time
  const bookingStartTime =
    sortedTimes.length > 0 ? formatTime(sortedTimes[0]) : "00:00 AM";
  const bookingEndTime =
    sortedTimes.length > 0
      ? formatTime(sortedTimes[sortedTimes.length - 1])
      : "00:00 AM";
  const totalPrice =
    courtData.pricing.starting_price * selectedSlots.length + serviceCharge;

  const onSubmit = async (data: any) => {
    console.log(data);
    const updatedData = {
      name: "Random Name",
      amount: totalPrice,
      number: "87908770087",
      MID: "M-" + nanoid(10),
      transactionId: "T-" + nanoid(10),
      userId: "U-" + nanoid(10),
      userDetails,
      selectedDate,
      selectedSlots,
      courtId: Number(courtId),
      user_id:
        localStorage.getItem("adminId") ||
        localStorage.getItem("userId") ||
        null,
    };
    console.log(updatedData);
    if (data.policy) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}payment`,
          updatedData
        );

        // Log the full response data to inspect its structure
        console.log("Full response data:", response.data);

        // Assuming the URL might be inside response.data.data
        const redirectUrl =
          response.data?.data?.instrumentResponse?.redirectInfo?.url;

        // Log the value of redirectUrl, which may be undefined if not present
        console.log("Redirect URL:", redirectUrl);

        // Redirect if the URL is valid, otherwise show an error toast
        if (redirectUrl) {
          window.location.href = redirectUrl;
        } else {
          toast.error("Error booking slot");
        }

        console.log("Final response data:", response.data);
      } catch (error) {
        console.error("Error during payment:", error);
      }
    }
  };

  return (
    <div>
      {/* Page Content */}
      <ToastContainer />
      <div className="content">
        <div className="container">
          <section>
            <div className="text-center mb-40">
              <h3 className="mb-1">Payment</h3>
              <p className="sub-title mb-0">
                Secure your booking, complete payment, and enjoy our
                sophisticated facilities
              </p>
            </div>
            <CourtDetailsComponent
              courtData={courtData}
              courtImage={courtImage}
              contentTitle={undefined}
              contentDescription={undefined}
            />
            <div className="row checkout">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                <div className="card booking-details">
                  <h3 className="border-bottom">Order Summary</h3>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa-regular fa-building me-2" />
                      {courtData.court_name}
                      <span className="x-circle" />
                    </li>
                    <li>
                      <i className="feather-calendar me-2" />
                      {date}, {month} {year}
                    </li>
                    <li>
                      <i className="feather-clock me-2" />
                      {bookingStartTime} to {bookingEndTime}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                <aside className="card payment-modes">
                  <h3 className="border-bottom">Checkout</h3>
                  <ul className="order-sub-total">
                    <li>
                      <p>Sub total</p>
                      <h6>
                        ₹
                        {courtData.pricing.starting_price *
                          selectedSlots.length}
                      </h6>
                    </li>
                    <li>
                      <p>Service charge</p>
                      <h6>₹{serviceCharge}</h6>
                    </li>
                  </ul>
                  <div className="order-total d-flex justify-content-between align-items-center">
                    <h5>Order Total</h5>
                    <h5>₹{totalPrice}</h5>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-check d-flex justify-content-start align-items-center policy">
                      <div className="d-inline-block">
                        <Controller
                          name="policy" // The name for your checkbox
                          control={control}
                          defaultValue={false} // Default value for the checkbox
                          render={({ field }) => (
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="policy"
                              {...field} // Spread the field props to the input
                            />
                          )}
                        />
                      </div>
                      <label className="form-check-label" htmlFor="policy">
                        By clicking &apos;Send Request&apos;, I agree to
                        Dreamsport{" "}
                        <Link to="privacy-policy">Privacy Policy</Link> and{" "}
                        <Link to="terms-condition">Terms of Use</Link>
                      </label>
                    </div>
                    <div className="d-grid btn-block">
                      <button
                        type="submit"
                        className={`btn ${!policy ? "bg-black" : "btn-primary"}`}
                        disabled={!policy}
                        // data-bs-toggle="modal"
                        // data-bs-target="#bookingconfirmModal"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </aside>
              </div>
            </div>
          </section>
        </div>
        {/* /Container */}
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default CourtCheckout;
