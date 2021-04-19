import React, {useState, useEffect} from "react";
import Name from "./Name";
import BabyNameData from "./babyNameData.json";
import BabyNameSearch from "./BabyNameSearch";
import FavouriteNames from "./FavouriteNames";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [clickedNameArr, setClickedNameArr] = useState([]);
  const [filteredBabyName, setFilteredBabyName] = useState([]);

  // this handler is listening to the input text from a user
  const onChangeHandler = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  // this handler is listening to the input text from a user
  const onClickHandler = (babyName) => {
    setClickedNameArr(clickedNameArr.concat(babyName));
  };

  useEffect(() => {
    let babiesArr = !inputValue
      ? BabyNameData
      : BabyNameData.filter((babyName) =>
          babyName.name.toLowerCase().includes(inputValue)
        );

    if (clickedNameArr.length > 0) {
      babiesArr = babiesArr.filter((babyName) => {
        return !clickedNameArr.includes(babyName);
      });
    }
    setFilteredBabyName(babiesArr);
  }, [inputValue, clickedNameArr]);

  const removeFav = (babyName) => {
    console.log(babyName);
    const reducedBabiesArr = clickedNameArr.filter((currentBabyName) => {
      return currentBabyName !== babyName;
    });
    setClickedNameArr(reducedBabiesArr);
  };

  return (
    <div className="app">
      <BabyNameSearch handler={onChangeHandler} searchValue={inputValue} />
      <FavouriteNames favoriteArr={clickedNameArr} removeFav={removeFav} />
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
