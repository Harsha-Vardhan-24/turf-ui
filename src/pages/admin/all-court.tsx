import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../components/common/Loader";

interface Location {
  country: string;
  city: string;
  location_link: string;
}

interface Pricing {
  starting_price: string;
  max_guests: number;
  additional_guests: number;
  price_of_additional_guests: string;
}

interface Court {
  court_name: string;
  court_type: string;
  location: Location;
  pricing: Pricing;
  venue_overview: string;
  status: string;
  court_id: string;
  images: string[];
}

interface CourtResponse {
  courts: Court[];
}

const AllCourt = () => {
  const routes = all_routes;
  const navigate = useNavigate();
  const [courtsData, setCourtsData] = useState<Court[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const adminId = localStorage.getItem("adminId");

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get<CourtResponse>(
          `${process.env.REACT_APP_BACKEND_URL}admin/court/fetch/${adminId}`
        );
        setCourtsData(response.data.courts);
      } catch (error) {
        console.error("Error fetching courts data:", error);
        toast.error("Failed to load courts data.");
      } finally {
        setLoading(false);
      }
    };

    if (adminId) {
      apiCall();
    } else {
      toast.error("You don't have the permission.");
    }
  }, []);

  const filteredData = Array.isArray(courtsData)
    ? courtsData.filter(
        ({ court_name, location, pricing, venue_overview, status }) => {
          const search = searchInput.toLowerCase();
          return [
            court_name,
            location?.city,
            pricing?.starting_price,
            pricing?.max_guests,
            pricing?.additional_guests,
            venue_overview,
            status,
          ].some(
            (value) => value && value.toString().toLowerCase().includes(search)
          );
        }
      )
    : [];

  // Helper functions
  const renderCourtName = ({ images, court_name, court_id }: Court) => (
    <h2 className="table-avatar">
      <Link to="#" className="avatar avatar-sm flex-shrink-0">
        {/* <ImageWithBasePath
          className="avatar-img"
          src="https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg"
          alt="Court"
        /> */}
        {/* <img
          className="avatar-img"
          src="https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg"
          alt="Court"
        /> */}
      </Link>
      <span className="table-head-name flex-grow-1">
        <Link to="#">{court_name}</Link>
        {/* <span>{court_id}</span> */}
      </span>
    </h2>
  );

  const renderActions = ({ court_id }: Court) => (
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
        <button
          className="dropdown-item"
          onClick={() => {
            navigate(`/admin/edit-court/${court_id}`);
          }}
        >
          <i className="feather-edit" />
          Edit
        </button>
        <button
          className="dropdown-item"
          onClick={() => {
            deleteCourt(court_id);
          }}
        >
          <i className="feather-trash" />
          Delete
        </button>
      </div>
    </div>
  );

  const renderStatus = ({ status }: Court) => (
    <div className="interset-btn">
      <div className="status-toggle">
        <input type="checkbox" id="status_1" className="check" />
        <label htmlFor="status_1" className="checktoggle">
          {status}
        </label>
      </div>
    </div>
  );

  const renderCourtType = ({ court_type }: Court) => <span>{court_type}</span>;

  const columns = [
    {
      field: "court_name",
      header: "Court Name",
      body: renderCourtName,
      sortable: true,
    },
    {
      field: "court_type",
      header: "Court Type",
      body: renderCourtType,
      sortable: true,
    },
    { field: "location.city", header: "City", sortable: true },
    { field: "pricing.starting_price", header: "Amount", sortable: true },
    { field: "pricing.max_guests", header: "Max Guest", sortable: true },
    {
      field: "pricing.additional_guests",
      header: "Additional Guests",
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      body: renderStatus,
      sortable: true,
    },
    { body: renderActions, header: "Action" },
  ];

  const deleteCourt = async (courtId: string) => {
    // console.log(courtId, Number(adminId));
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}admin/court/delete/${Number(adminId)}/${courtId}`
    );
    response.status === 200
      ? toast.success(response.data.message)
      : toast.error(response.data.message);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div>
      <ToastContainer />
      {/* Breadcrumb */}
      <section className="breadcrumb breadcrumb-list mb-0">
        <span className="primary-right-round" />
        <div className="container">
          <h1 className="text-white">Courts</h1>
          <ul>
            <li>
              <Link to={routes.login}>Home</Link>
            </li>
            <li>Courts</li>
          </ul>
        </div>
      </section>
      {/* /Breadcrumb */}
      {/* Dashboard Menu */}
      <div className="dashboard-section coach-dash-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="dashboard-menu coaurt-menu-dash">
                <ul>
                  <li>
                    <Link to={routes.adminDashboard}>
                      <ImageWithBasePath
                        src="assets/img/icons/dashboard-icon.svg"
                        alt="Icon"
                      />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.allCourt} className="active">
                      <ImageWithBasePath
                        src="assets/img/icons/court-icon.svg"
                        alt="Icon"
                      />
                      <span> Courts</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"routes.coachRequest"}>
                      <ImageWithBasePath
                        src="assets/img/icons/request-icon.svg"
                        alt="Icon"
                      />
                      <span>Requests</span>
                      <span className="court-notify">03</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"routes.coachBooking"}>
                      <ImageWithBasePath
                        src="assets/img/icons/booking-icon.svg"
                        alt="Icon"
                      />
                      <span>Bookings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"routes.coachChat"}>
                      <ImageWithBasePath
                        src="assets/img/icons/chat-icon.svg"
                        alt="Icon"
                      />
                      <span>Chat</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"routes.coachEarning"}>
                      <ImageWithBasePath
                        src="assets/img/icons/invoice-icon.svg"
                        alt="Icon"
                      />
                      <span>Earnings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"routes.coachWallet"}>
                      <ImageWithBasePath
                        src="assets/img/icons/wallet-icon.svg"
                        alt="Icon"
                      />
                      <span>Wallet</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={routes.coachReview}>
                      <ImageWithBasePath
                        src="assets/img/icons/review-icon.svg"
                        alt="Icon"
                      />
                      <span>Reviews</span>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="dash-filter-box">
                <div className="input-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Court"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </div>
                {/* <div className="dropdown-box">
                  <Dropdown
                    value={selectedTimeframe}
                    onChange={(e) => setSelectedTimeframe(e.value)}
                    options={timeframes}
                    placeholder="Select Timeframe"
                  />
                </div>
                <div className="dropdown-box">
                  <Dropdown
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.value)}
                    options={sortOptions}
                    placeholder="Sort By"
                  />
                </div> */}
              </div>
              {loading ? (
                <Loader />
              ) : (
                <DataTable value={filteredData} paginator rows={10}>
                  {columns.map((col) => (
                    <Column
                      key={col.field}
                      field={col.field}
                      header={col.header}
                      body={col.body}
                      sortable={col.sortable}
                    />
                  ))}
                </DataTable>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourt;
