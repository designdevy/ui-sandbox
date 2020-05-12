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
  },
  {
    id: 4,
    value: "Item4"
  },
  {
    id: 5,
    value: "Item5"
  },
  {
    id: 6,
    value: "Item6"
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
        <p>Muliple Select</p>
        <Select title="Select" items={items} multiSelect />
      </div>
      <div className="container">
        <p>Muliple Select</p>
        <Select title="Select" items={items} multiSelect search />
      </div>
    </>
  );
}

export default App;
