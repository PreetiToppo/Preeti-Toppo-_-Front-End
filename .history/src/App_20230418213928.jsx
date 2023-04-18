import React from "react";
import "./App.css";
import List from "./List";

function App() {
  const items = [
    { text: "Item 1" },
    { text: "Item 2" },
    { text: "Item 3" },
    { text: "Item 4" },
    { text: "Item 5" },
  ];

  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
