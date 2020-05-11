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
    <>
      <div className="container">
        <p>Single Select</p>
        <Select title="Select" items={items} />
      </div>
      <div className="container">
        <p>Muliple Select (#TODO: Style Checkbox)</p>
        <Select title="Select" items={items} multiSelect />
      </div>
    </>
  );
}

export default App;
