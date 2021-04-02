import React, {useState} from "react";
import Name from "./Name";
import BabyNameData from "./babyNameData.json";
import BabyNameSearch from "./BabyNameSearch";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  // const [filteredBabyName, setFilteredBabyName] = useState([]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const filteredBabyName = !inputValue
    ? BabyNameData
    : BabyNameData.filter((babyName) =>
        babyName.name.toLowerCase().includes(inputValue)
      );
  return (
    <>
      <BabyNameSearch handler={onChangeHandler} searchValue={inputValue} />
      <div className="app">
        {filteredBabyName.map((singleBabyName, index) => (
          <Name key={index} babyName={singleBabyName} />
        ))}
      </div>
    </>
  );
}

export default App;
