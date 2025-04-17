import React, { useEffect, useState } from "react";
import { CarMake } from "./CarMake";
import { CarModel } from "./CarModel";

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
      {table.map((car, index) => (
        <CarMake car={car} key={index} />
      ))}
      {table.map((car, index) => (
        <CarModel car={car} key={index} />
      ))}
    </div>
  );
}

export default CarList
