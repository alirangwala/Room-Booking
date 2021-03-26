import React, { useState, useEffect } from "react";
import MakeBooking from "./MakeBooking.js";
import CurrentBookings from "./CurrentBookings.js";
import "./App.css";

function App() {
  const [bookings, setBookings] = useState([]);

  return (
    <div className="App">
      <h1>BOOK AN APPOINTMENT</h1>
      <MakeBooking bookings={bookings} setBookings={setBookings} />
      <CurrentBookings bookings={bookings} setBookings={setBookings} />
    </div>
  );
}
export default App;
