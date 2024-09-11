import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { allCourt } from "../../core/data/interface/model";
import { userbookingdata } from "../../core/data/json/user_bookingdata";
import { all_routes } from "../router/all_routes";
import { Dropdown } from "primereact/dropdown";

const UserBookings = () => {
  const routes = all_routes;
  const [searchInput, setSearchInput] = useState("");
  const [days, setDays] = useState();
  const [price, setPrice] = useState();

  const day = [{ name: "This Week" }, { name: "One Day" }];
  const sortby = [{ name: "Relevance" }, { name: "Price" }];

  const filteredData = userbookingdata.filter((datas) => {
    const values = Object.values(datas).map((value) =>
      value.toString().toLowerCase()
    );
    return values.some((value) => value.includes(searchInput.toLowerCase()));
  });
  const courtNameRender = (res: allCourt) => {
    return (
      <h2 className="table-avatar">
        <Link to="#" className="avatar avatar-sm  flex-shrink-0">
          <ImageWithBasePath className="avatar-img" src={res.img} alt="User" />
        </Link>
        <span className="table-head-name flex-grow-1">
          <Link to="#">{res.courtName}</Link>
          <span>{res.court}</span>
        </span>
      </h2>
    );
  };
  const actionRender = () => {
    return (
      <div className="dropdown dropdown-action table-drop-action">
        <Link
          to="#"
          className="action-icon dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-ellipsis-h" />
        </Link>
        <div className="dropdown-menu dropdown-menu-end">
          <Link
            className="dropdown-item"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#cancel-court"
          >
            <i className="feather-corner-down-left"></i>Cancel Booking
          </Link>
          <Link className="dropdown-item" to="#">
            <i className="feather-edit" />
            Edit
          </Link>
          <Link className="dropdown-item" to="#">
            <i className="feather-trash" />
            Delete
          </Link>
        </div>
      </div>
    );
  };
  const detailsRender = () => {
    return (
      <Link to="#" data-bs-toggle="modal" data-bs-target="#upcoming-court">
        <i className="feather-eye"></i>View Details
      </Link>
    );
  };

  const Render = () => {
    return (
      <td className="table-accept-btn text-end">
        <Link to="#" className="badge bg-info">
          <i className="feather-check-circle"></i>Accepted
        </Link>
      </td>
    );
  };
  return (
    <>
      {/* Breadcrumb */}
      <section className="breadcrumb breadcrumb-list mb-0">
        <span className="primary-right-round" />
        <div className="container">
          <h1 className="text-white">User Bookings</h1>
          <ul>
            <li>
              <Link to={routes.home}>Home</Link>
            </li>
            <li>User Bookings</li>
          </ul>
        </div>
      </section>
      {/* /Breadcrumb */}
      {/* Dashboard Menu */}
      <div className="dashboard-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="dashboard-menu">
                <ul>
                  <li>
                    <Link to={routes.userDashboard}>
                      <ImageWithBasePath
                        src="assets/img/icons/dashboard-icon.svg"
                        alt="Icon"
                      />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.userBookings} className="active">
                      <ImageWithBasePath
                        src="assets/img/icons/booking-icon.svg"
                        alt="Icon"
                      />
                      <span>My Bookings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.userChat}>
                      <ImageWithBasePath
                        src="assets/img/icons/chat-icon.svg"
                        alt="Icon"
                      />
                      <span>Chat</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.userInvoice}>
                      <ImageWithBasePath
                        src="assets/img/icons/invoice-icon.svg"
                        alt="Icon"
                      />
                      <span>Invoices</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.userWallet}>
                      <ImageWithBasePath
                        src="assets/img/icons/wallet-icon.svg"
                        alt="Icon"
                      />
                      <span>Wallet</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.userProfile}>
                      <ImageWithBasePath
                        src="assets/img/icons/profile-icon.svg"
                        alt="Icon"
                      />
                      <span>Profile Setting</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Dashboard Menu */}
      {/* Page Content */}
      <div className="content court-bg">
        <div className="container">
          {/* Sort By */}
          <div className="row">
            <div className="col-lg-12">
              <div className="sortby-section court-sortby-section">
                <div className="sorting-info">
                  <div className="row d-flex align-items-center">
                    <div className="col-xl-7 col-lg-7 col-sm-12 col-12">
                      <div className="coach-court-list">
                        <ul className="nav">
                          <li>
                            <Link to={routes.userBookings} className="active">
                              Upcoming
                            </Link>
                          </li>
                          <li>
                            <Link to={routes.userComplete}>Completed</Link>
                          </li>
                          <li>
                            <Link to={routes.userOngoing}>On Going</Link>
                          </li>
                          <li>
                            <Link to={routes.userCancelled}>Cancelled</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-sm-12 col-12">
                      <div className="sortby-filter-group court-sortby">
                        <div className="sortbyset week-bg">
                          <div className="sorting-select">
                            <Dropdown
                              value={days}
                              onChange={(e) => setDays(e.value)}
                              options={day}
                              optionLabel="name"
                              placeholder="This Week"
                              className="select custom-select-list week-select"
                            />
                          </div>
                        </div>
                        <div className="sortbyset">
                          <span className="sortbytitle">Sort By</span>
                          <div className="sorting-select">
                            <Dropdown
                              value={price}
                              onChange={(e) => setPrice(e.value)}
                              options={sortby}
                              optionLabel="name"
                              placeholder="Relevance"
                              className="select-bg w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sort By */}
          <div className="row">
            <div className="col-sm-12">
              <div className="court-tab-content">
                <div className="card card-tableset">
                  <div className="card-body">
                    <div className="coache-head-blk">
                      <div className="row align-items-center">
                        <div className="col-md-5">
                          <div className="court-table-head">
                            <h4>My Bookings</h4>
                            <p>
                              Manage and track all your upcoming court bookings.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="table-search-top">
                            <div className="dataTables_filter">
                              <label>
                                <input
                                  type="text"
                                  value={searchInput}
                                  onChange={(e) =>
                                    setSearchInput(e.target.value)
                                  }
                                  placeholder="Search"
                                  className="form-control"
                                />
                              </label>
                            </div>
                            <div className="request-coach-list">
                              <div className="card-header-btns">
                                <nav>
                                  <div className="nav nav-tabs" role="tablist">
                                    <button
                                      className="nav-link active"
                                      id="nav-Recent-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-Recent"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav-Recent"
                                      aria-selected="true"
                                    >
                                      Courts
                                    </button>
                                    <button
                                      className="nav-link"
                                      id="nav-RecentCoaching-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-RecentCoaching"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav-RecentCoaching"
                                      aria-selected="false"
                                    >
                                      Coaches
                                    </button>
                                  </div>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="nav-Recent"
                        role="tabpanel"
                        aria-labelledby="nav-Recent-tab"
                        tabIndex={0}
                      >
                        <div className="table-responsive table-datatble">
                          <DataTable
                            className="table datatable"
                            value={filteredData}
                            paginator
                            rows={10}
                            rowsPerPageOptions={[10, 25, 50]}
                            currentPageReportTemplate="{first}"
                          >
                            <Column
                              sortable
                              field="courtName"
                              body={courtNameRender}
                              header="Court Name"
                            ></Column>
                            <Column
                              sortable
                              field="dateandTime"
                              header="Data & Time"
                            ></Column>
                            <Column
                              sortable
                              field="payment"
                              header="Payment"
                            ></Column>
                            <Column
                              sortable
                              field="status"
                              header="Status"
                              body={Render}
                              className="table-inset-btn"
                            ></Column>

                            <Column
                              sortable
                              field="details"
                              header="Details"
                              className="text-pink view-detail-pink"
                              body={detailsRender}
                            ></Column>

                            <Column
                              body={actionRender}
                              header="Action"
                            ></Column>
                          </DataTable>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-RecentCoaching"
                        role="tabpanel"
                        aria-labelledby="nav-RecentCoaching-tab"
                        tabIndex={0}
                      >
                        <div className="table-responsive table-datatble">
                          <table className="table  datatable">
                            <thead className="thead-light">
                              <tr>
                                <th>Coach Name</th>
                                <th>Booking Type</th>
                                <th>Date &amp; Time</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Details</th>
                                <th>Reviews</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm flex-shrink-0"
                                    >
                                      <ImageWithBasePath
                                        className="avatar-img"
                                        src="assets/img/featured/featured-05.jpg"
                                        alt="User"
                                      />
                                    </Link>
                                    <span className="table-head-name flex-grow-1">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#profile-coach"
                                      >
                                        Kevin Anderson
                                      </Link>
                                      <span className="book-active">
                                        Booked on : 25 May 2023
                                      </span>
                                    </span>
                                  </h2>
                                </td>
                                <td>Onetime</td>
                                <td className="table-date-time">
                                  <h4>
                                    Mon, Jul 11<span>06:00 PM - 08:00 PM</span>
                                  </h4>
                                </td>
                                <td>
                                  <span className="pay-dark fs-16">$120</span>
                                </td>
                                <td>
                                  <span className="badge bg-success">
                                    <i className="feather-check-square me-1" />
                                    Accepted
                                  </span>
                                </td>
                                <td className="text-pink view-detail-pink">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#upcoming-coach"
                                  >
                                    <i className="feather-eye" />
                                    View Details
                                  </Link>
                                </td>
                                <td className="table-rating">
                                  <div className="rating-point">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                  </div>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action table-drop-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-h" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-edit" />
                                        Edit
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-trash" />
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm flex-shrink-0"
                                    >
                                      <ImageWithBasePath
                                        className="avatar-img"
                                        src="assets/img/featured/featured-06.jpg"
                                        alt="User"
                                      />
                                    </Link>
                                    <span className="table-head-name flex-grow-1">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#profile-coach"
                                      >
                                        Angela Roudrigez
                                      </Link>
                                      <span className="book-active">
                                        Booked on : 26 May 2023
                                      </span>
                                    </span>
                                  </h2>
                                </td>
                                <td>Single Lesson</td>
                                <td className="table-date-time">
                                  <h4>
                                    Mon, Jul 11<span>3 days</span>
                                  </h4>
                                </td>
                                <td>
                                  <span className="pay-dark fs-16">$90</span>
                                </td>
                                <td>
                                  <span className="badge bg-info">
                                    <i className="feather-clock me-1" />
                                    Awaiting
                                  </span>
                                </td>
                                <td className="text-pink view-detail-pink">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#upcoming-coach"
                                  >
                                    <i className="feather-eye" />
                                    View Details
                                  </Link>
                                </td>
                                <td className="table-rating">
                                  <div className="rating-point">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                  </div>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action table-drop-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-h" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-edit" />
                                        Edit
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-trash" />
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm flex-shrink-0"
                                    >
                                      <ImageWithBasePath
                                        className="avatar-img"
                                        src="assets/img/featured/featured-07.jpg"
                                        alt="User"
                                      />
                                    </Link>
                                    <span className="table-head-name flex-grow-1">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#profile-coach"
                                      >
                                        Evon Raddick
                                      </Link>
                                      <span className="book-active">
                                        Booked on : 27 May 2023
                                      </span>
                                    </span>
                                  </h2>
                                </td>
                                <td>Single Lesson</td>
                                <td className="table-date-time">
                                  <h4>
                                    Mon, Jul 11<span>01:00 PM - 04:00 PM</span>
                                  </h4>
                                </td>
                                <td>
                                  <span className="pay-dark fs-16">$150</span>
                                </td>
                                <td>
                                  <span className="badge bg-info">
                                    <i className="feather-clock me-1" />
                                    Awaiting
                                  </span>
                                </td>
                                <td className="text-pink view-detail-pink">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#upcoming-coach"
                                  >
                                    <i className="feather-eye" />
                                    View Details
                                  </Link>
                                </td>
                                <td className="table-rating">
                                  <div className="rating-point">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                  </div>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action table-drop-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-h" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-edit" />
                                        Edit
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-trash" />
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm flex-shrink-0"
                                    >
                                      <ImageWithBasePath
                                        className="avatar-img"
                                        src="assets/img/featured/featured-08.jpg"
                                        alt="User"
                                      />
                                    </Link>
                                    <span className="table-head-name flex-grow-1">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#profile-coach"
                                      >
                                        Harry Richardson
                                      </Link>
                                      <span className="book-active">
                                        Booked on : 28 May 2023
                                      </span>
                                    </span>
                                  </h2>
                                </td>
                                <td>Onetime</td>
                                <td className="table-date-time">
                                  <h4>
                                    Mon, Jul 11<span>04:00 PM - 07:00 PM</span>
                                  </h4>
                                </td>
                                <td>
                                  <span className="pay-dark fs-16">$640</span>
                                </td>
                                <td>
                                  <span className="badge bg-info">
                                    <i className="feather-clock me-1" />
                                    Awaiting
                                  </span>
                                </td>
                                <td className="text-pink view-detail-pink">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#upcoming-coach"
                                  >
                                    <i className="feather-eye" />
                                    View Details
                                  </Link>
                                </td>
                                <td className="table-rating">
                                  <div className="rating-point">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                  </div>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action table-drop-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-h" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-edit" />
                                        Edit
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-trash" />
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm flex-shrink-0"
                                    >
                                      <ImageWithBasePath
                                        className="avatar-img"
                                        src="assets/img/featured/featured-09.jpg"
                                        alt="User"
                                      />
                                    </Link>
                                    <span className="table-head-name flex-grow-1">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#profile-coach"
                                      >
                                        Pete Hill
                                      </Link>
                                      <span className="book-active">
                                        Booked on : 29 May 2023
                                      </span>
                                    </span>
                                  </h2>
                                </td>
                                <td>Onetime</td>
                                <td className="table-date-time">
                                  <h4>
                                    Mon, Jul 11<span>10:00 PM - 11:00 PM</span>
                                  </h4>
                                </td>
                                <td>
                                  <span className="pay-dark fs-16">$200</span>
                                </td>
                                <td>
                                  <span className="badge bg-info">
                                    <i className="feather-clock me-1" />
                                    Awaiting
                                  </span>
                                </td>
                                <td className="text-pink view-detail-pink">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#upcoming-coach"
                                  >
                                    <i className="feather-eye" />
                                    View Details
                                  </Link>
                                </td>
                                <td className="table-rating">
                                  <div className="rating-point">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                  </div>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action table-drop-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-h" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-edit" />
                                        Edit
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="feather-trash" />
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-footer">
                  <div className="row">
                    <div className="col-md-6">
                      <div id="tablelength" />
                    </div>
                    <div className="col-md-6">
                      <div id="tablepage" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* upcoming Modal */}
      <div
        className="modal custom-modal fade request-modal"
        id="upcoming-court"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <div className="form-header modal-header-title">
                <h4 className="mb-0">
                  Court Booking Details
                  <span className="badge bg-info ms-2">Upcoming</span>
                </h4>
              </div>
              <Link
                to="#"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="align-center" aria-hidden="true">
                  <i className="feather-x" />
                </span>
              </Link>
            </div>
            <div className="modal-body">
              {/* Court Request */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card dashboard-card court-information">
                    <div className="card-header">
                      <h4>Court Information</h4>
                    </div>
                    <div className="appointment-info">
                      <ul className="appointmentset">
                        <li>
                          <div className="appointment-item">
                            <div className="appointment-img">
                              <ImageWithBasePath
                                src="assets/img/booking/booking-03.jpg"
                                alt="Booking"
                              />
                            </div>
                            <div className="appointment-content">
                              <h6>Wing Sports Academy</h6>
                              <p className="color-green">Court 1</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <h6>Booked On</h6>
                          <p>$150 Upto 2 guests</p>
                        </li>
                        <li>
                          <h6>Price Per Guest</h6>
                          <p>$15</p>
                        </li>
                        <li>
                          <h6>Maximum Number of Guests</h6>
                          <p>2</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card dashboard-card court-information">
                    <div className="card-header">
                      <h4>Appointment Information</h4>
                    </div>
                    <div className="appointment-info appoin-border">
                      <ul className="appointmentset">
                        <li>
                          <h6>Booked On</h6>
                          <p>Mon, Jul 14</p>
                        </li>
                        <li>
                          <h6>Date &amp; Time</h6>
                          <p>Mon, Jul 14</p>
                          <p>05:00 PM - 08:00 PM</p>
                        </li>
                        <li>
                          <h6>Total Number of Hours</h6>
                          <p>2</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card dashboard-card court-information">
                    <div className="card-header">
                      <h4>Payment Details</h4>
                    </div>
                    <div className="appointment-info appoin-border double-row">
                      <ul className="appointmentset">
                        <li>
                          <h6>Court Booking Amount</h6>
                          <p>$150</p>
                        </li>
                        <li>
                          <h6>Additional Guests</h6>
                          <p>2</p>
                        </li>
                        <li>
                          <h6>Amount Additional Guests</h6>
                          <p>$30</p>
                        </li>
                        <li>
                          <h6>Service Charge</h6>
                          <p>$20</p>
                        </li>
                      </ul>
                    </div>
                    <div className="appointment-info appoin-border ">
                      <ul className="appointmentsetview">
                        <li>
                          <h6>Total Amount Paid</h6>
                          <p className="color-green">$180</p>
                        </li>
                        <li>
                          <h6>Paid On</h6>
                          <p>Mon, Jul 14</p>
                        </li>
                        <li>
                          <h6>Transaction ID</h6>
                          <p>#5464164445676781641</p>
                        </li>
                        <li>
                          <h6>Payment type</h6>
                          <p>Wallet</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Court Request */}
            </div>
            <div className="modal-footer">
              <div className="table-accept-btn">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn cancel-table-btn"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /upcoming Modal */}

      {/* cancel Modal */}
      <div
        className="modal custom-modal fade request-modal"
        id="cancel-court"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <div className="form-header modal-header-title">
                <h4 className="mb-0">
                  Coach Booking Details
                  <span className="badge bg-danger ms-2">Cancelled</span>
                </h4>
              </div>
              <Link
                to="#"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="align-center" aria-hidden="true">
                  <i className="feather-x" />
                </span>
              </Link>
            </div>
            <div className="modal-body">
              {/* Court Request */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card dashboard-card court-information">
                    <div className="card-header">
                      <h4>Court Information</h4>
                    </div>
                    <div className="appointment-info">
                      <ul className="appointmentset">
                        <li>
                          <div className="appointment-item">
                            <div className="appointment-img">
                              <ImageWithBasePath
                                src="assets/img/featured/featured-06.jpg"
                                alt="Venue"
                              />
                            </div>
                            <div className="appointment-content">
                              <h6>Angela Roudrigez</h6>
                              <div className="table-rating">
                                <div className="rating-point">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <span>30 Reviews</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <h6>Location</h6>
                          <p>Santa Monica, CA</p>
                        </li>
                        <li>
                          <h6>Price Per Hour</h6>
                          <p>$200.00 / hr</p>
                        </li>
                        <li>
                          <h6>Rank</h6>
                          <p>Expert</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card dashboard-card court-information">
                    <div className="card-header">
                      <h4>Appointment Information</h4>
                    </div>
                    <div className="appointment-info appoin-border">
                      <ul className="appointmentset">
                        <li>
                          <h6>Booked On</h6>
                          <p>Mon, Jul 14</p>
                        </li>
                        <li>
                          <h6>Booking Type</h6>
                          <p>Onetime</p>
                        </li>
                        <li>
                          <h6>Date &amp; Time</h6>
                          <p>
                            Mon, Jul 14
                            <span>05:00 PM - 08:00 PM</span>
                          </p>
                        </li>
                        <li>
                          <h6>Total Number of Hours</h6>
                          <p>2</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card dashboard-card court-information">
                    <div className="card-header">
                      <h4>Payment Details</h4>
                    </div>
                    <div className="appointment-info appoin-border double-row">
                      <ul className="appointmentset">
                        <li>
                          <h6>Coaching Booking Amount</h6>
                          <p>$200</p>
                        </li>
                        <li>
                          <h6>Number of Hours</h6>
                          <p>2</p>
                        </li>
                        <li>
                          <h6>Service Charge</h6>
                          <p>$20</p>
                        </li>
                      </ul>
                    </div>
                    <div className="appointment-info appoin-border ">
                      <ul className="appointmentset">
                        <li>
                          <h6>Total Amount Paid</h6>
                          <p className="color-green">$180</p>
                        </li>
                        <li>
                          <h6>Paid On</h6>
                          <p>Mon, Jul 14</p>
                        </li>
                        <li>
                          <h6>Transaction ID</h6>
                          <p>#5464164445676781641</p>
                        </li>
                        <li>
                          <h6>Payment type</h6>
                          <p>Wallet</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card dashboard-card court-information mb-0">
                    <div className="card-header">
                      <h4>Reason for Cancellation</h4>
                    </div>
                    <div className="user-review-details">
                      <div className="user-review-content">
                        <h6 className="text-danger">Cancelled By Coach</h6>
                        <p>
                          If you are looking for a perfect place for friendly
                          matches with your friends or a competitive match, It
                          is the best place.
                        </p>
                        <h5>Sent on 11/03/2023</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Court Request */}
            </div>
            <div className="modal-footer">
              <div className="table-accept-btn table-btn-split">
                <Link to="#" className="btn initiate-table-btn">
                  Initiate Refund
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /cancel Modal */}

      {/* /Page Content */}
    </>
  );
};

export default UserBookings;
