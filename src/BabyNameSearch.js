import React from "react";

function BabyNameSearch(props) {
  return (
    <input
      className="searchInput"
      type="text"
      name="searchInput"
      value={props.searchValue}
      onChange={props.handler}
    />
  );
}

export default BabyNameSearch;
