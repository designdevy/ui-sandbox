import React from "react";
import Select from "./Select";

const items = [
  {
    id: 1,
    value: "Item1"
  },
  {
    id: 2,
    value: "Item2"
  },
  {
    id: 3,
    value: "Item3"
  }
];

function App() {
  return (
    <div className="container">
      <Select title="Select" items={items} />
    </div>
  );
}

export default App;
