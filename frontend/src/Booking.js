import React, { useState } from "react";
import axios from "axios";

function Booking({ booking, setBookings, bookings }) {
  const deleteBooking = () => {
    let index;
    for (let i = 0; i < bookings.length; i++) {
      if (bookings[i].id === booking.id) {
        index = i;
      }
    }
    bookings.splice(index, 1);
    setBookings(bookings);
    axios
      .delete(`http://localhost:3001/api/bookings/${booking.id}`)
      .then((i) => setBookings([...bookings]));
  };

  if (booking) {
    return (
      <td className="booked" onClick={() => deleteBooking()}>
        {booking.username}{" "}
      </td>
    );
  } else {
    return <td className="unbooked">-</td>;
  }
}

export default Booking;
