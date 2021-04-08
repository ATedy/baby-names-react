import React, {useState} from "react";
import Name from "./Name";
import BabyNameData from "./babyNameData.json";
import BabyNameSearch from "./BabyNameSearch";
import FavouriteNames from "./FavouriteNames";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [clickedName, setClickedName] = useState([]);
  // const [filteredBabyName, setFilteredBabyName] = useState([]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const onClickHandler = (e) => {
    setClickedName(clickedName.concat(e.target.innerHTML));
    console.log(clickedName);
    console.log(filteredBabyName);
  };

  const filteredBabyName = !inputValue
    ? BabyNameData
    : BabyNameData.filter((babyName) =>
        babyName.name.toLowerCase().includes(inputValue)
      );
  return (
    <div className="app">
      <BabyNameSearch handler={onChangeHandler} searchValue={inputValue} />
      <FavouriteNames favoriteArr={clickedName} />
      <hr className="mt-4 mb-4" />
      <div className="namesContainer">
        {filteredBabyName.map((singleBabyName, index) => (
          <Name
            key={index}
            babyName={singleBabyName}
            onClickHandler={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
