import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function CurrentBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  }, [bookings]);

  return (
    <div>
      <h2>CURRENT BOOKINGS</h2>
      {bookings.length
        ? bookings.map((booking, i) => {
            return (
              <div
                key={i}
              >{`${booking.username} has an appointment at ${booking.apt_time} in ${booking.room}`}</div>
            );
          })
        : "Everything is available"}
    </div>
  );
}

export default CurrentBookings;
