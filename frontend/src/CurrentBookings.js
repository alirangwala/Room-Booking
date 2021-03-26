import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Booking from "./Booking";

function CurrentBookings({ bookings, setBookings }) {
  // const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/bookings")
      .then((res) => {
        console.log(res);
        return setBookings(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"];
  let oneToTen = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

  return (
    <div>
      <h2>CURRENT BOOKINGS</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            {oneToTen.map((num, i) => {
              return <th key={i} value={`C${num}`}>{`C${num}`}</th>;
            })}
            {oneToTen.map((num, i) => {
              return <th key={i} value={`P${num}`}>{`P${num}`}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {times.map((time, i) => {
            return (
              <tr>
                <th key={i}>{time}</th>
                {oneToTen.map((num, i) => {
                  let booking;
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
      </table>
    </div>
  );
}

export default CurrentBookings;
