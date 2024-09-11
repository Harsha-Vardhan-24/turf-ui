import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Dropdown } from "primereact/dropdown";
import { TimePicker } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { all_routes } from "../router/all_routes";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const daysOfWeek = [
  { id: 1, label: "Mon" },
  { id: 2, label: "Tues" },
  { id: 3, label: "Wed" },
  { id: 4, label: "Thur" },
  { id: 5, label: "Fri" },
  { id: 6, label: "Sat" },
  { id: 7, label: "Sun" },
];

const courtOptions = [
  { name: "Select Court Type" },
  { name: "Football" },
  { name: "Cricket" },
  { name: "Badminton" },
  { name: "Basketball" },
  { name: "Tennis" },
  { name: "Swimming" },
  { name: "Squash" },
];

const hoursOptions = ["1 Hrs", "2 Hrs", "3 Hrs"];

const AddCourt = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [mondaySelectedHours, setMondaySelectedHours] = useState<{
    duration: string;
    startTime: any;
    endTime: any;
  }>({
    duration: "",
    startTime: null,
    endTime: null,
  });

  const [tuesdaySelectedHours, setTuesdaySelectedHours] = useState<{
    duration: string;
    startTime: any;
    endTime: any;
  }>({
    duration: "",
    startTime: null,
    endTime: null,
  });

  const [wednesdaySelectedHours, setWednesdaySelectedHours] = useState<{
    duration: string;
    startTime: any;
    endTime: any;
  }>({
    duration: "",
    startTime: null,
    endTime: null,
  });

  const [thursdaySelectedHours, setThursdaySelectedHours] = useState<{
    duration: string;
    startTime: any;
    endTime: any;
  }>({
    duration: "",
    startTime: null,
    endTime: null,
  });

  const [fridaySelectedHours, setFridaySelectedHours] = useState<{
    duration: string;
    startTime: any;
    endTime: any;
  }>({
    duration: "",
    startTime: null,
    endTime: null,
  });

  const [saturdaySelectedHours, setSaturdaySelectedHours] = useState<{
    duration: string;
    startTime: any;
    endTime: any;
  }>({
    duration: "",
    startTime: null,
    endTime: null,
  });

  const [sundaySelectedHours, setSundaySelectedHours] = useState<{
    duration: string;
    startTime: any;
    endTime: any;
  }>({
    duration: "",
    startTime: null,
    endTime: null,
  });

  const [images, setImages] = useState<any>([]);

  const onSubmit = (data: any) => {
    const courtData = { ...data, courtImages: images, courtAvailability: "" };
    console.log(courtData);
  };

  const [selectedDays, setSelectedDays] = useState(
    Array(daysOfWeek.length).fill(false)
  );

  const [slots, setSlots] = useState();
  const [selectedCourt, setSelectedCourt] = useState();

  const handleDayChange = (index: number) => {
    const updatedDays = [...selectedDays];
    updatedDays[index] = !updatedDays[index];
    setSelectedDays(updatedDays);
  };

  // Watch the 'venueOverView' field for changes
  const venueOverView = watch("venueOverView");

  const handleQuillChange = (value: string) => {
    // Manually register the Quill value to react-hook-form
    setValue("venueOverView", value);
  };

  const rulesOfVenue = watch("rulesOfVenue");

  const handleRulesChange = (value: string) => {
    // Manually register the Quill value to react-hook-form
    setValue("rulesOfVenue", value);
  };

  dayjs.extend(customParseFormat);

  const handleStartTimeChange = (
    day: string,
    time: Dayjs,
    timeString: string | string[]
  ) => {
    switch (day) {
      case "Monday":
        setMondaySelectedHours((prevState) => ({
          ...prevState,
          startTime: timeString,
        }));
        break;
      case "Tuesday":
        setTuesdaySelectedHours((prevState) => ({
          ...prevState,
          startTime: timeString,
        }));
        break;
      case "Wednesday":
        setWednesdaySelectedHours((prevState) => ({
          ...prevState,
          startTime: timeString,
        }));
        break;
      case "Thursday":
        setThursdaySelectedHours((prevState) => ({
          ...prevState,
          startTime: timeString,
        }));
        break;
      case "Friday":
        setFridaySelectedHours((prevState) => ({
          ...prevState,
          startTime: timeString,
        }));
        break;
      case "Saturday":
        setSaturdaySelectedHours((prevState) => ({
          ...prevState,
          startTime: timeString,
        }));
        break;
      case "Sunday":
        setSundaySelectedHours((prevState) => ({
          ...prevState,
          startTime: timeString,
        }));
        break;
      // Add cases for other days as needed
      default:
        console.warn("Invalid day selected");
        break;
    }
  };

  const handleEndTimeChange = (
    day: string,
    time: Dayjs,
    timeString: string | string[]
  ) => {
    switch (day) {
      case "Monday":
        setMondaySelectedHours((prevState) => ({
          ...prevState,
          endTime: timeString,
        }));
        break;
      case "Tuesday":
        setTuesdaySelectedHours((prevState) => ({
          ...prevState,
          endTime: timeString,
        }));
        break;
      case "Wednesday":
        setWednesdaySelectedHours((prevState) => ({
          ...prevState,
          endTime: timeString,
        }));
        break;
      case "Thursday":
        setThursdaySelectedHours((prevState) => ({
          ...prevState,
          endTime: timeString,
        }));
        break;
      case "Friday":
        setFridaySelectedHours((prevState) => ({
          ...prevState,
          endTime: timeString,
        }));
        break;
      case "Saturday":
        setSaturdaySelectedHours((prevState) => ({
          ...prevState,
          endTime: timeString,
        }));
        break;
      case "Sunday":
        setSundaySelectedHours((prevState) => ({
          ...prevState,
          endTime: timeString,
        }));
        break;
      default:
        console.warn("Invalid day selected");
        break;
    }
  };

  const scrollContent = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const routes = all_routes;

  // Function to handle file input change
  const handleFileChange = (e: any) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(
      (file: any) => URL.createObjectURL(file) // Create a local URL for the file
    );
    setImages((prevImages: any) => [...prevImages, ...newImages]);
  };

  // Function to remove an image
  const removeImg = (index: number) => {
    setImages(images.filter((_: any, i: number) => i !== index));
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb breadcrumb-list mb-0">
        <span className="primary-right-round" />
        <div className="container">
          <h1 className="text-white">List Your Court</h1>
          <ul>
            <li>
              <Link to={routes.home}>Home</Link>
            </li>
            <li>List Your Court</li>
          </ul>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          {/* Row */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="venue-options option-list-court white-bg">
                <ul className="clearfix">
                  <li className="active">
                    <Link to="#" onClick={() => scrollContent("basic-info")}>
                      Basic Info
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => scrollContent("venue-price")}>
                      Venue Price
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => scrollContent("availability")}>
                      Availability
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => scrollContent("overview")}>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => scrollContent("includes")}>
                      Includes
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => scrollContent("rules")}>
                      Rules
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => scrollContent("amenities")}>
                      Amenities
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => scrollContent("gallery")}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => scrollContent("location")}>
                      Locations
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Accordian Contents */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="accordion"
                id="accordionPanel"
              >
                {/* basic info */}
                <div className="accordion-item mb-4" id="basic-info">
                  <h4
                    className="accordion-header"
                    id="panelsStayOpen-basic-info"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Basic Info
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-basic-info"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="input-space mb-0">
                            <label htmlFor="court-name" className="form-label">
                              Court Name <span>*</span>
                            </label>
                            <input
                              {...register("courtName")}
                              type="text"
                              className="form-control"
                              id="court-name"
                              placeholder="Enter Court Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-space mb-0">
                            <label className="form-label">
                              Court Type <span>*</span>
                            </label>
                            <Controller
                              name="courtType"
                              control={control}
                              defaultValue={courtOptions[0].name} // Default to "Select Court Type"
                              render={({ field }) => (
                                <Dropdown
                                  value={courtOptions.find(
                                    (option) => option.name === field.value.name
                                  )}
                                  onChange={(e) => field.onChange(e.value)}
                                  options={courtOptions}
                                  optionLabel="name"
                                  placeholder="Select Court Type"
                                  className="select-bg w-100"
                                />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Venue Price */}
                <div className="accordion-item mb-4" id="venue-price">
                  <h4
                    className="accordion-header"
                    id="panelsStayOpen-venue-price"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Venue Price <span>(INR)</span>
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-venue-price"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="input-space">
                            <label
                              htmlFor="starting-price"
                              className="form-label"
                            >
                              Starting Price (Per Hour)
                            </label>
                            <input
                              {...register("startingPrice")}
                              type="text"
                              className="form-control"
                              id="starting-price"
                              placeholder="Enter Price"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-space">
                            <label htmlFor="name" className="form-label">
                              Max Guests
                            </label>
                            <input
                              {...register("maxGuests")}
                              type="text"
                              className="form-control"
                              id="max-guests"
                              placeholder="Enter Max Number of Guests"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-space mb-0">
                            <label
                              htmlFor="additional-guests"
                              className="form-label"
                            >
                              Additional Guests
                            </label>
                            <input
                              {...register("additionalGuests")}
                              type="text"
                              className="form-control"
                              id="additional-guests"
                              placeholder="No Additional Guests"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-space mb-0">
                            <label htmlFor="name" className="form-label">
                              Price of Extra Guest (Per Hour)
                            </label>
                            <input
                              {...register("priceOfAdditionalGuests")}
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter Price of Extra Guests"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Availability */}
                <div className="accordion-item mb-4" id="availability">
                  <h4
                    className="accordion-header"
                    id="panelsStayOpen-availability"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Availability
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-availability"
                  >
                    <div className="accordion-body">
                      {/* Profile Availability */}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="profile-availability">
                            <div className="select-days">
                              <h4>Select Days</h4>
                              <ul className="day-list">
                                {daysOfWeek.map((day, index) => (
                                  <li key={day.id}>
                                    <div className="day-selection">
                                      <input
                                        type="checkbox"
                                        id={`select_days_${day.id}`}
                                        checked={selectedDays[index]}
                                        onChange={() => handleDayChange(index)}
                                        name="day"
                                      />
                                      <label htmlFor={`select_days_${day.id}`}>
                                        {day.label}
                                      </label>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="accordion setting-accordion">
                              {/* Monday */}
                              <div
                                className="accordion-item"
                                id="day-monday"
                                style={{
                                  display: selectedDays[0] ? "block" : "none",
                                }}
                              >
                                <div className="accordion-header">
                                  <div
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#monday"
                                  >
                                    <div className="interset-btn empty-space">
                                      <div className="status-toggle d-inline-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status_1"
                                          className="check"
                                        />
                                        <label
                                          htmlFor="status_1"
                                          className="checktoggle"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </div>
                                    <span className="accord-title">Monday</span>
                                    <Link to="#">Edit</Link>
                                  </div>
                                </div>
                                <div
                                  id="monday"
                                  className="accordion-collapse collapse"
                                >
                                  <div className="accordion-body">
                                    <div className="row gx-2">
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Duration{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <Dropdown
                                            value={mondaySelectedHours.duration}
                                            onChange={(e) =>
                                              setMondaySelectedHours(
                                                (prevState) => ({
                                                  ...prevState,
                                                  duration: e.target.value,
                                                })
                                              )
                                            }
                                            options={hoursOptions}
                                            optionLabel="name"
                                            placeholder="Select Hours"
                                            className="select-bg w-100"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Start Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleStartTimeChange(
                                                  "Monday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            End Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleEndTimeChange(
                                                  "Monday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <h4>Available Timings</h4>
                                        <div className="token-slot mt-2">
                                          <div className="form-check-inline visits me-1">
                                            <label className="visit-btns">
                                              <input
                                                type="checkbox"
                                                className="form-check-input"
                                                defaultValue={18}
                                              />
                                              <span
                                                className="visit-rsn"
                                                data-bs-toggle="tooltip"
                                                title="06:00 AM"
                                              >
                                                06:00 AM
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Monday */}
                              {/* Tuesday */}
                              <div
                                className="accordion-item"
                                id="day-tuesday"
                                style={{
                                  display: selectedDays[1] ? "block" : "none",
                                }}
                              >
                                <div className="accordion-header">
                                  <div
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#tuesday"
                                  >
                                    <div className="interset-btn empty-space">
                                      <div className="status-toggle d-inline-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status_2"
                                          className="check"
                                          defaultChecked
                                        />
                                        <label
                                          htmlFor="status_2"
                                          className="checktoggle"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </div>
                                    <span className="accord-title">
                                      Tuesday
                                    </span>
                                    <Link to="#">Edit</Link>
                                  </div>
                                </div>
                                <div
                                  id="tuesday"
                                  className="accordion-collapse collapse show"
                                >
                                  <div className="accordion-body">
                                    <div className="row gx-2">
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Duration{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <Dropdown
                                            value={
                                              tuesdaySelectedHours.duration
                                            }
                                            onChange={(e) =>
                                              setTuesdaySelectedHours(
                                                (prevState) => ({
                                                  ...prevState,
                                                  duration: e.target.value,
                                                })
                                              )
                                            }
                                            options={hoursOptions}
                                            optionLabel="name"
                                            placeholder="Select Hours"
                                            className="select-bg w-100"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Start Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleStartTimeChange(
                                                  "Tuesday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            End Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleEndTimeChange(
                                                  "Tuesday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <h4>Available Timings</h4>
                                        <div className="token-slot mt-2">
                                          <div className="form-check-inline visits me-1">
                                            <label className="visit-btns">
                                              <input
                                                type="checkbox"
                                                className="form-check-input"
                                                defaultValue={18}
                                              />
                                              <span
                                                className="visit-rsn"
                                                data-bs-toggle="tooltip"
                                                title="06:00 AM"
                                              >
                                                06:00 AM
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Tuesday */}
                              {/* Wednessday */}
                              <div
                                className="accordion-item"
                                id="day-wednesday"
                                style={{
                                  display: selectedDays[2] ? "block" : "none",
                                }}
                              >
                                <div className="accordion-header">
                                  <div
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#wednesday"
                                  >
                                    <div className="interset-btn empty-space">
                                      <div className="status-toggle d-inline-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status_3"
                                          className="check"
                                        />
                                        <label
                                          htmlFor="status_3"
                                          className="checktoggle"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </div>
                                    <span className="accord-title">
                                      Wednesday
                                    </span>
                                    <Link to="#">Edit</Link>
                                  </div>
                                </div>
                                <div
                                  id="wednesday"
                                  className="accordion-collapse collapse"
                                >
                                  <div className="accordion-body">
                                    <div className="row gx-2">
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Duration{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <Dropdown
                                            value={
                                              wednesdaySelectedHours.duration
                                            }
                                            onChange={(e) =>
                                              setWednesdaySelectedHours(
                                                (prevState) => ({
                                                  ...prevState,
                                                  duration: e.target.value,
                                                })
                                              )
                                            }
                                            options={hoursOptions}
                                            optionLabel="name"
                                            placeholder="Select Hours"
                                            className="select-bg w-100"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Start Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleStartTimeChange(
                                                  "Wednesday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            End Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleEndTimeChange(
                                                  "Wednesday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <h4>Available Timings</h4>
                                        <div className="token-slot mt-2">
                                          <div className="form-check-inline visits me-1">
                                            <label className="visit-btns">
                                              <input
                                                type="checkbox"
                                                className="form-check-input"
                                                defaultValue={18}
                                              />
                                              <span
                                                className="visit-rsn"
                                                data-bs-toggle="tooltip"
                                                title="06:00 AM"
                                              >
                                                06:00 AM
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Wednessday */}
                              {/* Thursday */}
                              <div
                                className="accordion-item"
                                id="day-thursday"
                                style={{
                                  display: selectedDays[3] ? "block" : "none",
                                }}
                              >
                                <div className="accordion-header">
                                  <div
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#thursday"
                                  >
                                    <div className="interset-btn empty-space">
                                      <div className="status-toggle d-inline-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status_4"
                                          className="check"
                                        />
                                        <label
                                          htmlFor="status_4"
                                          className="checktoggle"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </div>
                                    <span className="accord-title">
                                      Thursday
                                    </span>
                                    <Link to="#">Edit</Link>
                                  </div>
                                </div>
                                <div
                                  id="thursday"
                                  className="accordion-collapse collapse"
                                >
                                  <div className="accordion-body">
                                    <div className="row gx-2">
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Duration{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <Dropdown
                                            value={
                                              thursdaySelectedHours.duration
                                            }
                                            onChange={(e) =>
                                              setThursdaySelectedHours(
                                                (prevState) => ({
                                                  ...prevState,
                                                  duration: e.target.value,
                                                })
                                              )
                                            }
                                            options={hoursOptions}
                                            optionLabel="name"
                                            placeholder="Select Hours"
                                            className="select-bg w-100"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Start Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleStartTimeChange(
                                                  "Thursday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            End Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleEndTimeChange(
                                                  "Thursday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <h4>Available Timings</h4>
                                        <div className="token-slot mt-2">
                                          <div className="form-check-inline visits me-1">
                                            <label className="visit-btns">
                                              <input
                                                type="checkbox"
                                                className="form-check-input"
                                                defaultValue={18}
                                              />
                                              <span
                                                className="visit-rsn"
                                                data-bs-toggle="tooltip"
                                                title="06:00 AM"
                                              >
                                                06:00 AM
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Thursday */}
                              {/* Friday */}
                              <div
                                className="accordion-item"
                                id="day-friday"
                                style={{
                                  display: selectedDays[4] ? "block" : "none",
                                }}
                              >
                                <div className="accordion-header">
                                  <div
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#friday"
                                  >
                                    <div className="interset-btn empty-space">
                                      <div className="status-toggle d-inline-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status_5"
                                          className="check"
                                        />
                                        <label
                                          htmlFor="status_5"
                                          className="checktoggle"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </div>
                                    <span className="accord-title">Friday</span>
                                    <Link to="#">Edit</Link>
                                  </div>
                                </div>
                                <div
                                  id="friday"
                                  className="accordion-collapse collapse"
                                >
                                  <div className="accordion-body">
                                    <div className="row gx-2">
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Duration{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <Dropdown
                                            value={fridaySelectedHours.duration}
                                            onChange={(e) =>
                                              setFridaySelectedHours(
                                                (prevState) => ({
                                                  ...prevState,
                                                  duration: e.target.value,
                                                })
                                              )
                                            }
                                            options={hoursOptions}
                                            optionLabel="name"
                                            placeholder="Select Hours"
                                            className="select-bg w-100"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Start Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleStartTimeChange(
                                                  "Friday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            End Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleEndTimeChange(
                                                  "Friday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <h4>Available Timings</h4>
                                        <div className="token-slot mt-2">
                                          <div className="form-check-inline visits me-1">
                                            <label className="visit-btns">
                                              <input
                                                type="checkbox"
                                                className="form-check-input"
                                                defaultValue={18}
                                              />
                                              <span
                                                className="visit-rsn"
                                                data-bs-toggle="tooltip"
                                                title="06:00 AM"
                                              >
                                                06:00 AM
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Friday */}
                              {/* Saturday */}
                              <div
                                className="accordion-item"
                                id="day-saturday"
                                style={{
                                  display: selectedDays[5] ? "block" : "none",
                                }}
                              >
                                <div className="accordion-header">
                                  <div
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#saturday"
                                  >
                                    <div className="interset-btn empty-space">
                                      <div className="status-toggle d-inline-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status_6"
                                          className="check"
                                        />
                                        <label
                                          htmlFor="status_6"
                                          className="checktoggle"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </div>
                                    <span className="accord-title">
                                      Saturday
                                    </span>
                                    <Link to="#">Edit</Link>
                                  </div>
                                </div>
                                <div
                                  id="saturday"
                                  className="accordion-collapse collapse"
                                >
                                  <div className="accordion-body">
                                    <div className="row gx-2">
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Duration{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <Dropdown
                                            value={
                                              saturdaySelectedHours.duration
                                            }
                                            onChange={(e) =>
                                              setSaturdaySelectedHours(
                                                (prevState) => ({
                                                  ...prevState,
                                                  duration: e.target.value,
                                                })
                                              )
                                            }
                                            options={hoursOptions}
                                            optionLabel="name"
                                            placeholder="Select Hours"
                                            className="select-bg w-100"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Start Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleStartTimeChange(
                                                  "Saturday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            End Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleEndTimeChange(
                                                  "Saturday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <h4>Available Timings</h4>
                                        <div className="token-slot mt-2">
                                          <div className="form-check-inline visits me-1">
                                            <label className="visit-btns">
                                              <input
                                                type="checkbox"
                                                className="form-check-input"
                                                defaultValue={18}
                                              />
                                              <span
                                                className="visit-rsn"
                                                data-bs-toggle="tooltip"
                                                title="06:00 AM"
                                              >
                                                06:00 AM
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Saturday */}
                              {/* Sunday */}
                              <div
                                className="accordion-item"
                                id="day-sunday"
                                style={{
                                  display: selectedDays[6] ? "block" : "none",
                                }}
                              >
                                <div className="accordion-header">
                                  <div
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#sunday"
                                  >
                                    <div className="interset-btn empty-space">
                                      <div className="status-toggle d-inline-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="status_7"
                                          className="check"
                                        />
                                        <label
                                          htmlFor="status_7"
                                          className="checktoggle"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </div>
                                    <span className="accord-title">Sunday</span>
                                    <Link to="#">Edit</Link>
                                  </div>
                                </div>
                                <div
                                  id="sunday"
                                  className="accordion-collapse collapse"
                                >
                                  <div className="accordion-body">
                                    <div className="row gx-2">
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Duration{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <Dropdown
                                            value={sundaySelectedHours.duration}
                                            onChange={(e) =>
                                              setSundaySelectedHours(
                                                (prevState) => ({
                                                  ...prevState,
                                                  duration: e.target.value,
                                                })
                                              )
                                            }
                                            options={hoursOptions}
                                            optionLabel="name"
                                            placeholder="Select Hours"
                                            className="select-bg w-100"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            Start Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleStartTimeChange(
                                                  "Sunday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="duration-blk">
                                          <label className="form-control-label">
                                            End Time{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="form-icon">
                                            <TimePicker
                                              placeholder="Select Time"
                                              className="form-control datetimepicker1"
                                              onChange={(time, timeString) =>
                                                handleEndTimeChange(
                                                  "Sunday",
                                                  time,
                                                  timeString
                                                )
                                              }
                                              defaultOpenValue={dayjs(
                                                "00:00",
                                                "HH:mm"
                                              )}
                                              format="HH:mm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <h4>Available Timings</h4>
                                        <div className="token-slot mt-2">
                                          <div className="form-check-inline visits me-1">
                                            <label className="visit-btns">
                                              <input
                                                type="checkbox"
                                                className="form-check-input"
                                                defaultValue={18}
                                              />
                                              <span
                                                className="visit-rsn"
                                                data-bs-toggle="tooltip"
                                                title="06:00 AM"
                                              >
                                                06:00 AM
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Sunday */}
                            </div>
                            <div className="save-changes text-sm-end">
                              <Link
                                to="#"
                                className="btn btn-primary reset-profile"
                              >
                                Reset
                              </Link>
                              <Link
                                to="#"
                                className="btn btn-secondary save-profile"
                              >
                                Save Change
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Profile Availability */}
                    </div>
                  </div>
                </div>
                {/* overview */}
                <div className="accordion-item mb-4" id="overview">
                  <h4 className="accordion-header" id="panelsStayOpen-overview">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      Venue Overview
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseFour"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-overview"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="">
                            <label htmlFor="name" className="form-label">
                              Overview of Venue
                            </label>
                            <ReactQuill
                              value={venueOverView}
                              onChange={handleQuillChange}
                              placeholder="Enter Overview"
                              modules={{
                                toolbar: [
                                  [{ header: [1, 2, false] }],
                                  ["bold", "italic", "underline", "strike"],
                                  [{ list: "ordered" }, { list: "bullet" }],
                                  ["link", "image"],
                                  ["clean"],
                                ],
                              }}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* includes */}
                <div className="accordion-item mb-4" id="includes">
                  <h4 className="accordion-header" id="panelsStayOpen-includes">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      Includes
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseFive"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-includes"
                  >
                    <div className="accordion-body">
                      <ul className="clearfix">
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                {...register("courtIncludes.badmintonRacket")}
                                id="includes1"
                                defaultChecked
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="includes1"
                            >
                              Badminton Racket Unlimited
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                {...register("courtIncludes.bats")}
                                id="includes2"
                                defaultChecked
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="includes2"
                            >
                              Bats
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                {...register("courtIncludes.hittingMachines")}
                                id="includes3"
                                defaultChecked
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="includes3"
                            >
                              Hitting Machines
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                {...register("courtIncludes.multipleCourts")}
                                id="includes4"
                                defaultChecked
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="includes4"
                            >
                              Multiple Courts
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                {...register("courtIncludes.sparePlayers")}
                                id="includes5"
                                defaultChecked
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="includes5"
                            >
                              Spare Players
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                {...register("courtIncludes.instantRacket")}
                                id="includes6"
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="includes6"
                            >
                              Instant Racket
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                {...register("courtIncludes.greenTurfs")}
                                id="includes7"
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="includes7"
                            >
                              Green Turfs
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Rules */}
                <div className="accordion-item mb-4" id="rules">
                  <h4 className="accordion-header" id="panelsStayOpen-rules">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSix"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSix"
                    >
                      Venue Rules
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseFour"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-overview"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="">
                            <label htmlFor="name" className="form-label">
                              Rules of Venue
                            </label>
                            <ReactQuill
                              value={rulesOfVenue}
                              onChange={handleRulesChange}
                              placeholder="Enter Rules"
                              modules={{
                                toolbar: [
                                  [{ header: [1, 2, false] }],
                                  ["bold", "italic", "underline", "strike"],
                                  [{ list: "ordered" }, { list: "bullet" }],
                                  ["link", "image"],
                                  ["clean"],
                                ],
                              }}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Amenities */}
                <div className="accordion-item mb-4" id="amenities">
                  <h4
                    className="accordion-header"
                    id="panelsStayOpen-amenities"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSeven"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSeven"
                    >
                      Amenities
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseSeven"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-amenities"
                  >
                    <div className="accordion-body">
                      <ul className="d-md-flex align-items-center">
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="amenities1"
                                {...register("amenities.parking")}
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="amenities1"
                            >
                              Parking
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="amenities2"
                                {...register("amenities.drinkingWater")}
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="amenities2"
                            >
                              Drinking Water
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="amenities3"
                                {...register("amenities.firstAid")}
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="amenities3"
                            >
                              First Aid
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="amenities4"
                                {...register("amenities.changeRoom")}
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="amenities4"
                            >
                              Change Room
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <div className="d-inline-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="amenities5"
                                {...register("amenities.shower")}
                              />
                            </div>
                            <label
                              className="form-check-label"
                              htmlFor="amenities5"
                            >
                              Shower
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Gallery */}
                <div className="accordion-item mb-4" id="gallery">
                  <h4 className="accordion-header" id="panelsStayOpen-gallery">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseEight"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseEight"
                    >
                      Gallery
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseEight"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-gallery"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="file-upload-text appointment-upload">
                            <div className="input-space">
                              <label className="form-label">
                                Your Venue Images
                              </label>
                              <div className="file-upload">
                                <input
                                  type="file"
                                  id="file-input"
                                  className="image-upload"
                                  multiple
                                  onChange={handleFileChange}
                                />
                                <p>Upload Coaching Gallery</p>
                              </div>
                            </div>
                            <div className="upload-show-img">
                              {images.map((imgSrc, index) => (
                                <div key={index} className="upload-images">
                                  <img
                                    src={imgSrc}
                                    alt={`Preview ${index}`}
                                    className="img-fluid"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => removeImg(index)}
                                    className="btn btn-icon btn-sm"
                                  >
                                    <i className="far fa-trash-alt" />
                                  </button>
                                </div>
                              ))}
                            </div>
                            <h5>
                              Put the main picture as the first Image <br />
                              Image Should be minimum 152 * 152 Supported File
                              formats JPG, PNG, SVG
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location */}
                <div className="accordion-item" id="location">
                  <h4 className="accordion-header" id="panelsStayOpen-location">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseNine"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseNine"
                    >
                      Location
                    </button>
                  </h4>
                  <div
                    id="panelsStayOpen-collapseNine"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-location"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="input-space">
                            <label htmlFor="country" className="form-label">
                              Country
                            </label>
                            <input
                              {...register("location.country")}
                              type="text"
                              className="form-control"
                              id="country"
                              placeholder="Enter Country"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-space">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <input
                              {...register("location.city")}
                              type="text"
                              className="form-control"
                              id="city"
                              placeholder="Enter City"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-space">
                            <label
                              htmlFor="street-address"
                              className="form-label"
                            >
                              Google Maps Location Link <span>*</span>
                            </label>
                            <input
                              {...register("location.locationLink")}
                              type="text"
                              className="form-control"
                              id="street-address"
                              placeholder="Enter Link"
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-12">
                        <label htmlFor="name" className="form-label">
                          Map
                        </label>
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
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* Save form button */}
                <button className="text-center btn-row btn btn-secondary save-profile">
                  Save Venue <i className="feather-arrow-right-circle ms-1" />
                </button>
              </form>
              {/* Accordian Contents */}
            </div>
          </div>
          {/* /Row */}
        </div>
        {/* /Container */}
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default AddCourt;
