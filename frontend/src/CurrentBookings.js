import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import TableHeader from "./TableHeader";
import TableContents from "./TableContents";

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
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>CURRENT BOOKINGS</h2>
      <table className="bookings-table">
        <TableHeader />
        <TableContents bookings={bookings} setBookings={setBookings} />
      </table>
    </div>
  );
}

export default CurrentBookings;
