import React from "react";

function FavouriteNames(props) {
  // const onClickHandler = (e) => {};
  return (
    <div>
      Favourite Names:
      {props.favoriteArr.map((favoriteName, index) => {
        return <span key={index}>{favoriteName}</span>;
      })}
    </div>
  );
}

export default FavouriteNames;
