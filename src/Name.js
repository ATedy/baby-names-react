import React from "react";

const Name = (props) => {
  const handler = () => {
    console.log(props.babyName.name);
  };
  //empty class to be filled based on the condition
  let cssClass = "";
  props.babyName.sex === "f" ? (cssClass = "female") : (cssClass = "male");
  return (
    <span onClick={handler} className={cssClass}>
      {props.babyName.name}
    </span>
  );
};

export default Name;
