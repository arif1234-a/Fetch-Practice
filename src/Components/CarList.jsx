import React, { useEffect, useState } from "react";
import { CarMake } from "./CarMake";
import CarModel from "./CarModel"
import CarColor from "./CarColor";
import CarPrice from "./CarPrice";

function CarList() {
  // fetcing the data from the db.json
  const [table, setTable] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/table")
      .then((res) => res.json()) 
      .then((data) => setTable(data))// updating the table to have the list from the db.json as its value.
  },[])
  return (
    <div>
      {table.map((car, index /*itterates over the table*/) => (
        <CarMake car={car} key={index} /> // sets the prop in CarMake to car and provides a key with the value of index.
      ))}
      {table.map((car, index) => (
        <CarModel car={car} key={index} />
      ))}
      {table.map((car, index /*itterates over the table*/) => (
        <CarColor car={car} key={index} /> // sets the prop in CarColor to car and provides a key with the value of index.
      ))}
      {table.map((car, index /*itterates over the table*/) => (
        <CarPrice car={car} key={index} /> // sets the prop in CarMake to car and provides a key with the value of index.
      ))}
    </div>
  );
}

export default CarList;
