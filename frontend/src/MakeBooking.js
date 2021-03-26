import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./App.css";

function MakeBooking({ bookings, setBookings }) {
  const { register, handleSubmit, errors } = useForm();

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
            alert("The Room is occupied at this time");
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
        <div className="form">
          <label> Name </label>
          <input
            type="text"
            ref={register({ required: true, minLength: 1, maxLength: 7 })}
            name="username"
            placeholder="Name here"
          />
        </div>
        {console.log(errors)}
        <div>
          {errors.username && errors.username.type === "required" && (
            <p className="error-message">This is required</p>
          )}
          {errors.username && errors.username.type === "maxLength" && (
            <p className="error-message">
              Name must be between 1 and 7 characters
            </p>
          )}
        </div>
        <div className="form">
          <label> Room </label>
          <select ref={register} name="room">
            {oneToTen.map((num, i) => {
              return <option key={i} value={`C${num}`}>{`C${num}`}</option>;
            })}
            {oneToTen.map((num, i) => {
              return <option key={i} value={`P${num}`}>{`P${num}`}</option>;
            })}
          </select>
        </div>
        <div className="form">
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
        </div>
        <br />
        <div className="form">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default MakeBooking;
