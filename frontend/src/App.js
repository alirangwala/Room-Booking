import React from "react";
import MakeBooking from "./MakeBooking.js";
import CurrentBookings from "./CurrentBookings.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>BOOK AN APPOINTMENT</h1>
      <MakeBooking />
      <CurrentBookings />
    </div>
  );
}

export default App;
