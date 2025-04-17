import React from "react";

export function CarMake({ car }) {
     const { make } = car;
  return (
<>
      <ol>
        <li>{make}</li>
      </ol>
</>

  );
}
