import React from "react";
import Name from "./Name";

function FavouriteNames(props) {
  // const onClickHandler = (e) => {};
  return (
    <div>
      Favorite-Names:
      {props.favoriteArr.map((favoriteName, index) => {
        return (
          <Name
            key={index}
            babyName={favoriteName}
            onClickHandler={props.removeFav}
          />
        );
      })}
    </div>
  );
}

export default FavouriteNames;
