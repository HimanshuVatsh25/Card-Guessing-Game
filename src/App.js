import React, { useState } from "react";
import "./index.css";

export default function App() {
  const divStyle = {
    height: "60px",
    backgroundColor: "#4caf50",
    border: "2px solid green",
    marginBottom: "5px",
    marginRight: "10px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    cursor: "pointer",
  };

  const [arr] = useState(
    Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 1)
  );
  const [openFields, setOpenFields] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleDiv = (index) => {
    if (openFields.length === 2 || matched.includes(index)) return;

    const newOpenFields = [...openFields, index];
    setOpenFields(newOpenFields);

    if (newOpenFields.length === 2) {
      const [firstIndex, secondIndex] = newOpenFields;
      if (arr[firstIndex] === arr[secondIndex]) {
        setMatched([...matched, firstIndex, secondIndex]);
        setOpenFields([]);
      } else {
        setTimeout(() => {
          setOpenFields([]);
        }, 800);
      }
    }
  };

  return (
    <div className="App">
      {arr?.map((num, index) => (
        <div
          key={index}
          style={divStyle}
          onClick={() => handleDiv(index)}
        >
          {openFields.includes(index) || matched.includes(index) ? num : ""}
        </div>
      ))}
    </div>
  );
}
