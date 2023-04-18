import React from "react";
import "./App.css";
import List from "./List";

function App() {
  const items = [
    { text: "Block 1" },
    { text: "Block 2" },
    { text: "Block 3" },
    { text: "BLock 4" },
    { text: "Block 5" },
  ];

  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
