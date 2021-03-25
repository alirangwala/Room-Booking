import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./App.css";

function MakeBooking() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/api/bookings", data)
      .then((res) => {
        if (!res.data) alert("The Room is occupied at this time");
      })
      .catch((res) => console.log(JSON.stringify(data)));
  };
  //assuming business hours
  let times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"];
  let oneToTen = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
