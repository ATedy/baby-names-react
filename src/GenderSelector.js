import React from "react";

function GenderSelector(props) {
  return (
    <>
      <span onClick={props.onClickGenderSelector} className="badge p-2 m">
        M
      </span>
      <span onClick={props.onClickGenderSelector} className="badge p-2 ml-2 f">
        F
      </span>
      <span onClick={props.onClickGenderSelector} className="badge p-2">
        All
      </span>
    </>
  );
}

export default GenderSelector;
