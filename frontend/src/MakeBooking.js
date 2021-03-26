import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./App.css";

function MakeBooking({ bookings, setBookings }) {
  const { register, handleSubmit } = useForm();

  const addBooking = (newBooking) => {
    let update = true;
    for (let i = 0; i < bookings.length; i++) {
      if (
        bookings[i].apt_time === newBooking.apt_time &&
        bookings[i].room === newBooking.room
      ) {
        update = false;
        break;
      }
    }
    if (update) {
      console.log("newBooking", newBooking);

      setBookings([...bookings, newBooking]);
      console.log("bookings", bookings);
      axios
        .post("http://localhost:3001/api/bookings", newBooking)
        .then(({ data }) => data)
        .then((createdBooking) => {
          console.log("createdBooking", createdBooking);
          if (!createdBooking) {
            setBookings([...bookings, newBooking]);
            alert("The Room is occupied at this timeYOYO");
          } else {
            setBookings([...bookings, createdBooking]);
          }
        })
        .catch((res) => console.log(JSON.stringify(res.data)));
    } else {
      alert("The Room is occupied at this time");
    }
  };
  //assuming business hours
  let times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"];
  let oneToTen = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
  return (
    <div>
      <form onSubmit={handleSubmit(addBooking)}>
        <label> Name </label>
        <input
          type="text"
          ref={register}
          name="username"
          placeholder="Name here"
        />
        <label> Room </label>
        <select ref={register} name="room">
          {oneToTen.map((num, i) => {
            return <option key={i} value={`C${num}`}>{`C${num}`}</option>;
          })}
          {oneToTen.map((num, i) => {
            return <option key={i} value={`P${num}`}>{`P${num}`}</option>;
          })}
        </select>
        <label> Time </label>
        <select ref={register} name="apt_time">
          {times.map((time, i) => {
            return (
              <option key={i} value={time}>
                {time}
              </option>
            );
          })}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default MakeBooking;
