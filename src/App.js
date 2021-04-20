import React, {useState, useEffect} from "react";
import Name from "./Name";
import BabyNameData from "./babyNameData.json";
import BabyNameSearch from "./BabyNameSearch";
import FavouriteNames from "./FavouriteNames";
import GenderSelector from "./GenderSelector";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  // will store favourites names on click
  const [clickedFavArr, setClickedFavArr] = useState([]);
  const [filteredBabyName, setFilteredBabyName] = useState([]);
  // At the start of the app, it will have all the list
  const [genderNameList, setGenderNameList] = useState(BabyNameData);

  // this handler is listening to the input text from a user
  const onChangeHandler = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  // this handler is listening for fav array
  const onClickHandler = (babyName) => {
    setClickedFavArr(clickedFavArr.concat(babyName));
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

      setGenderNameList(genderType);
    } else if (gender === "f") {
      genderType = BabyNameData.filter((babyName) => {
        return babyName.sex === "f";
      });

      setGenderNameList(genderType);
    } else {
      setGenderNameList(BabyNameData);
    }
  };

  /* 
  - genderList is the array we have from above, and based on the text input it will be rendered conditionally.
  - babiesArr holds the current list of baby names, either all or filtered
  - 
  
  */
  useEffect(() => {
    let babiesArr = !inputValue
      ? genderNameList
      : genderNameList.filter((genderName) =>
          genderName.name.toLowerCase().includes(inputValue)
        );
    /* 
   - if the clickedFavArr has list already we don't want them to be list in the name list again, so we filter based on all the names but clicked one
   - so, babiesArr will have a filtered list
   - similarly the reducedBabiesArr will have have all the except the clicked ones, will be removed and our clickedFavArr will bet set with the reduced version of the list

    */
    if (clickedFavArr.length > 0) {
      babiesArr = babiesArr.filter((babyName) => {
        return !clickedFavArr.includes(babyName);
      });
    }
    setFilteredBabyName(babiesArr);
  }, [inputValue, clickedFavArr, genderNameList]);

  const removeFav = (babyName) => {
    const reducedBabiesArr = clickedFavArr.filter((currentBabyName) => {
      return currentBabyName !== babyName;
    });
    setClickedFavArr(reducedBabiesArr);
  };

  return (
    <div className="app">
      <div className="text-center">
        <BabyNameSearch handler={onChangeHandler} searchValue={inputValue} />
        <GenderSelector onClickGenderSelector={genderSelector} />
      </div>
      <FavouriteNames favoriteArr={clickedFavArr} removeFav={removeFav} />
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
