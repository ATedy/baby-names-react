import React from "react";

const Name = (props) => {
  //empty class to be filled based on the condition
  let cssClass = "";
  props.babyName.sex === "f" ? (cssClass = "female") : (cssClass = "male");
  return <span className={cssClass}>{props.babyName.name}</span>;
};

export default Name;
