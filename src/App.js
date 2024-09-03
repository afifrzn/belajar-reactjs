import React, { useEffect, useState } from "react";

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/obats")
      .then((response) => response.json()) // Fixed: Call response.json() as a function
      .then((data) => setRecords(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>
            {list.id} | {list.nama_obat} | {list.stok_obat} | {list.kegunaan}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
