import React from "react";
import Name from "./Name";
import BabyNameData from "./babyNameData.json";
import "./App.css";

function App() {
  return (
    <>
      <input
        className="searchInput"
        type="text"
        name="searchInput"
        placeholder="Search Names here"
      />
      <div className="app">
        {BabyNameData.map((singleBabyName) => (
          <Name babyName={singleBabyName} />
        ))}
      </div>
    </>
  );
}

export default App;
