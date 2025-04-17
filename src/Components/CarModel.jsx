import React from "react";

function CarModel({ car }) {
  const { model } = car;
  return (
    <div>
      <ol>{model}</ol>
    </div>
  );
}

export default CarModel;
