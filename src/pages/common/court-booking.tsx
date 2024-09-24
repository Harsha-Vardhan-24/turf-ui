import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { all_routes } from "../../router/all_routes";
import CourtDetailsComponent from "../../components/common/court/court-details-component";
import axios from "axios";
import Loader from "../../components/common/Loader";
import CourtTimeSlotsComponent from "../../components/common/court/court-timeslots-component";
import UserDetailsComponent from "../../components/common/court/user-details-component";
import OrderConfirmationPage from "../../components/common/court/court-order-confirm";
import CourtCheckout from "../../components/common/court/court-checkout";

const timeSlotsContent = {
  title: "Book A Court",
  description: "Hassle-free court bookings and state-of-the-art facilities.",
};

interface UserDetailsFormData {
  name: string;
  email: string;
  phonenumber: string;
  address: string;
}

const CourtBooking = () => {
  const { courtId } = useParams();
  const [loading, setLoading] = useState(false);
  const [courtData, setCourtData] = useState<CourtDataType>();
  const [images, setImages] = useState<any>();
  const [progress, setProgress] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlots, setSetselectedSlots] = useState<any>([]);
  const [userDetails, setUserDetails] = useState<UserDetailsFormData>();

  useEffect(() => {
    try {
      setLoading(true);
      const getCourtInfo = async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}court/fetch/${courtId}`
        );
        const fetchedCourtData = response.data.court;

        // const fetchedImages = [];
        const fetchedImages = await Promise.all(
          fetchedCourtData.images.map(async (imageUrl: string) => {
            const imageBlob = await axios.get(imageUrl, {
              responseType: "blob",
            });
            const objectUrl = URL.createObjectURL(imageBlob.data);
            return { url: objectUrl };
          })
        );
        setImages(fetchedImages);
        setCourtData(fetchedCourtData);
      };
      getCourtInfo();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // console.log(courtData);

  const routes = all_routes;

  const updateProgress = (movement: string) => {
    if (movement === "next") {
      if (progress < 4) {
        setProgress(progress + 1);
      }
    } else {
      if (progress > 0) {
        setProgress(progress - 1);
      }
    }
  };

  dayjs.extend(customParseFormat);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb mb-0">
        <span className="primary-right-round" />
        <div className="container">
          <h1 className="text-white">Book A Court</h1>
          <ul>
            <li>
              <Link to={"routes.home"}>Home</Link>
            </li>
            <li>Book A Court</li>
          </ul>
        </div>
      </div>
      {loading && <Loader />}
      {courtData && (
        <React.Fragment>
          {/* /Breadcrumb */}
          <section className="booking-steps py-30">
            <div className="container">
              <ul className="d-lg-flex justify-content-center align-items-center">
                <li className={`${progress === 0 && "active"}`}>
                  <h5>
                    <Link to="#">
                      <span>1</span>Book a Court
                    </Link>
                  </h5>
                </li>
                <li className={`${progress === 1 && "active"}`}>
                  <h5>
                    <Link to="#">
                      <span>2</span>Time & Date
                    </Link>
                  </h5>
                </li>
                <li className={`${progress === 2 && "active"}`}>
                  <h5>
                    <Link to="#">
                      <span>3</span>Personal Information
                    </Link>
                  </h5>
                </li>
                <li className={`${progress === 3 && "active"}`}>
                  <h5>
                    <Link to="#">
                      <span>4</span>Order Confirmation
                    </Link>
                  </h5>
                </li>
                <li className={`${progress === 4 && "active"}`}>
                  <h5>
                    <Link to="#">
                      <span>4</span>Payment
                    </Link>
                  </h5>
                </li>
              </ul>
            </div>
          </section>
          {/* Page Content */}
          <div className="content book-cage">
            <div className="container">
              {courtData && progress === 0 && (
                <CourtDetailsComponent
                  courtData={courtData}
                  courtImage={images[0].url}
                  contentTitle={timeSlotsContent.title}
                  contentDescription={timeSlotsContent.description}
                />
              )}
              {courtData && progress === 1 && (
                <CourtTimeSlotsComponent
                  courtData={courtData}
                  courtImage={images[0].url}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedSlots={selectedSlots}
                  setSetselectedSlots={setSetselectedSlots}
                />
              )}
              {selectedDate && selectedSlots && progress === 2 && (
                <UserDetailsComponent
                  updateProgress={updateProgress}
                  setUserDetails={setUserDetails}
                />
              )}
              {userDetails && progress === 3 && (
                <OrderConfirmationPage
                  courtData={courtData}
                  courtImage={images[0].url}
                  userDetails={userDetails}
                  selectedDate={selectedDate}
                  selectedSlots={selectedSlots}
                />
              )}
              {progress === 4 && (
                <CourtCheckout
                  courtData={courtData}
                  courtImage={images[0].url}
                  userDetails={userDetails}
                  selectedDate={selectedDate}
                  selectedSlots={selectedSlots}
                  courtId={courtId}
                />
              )}
              {progress !== 2 && (
                <div className="text-center btn-row">
                  <button
                    className={`btn btn-secondary btn-icon me-3 ${progress === 0 ? "pe-none" : ""}`}
                    // className="btn btn-primary me-3 btn-icon"
                    onClick={() => updateProgress("prev")}
                    disabled={progress === 0}
                  >
                    <i className="feather-arrow-left-circle me-1" /> Back
                  </button>
                  <button
                    type={`${progress === 2 ? "submit" : "button"}`}
                    disabled={progress === 4}
                    className={`btn btn-secondary btn-icon ${progress === 4 ? "pe-none" : ""}`}
                    onClick={() => updateProgress("next")}
                  >
                    Next <i className="feather-arrow-right-circle ms-1" />
                  </button>
                </div>
              )}
            </div>
            {/* /Container */}
          </div>
          {/* /Page Content */}
        </React.Fragment>
      )}
    </div>
  );
};

export default CourtBooking;
