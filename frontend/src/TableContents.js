import React from "react";
import Booking from "./Booking";

function TableContents({ bookings, setBookings }) {
  let times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"];
  let oneToTen = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

  return (
    <tbody>
      {times.map((time, i) => {
        return (
          <tr>
            <th key={i}>{time}</th>
            {oneToTen.map((num, i) => {
              let booking;
              //foreach
              for (let apt of bookings) {
                if (apt.apt_time === time && apt.room === `C${num}`) {
                  booking = apt;
                }
              }
              return (
                <Booking
                  key={`C${i}`}
                  booking={booking}
                  bookings={bookings}
                  setBookings={setBookings}
                />
              );
            })}
            {oneToTen.map((num, i) => {
              let booking;
              for (let apt of bookings) {
                if (apt.apt_time === time && apt.room === `P${num}`) {
                  booking = apt;
                }
              }
              return (
                <Booking
                  key={`P${i}`}
                  booking={booking}
                  bookings={bookings}
                  setBookings={setBookings}
                />
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableContents;
