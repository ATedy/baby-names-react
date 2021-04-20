import React, {useState, useEffect} from "react";
import Name from "./Name";
import BabyNameData from "./babyNameData.json";
import BabyNameSearch from "./BabyNameSearch";
import FavouriteNames from "./FavouriteNames";
import GenderSelector from "./GenderSelector";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [clickedNameArr, setClickedNameArr] = useState([]);
  const [filteredBabyName, setFilteredBabyName] = useState([]);
  // At the start of the app, it will have all the list
  const [genderList, setGenderList] = useState(BabyNameData);

  // this handler is listening to the input text from a user
  const onChangeHandler = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  // this handler is listening to the input text from a user
  const onClickHandler = (babyName) => {
    setClickedNameArr(clickedNameArr.concat(babyName));
  };

  /* 
  - this click handler will compare the text of the elements  either for f/m and do the filter accordingly
  - genderList is where our list of names are, and it will have a variable list based on the click selection
  -genderType is a local variable for the current filter list
  */
  const genderSelector = (e) => {
    let gender = e.target.innerHTML.toLowerCase();
    let genderType = [];

    if (gender === "m") {
      genderType = BabyNameData.filter((babyName) => {
        return babyName.sex === "m";
      });

      setGenderList(genderType);
    } else if (gender === "f") {
      genderType = BabyNameData.filter((babyName) => {
        return babyName.sex === "f";
      });

      setGenderList(genderType);
    } else {
      setGenderList(BabyNameData);
    }
  };

  useEffect(() => {
    let babiesArr = !inputValue
      ? genderList
      : genderList.filter((babyName) =>
          babyName.name.toLowerCase().includes(inputValue)
        );

    if (clickedNameArr.length > 0) {
      babiesArr = babiesArr.filter((babyName) => {
        return !clickedNameArr.includes(babyName);
      });
    }
    setFilteredBabyName(babiesArr);
  }, [inputValue, clickedNameArr, genderList]);

  const removeFav = (babyName) => {
    console.log(babyName);
    const reducedBabiesArr = clickedNameArr.filter((currentBabyName) => {
      return currentBabyName !== babyName;
    });
    setClickedNameArr(reducedBabiesArr);
  };

  return (
    <div className="app">
      <div className="text-center">
        <BabyNameSearch handler={onChangeHandler} searchValue={inputValue} />
        <GenderSelector onClickGenderSelector={genderSelector} />
      </div>
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
