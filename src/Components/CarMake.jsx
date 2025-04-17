import React, { useEffect, useState } from "react";

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
