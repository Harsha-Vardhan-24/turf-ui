import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Loader from "../../components/common/Loader";

const CourtDetails = () => {
  const { courtId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<any>([]);
  const [courtData, setCourtData] = useState<CourtDataType>();

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

        console.log(fetchedImages);

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

  const imagesData = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: images.length < 3 ? images.length : 3,
    slidesToScroll: 1,
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: images.length < 3 ? images.length : 3,
    slidesToScroll: 1,
  };

  const similarSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // console.log(images);
  return (
    <div>
      {loading && <Loader />}
      {courtData && (
        <>
          {/*Galler Slider Section*/}
          <div className="bannergallery-section">
            <div className="main-gallery-slider owl-carousel owl-theme">
              <Slider {...imagesData} className="venue-space">
                {images?.map(
                  (img: { url: string }, idx: React.Key | null | undefined) => {
                    console.log(img);
                    return (
                      <div key={idx} className="gallery-widget-item">
                        <Link to="#" data-fancybox="gallery1">
                          <img
                            className="img-fluid"
                            alt="Image"
                            src={img.url}
                          />
                        </Link>
                      </div>
                    );
                  }
                )}
              </Slider>
            </div>
            <div className="showphotos corner-radius-10">
              <Link to="#" data-fancybox="gallery1">
                <i className="fa-regular fa-images" />
                More Photos
              </Link>
            </div>
          </div>
          <div className="venue-info white-bg d-block">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                  <h1 className="d-flex align-items-center justify-content-start">
                    {courtData?.court_name}
                    <span className="d-flex justify-content-center align-items-center">
                      <i className="fas fa-check-double" />
                    </span>
                  </h1>
                  <ul className="d-sm-flex justify-content-start align-items-center">
                    <li>
                      <i className="feather-map-pin" />
                      {`${courtData?.location.city}, ${courtData?.location.country}`}
                    </li>
                    <li>
                      <i className="feather-phone-call" />
                      +3 80992 31212
                    </li>
                    <li>
                      <i className="feather-mail" />
                      <Link to="mailto:yourmail@example.com">
                        {" "}
                        yourmail@example.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-right">
                  <ul className="social-options float-lg-end d-sm-flex justify-content-start align-items-center">
                    <li>
                      <Link to="#">
                        <i className="feather-share-2" />
                        Share
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="favour-adds">
                        <i className="feather-star" />
                        Add to favourite
                      </Link>
                    </li>
                    <li className="venue-review-info d-flex justify-content-start align-items-center">
                      <span className="d-flex justify-content-center align-items-center">
                        5.0
                      </span>
                      <div className="review">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                        <p className="mb-0">
                          <Link to="#">15 Reviews</Link>
                        </p>
                      </div>
                      <i className="fa-regular fa-comments" />
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="row bottom-row d-flex align-items-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <ul className="d-sm-flex details">
                    <li>
                      <div className="profile-pic">
                        <Link to="#" className="venue-type">
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/icons/venue-type.svg"
                            alt="Icon"
                          />
                        </Link>
                      </div>
                      <div className="ms-2">
                        <p>Venue Type</p>
                        <h6 className="mb-0">Indoor</h6>
                      </div>
                    </li>
                    <li>
                      <div className="profile-pic">
                        <Link to="#">
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/profiles/avatar-01.jpg"
                            alt="Icon"
                          />
                        </Link>
                      </div>
                      <div className="ms-2">
                        <p>Added By</p>
                        <h6 className="mb-0">Hendry Williams</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="d-flex float-sm-end align-items-center">
                    <p className="d-inline-block me-2 mb-0">Starts From :</p>
                    <h3 className="primary-text mb-0 d-inline-block">
                      ₹{courtData?.pricing.starting_price}
                      <span>/ hr</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Content */}
          <div className="content">
            <div className="container">
              {/* Row */}
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                  <div className="venue-options white-bg mb-4">
                    <ul className="clearfix">
                      <li className="active">
                        <Link to="#overview">Overview</Link>
                      </li>
                      <li>
                        <Link to="#includes">Includes</Link>
                      </li>
                      <li>
                        <Link to="#rules">Rules</Link>
                      </li>
                      <li>
                        <Link to="#amenities">Amenities</Link>
                      </li>
                      <li>
                        <Link to="#gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="#location">Locations</Link>
                      </li>
                    </ul>
                  </div>
                  {/* Accordian Contents */}
                  <div className="accordion" id="accordionPanel">
                    <div className="accordion-item mb-4" id="overview">
                      <h4
                        className="accordion-header"
                        id="panelsStayOpen-overview"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          Overview
                        </button>
                      </h4>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-overview"
                      >
                        <div className="accordion-body">
                          <div className="text show-more-height">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: courtData?.venue_overview,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4" id="includes">
                      <h4
                        className="accordion-header"
                        id="panelsStayOpen-includes"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Includes
                        </button>
                      </h4>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-includes"
                      >
                        <div className="accordion-body">
                          <ul className="clearfix">
                            {courtData?.includes.badminton_racket && (
                              <li>
                                <i className="feather-check-square" />
                                Badminton Racket Unlimited
                              </li>
                            )}
                            {courtData?.includes.bats && (
                              <li>
                                <i className="feather-check-square" />
                                Bats
                              </li>
                            )}
                            {courtData?.includes.hitting_machines && (
                              <li>
                                <i className="feather-check-square" />
                                Hitting Machines
                              </li>
                            )}
                            {courtData?.includes.multiple_courts && (
                              <li>
                                <i className="feather-check-square" />
                                Multiple Courts
                              </li>
                            )}
                            {courtData?.includes.spare_players && (
                              <li>
                                <i className="feather-check-square" />
                                Spare Players
                              </li>
                            )}
                            {courtData?.includes.instant_racket && (
                              <li>
                                <i className="feather-check-square" />
                                Instant Racket
                              </li>
                            )}
                            {courtData?.includes.green_turfs && (
                              <li>
                                <i className="feather-check-square" />
                                Green Turfs
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4" id="rules">
                      <h4
                        className="accordion-header"
                        id="panelsStayOpen-rules"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Rules
                        </button>
                      </h4>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-overview"
                      >
                        <div className="accordion-body">
                          <div className="text show-more-height">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: courtData?.rules_of_venue,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4" id="amenities">
                      <h4
                        className="accordion-header"
                        id="panelsStayOpen-amenities"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseFour"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseFour"
                        >
                          Amenities
                        </button>
                      </h4>
                      <div
                        id="panelsStayOpen-collapseFour"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-amenities"
                      >
                        <div className="accordion-body">
                          <ul className="d-md-flex justify-content-between align-items-center">
                            {courtData?.amenities.parking && (
                              <li>
                                <i
                                  className="fa fa-check-circle"
                                  aria-hidden="true"
                                />
                                Parking
                              </li>
                            )}
                            {courtData?.amenities.drinking_water && (
                              <li>
                                <i
                                  className="fa fa-check-circle"
                                  aria-hidden="true"
                                />
                                Drinking Water
                              </li>
                            )}
                            {courtData?.amenities.first_aid && (
                              <li>
                                <i
                                  className="fa fa-check-circle"
                                  aria-hidden="true"
                                />
                                First Aid
                              </li>
                            )}
                            {courtData?.amenities.change_room && (
                              <li>
                                <i
                                  className="fa fa-check-circle"
                                  aria-hidden="true"
                                />
                                Change Room
                              </li>
                            )}
                            {courtData?.amenities.shower && (
                              <li>
                                <i
                                  className="fa fa-check-circle"
                                  aria-hidden="true"
                                />
                                Shower
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4" id="gallery">
                      <h4
                        className="accordion-header"
                        id="panelsStayOpen-gallery"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseFive"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseFive"
                        >
                          Gallery
                        </button>
                      </h4>
                      <div
                        id="panelsStayOpen-collapseFive"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-gallery"
                      >
                        <div className="accordion-body">
                          <div className="owl-carousel gallery-slider owl-theme">
                            <Slider {...settings}>
                              {images?.map(
                                (
                                  img: { url: string },
                                  idx: React.Key | null | undefined
                                ) => {
                                  return (
                                    <div
                                      key={idx}
                                      className="gallery-widget-item"
                                    >
                                      <Link
                                        key={idx}
                                        className="corner-radius-10"
                                        to="#"
                                        data-fancybox="gallery3"
                                      >
                                        <img
                                          className="img-fluid corner-radius-10"
                                          alt="Image"
                                          src={img.url}
                                        />
                                      </Link>
                                    </div>
                                  );
                                }
                              )}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item" id="location">
                      <h4
                        className="accordion-header"
                        id="panelsStayOpen-location"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseSeven"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseSeven"
                        >
                          Location
                        </button>
                      </h4>
                      <div
                        id="panelsStayOpen-collapseSeven"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-location"
                      >
                        <div className="accordion-body">
                          <div className="google-maps">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
                              height={445}
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                          <div className="dull-bg d-flex justify-content-start align-items-center mt-3">
                            <div className="white-bg me-2">
                              <i className="fas fa-location-arrow" />
                            </div>
                            <div>
                              <h6>Our Venue Location</h6>
                              <p>{`${courtData?.location.city}, ${courtData?.location.country}`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Accordian Contents */}
                </div>
                <aside className="col-12 col-sm-12 col-md-12 col-lg-4 theiaStickySidebar">
                  <div className="stickybar">
                    <div className="white-bg d-flex justify-content-start align-items-center availability">
                      <div>
                        <span className="icon-bg">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="Icon"
                            src="assets/img/icons/head-calendar.svg"
                          />
                        </span>
                      </div>
                      <div>
                        <h4>Availability</h4>
                        <p className="mb-0">
                          Check availability on your convenient time
                        </p>
                      </div>
                    </div>
                    <div className="white-bg book-court">
                      <h4 className="border-bottom">Book A Court</h4>
                      <h5 className="d-inline-block">Badminton Academy,</h5>
                      <p className="d-inline-block"> available Now</p>
                      <ul className="d-sm-flex align-items-center justify-content-evenly">
                        <li>
                          <h3 className="d-inline-block primary-text">
                            {" "}
                            ₹{courtData?.pricing.starting_price}
                          </h3>
                          <span>/hr</span>
                          <p>up to {courtData?.pricing.max_guests} guests</p>
                        </li>
                        <li>
                          <span>
                            <i className="feather-plus" />
                          </span>
                        </li>
                        <li>
                          <h4 className="d-inline-block primary-text">
                            ₹{courtData?.pricing.price_of_additional_guests}
                          </h4>
                          <span>/hr</span>
                          <p>
                            each additional guest <br />
                            up to {courtData?.pricing.additional_guests} guests
                            max
                          </p>
                        </li>
                      </ul>
                      <div className="d-grid btn-block mt-3">
                        <Link
                          to="coach-details.html"
                          className="btn btn-secondary d-inline-flex justify-content-center align-items-center"
                        >
                          <i className="feather-calendar" />
                          Book Now
                        </Link>
                      </div>
                    </div>
                    <div className="white-bg">
                      <h4 className="border-bottom">
                        Request for Availability
                      </h4>
                      <form>
                        <div className="mb-10">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div className="mb-10">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email Address"
                          />
                        </div>
                        <div className="mb-10">
                          <label htmlFor="name" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phonenumber"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                        <div className="mb-10">
                          <label htmlFor="date" className="form-label">
                            Date
                          </label>
                          <div className="form-icon">
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="Select Date"
                              id="date"
                            />
                            <span className="cus-icon">
                              <i className="feather-calendar" />
                            </span>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label htmlFor="comments" className="form-label">
                            Details
                          </label>
                          <textarea
                            className="form-control"
                            id="comments"
                            rows={3}
                            placeholder="Enter Comments"
                            defaultValue={""}
                          />
                        </div>
                        <div>
                          <label className="form-label">Number of Guests</label>
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              defaultValue={1}
                              readOnly
                            />
                            <input
                              type="number"
                              className="form-control active"
                              defaultValue={2}
                              readOnly
                            />
                            <input
                              type="number"
                              className="form-control"
                              defaultValue={3}
                              readOnly
                            />
                            <input
                              type="number"
                              className="form-control"
                              defaultValue={4}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-start align-items-center policy">
                          <div className="d-inline-block">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="policy"
                              defaultChecked
                            />
                          </div>
                          <label className="form-check-label" htmlFor="policy">
                            By clicking &apos;Send Request&apos;, I agree to
                            Dreamsport Privacy Policy and Terms of Use
                          </label>
                        </div>
                        <div className="d-grid btn-block">
                          <Link
                            to="#"
                            className="btn btn-secondary d-inline-flex justify-content-center align-items-center"
                          >
                            Send Request
                            <i className="feather-arrow-right-circle ms-1" />
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="white-bg cage-owner-info">
                      <h4 className="border-bottom">Cage Owner Details</h4>
                      <div className="d-flex justify-content-start align-items-center">
                        <div className="profile-pic">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="User"
                              src="assets/img/profiles/avatar-05.jpg"
                            />
                          </Link>
                        </div>
                        <div>
                          <h5>Hendry Williams</h5>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>5.0</span>
                            <span>(20 Reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-grid btn-block text-center mt-3">
                        <Link
                          to="contact-us.html"
                          className="btn btn-secondary d-inline-flex justify-content-center align-items-center"
                        >
                          <i className="feather-phone-call" />
                          Call Owner
                        </Link>
                      </div>
                    </div>
                    <div className="white-bg">
                      <h4 className="border-bottom">Share Venue</h4>
                      <ul className="social-medias d-flex">
                        <li className="facebook">
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li className="instagram">
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li className="twitter">
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
              {/* /Row */}
            </div>
            {/* /Container */}
            <section className="section innerpagebg">
              <div className="container">
                <div className="featured-slider-group">
                  <h3 className="mb-40">Similar Venues</h3>
                  <div className="owl-carousel featured-venues-slider owl-theme">
                    <Slider {...similarSettings}>
                      {/* Featured Item */}
                      <div className="featured-venues-item">
                        <div className="listing-item mb-0">
                          <div className="listing-img">
                            <Link to="venue-details.html">
                              <ImageWithBasePath
                                src="assets/img/venues/venues-01.jpg"
                                alt="Venue"
                              />
                            </Link>
                            <div className="fav-item-venues">
                              <span className="tag tag-blue">Featured</span>
                              <h5 className="tag tag-primary">
                                $450<span>/hr</span>
                              </h5>
                            </div>
                          </div>
                          <div className="listing-content">
                            <div className="list-reviews">
                              <div className="d-flex align-items-center">
                                <span className="rating-bg">4.2</span>
                                <span>300 Reviews</span>
                              </div>
                              <Link to="#" className="fav-icon">
                                <i className="feather-heart" />
                              </Link>
                            </div>
                            <h3 className="listing-title">
                              <Link to="venue-details.html">
                                Sarah Sports Academy
                              </Link>
                            </h3>
                            <div className="listing-details-group">
                              <p>
                                Elevate your athletic journey at Sarah Sports
                                Academy, where excellence meets opportunity.
                              </p>
                              <ul>
                                <li>
                                  <span>
                                    <i className="feather-map-pin" />
                                    Port Alsworth, AK
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="feather-calendar" />
                                    Next Availablity :{" "}
                                    <span className="primary-text">
                                      15 May 2023
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="listing-button">
                              <div className="listing-venue-owner">
                                <Link className="navigation" to="#">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-01.jpg"
                                    alt="User"
                                  />
                                  Mart Sublin
                                </Link>
                              </div>
                              <Link
                                to="venue-details.html"
                                className="user-book-now"
                              >
                                <span>
                                  <i className="feather-calendar me-2" />
                                </span>
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Featured Item */}
                      {/* Featured Item */}
                      <div className="featured-venues-item">
                        <div className="listing-item mb-0">
                          <div className="listing-img">
                            <Link to="venue-details.html">
                              <ImageWithBasePath
                                src="assets/img/venues/venues-02.jpg"
                                className="img-fluid"
                                alt="Venues"
                              />
                            </Link>
                            <div className="fav-item-venues">
                              <span className="tag tag-blue">Top Rated</span>
                              <h5 className="tag tag-primary">
                                $200<span>/hr</span>
                              </h5>
                            </div>
                          </div>
                          <div className="listing-content">
                            <div className="list-reviews">
                              <div className="d-flex align-items-center">
                                <span className="rating-bg">5.0</span>
                                <span>150 Reviews</span>
                              </div>
                              <Link to="#" className="fav-icon">
                                <i className="feather-heart" />
                              </Link>
                            </div>
                            <h3 className="listing-title">
                              <Link to="venue-details.html">
                                Badminton Academy
                              </Link>
                            </h3>
                            <div className="listing-details-group">
                              <p>
                                Unleash your badminton potential at our premier
                                Badminton Academy, where champions are made
                              </p>
                              <ul>
                                <li>
                                  <span>
                                    <i className="feather-map-pin" />
                                    Sacramento, CA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="feather-calendar" />
                                    Next Availablity :{" "}
                                    <span className="primary-text">
                                      15 May 2023
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="listing-button">
                              <div className="listing-venue-owner">
                                <Link className="navigation" to={""}>
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="User"
                                  />
                                  Rebecca
                                </Link>
                              </div>
                              <Link
                                to="venue-details.html"
                                className="user-book-now"
                              >
                                <span>
                                  <i className="feather-calendar me-2" />
                                </span>
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Featured Item */}
                      {/* Featured Item */}
                      <div className="featured-venues-item">
                        <div className="listing-item mb-0">
                          <div className="listing-img">
                            <Link to="venue-details.html">
                              <ImageWithBasePath
                                src="assets/img/venues/venues-03.jpg"
                                className="img-fluid"
                                alt="Venues"
                              />
                            </Link>
                            <div className="fav-item-venues">
                              <h5 className="tag tag-primary">
                                $350<span>/hr</span>
                              </h5>
                            </div>
                          </div>
                          <div className="listing-content">
                            <div className="list-reviews">
                              <div className="d-flex align-items-center">
                                <span className="rating-bg">4.7</span>
                                <span>120 Reviews</span>
                              </div>
                              <Link to="#" className="fav-icon">
                                <i className="feather-heart" />
                              </Link>
                            </div>
                            <h3 className="listing-title">
                              <Link to="venue-details.html">
                                Manchester Academy
                              </Link>
                            </h3>
                            <div className="listing-details-group">
                              <p>
                                Manchester Academy: Where dreams meet excellence
                                in sports education and training game.
                              </p>
                              <ul>
                                <li>
                                  <span>
                                    <i className="feather-map-pin" />
                                    Guysville, OH
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="feather-calendar" />
                                    Next Availablity :{" "}
                                    <span className="primary-text">
                                      16 May 2023
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="listing-button">
                              <div className="listing-venue-owner">
                                <Link className="navigation" to={""}>
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="User"
                                  />
                                  Andrew
                                </Link>
                              </div>
                              <Link
                                to="venue-details.html"
                                className="user-book-now"
                              >
                                <span>
                                  <i className="feather-calendar me-2" />
                                </span>
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Featured Item */}
                      {/* Featured Item */}
                      <div className="featured-venues-item">
                        <div className="listing-item mb-0">
                          <div className="listing-img">
                            <Link to="venue-details.html">
                              <ImageWithBasePath
                                src="assets/img/venues/venues-02.jpg"
                                className="img-fluid"
                                alt="Venues"
                              />
                            </Link>
                            <div className="fav-item-venues">
                              <span className="tag tag-blue">Featured</span>
                              <h5 className="tag tag-primary">
                                $450<span>/hr</span>
                              </h5>
                            </div>
                          </div>
                          <div className="listing-content">
                            <div className="list-reviews">
                              <div className="d-flex align-items-center">
                                <span className="rating-bg">4.5</span>
                                <span>300 Reviews</span>
                              </div>
                              <Link to="#" className="fav-icon">
                                <i className="feather-heart" />
                              </Link>
                            </div>
                            <h3 className="listing-title">
                              <Link to="venue-details.html">
                                ABC Sports Academy
                              </Link>
                            </h3>
                            <div className="listing-details-group">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.industry&apos;s
                                standard
                              </p>
                              <ul>
                                <li>
                                  <span>
                                    <i className="feather-map-pin" />
                                    Little Rock, AR
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="feather-calendar" />
                                    Next Availablity :{" "}
                                    <span className="primary-text">
                                      17 May 2023
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="listing-button">
                              <div className="listing-venue-owner">
                                <Link className="navigation" to={""}>
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-04.jpg"
                                    alt="User"
                                  />
                                  Mart Sublin
                                </Link>
                              </div>
                              <Link
                                to="venue-details.html"
                                className="user-book-now"
                              >
                                <span>
                                  <i className="feather-calendar me-2" />
                                </span>
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Featured Item */}
                    </Slider>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* /Page Content */}
        </>
      )}
    </div>
  );
};

export default CourtDetails;
