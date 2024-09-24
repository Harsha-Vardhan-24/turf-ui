import React from "react";

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

const CourtBookingSummaryComponent = ({
  date,
  slots,
  totalPrice,
}: {
  date: any;
  slots: any[]; // Array of slot objects
  totalPrice: number;
}) => {
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const selectedDate = date.getDate();

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
  const checkedSlots = slots.filter((slot: any) => slot.slot.isChecked);

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

  // Calculate total hours (assuming each slot is 1 hour)
  const totalHours = sortedTimes.length;

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
      <aside className="card booking-details">
        <h3 className="border-bottom">Booking Details</h3>
        <ul>
          <li>
            <i className="feather-calendar me-2" />
            {selectedDate}, {month} {year}
          </li>
          <li>
            <i className="feather-clock me-2" />
            {bookingStartTime} to {bookingEndTime}
          </li>
          <li>
            <i className="feather-clock me-2" />
            Total Hours : {totalHours} Hrs
          </li>
        </ul>
        <div className="d-grid btn-block">
          <button type="button" className="btn btn-primary">
            Subtotal : ₹{totalPrice}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CourtBookingSummaryComponent;
