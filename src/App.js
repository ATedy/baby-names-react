import React, {useState, useEffect} from "react";
import Name from "./Name";
import BabyNameData from "./babyNameData.json";
import BabyNameSearch from "./BabyNameSearch";
import FavouriteNames from "./FavouriteNames";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [clickedName, setClickedName] = useState([]);
  const [filteredBabyName, setFilteredBabyName] = useState([]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const onClickHandler = (babyName) => {
    setClickedName(clickedName.concat(babyName));
  };

  useEffect(() => {
    let data = !inputValue
      ? BabyNameData
      : BabyNameData.filter((babyName) =>
          babyName.name.toLowerCase().includes(inputValue)
        );

    if (clickedName.length > 0) {
      data = data.filter((babyName) => {
        return !clickedName.includes(babyName);
      });
    }
    setFilteredBabyName(data);
  }, [inputValue, clickedName]);

  const removeFav = (babyName) => {
    console.log(babyName);
    const data1 = clickedName.filter((currentBabyName) => {
      return currentBabyName !== babyName;
    });
    setClickedName(data1);
  };

  return (
    <div className="app">
      <BabyNameSearch handler={onChangeHandler} searchValue={inputValue} />
      <FavouriteNames favoriteArr={clickedName} removeFav={removeFav} />
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
