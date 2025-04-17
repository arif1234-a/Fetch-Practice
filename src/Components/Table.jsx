import React, { useEffect, useState } from "react";

export function Table() {
  const [table, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/table") // change to match your endpoint
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div className="p-4">
      <table>
        <tbody>
          <tr>
            {table.map((table, index) => (
              <td key={index}>{table.make}</td>
            ))}
          </tr>
          <tr>
            {table.map((table, index) => (
              <td key={index}>{table.year}</td>
            ))}
          </tr>
          <tr>
            {table.map((table, index) => (
              <td key={index}>{table.price}</td>
            ))}
          </tr>
          <tr>
            {table.map((table, index) => (
              <td key={index}>{table.features}</td>
            ))}
          </tr>
          <tr>
            {table.map((table, index) => (
              <td key={index}>{table.model}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
