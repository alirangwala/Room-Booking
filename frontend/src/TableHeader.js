import React from "react";

function TableHeader({ bookings, setBookings }) {
  let oneToTen = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

  return (
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
  );
}

export default TableHeader;
