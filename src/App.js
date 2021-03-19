import React from "react";
import Name from "./Name";
import BabyNameData from "./babyNameData.json";
import "./App.css";

function App() {
  return (
    <div className="app">
      {BabyNameData.map((singleBabyName) => (
        <Name babyName={singleBabyName} />
      ))}
    </div>
  );
}

export default App;
